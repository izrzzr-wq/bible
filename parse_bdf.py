#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Bethlehem 3.75 BDF 파일 → JSON 변환 스크립트
사용법: python3 parse_bdf.py
"""

import os
import re
import json
import sys

BETHLEHEM_DIR = "/Users/jinholee/Library/Mobile Documents/com~apple~CloudDocs/Bethlehem 3.75"
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "data", "bible")

# 번역본 목록: (파일 접두사, 표시 이름, 영문 이름, 언어)
TRANSLATIONS = [
    ("kornkrv",  "개역개정",       "Korean Revised Version",         "ko"),
    ("Korhrv",   "개역한글",       "Korean Old Revised Version",     "ko"),
    ("kortkv",   "표준새번역",     "Korean Standard Translation",    "ko"),
    ("koreasy",  "쉬운성경",       "Easy Korean Bible",              "ko"),
    ("kordob",   "현대인의성경",   "Korean Modern Bible",            "ko"),
    ("korcath",  "공동번역",       "Korean Common Translation",      "ko"),
    ("korklb",   "생명의말씀",     "Korean Living Bible",            "ko"),
    ("korkcb",   "공동번역개정",   "Korean Common Revised",          "ko"),
    ("kornrsv",  "NRSV 한국어",    "Korean NRSV",                    "ko"),
    ("korHChV",  "현대어성경",     "Korean Contemporary Bible",      "ko"),
    ("korHKJV",  "KJV 한국어",     "Korean KJV",                     "ko"),
    ("korKTV",   "한국천주교성경", "Korean Catholic Bible",          "ko"),
    ("kornkcb",  "새번역공동번역", "Korean NKCB",                    "ko"),
    ("engESV",   "ESV",            "English Standard Version",       "en"),
    ("engNIV",   "NIV",            "New International Version",      "en"),
    ("ENGKJV",   "KJV",            "King James Version",             "en"),
    ("Engnkjv",  "NKJV",          "New King James Version",         "en"),
    ("engNASB",  "NASB",          "New American Standard Bible",    "en"),
    ("Engnrsv",  "NRSV",          "New Revised Standard Version",   "en"),
    ("engNLT",   "NLT",           "New Living Translation",         "en"),
    ("engHCSB",  "HCSB",          "Holman Christian Standard",      "en"),
    ("engMSG",   "MSG",           "The Message",                    "en"),
    ("engGNT",   "GNT",           "Good News Translation",          "en"),
    ("engTNIV",  "TNIV",          "Today's NIV",                    "en"),
    ("engISV",   "ISV",           "International Standard Version", "en"),
]

# 한국어 책 번호 → 표준 ID 매핑
KO_ABBR_TO_ID = {
    "창": 1, "출": 2, "레": 3, "민": 4, "신": 5,
    "수": 6, "삿": 7, "룻": 8, "삼상": 9, "삼하": 10,
    "왕상": 11, "왕하": 12, "대상": 13, "대하": 14, "라": 15,
    "느": 16, "더": 17, "욥": 18, "시": 19, "잠": 20,
    "전": 21, "아": 22, "사": 23, "렘": 24, "애": 25,
    "겔": 26, "단": 27, "호": 28, "욜": 29, "암": 30,
    "옵": 31, "욘": 32, "미": 33, "나훔": 34, "합": 35,
    "습": 36, "학": 37, "슥": 38, "말": 39,
    "마": 40, "막": 41, "눅": 42, "요": 43,
    "행": 44, "롬": 45, "고전": 46, "고후": 47,
    "갈": 48, "엡": 49, "빌": 50, "골": 51,
    "살전": 52, "살후": 53, "딤전": 54, "딤후": 55,
    "딛": 56, "몬": 57, "히": 58, "약": 59,
    "벧전": 60, "벧후": 61, "요일": 62, "요이": 63,
    "요삼": 64, "유": 65, "계": 66,
}

# 영어 책 약어 → 표준 ID 매핑
EN_ABBR_TO_ID = {
    "Gn": 1, "Ex": 2, "Lv": 3, "Nu": 4, "Dt": 5,
    "Js": 6, "Jg": 7, "Ru": 8, "1S": 9, "2S": 10,
    "1K": 11, "2K": 12, "1C": 13, "2C": 14, "Er": 15,
    "Ne": 16, "Es": 17, "Jb": 18, "Ps": 19, "Pr": 20,
    "Ec": 21, "Sg": 22, "Is": 23, "Jr": 24, "Lm": 25,
    "Ek": 26, "Dn": 27, "Ho": 28, "Jl": 29, "Am": 30,
    "Ob": 31, "Jn": 32, "Mi": 33, "Na": 34, "Hb": 35,
    "Zp": 36, "Hg": 37, "Zc": 38, "Ml": 39,
    "Mt": 40, "Mk": 41, "Lk": 42, "Jh": 43,
    "Ac": 44, "Rm": 45, "1o": 46, "2o": 47,
    "Gl": 48, "Ep": 49, "Ph": 50, "Cl": 51,
    "1T": 52, "2T": 53, "1i": 54, "2i": 55,
    "Tt": 56, "Pm": 57, "Hb": 58, "Jm": 59,
    "1P": 60, "2P": 61, "1J": 62, "2J": 63,
    "3J": 64, "Jd": 65, "Rv": 66,
}

LINE_RE = re.compile(r'^(\d{2})(\S+)\s+(\d+):(\d+)\s+(.+)$')


def detect_book_id(book_num_str, abbr, lang):
    """책 번호와 약어에서 1~66 표준 ID 반환"""
    num = int(book_num_str)
    # 책 번호 자체가 1-66이면 그대로 사용
    if 1 <= num <= 66:
        return num
    return num


def parse_translation(prefix, lang):
    """
    7개 BDF 파일을 파싱해서 다음 구조로 반환:
    {
      bookId(1-66): {
        "abbr": "창",
        "chapters": {
          "1": { "1": "태초에...", "2": "..." },
          ...
        }
      }
    }
    """
    books = {}

    for file_num in range(1, 8):
        # 파일명 대소문자 변형 시도
        candidates = [
            os.path.join(BETHLEHEM_DIR, f"{prefix}{file_num}.bdf"),
            os.path.join(BETHLEHEM_DIR, f"{prefix.lower()}{file_num}.bdf"),
            os.path.join(BETHLEHEM_DIR, f"{prefix.upper()}{file_num}.bdf"),
            os.path.join(BETHLEHEM_DIR, f"{prefix}{file_num}.BDF"),
        ]
        filename = next((c for c in candidates if os.path.exists(c)), None)

        if not filename:
            continue

        try:
            with open(filename, 'rb') as f:
                raw = f.read()

            # CP949 → UTF-8
            try:
                content = raw.decode('cp949')
            except UnicodeDecodeError:
                try:
                    content = raw.decode('euc-kr')
                except UnicodeDecodeError:
                    content = raw.decode('utf-8', errors='replace')

            lines = content.replace('\r\n', '\n').replace('\r', '\n').split('\n')

            for line in lines:
                line = line.strip()
                if not line:
                    continue

                m = LINE_RE.match(line)
                if not m:
                    continue

                book_num = int(m.group(1))
                abbr = m.group(2)
                chapter = str(int(m.group(3)))
                verse = str(int(m.group(4)))
                text = m.group(5).strip()

                if book_num not in books:
                    books[book_num] = {"abbr": abbr, "chapters": {}}

                if chapter not in books[book_num]["chapters"]:
                    books[book_num]["chapters"][chapter] = {}

                books[book_num]["chapters"][chapter][verse] = text

        except Exception as e:
            print(f"    오류: {filename}: {e}", file=sys.stderr)

    return books


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    results = []

    for prefix, name, name_en, lang in TRANSLATIONS:
        print(f"처리 중: {name} ({prefix})...", end=" ", flush=True)
        books = parse_translation(prefix, lang)

        if not books:
            print("데이터 없음, 건너뜀")
            continue

        book_count = len(books)
        chapter_count = sum(len(b["chapters"]) for b in books.values())

        output = {
            "id": prefix,
            "name": name,
            "nameEn": name_en,
            "lang": lang,
            "books": {}
        }

        for book_id, book_data in sorted(books.items()):
            output["books"][str(book_id)] = {
                "abbr": book_data["abbr"],
                "chapters": book_data["chapters"]
            }

        outfile = os.path.join(OUTPUT_DIR, f"{prefix}.json")
        with open(outfile, 'w', encoding='utf-8') as f:
            json.dump(output, f, ensure_ascii=False, separators=(',', ':'))

        size_kb = os.path.getsize(outfile) / 1024
        print(f"완료 ({book_count}권 {chapter_count}장, {size_kb:.0f}KB)")
        results.append({"id": prefix, "name": name, "nameEn": name_en, "lang": lang})

    # 번역본 목록 저장
    index_file = os.path.join(OUTPUT_DIR, "index.json")
    with open(index_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    print(f"\n✅ 완료! {len(results)}개 번역본 변환됨")
    print(f"   저장 위치: {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
