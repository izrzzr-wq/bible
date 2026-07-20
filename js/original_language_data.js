/**
 * original_language_data.js
 * 구약 히브리어(BHS/WLC) 및 신약 헬라어(TR/GNT) 원어 문법 파싱 및 스트롱 코드 사전 데이터
 */

// 문법 파싱 약어 한글 해설 매핑
const MORPHOLOGY_DICT = {
  // 품사 (Parts of Speech)
  'N': { name: '명사', cat: 'noun', desc: 'Noun (명사)' },
  'V': { name: '동사', cat: 'verb', desc: 'Verb (동사)' },
  'A': { name: '형용사', cat: 'adj', desc: 'Adjective (형용사)' },
  'P': { name: '대명사', cat: 'pron', desc: 'Pronoun (대명사)' },
  'PREP': { name: '전치사', cat: 'prep', desc: 'Preposition (전치사)' },
  'CONJ': { name: '접속사', cat: 'conj', desc: 'Conjunction (접속사)' },
  'ART': { name: '관사', cat: 'art', desc: 'Article (정관사)' },
  'ADV': { name: '부사', cat: 'adv', desc: 'Adverb (부사)' },
  'PART': { name: '소사', cat: 'part', desc: 'Particle (소사/감탄사)' },

  // 히브리어 동사 어간 (Hebrew Verbal Stems)
  'Qal': { name: '칼(Qal)', desc: '단순 능동 (Simple Active)' },
  'Niphal': { name: '니팔(Niphal)', desc: '단순 수동/재귀 (Simple Passive/Reflexive)' },
  'Piel': { name: '피엘(Piel)', desc: '강의 능동 (Intensive Active)' },
  'Pual': { name: '푸알(Pual)', desc: '강의 수동 (Intensive Passive)' },
  'Hiphil': { name: '히필(Hiphil)', desc: '사역 능동 (Causative Active)' },
  'Hophal': { name: '호팔(Hophal)', desc: '사역 수동 (Causative Passive)' },
  'Hithpael': { name: '히트파엘(Hithpael)', desc: '강의 재귀 (Intensive Reflexive)' },

  // 히브리어/헬라어 시제/양상 (Tenses / Aspects)
  'Perf': { name: '완료(Perf)', desc: 'Perfect (완료상 - 이미 성취된 동작)' },
  'Imperf': { name: '미완료(Imperf)', desc: 'Imperfect (미완료상 - 진행/미래/의지)' },
  'Pres': { name: '현재(Pres)', desc: 'Present (현재 시제/진행)' },
  'Aor': { name: '아오리스트(Aor)', desc: 'Aorist (부정과거/단회적 완료)' },
  'Fut': { name: '미래(Fut)', desc: 'Future (미래 시제)' },
  'Pluperf': { name: '과거완료(Pluperf)', desc: 'Pluperfect (과거완료)' },

  // 태 (Voices)
  'Act': { name: '능동태', desc: 'Active Voice' },
  'Pass': { name: '수동태', desc: 'Passive Voice' },
  'Mid': { name: '중동태', desc: 'Middle Voice (자신을 위한 동작)' },

  // 격 (Cases - 헬라어)
  'Nom': { name: '주격', desc: 'Nominative (주어)' },
  'Gen': { name: '소유격/속격', desc: 'Genitive (소유/출처 ~의)' },
  'Dat': { name: '여격/간접목적격', desc: 'Dative (목적/장소 ~에게, ~에)' },
  'Acc': { name: '대격/직접목적격', desc: 'Accusative (직접목적어 ~을/를)' },
  'Voc': { name: '호격', desc: 'Vocative (부름/호칭)' },

  // 성/수/인칭 (Gender / Number / Person)
  'm': { name: '남성', desc: 'Masculine' },
  'f': { name: '여성', desc: 'Feminine' },
  'n': { name: '중성', desc: 'Neuter' },
  'sg': { name: '단수', desc: 'Singular' },
  'pl': { name: '복수', desc: 'Plural' },
  'du': { name: '쌍수', desc: 'Dual (히브리어 짝을 이루는 명사)' },
  '1p': { name: '1인칭', desc: '1st Person (나/우리)' },
  '2p': { name: '2인칭', desc: '2nd Person (너/너희)' },
  '3p': { name: '3인칭', desc: '3rd Person (그/그녀/그들)' }
};

// 대표 스트롱 코드 사전 (Strong's Lexicon Excerpt)
const STRONGS_LEXICON = {
  // 구약 히브리어 (H)
  'H7225': { word: 'רֵאשִׁית', translit: 'reshith', origin: 'רֹאשׁ (rosh - 머리, 시작)에서 유래', def: '시작, 태초, 첫 열매, 가장 뛰어난 것', detail: '시간적/순서적/상태적으로 가장 첫 번째나 으뜸이 되는 위치를 가리킴.' },
  'H1254': { word: 'בָּרָא', translit: 'bara', origin: '어근 동사', def: '창조하다, 무에서 유를 만들다, 형성하다', detail: '오직 하나님(Elohim)만을 주어로 사용하여 무(無)에서 무한한 능력을 통해 새로운 차원을 무에서 생겨나게 하실 때 사용됨.' },
  'H430': { word: 'אֱלֹהִים', translit: 'elohim', origin: 'אֱלוֹהַּ (eloah - 신)의 장엄 복수형', def: '하나님, 신(God), 창조주', detail: '복수 형태(ים)이지만 단수 동사(bara)와 결합하여 삼위일체적 신성과 하나님의 우주적 장엄함과 풍성한 능력을 나타냄.' },
  'H853': { word: 'אֵת', translit: 'eth', origin: '지시 표지', def: '목적격 표지 (~을/를)', detail: '뒤따라오는 명사가 직접 목적어임을 나타내는 히브리어 특유의 문법 표지자.' },
  'H8064': { word: 'שָׁמַיִם', translit: 'shamayim', origin: '높은 곳, 이슬이 내리는 곳', def: '하늘, 우주, 대기권', detail: '쌍수/복수형으로 구성되어 물질적 대기권 하늘과 영적인 신령한 하늘들을 동시에 내포함.' },
  'H776': { word: 'אֶרֶץ', translit: 'eretz', origin: '어근 명사', def: '땅, 지구, 흙, 육지', detail: '하늘과 대비되어 인간과 모든 생물들이 터를 잡고 살아가는 물질적 지구와 대지를 뜻함.' },
  'H1961': { word: 'הָיָה', translit: 'hayah', origin: '존재하다 어근', def: '~이 되다, 존재하다, 있다', detail: '상태의 변화나 새로운 존재의 출현을 뜻함.' },
  'H8414': { word: 'תֹּהוּ', translit: 'tohu', origin: '황폐함', def: '혼돈, 형체가 없음, empty', detail: '아직 정돈되거나 질서가 잡히지 않은 원초적 혼돈 상태.' },
  'H922': { word: 'בֹּהוּ', translit: 'bohu', origin: '공허함', def: '공허, 텅 빔, emptiness', detail: '내용물이나 생명체가 채워지지 않은 빈 상태.' },
  'H2822': { word: 'חֹשֶׁךְ', translit: 'choshek', origin: '어둠', def: '어둠, 흑암, 무지', detail: '빛이 임하기 전의 원초적 어두움.' },
  'H7307': { word: 'רוּחַ', translit: 'ruach', origin: '입김, 바람', def: '영(Spirit), 바람, 호흡, 성령', detail: '하나님의 생기이자 생명을 불어넣으시는 주체이신 성령(Ruach Elohim).' },
  'H216': { word: 'אוֹר', translit: 'or', origin: '빛나다 어근', def: '빛, 광명, 진리', detail: '어둠을 물리치고 질서와 생명을 가져오는 원초적 신성한 빛.' },

  // 신약 헬라어 (G)
  'G1722': { word: 'ἐν', translit: 'en', origin: '기본 전치사', def: '~안에, ~에, ~으로', detail: '장소, 시간, 상태의 내재성이나 긴밀한 밀착 관계를 나타내는 전치사.' },
  'G746': { word: 'ἀρχή', translit: 'arche', origin: 'ἄρχω (archo - 시작하다/지배하다)에서 유래', def: '태초, 시작, 근원, 통치권', detail: '모든 시간과 창조물 이전의 궁극적 근원이자 시작점을 의미함.' },
  'G2258': { word: 'ἦν', translit: 'en', origin: 'εἰμί (eimi - 이다/존재하다)의 미완료 능동태 3단', def: '계시니라, 계셨다, 존재하고 있었다', detail: '과거 한 시점에 시작된 것이 아니라 태초 이전부터 계속해서 존재해 오셨음을 나타내는 영원성 강조 표현.' },
  'G3588': { word: 'ὁ', translit: 'ho', origin: '정관사', def: '그 (The)', detail: '특정 대상을 가리키고 인격성이나 독특성을 부각하는 헬라어 정관사.' },
  'G3056': { word: 'λόγος', translit: 'logos', origin: 'λέγω (lego - 말하다)에서 유래', def: '말씀, 로고스, 원리, 계시', detail: '하나님의 거룩한 자기 계시이자 우주의 이성과 창조적 생명의 근원이신 예수 그리스도를 지칭.' },
  'G4314': { word: 'πρός', translit: 'pros', origin: '방향 전치사', def: '~와 함께, ~를 향하여', detail: '단순한 동거가 아닌 Face to Face(얼굴과 얼굴을 마주 보듯) 친밀하고 인격적인 상호 교제 관계를 뜻함.' },
  'G2316': { word: 'θεός', translit: 'theos', origin: '하나님/신', def: '하나님, 신(God)', detail: '우주의 창조주이시며 본질상 유일하신 참 하나님.' },
  'G3956': { word: 'πᾶς', translit: 'pas', origin: '모든', def: '모든 것, 만물, 온', detail: '예외 없는 전체 창조계 만물을 포함함.' },
  'G1223': { word: 'διά', translit: 'dia', origin: '매개 전치사', def: '~를 통하여, ~로 말미암아', detail: '창조와 구원의 중보자이자 통로로서의 역할을 나타냄.' },
  'G1096': { word: 'γίνομαι', translit: 'ginomai', origin: '생겨나다 어근', def: '되다, 창조되다, 생성되다', detail: '없던 것이 새로이 생겨나 존재에 이르게 됨.' },
  'G2222': { word: 'ζωή', translit: 'zoe', origin: '생명 어근', def: '생명, 영생', detail: '육체적 생명(bios)을 넘어 하나님께로부터 오는 영원하고 신성한 참 생명.' },
  'G5457': { word: 'φῶς', translit: 'phos', origin: '빛', def: '빛, 광명, 진리의 빛', detail: '어둠에 싸인 세상을 비추는 거룩한 진리와 생명의 빛.' }
};

// 원어 본문 샘플 데이터 (구약 히브리어 RTL & 신약 헬라어 LTR 인터리니어 파싱)
const ORIGINAL_BIBLE_SAMPLES = {
  // 창세기 1장 (구약 - 히브리어 WLC/BHS)
  '1_1': {
    lang: 'hebrew',
    bookName: '창세기',
    chap: 1, verse: 1,
    words: [
      {
        raw: 'בְּרֵאשִׁית',
        translit: 'bə-rê-šîṯ',
        phonetic: '베레시트',
        strong: 'H7225',
        morph: ['PREP', 'N', 'f', 'sg'],
        gloss: '태초에',
        explain: '전치사 בְּ(베 - ~안에/에) + 명사 רֵאשִׁית(레시트 - 시작/으뜸). 만물과 시간이 존재하기 이전의 근원적 출발점을 선언함.'
      },
      {
        raw: 'בָּרָא',
        translit: 'bā-rā',
        phonetic: '바라',
        strong: 'H1254',
        morph: ['V', 'Qal', 'Perf', '3p', 'm', 'sg'],
        gloss: '창조하시니라',
        explain: '동사 칼(Qal) 완료형 3인칭 남성 단수. 오직 하나님(Elohim)만을 주어로 취하여 무(無)에서 유(有)를 빚어내신 거룩한 능동적 완료 행위.'
      },
      {
        raw: 'אֱלֹהִים',
        translit: '’ĕ-lō-hîm',
        phonetic: '엘로힘',
        strong: 'H430',
        morph: ['N', 'm', 'pl'],
        gloss: '하나님이',
        explain: '명사 남성 복수형. 단수 동사(bara)와 호응하면서도 신성의 장엄함과 풍성함을 내포하는 유일신 창조주의 명칭.'
      },
      {
        raw: 'אֵת',
        translit: '’êṯ',
        phonetic: '에트',
        strong: 'H853',
        morph: ['PART'],
        gloss: '[직접목적어 표지]',
        explain: '뒤에 나오는 명사가 창조의 직접적인 대상임을 나타내는 히브리어 목적격 표지자.'
      },
      {
        raw: 'הַשָּׁמַיִם',
        translit: 'haš-šā-ma-yim',
        phonetic: '하샤마임',
        strong: 'H8064',
        morph: ['ART', 'N', 'm', 'du'],
        gloss: '하늘들과',
        explain: '정관사 הַ(하) + 명사 שָׁמַיִם(샤마임 - 하늘들). 대기권 하늘뿐 아니라 우주와 신령한 하늘 전체를 지칭.'
      },
      {
        raw: 'וְאֵת',
        translit: 'wə-’êṯ',
        phonetic: '베에트',
        strong: 'H853',
        morph: ['CONJ', 'PART'],
        gloss: '그리고',
        explain: '접속사 וְ(베 - 그리고) + 목적격 표지 אֵת(에트).'
      },
      {
        raw: 'הָאָרֶץ',
        translit: 'hā-’ā-reṣ',
        phonetic: '하아레츠',
        strong: 'H776',
        morph: ['ART', 'N', 'f', 'sg'],
        gloss: '땅을',
        explain: '정관사 הָ(하) + 명사 אֶרֶץ(아레츠 - 땅/지구). 하늘과 대비되는 피조물들의 거주 터전인 물질계 땅.'
      }
    ]
  },

  // 요한복음 1장 1절 (신약 - 헬라어 TR/GNT)
  '43_1': {
    lang: 'greek',
    bookName: '요한복음',
    chap: 1, verse: 1,
    words: [
      {
        raw: 'Ἐν',
        translit: 'En',
        phonetic: '엔',
        strong: 'G1722',
        morph: ['PREP', 'Dat'],
        gloss: '태초에 (~안에)',
        explain: '전치사 (+여격). 어떤 시간이나 영역의 가장 안쪽 깊은 곳에 거하고 계심을 나타냄.'
      },
      {
        raw: 'ἀρχῇ',
        translit: 'archē',
        phonetic: '아르케',
        strong: 'G746',
        morph: ['N', 'Dat', 'f', 'sg'],
        gloss: '태초에',
        explain: '명사 여격 여성 단수. 만물이 태어나기 이전 영원 전 궁극적 시작점.'
      },
      {
        raw: 'ἦν',
        translit: 'ēn',
        phonetic: '에인',
        strong: 'G2258',
        morph: ['V', 'Imperf', 'Act', '3p', 'sg'],
        gloss: '계시니라',
        explain: 'eimi 동사의 미완료 능동태 3인칭 단수. 시작된 순간이 없이 과거 이전부터 지속하여 스스로 계셨음을 의미.'
      },
      {
        raw: 'ὁ',
        translit: 'ho',
        phonetic: '호',
        strong: 'G3588',
        morph: ['ART', 'Nom', 'm', 'sg'],
        gloss: '그',
        explain: '정관사 주격 남성 단수. 특별하고 유일한 그분임을 강조.'
      },
      {
        raw: 'Λόγος',
        translit: 'Logos',
        phonetic: '로고스',
        strong: 'G3056',
        morph: ['N', 'Nom', 'm', 'sg'],
        gloss: '말씀이',
        explain: '명사 주격 남성 단수. 우주를 창조하시고 하나님을 완벽히 계시하시는 인격체 예수 그리스도.'
      },
      {
        raw: 'καὶ',
        translit: 'kai',
        phonetic: '카이',
        strong: 'G2532',
        morph: ['CONJ'],
        gloss: '그리고',
        explain: '접속사 (And).'
      },
      {
        raw: 'ὁ',
        translit: 'ho',
        phonetic: '호',
        strong: 'G3588',
        morph: ['ART', 'Nom', 'm', 'sg'],
        gloss: '그',
        explain: '정관사.'
      },
      {
        raw: 'Λόγος',
        translit: 'Logos',
        phonetic: '로고스',
        strong: 'G3056',
        morph: ['N', 'Nom', 'm', 'sg'],
        gloss: '말씀이',
        explain: '로고스 (예수 그리스도).'
      },
      {
        raw: 'ἦν',
        translit: 'ēn',
        phonetic: '에인',
        strong: 'G2258',
        morph: ['V', 'Imperf', 'Act', '3p', 'sg'],
        gloss: '계셨으니',
        explain: '지속하여 존재함.'
      },
      {
        raw: 'πρὸς',
        translit: 'pros',
        phonetic: '프로스',
        strong: 'G4314',
        morph: ['PREP', 'Acc'],
        gloss: '~함께',
        explain: '전치사 (+대격). 얼굴과 얼굴을 마주 보듯(Face to Face) 하나님과 동등하고 친밀하게 친교를 나누시는 관계.'
      },
      {
        raw: 'τὸν',
        translit: 'ton',
        phonetic: '톤',
        strong: 'G3588',
        morph: ['ART', 'Acc', 'm', 'sg'],
        gloss: '그',
        explain: '목적격 정관사.'
      },
      {
        raw: 'Θεόν',
        translit: 'Theon',
        phonetic: '테온',
        strong: 'G2316',
        morph: ['N', 'Acc', 'm', 'sg'],
        gloss: '하나님과',
        explain: '명사 대격 남성 단수. 하나님 아버지를 지칭.'
      },
      {
        raw: 'καὶ',
        translit: 'kai',
        phonetic: '카이',
        strong: 'G2532',
        morph: ['CONJ'],
        gloss: '그리고',
        explain: '접속사.'
      },
      {
        raw: 'Θεὸς',
        translit: 'Theos',
        phonetic: '테오스',
        strong: 'G2316',
        morph: ['N', 'Nom', 'm', 'sg'],
        gloss: '하나님이셨다',
        explain: '명사 보어. 로고스이신 말씀이 본질상 삼위일체 하나님이심을 선언.'
      },
      {
        raw: 'ἦν',
        translit: 'ēn',
        phonetic: '에인',
        strong: 'G2258',
        morph: ['V', 'Imperf', 'Act', '3p', 'sg'],
        gloss: '이시니라',
        explain: '존재의 본질적 선언.'
      },
      {
        raw: 'ὁ',
        translit: 'ho',
        phonetic: '호',
        strong: 'G3588',
        morph: ['ART', 'Nom', 'm', 'sg'],
        gloss: '그',
        explain: '정관사.'
      },
      {
        raw: 'Λόγος',
        translit: 'Logos',
        phonetic: '로고스',
        strong: 'G3056',
        morph: ['N', 'Nom', 'm', 'sg'],
        gloss: '말씀이신 분은',
        explain: '말씀 (로고스).'
      }
    ]
  }
};

/**
 * 헬퍼: 문법 파싱 배열을 한글 태그 스트링 및 상세 설명 배열로 변환
 */
function parseMorphology(morphArray) {
  if (!morphArray || !Array.isArray(morphArray)) return [];
  return morphArray.map(code => {
    const dict = MORPHOLOGY_DICT[code];
    return {
      code,
      name: dict ? dict.name : code,
      desc: dict ? dict.desc : code,
      cat: dict ? dict.cat : 'tag'
    };
  });
}
