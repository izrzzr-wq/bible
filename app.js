// =====================================================
// 성경 읽기 앱 — app.js
// =====================================================

// ─── 66권 정보 ─────────────────────────────────────────
const BOOKS = [
  { id:1,  ko:'창세기',       en:'Genesis',          abbr:'창', abbrEn:'Gen', ch:50, testament:'OT', genre:'law',      genreKo:'율법서' },
  { id:2,  ko:'출애굽기',     en:'Exodus',           abbr:'출', abbrEn:'Exo', ch:40, testament:'OT', genre:'law',      genreKo:'율법서' },
  { id:3,  ko:'레위기',       en:'Leviticus',        abbr:'레', abbrEn:'Lev', ch:27, testament:'OT', genre:'law',      genreKo:'율법서' },
  { id:4,  ko:'민수기',       en:'Numbers',          abbr:'민', abbrEn:'Num', ch:36, testament:'OT', genre:'law',      genreKo:'율법서' },
  { id:5,  ko:'신명기',       en:'Deuteronomy',      abbr:'신', abbrEn:'Deu', ch:34, testament:'OT', genre:'law',      genreKo:'율법서' },
  { id:6,  ko:'여호수아',     en:'Joshua',           abbr:'수', abbrEn:'Jos', ch:24, testament:'OT', genre:'history',  genreKo:'역사서' },
  { id:7,  ko:'사사기',       en:'Judges',           abbr:'삿', abbrEn:'Jdg', ch:21, testament:'OT', genre:'history',  genreKo:'역사서' },
  { id:8,  ko:'룻기',         en:'Ruth',             abbr:'룻', abbrEn:'Rut', ch:4,  testament:'OT', genre:'history',  genreKo:'역사서' },
  { id:9,  ko:'사무엘상',     en:'1 Samuel',         abbr:'삼상',abbrEn:'1Sa', ch:31, testament:'OT', genre:'history',  genreKo:'역사서' },
  { id:10, ko:'사무엘하',     en:'2 Samuel',         abbr:'삼하',abbrEn:'2Sa', ch:24, testament:'OT', genre:'history',  genreKo:'역사서' },
  { id:11, ko:'열왕기상',     en:'1 Kings',          abbr:'왕상',abbrEn:'1Ki', ch:22, testament:'OT', genre:'history',  genreKo:'역사서' },
  { id:12, ko:'열왕기하',     en:'2 Kings',          abbr:'왕하',abbrEn:'2Ki', ch:25, testament:'OT', genre:'history',  genreKo:'역사서' },
  { id:13, ko:'역대상',       en:'1 Chronicles',     abbr:'대상',abbrEn:'1Ch', ch:29, testament:'OT', genre:'history',  genreKo:'역사서' },
  { id:14, ko:'역대하',       en:'2 Chronicles',     abbr:'대하',abbrEn:'2Ch', ch:36, testament:'OT', genre:'history',  genreKo:'역사서' },
  { id:15, ko:'에스라',       en:'Ezra',             abbr:'라', abbrEn:'Ezr', ch:10, testament:'OT', genre:'history',  genreKo:'역사서' },
  { id:16, ko:'느헤미야',     en:'Nehemiah',         abbr:'느', abbrEn:'Neh', ch:13, testament:'OT', genre:'history',  genreKo:'역사서' },
  { id:17, ko:'에스더',       en:'Esther',           abbr:'더', abbrEn:'Est', ch:10, testament:'OT', genre:'history',  genreKo:'역사서' },
  { id:18, ko:'욥기',         en:'Job',              abbr:'욥', abbrEn:'Job', ch:42, testament:'OT', genre:'poetry',   genreKo:'시가서' },
  { id:19, ko:'시편',         en:'Psalms',           abbr:'시', abbrEn:'Psa', ch:150,testament:'OT', genre:'poetry',   genreKo:'시가서' },
  { id:20, ko:'잠언',         en:'Proverbs',         abbr:'잠', abbrEn:'Pro', ch:31, testament:'OT', genre:'poetry',   genreKo:'시가서' },
  { id:21, ko:'전도서',       en:'Ecclesiastes',     abbr:'전', abbrEn:'Ecc', ch:12, testament:'OT', genre:'poetry',   genreKo:'시가서' },
  { id:22, ko:'아가',         en:'Song of Solomon',  abbr:'아', abbrEn:'Son', ch:8,  testament:'OT', genre:'poetry',   genreKo:'시가서' },
  { id:23, ko:'이사야',       en:'Isaiah',           abbr:'사', abbrEn:'Isa', ch:66, testament:'OT', genre:'prophecy', genreKo:'대선지서' },
  { id:24, ko:'예레미야',     en:'Jeremiah',         abbr:'렘', abbrEn:'Jer', ch:52, testament:'OT', genre:'prophecy', genreKo:'대선지서' },
  { id:25, ko:'예레미야애가', en:'Lamentations',     abbr:'애', abbrEn:'Lam', ch:5,  testament:'OT', genre:'prophecy', genreKo:'대선지서' },
  { id:26, ko:'에스겔',       en:'Ezekiel',          abbr:'겔', abbrEn:'Eze', ch:48, testament:'OT', genre:'prophecy', genreKo:'대선지서' },
  { id:27, ko:'다니엘',       en:'Daniel',           abbr:'단', abbrEn:'Dan', ch:12, testament:'OT', genre:'prophecy', genreKo:'대선지서' },
  { id:28, ko:'호세아',       en:'Hosea',            abbr:'호', abbrEn:'Hos', ch:14, testament:'OT', genre:'minorprophet',genreKo:'소선지서' },
  { id:29, ko:'요엘',         en:'Joel',             abbr:'욜', abbrEn:'Joe', ch:3,  testament:'OT', genre:'minorprophet',genreKo:'소선지서' },
  { id:30, ko:'아모스',       en:'Amos',             abbr:'암', abbrEn:'Amo', ch:9,  testament:'OT', genre:'minorprophet',genreKo:'소선지서' },
  { id:31, ko:'오바댜',       en:'Obadiah',          abbr:'옵', abbrEn:'Oba', ch:1,  testament:'OT', genre:'minorprophet',genreKo:'소선지서' },
  { id:32, ko:'요나',         en:'Jonah',            abbr:'욘', abbrEn:'Jon', ch:4,  testament:'OT', genre:'minorprophet',genreKo:'소선지서' },
  { id:33, ko:'미가',         en:'Micah',            abbr:'미', abbrEn:'Mic', ch:7,  testament:'OT', genre:'minorprophet',genreKo:'소선지서' },
  { id:34, ko:'나훔',         en:'Nahum',            abbr:'나', abbrEn:'Nah', ch:3,  testament:'OT', genre:'minorprophet',genreKo:'소선지서' },
  { id:35, ko:'하박국',       en:'Habakkuk',         abbr:'합', abbrEn:'Hab', ch:3,  testament:'OT', genre:'minorprophet',genreKo:'소선지서' },
  { id:36, ko:'스바냐',       en:'Zephaniah',        abbr:'습', abbrEn:'Zep', ch:3,  testament:'OT', genre:'minorprophet',genreKo:'소선지서' },
  { id:37, ko:'학개',         en:'Haggai',           abbr:'학', abbrEn:'Hag', ch:2,  testament:'OT', genre:'minorprophet',genreKo:'소선지서' },
  { id:38, ko:'스가랴',       en:'Zechariah',        abbr:'슥', abbrEn:'Zec', ch:14, testament:'OT', genre:'minorprophet',genreKo:'소선지서' },
  { id:39, ko:'말라기',       en:'Malachi',          abbr:'말', abbrEn:'Mal', ch:4,  testament:'OT', genre:'minorprophet',genreKo:'소선지서' },
  { id:40, ko:'마태복음',     en:'Matthew',          abbr:'마', abbrEn:'Mat', ch:28, testament:'NT', genre:'gospel',   genreKo:'복음서' },
  { id:41, ko:'마가복음',     en:'Mark',             abbr:'막', abbrEn:'Mar', ch:16, testament:'NT', genre:'gospel',   genreKo:'복음서' },
  { id:42, ko:'누가복음',     en:'Luke',             abbr:'눅', abbrEn:'Luk', ch:24, testament:'NT', genre:'gospel',   genreKo:'복음서' },
  { id:43, ko:'요한복음',     en:'John',             abbr:'요', abbrEn:'Joh', ch:21, testament:'NT', genre:'gospel',   genreKo:'복음서' },
  { id:44, ko:'사도행전',     en:'Acts',             abbr:'행', abbrEn:'Act', ch:28, testament:'NT', genre:'history',  genreKo:'역사서' },
  { id:45, ko:'로마서',       en:'Romans',           abbr:'롬', abbrEn:'Rom', ch:16, testament:'NT', genre:'epistle',  genreKo:'서신서' },
  { id:46, ko:'고린도전서',   en:'1 Corinthians',    abbr:'고전',abbrEn:'1Co', ch:16, testament:'NT', genre:'epistle',  genreKo:'서신서' },
  { id:47, ko:'고린도후서',   en:'2 Corinthians',    abbr:'고후',abbrEn:'2Co', ch:13, testament:'NT', genre:'epistle',  genreKo:'서신서' },
  { id:48, ko:'갈라디아서',   en:'Galatians',        abbr:'갈', abbrEn:'Gal', ch:6,  testament:'NT', genre:'epistle',  genreKo:'서신서' },
  { id:49, ko:'에베소서',     en:'Ephesians',        abbr:'엡', abbrEn:'Eph', ch:6,  testament:'NT', genre:'epistle',  genreKo:'서신서' },
  { id:50, ko:'빌립보서',     en:'Philippians',      abbr:'빌', abbrEn:'Php', ch:4,  testament:'NT', genre:'epistle',  genreKo:'서신서' },
  { id:51, ko:'골로새서',     en:'Colossians',       abbr:'골', abbrEn:'Col', ch:4,  testament:'NT', genre:'epistle',  genreKo:'서신서' },
  { id:52, ko:'데살로니가전서',en:'1 Thessalonians', abbr:'살전',abbrEn:'1Th', ch:5,  testament:'NT', genre:'epistle',  genreKo:'서신서' },
  { id:53, ko:'데살로니가후서',en:'2 Thessalonians', abbr:'살후',abbrEn:'2Th', ch:3,  testament:'NT', genre:'epistle',  genreKo:'서신서' },
  { id:54, ko:'디모데전서',   en:'1 Timothy',        abbr:'딤전',abbrEn:'1Ti', ch:6,  testament:'NT', genre:'epistle',  genreKo:'서신서' },
  { id:55, ko:'디모데후서',   en:'2 Timothy',        abbr:'딤후',abbrEn:'2Ti', ch:4,  testament:'NT', genre:'epistle',  genreKo:'서신서' },
  { id:56, ko:'디도서',       en:'Titus',            abbr:'딛', abbrEn:'Tit', ch:3,  testament:'NT', genre:'epistle',  genreKo:'서신서' },
  { id:57, ko:'빌레몬서',     en:'Philemon',         abbr:'몬', abbrEn:'Phm', ch:1,  testament:'NT', genre:'epistle',  genreKo:'서신서' },
  { id:58, ko:'히브리서',     en:'Hebrews',          abbr:'히', abbrEn:'Heb', ch:13, testament:'NT', genre:'epistle',  genreKo:'서신서' },
  { id:59, ko:'야고보서',     en:'James',            abbr:'약', abbrEn:'Jas', ch:5,  testament:'NT', genre:'epistle',  genreKo:'서신서' },
  { id:60, ko:'베드로전서',   en:'1 Peter',          abbr:'벧전',abbrEn:'1Pe', ch:5,  testament:'NT', genre:'epistle',  genreKo:'서신서' },
  { id:61, ko:'베드로후서',   en:'2 Peter',          abbr:'벧후',abbrEn:'2Pe', ch:3,  testament:'NT', genre:'epistle',  genreKo:'서신서' },
  { id:62, ko:'요한일서',     en:'1 John',           abbr:'요일',abbrEn:'1Jo', ch:5,  testament:'NT', genre:'epistle',  genreKo:'서신서' },
  { id:63, ko:'요한이서',     en:'2 John',           abbr:'요이',abbrEn:'2Jo', ch:1,  testament:'NT', genre:'epistle',  genreKo:'서신서' },
  { id:64, ko:'요한삼서',     en:'3 John',           abbr:'요삼',abbrEn:'3Jo', ch:1,  testament:'NT', genre:'epistle',  genreKo:'서신서' },
  { id:65, ko:'유다서',       en:'Jude',             abbr:'유', abbrEn:'Jud', ch:1,  testament:'NT', genre:'epistle',  genreKo:'서신서' },
  { id:66, ko:'요한계시록',   en:'Revelation',       abbr:'계', abbrEn:'Rev', ch:22, testament:'NT', genre:'apocalyptic',genreKo:'예언서' },
];

// 책 구조 (주요 단락 개요) — 66권 핵심 구조
const BOOK_STRUCTURE = {
  1:  { summary:'창조, 타락, 홍수, 바벨탑, 족장들의 이야기(아브라함·이삭·야곱·요셉)를 통해 하나님의 구원 계획의 시작을 보여준다.', structure:[{t:'창조와 타락',ch:[1,11]},{t:'아브라함 언약',ch:[12,25]},{t:'이삭과 야곱',ch:[25,36]},{t:'요셉 이야기',ch:[37,50]}] },
  2:  { summary:'이집트 노예였던 이스라엘을 하나님이 모세를 통해 구출하시고, 시내산에서 언약을 맺으시며 성막 건설을 명하신다.', structure:[{t:'애굽에서의 탄압',ch:[1,12]},{t:'출애굽과 홍해',ch:[13,18]},{t:'시내산 언약',ch:[19,24]},{t:'성막 설계·건설',ch:[25,40]}] },
  3:  { summary:'제사장 규례와 이스라엘 백성의 거룩한 삶을 위한 율법들을 다룬다. "내가 거룩하니 너희도 거룩하라"가 핵심 주제다.', structure:[{t:'제사법',ch:[1,7]},{t:'제사장 임직',ch:[8,10]},{t:'정결법',ch:[11,16]},{t:'거룩 법전',ch:[17,27]}] },
  4:  { summary:'광야 40년 방랑을 기록하며, 불신앙의 결과와 하나님의 신실하심을 보여준다. 2번의 인구 조사(두 세대)가 구조의 틀이다.', structure:[{t:'첫 세대 조사',ch:[1,10]},{t:'광야 반역',ch:[11,19]},{t:'모압 평지',ch:[20,36]}] },
  5:  { summary:'모세의 고별 설교로, 출애굽 사건을 회상하고 율법을 재해석하며 가나안 입성을 앞둔 새 세대에게 언약 갱신을 촉구한다.', structure:[{t:'첫째 설교 (역사 회고)',ch:[1,4]},{t:'둘째 설교 (율법 재해석)',ch:[5,26]},{t:'셋째 설교 (언약 갱신)',ch:[27,30]},{t:'모세의 죽음',ch:[31,34]}] },
  6:  { summary:'이스라엘이 가나안을 정복하는 과정을 기록한다. 라합, 기브온, 아이 성 등의 사건과 지파별 땅 분배가 핵심이다.', structure:[{t:'가나안 입성',ch:[1,5]},{t:'정복 전쟁',ch:[6,12]},{t:'땅 분배',ch:[13,22]},{t:'여호수아 고별',ch:[23,24]}] },
  7:  { summary:'사사 시대의 반복적 패턴(죄→심판→부르짖음→구원→다시 죄)을 보여준다. 드보라, 기드온, 삼손 등 12명의 사사가 등장한다.', structure:[{t:'정복 미완성과 서론',ch:[1,3]},{t:'사사들의 이야기',ch:[3,16]},{t:'혼란한 시대',ch:[17,21]}] },
  8:  { summary:'모압 여인 룻이 시어머니 나오미를 따라 이스라엘로 돌아와 보아스를 만나는 사랑과 충성의 이야기. 다윗의 조상 이야기이다.', structure:[{t:'모압에서 귀환',ch:[1,1]},{t:'룻과 보아스',ch:[2,3]},{t:'기업 무를자',ch:[4,4]}] },
  9:  { summary:'이스라엘의 초대 왕 사울의 통치와 몰락, 다윗의 등장과 성장을 다룬다. 하나님의 마음에 합한 자(다윗)를 보여준다.', structure:[{t:'사무엘과 사울',ch:[1,15]},{t:'다윗의 등장',ch:[16,20]},{t:'다윗의 도피',ch:[21,31]}] },
  10: { summary:'다윗의 통치 전성기와 밧세바 사건 이후의 몰락을 기록한다. 은혜로 세워진 왕도 죄로 인해 심각한 결과를 맞이함을 보여준다.', structure:[{t:'다윗 왕국 확립',ch:[1,10]},{t:'밧세바 사건',ch:[11,12]},{t:'압살롬 반란',ch:[13,20]},{t:'다윗 말년',ch:[21,24]}] },
  11: { summary:'솔로몬의 성전 건축과 지혜 통치, 그 후의 분열 왕국을 다룬다. 엘리야와 아합 왕의 대결이 이 책의 절정이다.', structure:[{t:'솔로몬 통치',ch:[1,11]},{t:'왕국 분열',ch:[12,16]},{t:'엘리야 시대',ch:[17,22]}] },
  12: { summary:'북이스라엘(앗시리아에 멸망)과 남유다(바벨론에 멸망)의 왕들을 기록한다. 엘리사, 이사야, 히스기야, 요시야의 이야기가 포함된다.', structure:[{t:'엘리사와 아합 왕조',ch:[1,8]},{t:'예후 왕조',ch:[9,15]},{t:'북이스라엘 멸망',ch:[16,17]},{t:'남유다 말기',ch:[18,25]}] },
  13: { summary:'다윗 왕조의 계보와 사울 몰락에서 시작해 다윗 왕국 확립까지를 제사장적 관점으로 재해석한다.', structure:[{t:'계보',ch:[1,9]},{t:'사울의 죽음',ch:[10,10]},{t:'다윗 통치',ch:[11,29]}] },
  14: { summary:'솔로몬의 성전 건축과 이후 남유다 왕들의 역사를 선악 기준으로 평가한다. 느부갓네살의 침공과 성전 파괴로 끝난다.', structure:[{t:'솔로몬 통치',ch:[1,9]},{t:'왕국 분열 후 유다',ch:[10,27]},{t:'히스기야·요시야',ch:[28,35]},{t:'유다 멸망',ch:[36,36]}] },
  15: { summary:'바벨론 포로에서 귀환한 이스라엘이 성전을 재건하는 과정을 기록한다. 스룹바벨과 에스라가 주요 인물이다.', structure:[{t:'귀환과 성전 기초',ch:[1,3]},{t:'성전 건축 방해',ch:[4,6]},{t:'에스라 귀환',ch:[7,10]}] },
  16: { summary:'느헤미야가 예루살렘 성벽을 재건하고 이스라엘을 영적으로 개혁하는 이야기다. 기도와 행동의 모범을 보여준다.', structure:[{t:'성벽 재건',ch:[1,7]},{t:'영적 개혁',ch:[8,10]},{t:'공동체 정착',ch:[11,13]}] },
  17: { summary:'페르시아 궁정에서 유대인 에스더가 민족을 구하는 이야기. 하나님의 이름은 나오지 않지만 섭리가 전 이야기를 이끈다.', structure:[{t:'왕후 에스더',ch:[1,2]},{t:'하만의 음모',ch:[3,5]},{t:'역전과 구원',ch:[6,10]}] },
  18: { summary:'의인 욥이 극심한 고난 속에서 하나님과 씨름하는 이야기. 고난의 신비와 하나님의 절대 주권이 핵심 주제다.', structure:[{t:'욥의 시련 (산문)',ch:[1,2]},{t:'욥과 세 친구 논쟁 (시)',ch:[3,31]},{t:'엘리후 연설',ch:[32,37]},{t:'하나님의 대답',ch:[38,42]}] },
  19: { summary:'150편의 히브리 시 모음집. 찬양, 탄원, 감사, 지혜 등 인간의 신앙과 감정 전체를 담은 기도서이다.', structure:[{t:'제1권 (다윗)',ch:[1,41]},{t:'제2권 (다윗·고라 자손)',ch:[42,72]},{t:'제3권',ch:[73,89]},{t:'제4·5권',ch:[90,150]}] },
  20: { summary:'인생의 지혜와 덕스러운 삶을 위한 격언 모음. "여호와를 경외하는 것이 지식의 근본"이 핵심 주제다.', structure:[{t:'솔로몬의 잠언 I',ch:[1,9]},{t:'솔로몬의 잠언 II',ch:[10,22]},{t:'지혜자의 말',ch:[22,31]}] },
  21: { summary:'"해 아래" 모든 것의 허무함을 논하지만 결국 "하나님을 경외하고 명령을 지키라"는 결론에 도달한다.', structure:[{t:'허무의 선언',ch:[1,2]},{t:'삶의 관찰',ch:[3,6]},{t:'지혜의 권고',ch:[7,12]}] },
  22: { summary:'솔로몬과 술람미 여인의 사랑 시 모음. 인간의 사랑과 하나님·이스라엘 또는 그리스도와 교회의 관계로 해석된다.', structure:[{t:'만남과 그리움',ch:[1,3]},{t:'사랑의 노래',ch:[4,6]},{t:'헌신과 완성',ch:[7,8]}] },
  23: { summary:'이사야가 유다와 열방을 향해 심판과 구원을 예언한다. 고난받는 종(사 53장)을 통한 메시아 예언이 절정이다.', structure:[{t:'심판 예언 (1-39장)',ch:[1,39]},{t:'위로의 책 (40-55장)',ch:[40,55]},{t:'회복과 새창조 (56-66장)',ch:[56,66]}] },
  24: { summary:'예루살렘 멸망 전후의 예레미야 사역을 기록한다. 새 언약 예언(31장)과 개인적 탄식이 독특한 특징이다.', structure:[{t:'소명과 초기 사역',ch:[1,20]},{t:'열방 심판',ch:[21,33]},{t:'새 언약',ch:[30,33]},{t:'역사 서술',ch:[34,52]}] },
  25: { summary:'예루살렘 멸망을 목격한 예레미야의 애곡. 5개의 애가시로 이루어진 이 책은 슬픔 속에서도 하나님의 자비를 고백한다.', structure:[{t:'시온의 황폐',ch:[1,1]},{t:'하나님의 진노',ch:[2,2]},{t:'소망의 고백',ch:[3,3]},{t:'영광의 상실',ch:[4,5]}] },
  26: { summary:'바벨론 포로 중 에스겔의 환상과 예언. 성전의 영광이 떠나고 다시 돌아오는 환상을 통해 회복을 약속한다.', structure:[{t:'심판 예언',ch:[1,24]},{t:'열방 예언',ch:[25,32]},{t:'회복 예언',ch:[33,39]},{t:'새 성전 환상',ch:[40,48]}] },
  27: { summary:'바벨론·페르시아·헬라 제국 아래서의 다니엘과 세 친구 이야기, 그리고 묵시적 환상들. 하나님의 나라가 역사를 지배함을 선언한다.', structure:[{t:'다니엘과 세 친구',ch:[1,6]},{t:'묵시 환상',ch:[7,12]}] },
  28: { summary:'북이스라엘을 향한 예언. 음란한 아내 고멜을 통해 이스라엘을 향한 하나님의 변함없는 사랑을 표현한다.', structure:[{t:'호세아의 결혼',ch:[1,3]},{t:'이스라엘 고발',ch:[4,7]},{t:'심판과 회복',ch:[8,14]}] },
  29: { summary:'메뚜기 재앙을 배경으로 여호와의 날 심판과 성령 부으심을 예언한다(욜 2:28-32는 오순절 성취 예언).', structure:[{t:'메뚜기 재앙',ch:[1,2]},{t:'회복과 심판',ch:[2,3]}] },
  30: { summary:'북이스라엘의 사회적 불의와 종교적 외식을 강하게 책망하며 하나님의 공의를 촉구한다. 아모스 5:24가 핵심절이다.', structure:[{t:'열방 심판',ch:[1,2]},{t:'이스라엘 심판',ch:[3,6]},{t:'환상들',ch:[7,9]}] },
  31: { summary:'에돔에 대한 짧은 심판 예언. 형제 야곱(이스라엘)에 대한 배신을 책망한다.', structure:[{t:'에돔 심판',ch:[1,1]}] },
  32: { summary:'하나님을 피해 달아난 요나의 이야기. 하나님의 자비가 이스라엘뿐 아니라 니느웨까지 미침을 보여준다.', structure:[{t:'도망과 폭풍',ch:[1,1]},{t:'물고기 뱃속',ch:[2,2]},{t:'니느웨 회개',ch:[3,3]},{t:'요나의 불평',ch:[4,4]}] },
  33: { summary:'사마리아와 예루살렘을 향한 심판 예언과 "베들레헴에서 올 메시아" 예언(미 5:2)이 포함된 회복 약속.', structure:[{t:'심판 예언',ch:[1,3]},{t:'회복 예언',ch:[4,5]},{t:'재판과 소망',ch:[6,7]}] },
  34: { summary:'앗시리아 수도 니느웨의 멸망을 예언한다. 약 한 세기 전 요나의 회개와 대조된다.', structure:[{t:'니느웨 심판',ch:[1,3]}] },
  35: { summary:'"왜 악인이 형통하는가"라는 신정론 질문에서 시작해 하나님의 주권적 응답으로 끝난다(합 2:4 "의인은 믿음으로 살리라").', structure:[{t:'하박국의 탄식',ch:[1,2]},{t:'하나님의 응답',ch:[2,3]}] },
  36: { summary:'유다에 대한 심판 예언. 여호와의 날 심판 뒤에 나타날 회복된 이스라엘을 노래한다(습 3:17).', structure:[{t:'심판 예언',ch:[1,2]},{t:'회복 예언',ch:[3,3]}] },
  37: { summary:'포로에서 돌아온 이스라엘에게 성전 재건을 촉구한다. 두 번의 날짜를 기점으로 하나님의 복을 약속한다.', structure:[{t:'성전 재건 촉구',ch:[1,1]},{t:'복의 약속',ch:[2,2]}] },
  38: { summary:'8가지 환상과 메시아 예언이 가득한 신약 인용이 많은 소선지서. 나귀 타시는 왕(9:9), 은 30(11:12-13) 등이 포함된다.', structure:[{t:'여덟 가지 환상',ch:[1,6]},{t:'금식과 회복',ch:[7,8]},{t:'메시아 예언',ch:[9,14]}] },
  39: { summary:'구약의 마지막 예언서. 이스라엘의 형식적 예배를 책망하고 엘리야 같은 선지자 도래를 약속하며 구약을 마무리한다.', structure:[{t:'하나님의 사랑',ch:[1,1]},{t:'제사장 책망',ch:[2,2]},{t:'오실 주의 전령',ch:[3,4]}] },
  40: { summary:'예수님의 탄생·사역·수난·부활을 왕이신 메시아로 묘사한다. 유대인 독자를 위해 구약 성취를 강조한다.', structure:[{t:'계보와 탄생',ch:[1,2]},{t:'갈릴리 사역',ch:[3,18]},{t:'예루살렘 사역',ch:[19,25]},{t:'수난과 부활',ch:[26,28]}] },
  41: { summary:'예수님의 사역을 생생하고 역동적으로 기록한다. "즉시(euthys)"가 반복되며, 섬기는 종 예수를 묘사한다.', structure:[{t:'갈릴리 사역',ch:[1,8]},{t:'수난 예고·여정',ch:[8,10]},{t:'예루살렘',ch:[11,13]},{t:'수난과 부활',ch:[14,16]}] },
  42: { summary:'예수님을 인류의 구주로 묘사하며 이방인과 소외된 자들에게 관심을 기울인다. 탕자의 비유(15장)가 이 책의 대표 이야기다.', structure:[{t:'탄생과 준비',ch:[1,4]},{t:'갈릴리 사역',ch:[5,9]},{t:'예루살렘 여정',ch:[10,19]},{t:'예루살렘과 수난',ch:[19,24]}] },
  43: { summary:'예수님을 하나님의 말씀(로고스)으로 소개한다. "나는 ~이다" 선언 7가지와 7가지 표적이 구조의 축을 이룬다.', structure:[{t:'말씀과 표적 (1-12장)',ch:[1,12]},{t:'고별 강화',ch:[13,17]},{t:'수난과 부활',ch:[18,21]}] },
  44: { summary:'성령 강림 이후 복음이 예루살렘에서 로마까지 전파되는 과정. 베드로(1-12장)와 바울(13-28장)이 두 주인공이다.', structure:[{t:'예루살렘 교회',ch:[1,7]},{t:'유대·사마리아',ch:[8,12]},{t:'바울 1·2차 전도여행',ch:[13,18]},{t:'바울 3차 여행과 로마',ch:[19,28]}] },
  45: { summary:'바울의 가장 체계적인 복음 설명. 죄·칭의·성화·예정·이스라엘·윤리 순서로 전개되며 "복음은 하나님의 능력"(1:16)이 핵심이다.', structure:[{t:'서론과 죄 진단',ch:[1,3]},{t:'칭의',ch:[3,5]},{t:'성화',ch:[6,8]},{t:'이스라엘 문제',ch:[9,11]},{t:'실천 권고',ch:[12,16]}] },
  46: { summary:'고린도 교회의 분열·음행·우상제물·방언·부활 부정 등의 문제를 다룬다. 사랑 찬가(13장)가 가장 유명하다.', structure:[{t:'교회 문제 답변',ch:[1,6]},{t:'결혼·우상제물',ch:[7,11]},{t:'은사론',ch:[12,14]},{t:'부활론',ch:[15,16]}] },
  47: { summary:'바울이 자신의 사도권을 변호하고 고린도 교인들과의 관계 회복을 추구한다. 고난 목록(11장)이 인상적이다.', structure:[{t:'화해 호소',ch:[1,7]},{t:'헌금 권고',ch:[8,9]},{t:'사도권 변호',ch:[10,13]}] },
  48: { summary:'"또 다른 복음"을 전하는 자들에 맞서 믿음으로 얻는 칭의를 강력히 선언한다. 자유의 복음서라 불린다.', structure:[{t:'다른 복음 경고',ch:[1,2]},{t:'믿음과 율법',ch:[3,4]},{t:'자유와 성령',ch:[5,6]}] },
  49: { summary:'그리스도 안에서 주어진 구원의 풍성함과 교회론, 가정·사회·영적 전쟁을 다룬다. 하나님의 전신갑주(6장)가 유명하다.', structure:[{t:'구원의 찬양',ch:[1,3]},{t:'교회 공동체',ch:[4,5]},{t:'가정·영적 전쟁',ch:[5,6]}] },
  50: { summary:'옥중에서도 기쁨이 넘치는 편지. "기뻐하라"가 반복되며 그리스도를 아는 지식의 탁월함을 선언한다(3:8).', structure:[{t:'감사와 기쁨',ch:[1,2]},{t:'그리스도 안의 자족',ch:[3,4]}] },
  51: { summary:'그리스도의 우주적 주권을 선언하며 거짓 철학에 맞선다. 그리스도는 "몸의 머리"요 "충만"이시다.', structure:[{t:'그리스도의 탁월성',ch:[1,2]},{t:'가정과 사회 규범',ch:[3,4]}] },
  52: { summary:'데살로니가 교인들의 환난 중 믿음을 칭찬하고 재림에 대한 바른 이해를 가르친다.', structure:[{t:'감사와 기도',ch:[1,3]},{t:'재림과 권고',ch:[4,5]}] },
  53: { summary:'재림이 이미 왔다는 오해를 바로잡고 "불법의 사람" 출현 후 주의 날이 옴을 가르친다.', structure:[{t:'재림 바른 이해',ch:[1,2]},{t:'권고',ch:[3,3]}] },
  54: { summary:'디모데에게 교회 지도력과 바른 교리를 가르친다. 감독·집사 자격(3장)이 중요한 교회론적 본문이다.', structure:[{t:'거짓 교사 경고',ch:[1,1]},{t:'교회 예배·지도력',ch:[2,3]},{t:'목회 지침',ch:[4,6]}] },
  55: { summary:'죽음을 앞둔 바울의 고별 서신. 복음을 위해 고난을 받되 끝까지 견디라는 강력한 권면이 핵심이다.', structure:[{t:'고난과 충성',ch:[1,2]},{t:'마지막 경고',ch:[3,4]}] },
  56: { summary:'그레데 섬 목회자 디도에게 쓴 편지. 장로 자격과 건전한 교훈, 선한 행실을 강조한다.', structure:[{t:'지도자 자격',ch:[1,1]},{t:'건전한 교훈',ch:[2,3]}] },
  57: { summary:'도망간 노예 오네시모를 그리스도 안의 형제로 받아달라는 바울의 개인 간청 편지. 화해와 용서의 모범이다.', structure:[{t:'오네시모를 위한 간청',ch:[1,1]}] },
  58: { summary:'예수 그리스도가 구약의 모든 제사·제사장·언약보다 탁월함을 증명하며 유대 그리스도인들에게 배교를 경고한다.', structure:[{t:'그리스도의 탁월성',ch:[1,7]},{t:'새 언약과 새 제사장',ch:[8,10]},{t:'믿음의 영웅들',ch:[11,12]},{t:'실천 권고',ch:[13,13]}] },
  59: { summary:'행함 없는 믿음은 죽은 믿음이라 선언하며 구체적인 삶의 윤리를 요구한다. 바울의 이신칭의와 상호보완적이다.', structure:[{t:'시험과 지혜',ch:[1,1]},{t:'믿음과 행함',ch:[2,2]},{t:'혀와 지혜',ch:[3,4]},{t:'인내와 기도',ch:[5,5]}] },
  60: { summary:'흩어진 성도들에게 고난 중 거룩한 삶과 소망을 격려한다. 그리스도의 고난이 성도 고난의 모범이다.', structure:[{t:'산 소망',ch:[1,2]},{t:'고난 속 선행',ch:[2,4]},{t:'장로와 겸손',ch:[5,5]}] },
  61: { summary:'거짓 교사들에 맞서 사도의 증언에 기초한 바른 지식을 촉구한다. 주의 날 도래에 대한 확신을 심어준다.', structure:[{t:'지식과 성품',ch:[1,1]},{t:'거짓 교사 경고',ch:[2,2]},{t:'주의 날 소망',ch:[3,3]}] },
  62: { summary:'하나님은 빛이시요 사랑이시라는 두 핵심 주제 아래, 빛 가운데 걷고 서로 사랑하라고 권면한다.', structure:[{t:'빛과 죄 고백',ch:[1,1]},{t:'새 계명·세상 사랑',ch:[2,2]},{t:'하나님의 사랑',ch:[3,5]}] },
  63: { summary:'택하심을 받은 부녀에게 사랑과 진리 안에서 걷고 거짓 교사를 경계하라고 권면하는 짧은 편지.', structure:[{t:'사랑과 진리',ch:[1,1]}] },
  64: { summary:'영접의 도를 행한 가이오를 칭찬하고, 교만한 디오드레베를 경고하며, 선한 것을 본받으라고 권면한다.', structure:[{t:'가이오 칭찬',ch:[1,1]}] },
  65: { summary:'한 장짜리 편지로, 일찍이 전해진 믿음을 위해 힘써 싸우라고 촉구하며 거짓 교사들을 단호히 경고한다.', structure:[{t:'믿음을 위한 싸움',ch:[1,1]}] },
  66: { summary:'핍박받는 성도들에게 주는 환상과 예언. 일곱 교회, 봉인·나팔·대접 심판, 바벨론 멸망, 새 예루살렘으로 전개된다.', structure:[{t:'일곱 교회에 보내는 편지',ch:[1,3]},{t:'하늘 보좌와 봉인',ch:[4,8]},{t:'나팔·대접 심판',ch:[8,16]},{t:'바벨론 멸망',ch:[17,19]},{t:'새 예루살렘',ch:[20,22]}] },
};

// ─── 읽기표 정의 ────────────────────────────────────────
const PLAN_DEFS = [
  {
    id: 'sequential',
    name: '순서대로 읽기',
    desc: '창세기부터 요한계시록까지 순서대로',
    icon: '📖',
    duration: '1년 (3-4장/일)',
    streams: ['본문'],
    generate: generateSequentialPlan,
  },
  {
    id: 'mccheyne',
    name: '맥체인 읽기표',
    desc: '하루 4장 · 구약 1독 + 신약·시편 2독',
    icon: '🗓',
    duration: '1년 (4장/일)',
    streams: ['구약 I', '구약 II', '신약 I', '신약 II'],
    generate: generateMcCheynePlan,
  },
  {
    id: 'nt_first',
    name: '신약 먼저 읽기',
    desc: '신약을 먼저 읽고 구약으로 이어가기',
    icon: '✝️',
    duration: '1년',
    streams: ['본문'],
    generate: generateNTFirstPlan,
  },
  {
    id: 'intensive_90',
    name: '90일 성경통독',
    desc: '집중적으로 3개월 안에 신구약 완독',
    icon: '🔥',
    duration: '90일 (13장/일)',
    streams: ['본문'],
    generate: generateIntensive90Plan,
  },
  {
    id: 'psalms_proverbs',
    name: '시편·잠언 월간 읽기',
    desc: '매달 시편 150편 + 잠언 31장 반복',
    icon: '🌙',
    duration: '매월 반복',
    streams: ['시편', '잠언'],
    generate: generatePsalmsProverbsPlan,
  },
  {
    id: 'ot_nt_parallel',
    name: '구약·신약 병행',
    desc: '구약 2장 + 신약 1장씩 매일 읽기',
    icon: '⚖️',
    duration: '1년',
    streams: ['구약', '신약'],
    generate: generateOTNTParallelPlan,
  },
];

// ─── 읽기표 생성 함수들 ─────────────────────────────────

/** 모든 성경 장을 순서대로 {bookId, chapter} 배열로 반환 */
function allChaptersSequential() {
  const chapters = [];
  for (const book of BOOKS) {
    for (let c = 1; c <= book.ch; c++) {
      chapters.push({ bookId: book.id, chapter: c });
    }
  }
  return chapters;
}

/** 특정 책 id 범위의 모든 장 */
function chaptersForBooks(bookIds) {
  const chapters = [];
  for (const id of bookIds) {
    const book = BOOKS.find(b => b.id === id);
    if (!book) continue;
    for (let c = 1; c <= book.ch; c++) {
      chapters.push({ bookId: book.id, chapter: c });
    }
  }
  return chapters;
}

function generateSequentialPlan(startDate) {
  const all = allChaptersSequential(); // 1189장
  const days = [];
  let ci = 0;
  const d = new Date(startDate);
  while (ci < all.length) {
    const dateStr = d.toISOString().slice(0, 10);
    const dayReadings = [];
    // 하루 3-4장 (남은 장이 더 균등하게 분배되도록)
    const remaining = all.length - ci;
    const daysLeft = Math.max(1, 365 - days.length);
    const perDay = Math.ceil(remaining / daysLeft);
    const count = Math.min(perDay, 5, remaining);
    for (let i = 0; i < count; i++) {
      dayReadings.push([all[ci]]);
      ci++;
    }
    days.push({ date: dateStr, streams: dayReadings });
    d.setDate(d.getDate() + 1);
    if (days.length >= 400) break;
  }
  return days;
}

function generateMcCheynePlan(startDate) {
  // 4개 트랙 정의 (각 트랙은 책 id 배열)
  const OT1_BOOKS = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]; // Gen-Neh (337ch)
  const OT2_BOOKS = [18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]; // Job-Mal (379ch)
  const NT1_BOOKS = [40,41,42,43,44]; // Matt-Acts (117ch) → 반복
  const NT2_BOOKS = [45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,19]; // Rom-Rev + Psalm (286ch) → 반복

  const t1 = chaptersForBooks(OT1_BOOKS);
  const t2 = chaptersForBooks(OT2_BOOKS);
  const t3 = chaptersForBooks(NT1_BOOKS);
  const t4 = chaptersForBooks(NT2_BOOKS);

  const days = [];
  const d = new Date(startDate);
  for (let day = 0; day < 365; day++) {
    const dateStr = d.toISOString().slice(0, 10);
    days.push({
      date: dateStr,
      streams: [
        [t1[day % t1.length]],
        [t2[day % t2.length]],
        [t3[day % t3.length]],
        [t4[day % t4.length]],
      ]
    });
    d.setDate(d.getDate() + 1);
  }
  return days;
}

function generateNTFirstPlan(startDate) {
  const nt = chaptersForBooks(BOOKS.filter(b => b.testament === 'NT').map(b => b.id));
  const ot = chaptersForBooks(BOOKS.filter(b => b.testament === 'OT').map(b => b.id));
  const all = [...nt, ...ot];
  return generateFromFlatList(all, startDate, 3);
}

function generateIntensive90Plan(startDate) {
  const all = allChaptersSequential();
  const days = [];
  const d = new Date(startDate);
  let ci = 0;
  for (let day = 0; day < 90 && ci < all.length; day++) {
    const dateStr = d.toISOString().slice(0, 10);
    const dayReadings = [];
    const count = Math.ceil((all.length - ci) / (90 - day));
    for (let i = 0; i < count && ci < all.length; i++) {
      dayReadings.push([all[ci++]]);
    }
    days.push({ date: dateStr, streams: dayReadings });
    d.setDate(d.getDate() + 1);
  }
  return days;
}

function generatePsalmsProverbsPlan(startDate) {
  const days = [];
  const d = new Date(startDate);
  for (let day = 0; day < 365; day++) {
    const dateStr = d.toISOString().slice(0, 10);
    const dayOfMonth = d.getDate();
    const psalmCh = ((day * 5) % 150) + 1; // 하루 5편 시편
    const provCh = dayOfMonth <= 31 ? dayOfMonth : 1;
    days.push({
      date: dateStr,
      streams: [
        [{ bookId: 19, chapter: psalmCh },
         { bookId: 19, chapter: Math.min(psalmCh + 1, 150) },
         { bookId: 19, chapter: Math.min(psalmCh + 2, 150) },
         { bookId: 19, chapter: Math.min(psalmCh + 3, 150) },
         { bookId: 19, chapter: Math.min(psalmCh + 4, 150) }],
        [{ bookId: 20, chapter: provCh }],
      ]
    });
    d.setDate(d.getDate() + 1);
  }
  return days;
}

function generateOTNTParallelPlan(startDate) {
  const ot = chaptersForBooks(BOOKS.filter(b => b.testament === 'OT').map(b => b.id));
  const nt = chaptersForBooks(BOOKS.filter(b => b.testament === 'NT').map(b => b.id));
  const days = [];
  const d = new Date(startDate);
  for (let day = 0; day < 365; day++) {
    const dateStr = d.toISOString().slice(0, 10);
    const oi = day * 3;
    const ni = day;
    days.push({
      date: dateStr,
      streams: [
        [ot[oi % ot.length], ot[(oi + 1) % ot.length]],
        [nt[ni % nt.length]],
      ]
    });
    d.setDate(d.getDate() + 1);
  }
  return days;
}

function generateFromFlatList(all, startDate, perDay) {
  const days = [];
  const d = new Date(startDate);
  let ci = 0;
  while (ci < all.length) {
    const dateStr = d.toISOString().slice(0, 10);
    const dayReadings = [];
    for (let i = 0; i < perDay && ci < all.length; i++) {
      dayReadings.push([all[ci++]]);
    }
    days.push({ date: dateStr, streams: dayReadings });
    d.setDate(d.getDate() + 1);
  }
  return days;
}

// ─── 상태 관리 ──────────────────────────────────────────
const STATE_KEY = 'bible_app_state';

let state = {
  version1: 'kornkrv',
  version2: null, // null = 단일 보기
  currentBook: 1,
  currentChapter: 1,
  activePlanId: 'mccheyne',
  planStartDate: new Date().toISOString().slice(0, 10),
  readChapters: {}, // { "planId_date": ["bookId.ch", ...] }
  highlights: [], // { bookId, chapter, verse }
  fontSize: 17,
  theme: 'dark',
  sidebarOpen: true,
  contextOpen: true,
  calMonth: null, // "YYYY-MM" 현재 표시 중인 달
};

function loadState() {
  try {
    const saved = localStorage.getItem(STATE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      state = { ...state, ...parsed };
    }
  } catch (e) {}
}

function saveState() {
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
  } catch (e) {}
}

// ─── 성경 데이터 캐시 ────────────────────────────────────
const bibleCache = {}; // { versionId: data }

async function loadBible(versionId) {
  if (bibleCache[versionId]) return bibleCache[versionId];
  showLoading(true);
  try {
    const res = await fetch(`data/bible/${versionId}.json`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    bibleCache[versionId] = data;
    return data;
  } catch (e) {
    console.error('성경 데이터 로드 실패:', versionId, e);
    return null;
  } finally {
    showLoading(false);
  }
}

function getVerseText(bibleData, bookId, chapter, verse) {
  if (!bibleData) return '';
  const book = bibleData.books[String(bookId)];
  if (!book) return '';
  const ch = book.chapters[String(chapter)];
  if (!ch) return '';
  return ch[String(verse)] || '';
}

function getChapterVerses(bibleData, bookId, chapter) {
  if (!bibleData) return {};
  const book = bibleData.books[String(bookId)];
  if (!book) return {};
  return book.chapters[String(chapter)] || {};
}

// ─── 읽기표 엔진 ─────────────────────────────────────────
let planCache = null;

function getPlan() {
  const planDef = PLAN_DEFS.find(p => p.id === state.activePlanId);
  if (!planDef) return null;
  if (!planCache || planCache.id !== state.activePlanId + state.planStartDate) {
    planCache = {
      id: state.activePlanId + state.planStartDate,
      def: planDef,
      days: planDef.generate(state.planStartDate),
    };
  }
  return planCache;
}

function getTodayReading() {
  const plan = getPlan();
  if (!plan) return null;
  const today = new Date().toISOString().slice(0, 10);
  return plan.days.find(d => d.date === today) || null;
}

function getDayReading(dateStr) {
  const plan = getPlan();
  if (!plan) return null;
  return plan.days.find(d => d.date === dateStr) || null;
}

function isChapterRead(bookId, chapter, dateStr) {
  const key = `${state.activePlanId}_${dateStr || new Date().toISOString().slice(0, 10)}`;
  const readList = state.readChapters[key] || [];
  return readList.includes(`${bookId}.${chapter}`);
}

function toggleChapterRead(bookId, chapter, dateStr) {
  const key = `${state.activePlanId}_${dateStr || new Date().toISOString().slice(0, 10)}`;
  if (!state.readChapters[key]) state.readChapters[key] = [];
  const ref = `${bookId}.${chapter}`;
  const idx = state.readChapters[key].indexOf(ref);
  if (idx >= 0) {
    state.readChapters[key].splice(idx, 1);
  } else {
    state.readChapters[key].push(ref);
  }
  saveState();
}

function getStreakDays() {
  let streak = 0;
  const d = new Date();
  const plan = getPlan();
  if (!plan) return 0;
  for (let i = 0; i < 365; i++) {
    d.setDate(d.getDate() - (i === 0 ? 0 : 1));
    const dateStr = d.toISOString().slice(0, 10);
    const dayPlan = plan.days.find(p => p.date === dateStr);
    if (!dayPlan) break;
    const key = `${state.activePlanId}_${dateStr}`;
    const readList = state.readChapters[key] || [];
    // 오늘은 부분 읽어도 스트릭 유지
    const totalPassages = dayPlan.streams.flat().length;
    if (i === 0 && readList.length === 0) { break; }
    if (i > 0 && readList.length < totalPassages) break;
    streak++;
  }
  return streak;
}

// ─── UI 렌더링 ──────────────────────────────────────────

function showLoading(show) {
  const el = document.getElementById('loading-overlay');
  if (el) el.style.display = show ? 'flex' : 'none';
}

function showToast(msg, type = 'info') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${type === 'success' ? '✓' : 'ℹ'}</span> ${msg}`;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 2500);
}

// 헤더 역본 셀렉터 채우기
async function populateVersionSelects() {
  const res = await fetch('data/bible/index.json').catch(() => null);
  if (!res || !res.ok) return;
  const versions = await res.json();

  const makeOptions = (includeNone) => {
    let html = includeNone ? '<option value="">— 없음 (단일 보기)</option>' : '';
    const ko = versions.filter(v => v.lang === 'ko');
    const en = versions.filter(v => v.lang === 'en');
    html += '<optgroup label="한국어">';
    for (const v of ko) html += `<option value="${v.id}">${v.name}</option>`;
    html += '</optgroup><optgroup label="English">';
    for (const v of en) html += `<option value="${v.id}">${v.name} (${v.nameEn})</option>`;
    html += '</optgroup>';
    return html;
  };

  const sel1 = document.getElementById('v1-select');
  const sel2 = document.getElementById('v2-select');
  if (sel1) { sel1.innerHTML = makeOptions(false); sel1.value = state.version1; }
  if (sel2) { sel2.innerHTML = makeOptions(true); sel2.value = state.version2 || ''; }
}

// 책 셀렉터 채우기
function populateBookSelect() {
  const sel = document.getElementById('book-select');
  if (!sel) return;
  let html = '<optgroup label="구약 — 율법서">';
  let lastGenre = 'law';
  const genreLabels = {
    law: '구약 — 율법서', history: '역사서', poetry: '시가서',
    prophecy: '대선지서', minorprophet: '소선지서',
    gospel: '신약 — 복음서', epistle: '서신서', apocalyptic: '예언서'
  };
  for (const book of BOOKS) {
    if (book.genre !== lastGenre) {
      html += '</optgroup>';
      const label = book.testament === 'NT' && lastGenre !== 'gospel'
        ? `신약 — ${book.genreKo}` : book.genreKo;
      html += `<optgroup label="${label}">`;
      lastGenre = book.genre;
    }
    html += `<option value="${book.id}">${book.abbr} ${book.ko}</option>`;
  }
  html += '</optgroup>';
  sel.innerHTML = html;
  sel.value = state.currentBook;
}

// 장 셀렉터 채우기
function populateChapterSelect() {
  const sel = document.getElementById('chapter-select');
  if (!sel) return;
  const book = BOOKS.find(b => b.id === state.currentBook);
  if (!book) return;
  let html = '';
  for (let c = 1; c <= book.ch; c++) {
    html += `<option value="${c}">${c}장</option>`;
  }
  sel.innerHTML = html;
  sel.value = state.currentChapter;
}

// 성경 본문 렌더링
let selectedVerse = null;

async function renderBibleText() {
  const container = document.getElementById('bible-columns');
  if (!container) return;

  const book = BOOKS.find(b => b.id === state.currentBook);
  if (!book) return;

  // 챕터 제목 업데이트
  const titleEl = document.getElementById('chapter-title');
  if (titleEl) titleEl.textContent = `${book.ko} ${state.currentChapter}장`;

  // 헤더 셀렉터 동기화
  const bookSel = document.getElementById('book-select');
  if (bookSel) bookSel.value = state.currentBook;
  const chSel = document.getElementById('chapter-select');
  if (chSel) chSel.value = state.currentChapter;

  // 병렬 여부
  const isParallel = !!state.version2;
  container.className = `bible-columns ${isParallel ? 'parallel' : 'single'}`;

  const parallelBadge = document.getElementById('parallel-badge');
  if (parallelBadge) parallelBadge.style.display = isParallel ? '' : 'none';

  // 데이터 로드
  const data1 = await loadBible(state.version1);
  const data2 = isParallel ? await loadBible(state.version2) : null;

  const verses1 = getChapterVerses(data1, state.currentBook, state.currentChapter);
  const verses2 = isParallel ? getChapterVerses(data2, state.currentBook, state.currentChapter) : null;

  if (!data1 || Object.keys(verses1).length === 0) {
    container.innerHTML = '<div class="loading-state"><div class="loading-text">본문을 찾을 수 없습니다.</div></div>';
    return;
  }

  const verseNums = Object.keys(verses1).map(Number).sort((a, b) => a - b);

  // 컬럼 1
  const col1Html = renderVerseList(verses1, verseNums, data1, book);

  if (isParallel) {
    const col2Html = renderVerseList(verses2 || {}, verseNums, data2, book);
    const v1meta = data1 ? { name: data1.name, id: data1.id } : { name: state.version1, id: state.version1 };
    const v2meta = data2 ? { name: data2.name, id: data2.id } : { name: state.version2, id: state.version2 };
    container.innerHTML = `
      <div class="bible-col" id="col-1">
        <div class="col-header">
          <span class="col-version-badge">${v1meta.name}</span>
          <span class="col-version-full">${data1?.nameEn || ''}</span>
        </div>
        <div class="verse-list">${col1Html}</div>
      </div>
      <div class="bible-col" id="col-2">
        <div class="col-header">
          <span class="col-version-badge">${v2meta.name}</span>
          <span class="col-version-full">${data2?.nameEn || ''}</span>
        </div>
        <div class="verse-list">${col2Html}</div>
      </div>`;
  } else {
    container.innerHTML = `
      <div class="bible-col" id="col-1">
        <div class="verse-list">${col1Html}</div>
      </div>`;
  }

  // 절 클릭 이벤트
  container.querySelectorAll('.verse').forEach(el => {
    el.addEventListener('click', (e) => onVerseClick(e, el));
  });

  // 맥락 패널 업데이트
  renderContextPanel();
}

function renderVerseList(verses, verseNums, bibleData, book) {
  let html = '';
  for (const vn of verseNums) {
    const text = verses[vn] || '';
    const isHighlighted = state.highlights.some(
      h => h.bookId === state.currentBook && h.chapter === state.currentChapter && h.verse === vn
    );
    html += `<div class="verse${isHighlighted ? ' highlighted' : ''}" 
               data-v="${vn}" 
               style="--i:${vn}">
              <span class="vnum">${vn}</span>
              <span class="vtext">${escHtml(text)}</span>
            </div>`;
  }
  return html;
}

function onVerseClick(e, el) {
  e.stopPropagation();
  const vn = parseInt(el.dataset.v);

  // 이전 선택 해제
  document.querySelectorAll('.verse.selected').forEach(v => v.classList.remove('selected'));
  el.classList.add('selected');
  selectedVerse = vn;

  // 액션 팝업
  showVerseActions(e.clientX, e.clientY, vn);
}

function showVerseActions(x, y, vnum) {
  let actions = document.getElementById('verse-actions');
  if (!actions) {
    actions = document.createElement('div');
    actions.id = 'verse-actions';
    actions.className = 'verse-actions';
    actions.innerHTML = `
      <button class="verse-action-btn" id="act-copy">📋 복사</button>
      <button class="verse-action-btn" id="act-highlight">✨ 하이라이트</button>
      <button class="verse-action-btn" id="act-card">🎨 카드뉴스</button>
      <button class="verse-action-btn" id="act-share">🔗 공유</button>`;
    document.body.appendChild(actions);
    actions.querySelector('#act-copy').addEventListener('click', () => copyVerse(vnum));
    actions.querySelector('#act-highlight').addEventListener('click', () => toggleHighlight(vnum));
    actions.querySelector('#act-card').addEventListener('click', () => {
      hideVerseActions();
      openCardModal(vnum);
    });
    actions.querySelector('#act-share').addEventListener('click', () => shareVerse(vnum));
  }

  // 위치 조정
  const w = 320, margin = 10;
  let left = x - w / 2;
  let top = y - 50;
  if (left < margin) left = margin;
  if (left + w > window.innerWidth - margin) left = window.innerWidth - w - margin;
  if (top < margin) top = y + 20;

  actions.style.left = left + 'px';
  actions.style.top = top + 'px';
  actions.classList.add('visible');
}

function hideVerseActions() {
  const a = document.getElementById('verse-actions');
  if (a) a.classList.remove('visible');
  document.querySelectorAll('.verse.selected').forEach(v => v.classList.remove('selected'));
  selectedVerse = null;
}

async function copyVerse(vnum) {
  const book = BOOKS.find(b => b.id === state.currentBook);
  const data1 = bibleCache[state.version1];
  const verses = getChapterVerses(data1, state.currentBook, state.currentChapter);
  const text = verses[vnum] || '';
  const ref = `${book.abbr} ${state.currentChapter}:${vnum}`;
  let copyText = `${ref} ${text}`;

  if (state.version2 && bibleCache[state.version2]) {
    const data2 = bibleCache[state.version2];
    const verses2 = getChapterVerses(data2, state.currentBook, state.currentChapter);
    const text2 = verses2[vnum] || '';
    copyText += `\n${ref} [${bibleCache[state.version2].name}] ${text2}`;
  }

  await navigator.clipboard.writeText(copyText).catch(() => {});
  showToast('절을 복사했습니다!', 'success');
  hideVerseActions();
}

async function copyChapter() {
  const book = BOOKS.find(b => b.id === state.currentBook);
  const data1 = bibleCache[state.version1];
  if (!data1) return;
  const verses = getChapterVerses(data1, state.currentBook, state.currentChapter);
  const verseNums = Object.keys(verses).map(Number).sort((a, b) => a - b);
  const versionName = data1.name;
  let lines = [`${book.ko} ${state.currentChapter}장 [${versionName}]`, ''];
  for (const vn of verseNums) {
    lines.push(`${vn} ${verses[vn]}`);
  }
  await navigator.clipboard.writeText(lines.join('\n')).catch(() => {});
  showToast('장 전체를 복사했습니다!', 'success');
}

function toggleHighlight(vnum) {
  const idx = state.highlights.findIndex(
    h => h.bookId === state.currentBook && h.chapter === state.currentChapter && h.verse === vnum
  );
  if (idx >= 0) {
    state.highlights.splice(idx, 1);
    showToast('하이라이트를 해제했습니다.');
  } else {
    state.highlights.push({ bookId: state.currentBook, chapter: state.currentChapter, verse: vnum });
    showToast('하이라이트했습니다! ✨', 'success');
  }
  saveState();
  renderBibleText();
  hideVerseActions();
}

async function shareVerse(vnum) {
  const book = BOOKS.find(b => b.id === state.currentBook);
  const data1 = bibleCache[state.version1];
  const verses = getChapterVerses(data1, state.currentBook, state.currentChapter);
  const text = verses[vnum] || '';
  const shareText = `${book.abbr} ${state.currentChapter}:${vnum} [${data1?.name || ''}]\n"${text}"`;
  try {
    await navigator.share({ text: shareText });
  } catch {
    await navigator.clipboard.writeText(shareText).catch(() => {});
    showToast('클립보드에 복사했습니다!', 'success');
  }
  hideVerseActions();
}

// ─── 사이드바 렌더링 ─────────────────────────────────────

function renderSidebarPlan() {
  const container = document.getElementById('sidebar-plan');
  if (!container) return;

  const plan = getPlan();
  const todayReading = getTodayReading();
  const streak = getStreakDays();

  const today = new Date();
  const dateStr = today.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });

  // 진도 계산
  const totalDays = plan?.days.length || 365;
  const startD = new Date(state.planStartDate);
  const elapsed = Math.max(0, Math.floor((Date.now() - startD.getTime()) / 86400000));
  const progress = Math.min(100, Math.round((elapsed / totalDays) * 100));

  let streakHtml = '';
  if (streak > 0) {
    streakHtml = `
      <div class="streak-banner">
        <span class="streak-icon">🔥</span>
        <div>
          <div class="streak-text">${streak}일 연속 읽기!</div>
          <div class="streak-sub">계속 유지하세요 💪</div>
        </div>
      </div>`;
  }

  let passagesHtml = '';
  if (todayReading) {
    const planDef = PLAN_DEFS.find(p => p.id === state.activePlanId);
    todayReading.streams.forEach((stream, si) => {
      stream.forEach(({ bookId, chapter }) => {
        const book = BOOKS.find(b => b.id === bookId);
        if (!book) return;
        const ref = `${book.abbr} ${chapter}장`;
        const done = isChapterRead(bookId, chapter, todayReading.date);
        const streamName = planDef?.streams[si] || '';
        passagesHtml += `
          <div class="passage-item${done ? ' done' : ''}" 
               data-book="${bookId}" data-ch="${chapter}" data-date="${todayReading.date}">
            <div>
              <div class="passage-ref">${ref}</div>
              ${streamName ? `<div class="passage-stream">${streamName}</div>` : ''}
            </div>
            <div class="passage-check${done ? ' checked' : ''}" data-check="${bookId}.${chapter}">
              ${done ? '✓' : ''}
            </div>
          </div>`;
      });
    });
  } else {
    passagesHtml = '<div style="font-size:12px;color:var(--text-muted);padding:8px 0;">오늘 배정된 본문이 없습니다.</div>';
  }

  container.innerHTML = `
    <div class="plan-section">
      <div class="section-title">현재 읽기표</div>
      <div class="plan-selector-card active" id="open-plan-modal">
        <div class="plan-name">${plan?.def.name || '읽기표 선택'}</div>
        <div class="plan-desc">${plan?.def.desc || '클릭하여 읽기표를 선택하세요'}</div>
        <div class="plan-progress-bar">
          <div class="plan-progress-fill" style="width:${progress}%"></div>
        </div>
        <div style="font-size:11px;color:var(--text-muted);margin-top:4px;">${progress}% 완료 · 클릭하여 변경</div>
      </div>
    </div>

    ${streakHtml}

    <div class="plan-section">
      <div class="section-title">오늘의 본문</div>
      <div class="today-card">
        <div class="today-label">TODAY</div>
        <div class="today-date">${dateStr}</div>
        <div class="today-passages">${passagesHtml}</div>
      </div>
    </div>`;

  // 이벤트
  document.getElementById('open-plan-modal')?.addEventListener('click', openPlanModal);

  container.querySelectorAll('.passage-item').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.closest('.passage-check')) return;
      const bookId = parseInt(el.dataset.book);
      const chapter = parseInt(el.dataset.ch);
      navigateTo(bookId, chapter);
    });
  });

  container.querySelectorAll('.passage-check').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = el.closest('.passage-item');
      const bookId = parseInt(parent.dataset.book);
      const chapter = parseInt(parent.dataset.ch);
      const dateStr = parent.dataset.date;
      toggleChapterRead(bookId, chapter, dateStr);
      renderSidebarPlan();
      renderCalendar();
    });
  });
}

// 달력 렌더링
function renderCalendar() {
  const container = document.getElementById('sidebar-calendar');
  if (!container) return;

  const now = new Date();
  if (!state.calMonth) state.calMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

  const [year, month] = state.calMonth.split('-').map(Number);
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);
  const todayStr = now.toISOString().slice(0, 10);

  const monthLabel = firstDay.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long' });

  let gridHtml = '<div class="cal-dow">일</div><div class="cal-dow">월</div><div class="cal-dow">화</div><div class="cal-dow">수</div><div class="cal-dow">목</div><div class="cal-dow">금</div><div class="cal-dow">토</div>';

  // 이전 달 빈 칸
  const startDow = firstDay.getDay();
  const prevLast = new Date(year, month - 1, 0);
  for (let i = startDow - 1; i >= 0; i--) {
    gridHtml += `<div class="cal-day other-month">${prevLast.getDate() - i}</div>`;
  }

  // 이번 달
  const plan = getPlan();
  for (let d = 1; d <= lastDay.getDate(); d++) {
    const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const dayPlan = plan?.days.find(p => p.date === dateStr);
    const key = `${state.activePlanId}_${dateStr}`;
    const readList = state.readChapters[key] || [];
    const totalPassages = dayPlan?.streams.flat().length || 0;
    const isToday = dateStr === todayStr;

    let cls = 'cal-day';
    if (isToday) cls += ' today';
    else if (totalPassages > 0 && readList.length >= totalPassages) cls += ' read';
    else if (readList.length > 0) cls += ' partial';

    gridHtml += `<div class="${cls}" data-date="${dateStr}">${d}</div>`;
  }

  // 다음 달 빈 칸
  const endDow = lastDay.getDay();
  for (let i = 1; i < 7 - endDow; i++) {
    gridHtml += `<div class="cal-day other-month">${i}</div>`;
  }

  container.innerHTML = `
    <div class="calendar-section">
      <div class="section-title">달력</div>
      <div class="calendar-nav">
        <button id="cal-prev">‹</button>
        <div class="calendar-month">${monthLabel}</div>
        <button id="cal-next">›</button>
      </div>
      <div class="calendar-grid">${gridHtml}</div>
    </div>`;

  document.getElementById('cal-prev')?.addEventListener('click', () => {
    const [y, m] = state.calMonth.split('-').map(Number);
    const prev = new Date(y, m - 2, 1);
    state.calMonth = `${prev.getFullYear()}-${String(prev.getMonth() + 1).padStart(2, '0')}`;
    renderCalendar();
  });
  document.getElementById('cal-next')?.addEventListener('click', () => {
    const [y, m] = state.calMonth.split('-').map(Number);
    const next = new Date(y, m, 1);
    state.calMonth = `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, '0')}`;
    renderCalendar();
  });

  container.querySelectorAll('.cal-day[data-date]').forEach(el => {
    el.addEventListener('click', () => {
      const dateStr = el.dataset.date;
      const dayPlan = getDayReading(dateStr);
      if (dayPlan && dayPlan.streams[0]?.[0]) {
        const { bookId, chapter } = dayPlan.streams[0][0];
        navigateTo(bookId, chapter);
      }
    });
  });
}

// ─── 맥락 패널 ──────────────────────────────────────────
function renderContextPanel() {
  const container = document.getElementById('context-panel-body');
  if (!container) return;

  const book = BOOKS.find(b => b.id === state.currentBook);
  if (!book) return;

  const info = BOOK_STRUCTURE[book.id];
  const genreClass = `genre-${book.genre}`;

  // 책 안 현재 위치
  const chProgress = Math.round((state.currentChapter / book.ch) * 100);

  // 구조 HTML
  let structureHtml = '';
  if (info?.structure) {
    for (const s of info.structure) {
      const isCurrent = state.currentChapter >= s.ch[0] && state.currentChapter <= s.ch[1];
      structureHtml += `
        <div class="structure-item${isCurrent ? ' current' : ''}" 
             data-from="${s.ch[0]}" data-to="${s.ch[1]}">
          <div class="structure-dot"></div>
          <div class="structure-label">${s.t}</div>
          <div class="structure-range">${s.ch[0]}-${s.ch[1]}장</div>
        </div>`;
    }
  }

  // 읽기표에서 이 책의 오늘 본문인지
  const todayReading = getTodayReading();
  const isTodayBook = todayReading?.streams.flat().some(r => r.bookId === state.currentBook);
  const todayBadge = isTodayBook ? `<span style="font-size:11px;background:var(--green-light);color:var(--green);padding:2px 8px;border-radius:10px;font-weight:600;">✓ 오늘의 본문</span>` : '';

  // 정경 위치 (OT/NT, 장르)
  const testamentLabel = book.testament === 'OT' ? '구약' : '신약';
  const bookIdx = BOOKS.findIndex(b => b.id === state.currentBook) + 1;

  container.innerHTML = `
    <div class="context-book-card">
      <div class="ctx-book-name">${book.ko}</div>
      <div class="ctx-book-meta">${testamentLabel} ${bookIdx}번째 책 · 전체 ${book.ch}장 ${todayBadge}</div>
      <span class="ctx-genre-badge ${genreClass}">${book.genreKo}</span>
      <p class="ctx-summary">${info?.summary || ''}</p>
    </div>

    <div class="ctx-section">
      <div class="section-title">현재 위치</div>
      <div class="ctx-progress-bar">
        <div class="ctx-progress-fill" style="width:${chProgress}%"></div>
      </div>
      <div class="ctx-progress-label">
        <span>${state.currentChapter}장</span>
        <span>${chProgress}% (${state.currentChapter}/${book.ch}장)</span>
      </div>
    </div>

    ${info?.structure ? `
    <div class="ctx-section">
      <div class="section-title">책 구조</div>
      <div class="book-structure">${structureHtml}</div>
    </div>` : ''}`;

  // 구조 클릭으로 이동
  container.querySelectorAll('.structure-item').forEach(el => {
    el.addEventListener('click', () => {
      const from = parseInt(el.dataset.from);
      navigateTo(state.currentBook, from);
    });
  });
}

// ─── 읽기표 모달 ─────────────────────────────────────────
function openPlanModal() {
  const modal = document.getElementById('plan-modal');
  if (modal) modal.classList.add('open');
}

function closePlanModal() {
  const modal = document.getElementById('plan-modal');
  if (modal) modal.classList.remove('open');
}

function renderPlanModal() {
  const grid = document.getElementById('plan-grid');
  if (!grid) return;

  grid.innerHTML = PLAN_DEFS.map(plan => `
    <div class="plan-card${plan.id === state.activePlanId ? ' selected' : ''}" data-plan="${plan.id}">
      <div class="plan-card-icon">${plan.icon}</div>
      <div class="plan-card-info">
        <div class="plan-card-name">${plan.name}</div>
        <div class="plan-card-desc">${plan.desc}</div>
      </div>
      <div class="plan-card-meta">${plan.duration}</div>
    </div>`).join('');

  grid.querySelectorAll('.plan-card').forEach(el => {
    el.addEventListener('click', () => {
      grid.querySelectorAll('.plan-card').forEach(c => c.classList.remove('selected'));
      el.classList.add('selected');
    });
  });

  // 시작일 설정
  const startInput = document.getElementById('plan-start-date');
  if (startInput) startInput.value = state.planStartDate;
}

function applyPlanSelection() {
  const selectedCard = document.querySelector('.plan-card.selected');
  if (selectedCard) state.activePlanId = selectedCard.dataset.plan;
  const startInput = document.getElementById('plan-start-date');
  if (startInput && startInput.value) state.planStartDate = startInput.value;
  planCache = null;
  saveState();
  closePlanModal();
  renderSidebarPlan();
  renderCalendar();
  renderContextPanel();
}

// ─── 네비게이션 ─────────────────────────────────────────
async function navigateTo(bookId, chapter) {
  state.currentBook = bookId;
  state.currentChapter = chapter;
  saveState();
  populateChapterSelect();
  await renderBibleText();
  document.getElementById('bible-content')?.scrollTo(0, 0);
}

function prevChapter() {
  if (state.currentChapter > 1) {
    navigateTo(state.currentBook, state.currentChapter - 1);
  } else {
    const prevBook = BOOKS.find(b => b.id === state.currentBook - 1);
    if (prevBook) navigateTo(prevBook.id, prevBook.ch);
  }
}

function nextChapter() {
  const book = BOOKS.find(b => b.id === state.currentBook);
  if (!book) return;
  if (state.currentChapter < book.ch) {
    navigateTo(state.currentBook, state.currentChapter + 1);
  } else {
    const nextBook = BOOKS.find(b => b.id === state.currentBook + 1);
    if (nextBook) navigateTo(nextBook.id, 1);
  }
}

// ─── 유틸 ────────────────────────────────────────────────
function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ─── 초기화 ──────────────────────────────────────────────
async function init() {
  loadState();

  // 테마 적용
  document.documentElement.dataset.theme = state.theme;

  // 글씨 크기 적용
  document.documentElement.style.setProperty('--font-size-base', state.fontSize + 'px');
  document.getElementById('font-size-display').textContent = state.fontSize + 'px';

  // 역본 셀렉터
  await populateVersionSelects();

  // 책/장 셀렉터
  populateBookSelect();
  populateChapterSelect();

  // 읽기표 모달 렌더
  renderPlanModal();

  // 사이드바 / 달력
  renderSidebarPlan();
  renderCalendar();

  // 성경 본문
  await renderBibleText();

  // 이벤트 연결
  bindEvents();
}

function bindEvents() {
  // 역본 선택
  document.getElementById('v1-select')?.addEventListener('change', async (e) => {
    state.version1 = e.target.value;
    saveState();
    await renderBibleText();
  });

  document.getElementById('v2-select')?.addEventListener('change', async (e) => {
    state.version2 = e.target.value || null;
    saveState();
    await renderBibleText();
  });

  // 책 선택
  document.getElementById('book-select')?.addEventListener('change', (e) => {
    state.currentBook = parseInt(e.target.value);
    state.currentChapter = 1;
    populateChapterSelect();
    renderBibleText();
  });

  // 장 선택
  document.getElementById('chapter-select')?.addEventListener('change', (e) => {
    state.currentChapter = parseInt(e.target.value);
    renderBibleText();
  });

  // 이전/다음 장
  document.getElementById('prev-chapter')?.addEventListener('click', prevChapter);
  document.getElementById('next-chapter')?.addEventListener('click', nextChapter);

  // 키보드 단축키
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
    if (e.key === 'ArrowLeft') prevChapter();
    if (e.key === 'ArrowRight') nextChapter();
    if (e.key === 'Escape') hideVerseActions();
  });

  // 본문 외 클릭 시 절 선택 해제
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.verse') && !e.target.closest('#verse-actions')) {
      hideVerseActions();
    }
  });

  // 챕터 복사
  document.getElementById('copy-chapter')?.addEventListener('click', copyChapter);

  // 다크/라이트 토글
  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = state.theme;
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = state.theme === 'dark' ? '☀️' : '🌙';
    saveState();
  });

  // 글씨 크기
  document.getElementById('font-smaller')?.addEventListener('click', () => {
    if (state.fontSize > 13) {
      state.fontSize--;
      document.documentElement.style.setProperty('--font-size-base', state.fontSize + 'px');
      document.getElementById('font-size-display').textContent = state.fontSize + 'px';
      saveState();
    }
  });
  document.getElementById('font-larger')?.addEventListener('click', () => {
    if (state.fontSize < 28) {
      state.fontSize++;
      document.documentElement.style.setProperty('--font-size-base', state.fontSize + 'px');
      document.getElementById('font-size-display').textContent = state.fontSize + 'px';
      saveState();
    }
  });

  // 사이드바 토글
  document.getElementById('sidebar-toggle')?.addEventListener('click', () => {
    state.sidebarOpen = !state.sidebarOpen;
    document.getElementById('sidebar')?.classList.toggle('collapsed', !state.sidebarOpen);
    saveState();
  });

  // 맥락 패널 토글
  document.getElementById('context-toggle')?.addEventListener('click', () => {
    state.contextOpen = !state.contextOpen;
    document.getElementById('context-panel')?.classList.toggle('collapsed', !state.contextOpen);
    saveState();
  });

  // 오늘 버튼
  document.getElementById('go-today')?.addEventListener('click', () => {
    const today = getTodayReading();
    if (today?.streams[0]?.[0]) {
      const { bookId, chapter } = today.streams[0][0];
      navigateTo(bookId, chapter);
    } else {
      showToast('오늘 배정된 본문이 없습니다.');
    }
  });

  // 모달 닫기
  document.getElementById('plan-modal-close')?.addEventListener('click', closePlanModal);
  document.getElementById('plan-modal-cancel')?.addEventListener('click', closePlanModal);
  document.getElementById('plan-modal-apply')?.addEventListener('click', applyPlanSelection);
  document.getElementById('plan-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'plan-modal') closePlanModal();
  });

  // 사이드바 탭
  document.querySelectorAll('.sidebar-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.sidebar-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.target;
      document.querySelectorAll('.sidebar-panel').forEach(p => p.style.display = 'none');
      document.getElementById(target)?.style.setProperty('display', 'block');
    });
  });

  // 초기 탭 설정
  document.getElementById('sidebar-plan')?.closest('.sidebar-panel')?.style?.setProperty('display', 'block');
  
  // 카드 메이커 초기 설정
  setupCardMaker();
}

// DOM 로드 후 시작
document.addEventListener('DOMContentLoaded', init);

// ─── 성경 구절 카드뉴스 제작 프리셋 및 이벤트 핸들러 ────────────────
const CARD_BG_PRESETS = [
  // 1. 단색/그라디언트 테마
  { type: 'gradient', name: 'Twilight', value: 'linear-gradient(135deg, #1f1f3a 0%, #0c001f 100%)' },
  { type: 'gradient', name: 'Sunset Glow', value: 'linear-gradient(135deg, #FF512F 0%, #DD2476 100%)' },
  { type: 'gradient', name: 'Ocean Breeze', value: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)' },
  { type: 'gradient', name: 'Forest Mist', value: 'linear-gradient(135deg, #134E5E 0%, #71B280 100%)' },
  
  // 2. 윈도우 / 맥 애플 공식 테마 비주얼 느낌의 이미지 테마 (Unsplash 고화질 CDN 링크)
  { type: 'image', name: 'Mica Light', value: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1080&auto=format&fit=crop&q=80' },
  { type: 'image', name: 'Mica Dark', value: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1080&auto=format&fit=crop&q=80' },
  { type: 'image', name: 'Mountain Lake', value: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1080&auto=format&fit=crop&q=80' },
  { type: 'image', name: 'Deep Forest', value: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1080&auto=format&fit=crop&q=80' },
  { type: 'image', name: 'Silent Desert', value: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1080&auto=format&fit=crop&q=80' },
  { type: 'image', name: 'Cosmic Sky', value: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1080&auto=format&fit=crop&q=80' }
];

let cardState = {
  text: '',
  ref: '',
  ratio: '1-1',
  align: 'center',
  fontSize: 20,
  decor: 'cross',
  bgIndex: 0
};

function setupCardMaker() {
  // 배경 픽커 렌더링
  const picker = document.getElementById('bg-picker-grid');
  if (picker) {
    picker.innerHTML = CARD_BG_PRESETS.map((preset, idx) => {
      let style = '';
      if (preset.type === 'gradient') {
        style = `background: ${preset.value}`;
      } else {
        style = `background-image: url('${preset.value.replace('w=1080', 'w=150')}');`; // 썸네일은 작은 크기로 로딩 속도 최적화
      }
      return `<div class="bg-thumb${idx === cardState.bgIndex ? ' active' : ''}" data-idx="${idx}" style="${style}" title="${preset.name}"></div>`;
    }).join('');
    
    // 배경 선택 클릭 이벤트
    picker.querySelectorAll('.bg-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        picker.querySelectorAll('.bg-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        cardState.bgIndex = parseInt(thumb.dataset.idx);
        applyCardBg();
      });
    });
  }

  // 모달 제어 바인딩
  document.getElementById('card-modal-close')?.addEventListener('click', closeCardModal);
  document.getElementById('card-modal-cancel')?.addEventListener('click', closeCardModal);

  // 1:1 비율 버튼
  document.getElementById('btn-ratio-1-1')?.addEventListener('click', () => {
    document.getElementById('btn-ratio-1-1').classList.add('active');
    document.getElementById('btn-ratio-9-16').classList.remove('active');
    cardState.ratio = '1-1';
    updateCardRatio();
  });

  // 9:16 비율 버튼
  document.getElementById('btn-ratio-9-16')?.addEventListener('click', () => {
    document.getElementById('btn-ratio-9-16').classList.add('active');
    document.getElementById('btn-ratio-1-1').classList.remove('active');
    cardState.ratio = '9-16';
    updateCardRatio();
  });

  // 정렬 버튼
  document.getElementById('btn-align-left')?.addEventListener('click', () => {
    setCardAlignment('left');
  });
  document.getElementById('btn-align-center')?.addEventListener('click', () => {
    setCardAlignment('center');
  });
  document.getElementById('btn-align-right')?.addEventListener('click', () => {
    setCardAlignment('right');
  });

  // 글자 크기 슬라이더
  const fontSlider = document.getElementById('slider-card-font-size');
  fontSlider?.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    cardState.fontSize = val;
    document.getElementById('card-font-size-val').textContent = val + 'px';
    const verseText = document.getElementById('card-text-verse');
    if (verseText) verseText.style.fontSize = val + 'px';
  });

  // 장식 아이콘 버튼
  document.getElementById('btn-decor-cross')?.addEventListener('click', () => {
    setCardDecor('cross');
  });
  document.getElementById('btn-decor-quote')?.addEventListener('click', () => {
    setCardDecor('quote');
  });
  document.getElementById('btn-decor-none')?.addEventListener('click', () => {
    setCardDecor('none');
  });

  // 저장 및 공유 버튼
  document.getElementById('card-download-btn')?.addEventListener('click', downloadCardImage);
  document.getElementById('card-share-btn')?.addEventListener('click', shareCardImage);
}

function updateCardRatio() {
  const container = document.getElementById('card-preview-container');
  if (container) {
    if (cardState.ratio === '1-1') {
      container.className = 'card-preview-wrapper ratio-1-1';
    } else {
      container.className = 'card-preview-wrapper ratio-9-16';
    }
  }
}

function setCardAlignment(align) {
  const btnLeft = document.getElementById('btn-align-left');
  const btnCenter = document.getElementById('btn-align-center');
  const btnRight = document.getElementById('btn-align-right');
  btnLeft?.classList.toggle('active', align === 'left');
  btnCenter?.classList.toggle('active', align === 'center');
  btnRight?.classList.toggle('active', align === 'right');
  
  cardState.align = align;
  const verseText = document.getElementById('card-text-verse');
  if (verseText) verseText.style.textAlign = align;
}

function setCardDecor(decor) {
  const btnCross = document.getElementById('btn-decor-cross');
  const btnQuote = document.getElementById('btn-decor-quote');
  const btnNone = document.getElementById('btn-decor-none');
  btnCross?.classList.toggle('active', decor === 'cross');
  btnQuote?.classList.toggle('active', decor === 'quote');
  btnNone?.classList.toggle('active', decor === 'none');

  cardState.decor = decor;
  const decorEl = document.getElementById('card-icon-decor');
  if (decorEl) {
    if (decor === 'cross') {
      decorEl.style.display = 'block';
      decorEl.textContent = '✝';
    } else if (decor === 'quote') {
      decorEl.style.display = 'block';
      decorEl.textContent = '“';
    } else {
      decorEl.style.display = 'none';
    }
  }
}

function applyCardBg() {
  const bgPreset = CARD_BG_PRESETS[cardState.bgIndex];
  const bgEl = document.getElementById('card-capture-bg');
  if (bgEl) {
    if (bgPreset.type === 'gradient') {
      bgEl.style.background = bgPreset.value;
      bgEl.style.backgroundImage = 'none';
    } else {
      bgEl.style.background = 'none';
      bgEl.style.backgroundImage = `url('${bgPreset.value}')`;
    }
  }
}

function openCardModal(vnum) {
  const book = BOOKS.find(b => b.id === state.currentBook);
  const data1 = bibleCache[state.version1];
  const verses = getChapterVerses(data1, state.currentBook, state.currentChapter);
  const text = verses[vnum] || '';
  let refText = `${book.name} ${state.currentChapter}:${vnum}`;
  
  // 병렬 성경이 선택되어 있으면 출처에도 버전 표시
  const v1meta = TRANSLATIONS.find(t => t.id === state.version1);
  refText += ` (${v1meta.name})`;

  cardState.text = text;
  cardState.ref = refText;

  // 모달 데이터 반영
  const textVerse = document.getElementById('card-text-verse');
  const textRef = document.getElementById('card-text-ref');
  if (textVerse) textVerse.textContent = text;
  if (textRef) textRef.textContent = refText;

  // 기본 상태 동기화
  setCardAlignment('center');
  setCardDecor('cross');
  applyCardBg();
  
  // 글자 크기 슬라이더 리셋
  const fontSlider = document.getElementById('slider-card-font-size');
  if (fontSlider) {
    fontSlider.value = 20;
    cardState.fontSize = 20;
    document.getElementById('card-font-size-val').textContent = '20px';
    if (textVerse) textVerse.style.fontSize = '20px';
  }

  // 모달 띄우기
  document.getElementById('card-modal')?.classList.add('open');
}

function closeCardModal() {
  document.getElementById('card-modal')?.classList.remove('open');
}

// ─── 이미지 컴파일 및 공유/다운로드 핵심 구현 ────────────────
async function generateCardCanvas() {
  const target = document.getElementById('card-capture-target');
  if (!target) return null;
  
  // html2canvas 옵션: CORS 이미지 허용, 선명도 향상을 위해 scale 2로 설정
  return html2canvas(target, {
    useCORS: true,
    scale: 2,
    allowTaint: false,
    logging: false,
    backgroundColor: null
  });
}

async function downloadCardImage() {
  showToast('이미지를 생성하는 중...', 'info');
  try {
    const canvas = await generateCardCanvas();
    if (!canvas) throw new Error('Canvas 생성 실패');
    
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    const filename = `bible_card_${cardState.ref.replace(/[\s\(\):]/g, '_')}.png`;
    link.download = filename;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('이미지가 성공적으로 저장되었습니다!', 'success');
  } catch (err) {
    console.error(err);
    showToast('이미지 저장 중 오류가 발생했습니다.', 'error');
  }
}

async function shareCardImage() {
  showToast('공유용 이미지를 준비 중...', 'info');
  try {
    const canvas = await generateCardCanvas();
    if (!canvas) throw new Error('Canvas 생성 실패');
    
    // canvas를 blob으로 변환
    canvas.toBlob(async (blob) => {
      if (!blob) {
        showToast('이미지 생성에 실패했습니다.', 'error');
        return;
      }
      
      const filename = `bible_card_${cardState.ref.replace(/[\s\(\):]/g, '_')}.png`;
      const file = new File([blob], filename, { type: 'image/png' });
      
      // navigator.share가 이미지 파일 전송을 지원하는지 체크
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: '성경 말씀 카드',
            text: cardState.text + ' - ' + cardState.ref
          });
          showToast('공유가 성공적으로 완료되었습니다!', 'success');
        } catch (shareErr) {
          // 사용자가 공유창을 닫은 경우 등
          if (shareErr.name !== 'AbortError') {
            console.error(shareErr);
            showToast('공유 도중 오류가 발생했습니다.', 'error');
          }
        }
      } else {
        // 데스크톱 등 Web Share API 미지원 브라우저 대응
        showToast('이 기기에서는 직접 공유를 지원하지 않아 이미지를 자동 다운로드합니다. 저장된 이미지를 인스타에 업로드해 주세요!', 'info');
        setTimeout(() => {
          downloadCardImage();
        }, 1500);
      }
    }, 'image/png');
  } catch (err) {
    console.error(err);
    showToast('이미지 처리 중 오류가 발생했습니다.', 'error');
  }
}
