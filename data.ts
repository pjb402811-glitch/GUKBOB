import { Recipe } from './types';

export const recipesData: Recipe[] = [
  // 1. 난이도: 쉬움 (★☆☆☆☆, ★★☆☆☆)
  {
    id: 2,
    name: "콩나물국밥 (전주식)",
    mainCategory: "국밥",
    subCategory: "든든한 맑은 국밥",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
      { name: '콩나물', amount: 150, unit: 'g' },
      { name: '멸치/다시마 육수', amount: 500, unit: 'ml' },
      { name: '밥', amount: 1, unit: '공기' },
      { name: '신김치 (송송)', amount: 50, unit: 'g' },
      { name: '오징어 (선택)', amount: 30, unit: 'g' },
      { name: '수란 (별도)', amount: 1, unit: '개' }
    ],
    recipeSteps: [
      "육수 만들기: 물 600ml에 멸치(10마리), 다시마(1장)를 넣고 15분간 끓인 후 건더기를 건집니다. (시판 멸치 육수 500ml로 대체 가능)",
      "뚝배기에 밥, 콩나물, 잘게 썬 김치, 오징어(선택)를 넣습니다.",
      "육수를 붓고 한소끔 끓입니다.",
      "새우젓으로 간을 하고, 날계란이 아닌 수란을 따로 곁들여 먹습니다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/c1tHcY',
    youtubeUrl: 'https://youtu.be/gO3hV9COzIg?si=GspaejZBqtdWYqp_'
  },
  {
    id: 3,
    name: "굴국밥",
    mainCategory: "국밥",
    subCategory: "든든한 맑은 국밥",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
      { name: '생굴', amount: 100, unit: 'g' },
      { name: '멸치/다시마 육수', amount: 500, unit: 'ml' },
      { name: '밥', amount: 1, unit: '공기' },
      { name: '미역 (선택)', amount: 10, unit: 'g' },
      { name: '부추', amount: 0.5, unit: '줌' },
      { name: '계란', amount: 1, unit: '개' }
    ],
    recipeSteps: [
      "육수 만들기: 물 600ml에 멸치(10마리), 다시마(1장)를 넣고 15분간 끓인 후 건더기를 건집니다. (시판 멸치 육수 500ml로 대체 가능)",
      "냄비에 멸치 육수와 밥을 넣고 끓입니다.",
      "밥알이 퍼지면 깨끗이 씻은 굴과 미역(선택)을 넣습니다.",
      "한소끔 끓으면 국간장과 소금으로 간을 합니다.",
      "불을 끄기 직전 계란을 풀고 부추를 올립니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1t19h",
    youtubeUrl: 'https://youtube.com/shorts/3E__Z7LeoiY?si=NGQTRW0y-RO-sPcc'
  },
  {
    id: 40,
    name: "매생이 굴 국밥",
    mainCategory: "국밥",
    subCategory: "든든한 맑은 국밥",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
      { name: '매생이', amount: 75, unit: 'g' },
      { name: '생굴', amount: 100, unit: 'g' },
      { name: '멸치/다시마 육수', amount: 500, unit: 'ml' },
      { name: '밥', amount: 1, unit: '공기' },
      { name: '들기름', amount: 1, unit: 'T' },
      { name: '다진 마늘', amount: 1, unit: 't' },
      { name: '국간장', amount: 1, unit: 'T' },
      { name: '새우젓 (선택)', amount: 0.25, unit: 't' },
      { name: '대파', amount: 0.5, unit: '줌' },
      { name: '계란 (선택)', amount: 1, unit: '개' }
    ],
    recipeSteps: [
      "굴 손질: 소금물에 굴을 가볍게 헹군 뒤, 맑은 물로 2~3회 헹궈 물기를 뺍니다.",
      "육수 준비: 냄비에 멸치/다시마 육수 500ml를 붓고 끓입니다. (팁: 굴 헹군 물을 조금 넣으면 풍미가 좋습니다)",
      "육수가 끓으면 들기름(1T), 다진 마늘(1t), 국간장(1T)을 넣습니다.",
      "약불로 줄이고 손질한 굴(100g)을 넣어 30초간 데친 후, 헹궈둔 매생이(75g)를 넣고 15초만 더 끓입니다. (오래 끓이면 질겨져요!)",
      "새우젓이나 소금, 후추로 간을 맞추고 대파를 올립니다. 기호에 따라 계란을 추가해도 좋습니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1tOgs",
    youtubeUrl: 'https://youtu.be/-7QAr_w2pwE?si=6wHMFhBMQPeZVx9N'
  },
  {
    id: 23,
    name: "돼지고기 김치콩나물국밥",
    mainCategory: "국밥",
    subCategory: "얼큰 칼칼한 국밥",
    difficulty: "쉬움",
    baseServings: 2,
    ingredientsList: [
      { name: '돼지고기 (삼겹살, 목살 등)', amount: 150, unit: 'g' },
      { name: '신김치', amount: 300, unit: 'g' },
      { name: '콩나물', amount: 200, unit: 'g' },
      { name: '찬밥', amount: 1, unit: '공기' },
      { name: '떡국떡 (선택)', amount: 1, unit: '공기' },
      { name: '청양고추', amount: 1, unit: '개' },
      { name: '대파', amount: 1, unit: '줌' },
      { name: '다시마', amount: 1, unit: '장' },
      { name: '국물용 멸치', amount: 20, unit: '마리' },
      { name: '들기름', amount: 2, unit: 'T' },
      { name: '물', amount: 1500, unit: 'ml' },
      { name: '멸치액젓', amount: 2, unit: 'T' },
      { name: '국간장', amount: 1, unit: 'T' },
      { name: '다진마늘', amount: 1, unit: 'T' },
      { name: '신김치 국물', amount: 100, unit: 'ml' },
      { name: '소금', amount: 0, unit: '약간' },
      { name: '맛술 (선택)', amount: 1, unit: 'T' },
      { name: '후추 (선택)', amount: 0, unit: '약간' }
    ],
    recipeSteps: [
      "재료 준비: 돼지고기는 먹기 좋은 크기로, 신김치(300g)는 약 3cm 크기로 썹니다. 콩나물(200g)은 2~3번 헹궈 콩 껍질을 제거하고, 청양고추(1개)와 대파(한 줌)는 송송 썹니다. 내장을 제거한 국물용 멸치(20마리)와 다시마(1장)를 육수 주머니에 담습니다.",
      "돼지고기 & 김치 볶기: 냄비에 들기름 2스푼을 두르고 중불로 달군 뒤 돼지고기를 볶습니다. 잡내 제거를 위해 맛술(1스푼)과 후추를 넣고 함께 볶아도 좋습니다. 고기 겉면이 익으면 신김치를 넣고 숨이 죽을 때까지(약 5분) 충분히 볶아줍니다.",
      "육수 끓이기: 볶은 재료에 물 1.5L와 육수 주머니를 넣고 뚜껑을 덮고 끓입니다. 끓어오르면 중약불로 줄여 10분간 더 우려낸 뒤, 육수 주머니를 건져냅니다.",
      "재료 추가 및 간: 육수에 멸치액젓(2스푼), 국간장(1스푼), 다진마늘(1스푼), 신김치 국물(100ml)로 기본 간을 합니다. 찬밥(1공기), 떡국떡(1공기)을 넣고 그 위에 콩나물(200g)을 올립니다.",
      "끓이고 마무리: 뚜껑을 연 채로 끓입니다. 다시 끓어오르면 중불로 3분간 더 끓여줍니다. 맛을 보고 부족한 간은 소금으로 맞춘 뒤, 대파와 청양고추를 넣고 1분만 더 끓여 완성합니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1t2TE",
    youtubeUrl: 'https://youtu.be/BZBm1Bf8c7k?si=1T2TtdKSl6cHOghf'
  },
  {
    id: 4,
    name: "소고기뭇국 (국밥식)",
    mainCategory: "국밥",
    subCategory: "든든한 맑은 국밥",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
      { name: '소고기 양지', amount: 100, unit: 'g' },
      { name: '무 (나박썰기)', amount: 150, unit: 'g' },
      { name: '물', amount: 600, unit: 'ml' },
      { name: '대파', amount: 0.5, unit: '대' },
      { name: '국간장', amount: 1, unit: 'T' },
      { name: '다진 마늘', amount: 0.5, unit: 'T' }
    ],
    recipeSteps: [
      "소고기, 무, 대파를 큼직하게 썰어 고춧가루와 볶아 고추기름을 냅니다.",
      "물을 붓고 30분 이상 푹 끓이다가 선지를 넣고 익힙니다.",
      "이름처럼 밥과 국을 따로 내어 먹습니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1tMG2",
    youtubeUrl: 'https://youtu.be/j1VVP9VWYBU?si=xHEk9zjc7kCTrRyp'
  },
  {
    id: 18,
    name: "로제 순대국밥",
    mainCategory: "국밥",
    subCategory: "톡톡 튀는 퓨전 국밥",
    difficulty: "쉬움",
    baseServings: 1, 
    ingredientsList: [
      { name: '사골 육수', amount: 400, unit: 'ml' },
      { name: '생크림(또는 우유)', amount: 100, unit: 'ml' },
      { name: '고춧가루', amount: 1, unit: 'T' },
      { name: '다진 마늘', amount: 0.5, unit: 'T' },
      { name: '국간장', amount: 0.5, unit: 'T' },
      { name: '순대', amount: 150, unit: 'g' }
    ],
    recipeSteps: [
      "육수 만들기: 물 600ml에 멸치(10마리), 다시마(1장)를 넣고 15분간 끓인 후 건더기를 건집니다. (시판 멸치 육수 500ml로 대체 가능)",
      "냄비에 들기름을 두르고 삶은 산채와 된장(0.5T)을 볶습니다.",
      "멸치 육수를 붓고 푹 끓여 산채의 맛이 우러나게 합니다.",
      "뚝배기에 밥을 담고 끓인 산채국을 부어 냅니다.",
      "기호에 따라 들깨가루를 추가합니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1tWZO",
    youtubeUrl: 'https://www.youtube.com/watch?v=D-nB5m4o7W4'
  },
  {
    id: 26,
    name: "목포 해산물국밥",
    mainCategory: "국밥",
    subCategory: "든든한 맑은 국밥",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
      { name: '멸치/조개 육수', amount: 500, unit: 'ml' },
      { name: '냉동 해물믹스', amount: 100, unit: 'g' },
      { name: '콩나물', amount: 1, unit: '줌' },
      { name: '무 (나박썰기)', amount: 30, unit: 'g' },
      { name: '새우젓', amount: 0.5, unit: 'T' },
      { name: '청양고추', amount: 0.5, unit: '개' }
    ],
    recipeSteps: [
      "육수 만들기: 물 600ml에 멸치(10마리), 조개(바지락)를 넣고 15분간 끓여 시원한 육수를 냅니다. (시판 멸치 육수 500ml로 대체 가능)",
      "뚝배기에 육수와 무를 넣고 끓입니다.",
      "육수가 끓으면 밥, 콩나물, 해물믹스를 넣습니다.",
      "한소끔 끓으면 새우젓으로 간을 하고 청양고추, 대파를 넣어 마무리합니다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/c1ukIE',
    youtubeUrl: 'https://www.youtube.com/watch?v=685d-q500qM'
  },
  {
    id: 29,
    name: "제주 해물국밥",
    mainCategory: "국밥",
    subCategory: "든든한 맑은 국밥",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
      { name: '오징어', amount: 50, unit: 'g' },
      { name: '새우', amount: 2, unit: '마리' },
      { name: '조개 (바지락 등)', amount: 50, unit: 'g' },
      { name: '멸치/조개 육수', amount: 500, unit: 'ml' },
      { name: '콩나물', amount: 1, unit: '줌' },
      { name: '청양고추 (선택)', amount: 0.5, unit: '개' }
    ],
    recipeSteps: [
      "육수 만들기: 물 600ml에 멸치(10마리), 조개(바지락)를 넣고 15분간 끓여 시원한 육수를 냅니다. (시판 멸치 육수 500ml로 대체 가능)",
      "제주의 신선한 해산물을 활용한 맑은 국밥입니다.",
      "뚝배기에 멸치/조개 육수와 해산물(오징어, 새우, 조개)을 넣고 끓입니다.",
      "해산물이 익으면 밥과 콩나물을 넣고 한소끔 더 끓입니다.",
      "새우젓이나 소금으로 간을 하고, 청양고추와 대파를 넣어 시원하게 마무리합니다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/c1ugOH',
    youtubeUrl: 'https://youtu.be/CM5PhWOGW0c?si=xnwhWDJKHs2JOSUB'
  },
  {
    id: 32,
    name: "시래기 닭국밥",
    mainCategory: "국밥",
    subCategory: "얼큰 칼칼한 국밥",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
      { name: '닭가슴살', amount: 150, unit: 'g' },
      { name: '물', amount: 750, unit: 'ml' },
      { name: '시래기 (삶은 것)', amount: 80, unit: 'g' },
      { name: '느타리버섯', amount: 50, unit: 'g' },
      { name: '대파', amount: 0.3, unit: '대' },
      { name: '양파', amount: 0.25, unit: '개' },
      { name: '식용유', amount: 1, unit: 'T' },
      { name: '고춧가루', amount: 0.5, unit: 'T' },
      { name: '국간장', amount: 0.5, unit: 'T' },
      { name: '멸치액젓', amount: 0.5, unit: 'T' },
      { name: '후추', amount: 0, unit: '약간' }
    ],
    recipeSteps: [
      "물 750ml에 닭가슴살을 삶아 육수를 만들고, 닭가슴살은 건져서 잘게 찢어 준비합니다.",
      "냄비에 기름을 두르고 고추기름을 낸 후, 대파와 양파를 넣고 볶아줍니다.",
      "만들어 둔 닭 육수와 느타리버섯, 시래기를 넣고 끓입니다.",
      "국물이 끓으면 찢어둔 닭가슴살을 넣고 함께 끓여줍니다.",
      "멸치액젓과 국간장으로 간을 맞춘 후, 마지막으로 후추를 뿌려 마무리합니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1t4WX",
    youtubeUrl: 'https://youtube.com/shorts/R8L12qGJ4fQ?si=WSnKM_-12jDeMqhC'
  },
  {
    id: 33,
    name: "우삼겹 얼큰국밥",
    mainCategory: "국밥",
    subCategory: "얼큰 칼칼한 국밥",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
      { name: '우삼겹', amount: 150, unit: 'g' },
      { name: '사골곰탕 (시판)', amount: 1, unit: '팩' },
      { name: '다진 마늘', amount: 1, unit: 'T' },
      { name: '고춧가루', amount: 1.5, unit: 'T' },
      { name: '대파', amount: 0.5, unit: '대' },
      { name: '청양고추 (선택)', amount: 1, unit: '개' },
      { name: '소금', amount: 0, unit: '약간' },
      { name: '후추', amount: 0, unit: '약간' }
    ],
    recipeSteps: [
      "냄비에 우삼겹과 다진 마늘(1T)을 넣고 볶아줍니다.",
      "고기의 핏기가 사라지면 고춧가루(1.5T)와 송송 썬 대파를 넣고 약불에서 타지 않게 볶아 고추기름을 냅니다.",
      "사골곰탕 한 팩(약 500ml)을 붓고 강불에서 끓입니다.",
      "국이 끓어오르면 떠오르는 기름과 거품은 기호에 맞게 살짝 걷어냅니다.",
      "소금과 후추로 부족한 간을 맞춥니다.",
      "마지막으로 어슷 썬 청양고추를 넣고 밥과 함께 냅니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1tTPO",
    youtubeUrl: 'https://youtube.com/shorts/IaZ6ptSSRDU?si=u3EDpVqfMhLRSqNu'
  },
  {
    id: 35,
    name: "초간단 훈제오리 국밥",
    mainCategory: "국밥",
    subCategory: "얼큰 칼칼한 국밥",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
      { name: '훈제오리', amount: 300, unit: 'g' },
      { name: '양파', amount: 0.5, unit: '개' },
      { name: '사골육수 (시판)', amount: 500, unit: 'ml' },
      { name: '물', amount: 200, unit: 'ml' },
      { name: '대파', amount: 0.5, unit: '대' },
      { name: '청양고추 (선택)', amount: 1, unit: '개' },
      { name: '다진 마늘', amount: 1, unit: 'T' },
      { name: '고춧가루', amount: 2, unit: 'T' },
      { name: '진간장', amount: 2, unit: 'T' },
      { name: '새우젓', amount: 1, unit: 'T' },
      { name: '후춧가루', amount: 0, unit: '약간' },
      { name: '밥', amount: 1, unit: '공기' }
    ],
    recipeSteps: [
      "양파, 대파, 청양고추를 먹기 좋게 썰어줍니다.",
      "냄비에 훈제오리 300g과 채 썬 양파를 넣고 볶아줍니다.",
      "오리기름이 나오면 양념(다진 마늘 1T, 고춧가루 2T, 진간장 2T)을 넣고 함께 볶습니다.",
      "사골육수 1팩(약 500ml)과 물 200ml를 붓고 끓여줍니다.",
      "국물이 끓으면 새우젓 1T로 간을 합니다. (기호에 따라 가감)",
      "대파와 청양고추를 넣고 한소끔 더 끓인 후, 후춧가루를 뿌려 마무리합니다.",
      "그릇에 밥을 담고 뜨거운 국밥을 부어 냅니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1tQAG",
    youtubeUrl: 'https://youtu.be/QGRJ-krd8NY?si=Q4gxYsph_1Mmrkn0'
  },
  {
    id: 36,
    name: "대파육계장",
    mainCategory: "국밥",
    subCategory: "얼큰 칼칼한 국밥",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
      { name: '우삼겹 (또는 차돌박이)', amount: 300, unit: 'g' },
      { name: '대파', amount: 2, unit: '대' },
      { name: '양파', amount: 0.5, unit: '개' },
      { name: '고춧가루', amount: 3, unit: 'T' },
      { name: '사골곰탕 (시판)', amount: 500, unit: 'ml' },
      { name: '물', amount: 300, unit: 'ml' },
      { name: '다진 마늘', amount: 1, unit: 'T' },
      { name: '국간장', amount: 2, unit: 'T' },
      { name: '소금', amount: 0, unit: '약간' },
      { name: '후추', amount: 0, unit: '약간' }
    ],
    recipeSteps: [
      "대파는 반을 가른 뒤 6~7cm 길이로 썰고, 양파는 두껍게 채 썹니다.",
      "냄비에 우삼겹(또는 차돌박이)을 넣고 볶습니다.",
      "고기가 어느 정도 익으면 대파를 넣고, 대파의 숨이 살짝 죽을 때까지 볶아줍니다.",
      "고춧가루 3스푼을 넣고, 약한 불에서 타지 않게 1분 정도 볶아 고추기름을 냅니다.",
      "사골곰탕 육수(500ml), 물(300ml), 국간장(2스푼), 다진 마늘(1스푼), 양파를 모두 넣습니다.",
      "뚜껑을 덮고 중약불에서 10분 이상 끓여줍니다.",
      "대파가 푹 익으면 간을 보고 부족한 간은 소금으로 맞춘 뒤, 후추를 뿌려 마무리합니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1uiWb",
    youtubeUrl: 'https://youtube.com/shorts/rEumUMiwBiI?si=KqlLVTUQC3Lxl13o'
  },
  {
    id: 37,
    name: "대파 참치 국밥",
    mainCategory: "국밥",
    subCategory: "얼큰 칼칼한 국밥",
    difficulty: "쉬움",
    baseServings: 2,
    ingredientsList: [
      { name: '밥', amount: 2, unit: '공기' },
      { name: '참치 통조림', amount: 100, unit: 'g' },
      { name: '대파', amount: 0.5, unit: '대' },
      { name: '양파', amount: 0.25, unit: '개' },
      { name: '물 (또는 쌀뜨물)', amount: 800, unit: 'ml' },
      { name: '국간장', amount: 1, unit: 'T' },
      { name: '소금', amount: 0.5, unit: 't' },
      { name: '다진 마늘', amount: 0.5, unit: 't' },
      { name: '후춧가루', amount: 0, unit: '약간' },
      { name: '달걀 (선택)', amount: 1, unit: '개' },
      { name: '고춧가루 (선택)', amount: 0.5, unit: 't' },
      { name: '참기름 (선택)', amount: 0, unit: '약간' },
    ],
    recipeSteps: [
      "육수 준비 (선택): 냄비에 물(800ml)과 멸치/다시마를 넣고 끓여 육수를 냅니다.",
      "육수가 끓으면 대파와 양파를 넣고 3분 정도 끓여 채소 맛을 우려냅니다.",
      "참치 기름을 반만 버리고 건더기를 넣은 후, 국간장(1T)과 다진 마늘(0.5t)을 넣고 끓입니다.",
      "소금으로 간을 맞추고, (선택) 풀어둔 달걀물을 부어 익힙니다.",
      "불을 끄기 직전 후춧가루를 뿌린 후 밥 위에 부어 완성합니다. (취향에 따라 참기름 추가)"
    ],
    purchaseUrl: "https://link.coupang.com/a/c1t0YF",
    youtubeUrl: 'https://youtu.be/sYYLBiy-k-E?si=lUzTpZqrhjTZOwJv'
  },
  {
    id: 41,
    name: "사장밥 (된장술밥)",
    mainCategory: "국밥",
    subCategory: "얼큰 칼칼한 국밥",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
      { name: '우삼겹 (또는 차돌박이)', amount: 150, unit: 'g' },
      { name: '양파', amount: 0.5, unit: '개' },
      { name: '애호박', amount: 0.33, unit: '개' },
      { name: '대파', amount: 0.5, unit: '대' },
      { name: '청양고추', amount: 1.5, unit: '개' },
      { name: '두부', amount: 0.5, unit: '모' },
      { name: '사골/멸치 육수', amount: 500, unit: 'ml' },
      { name: '밥 (찬밥 추천)', amount: 1, unit: '공기' },
      { name: '된장', amount: 2, unit: 'T' },
      { name: '쌈장', amount: 1, unit: 'T' },
      { name: '고춧가루', amount: 1, unit: 'T' },
      { name: '다진 마늘', amount: 1, unit: 'T' },
      { name: '고추장 (선택)', amount: 0.5, unit: 'T' }
    ],
    recipeSteps: [
      "재료 손질: 양파, 애호박, 두부는 작은 깍둑썰기, 대파와 고추는 어슷썰기, 고기는 2~3등분으로 잘라 준비합니다.",
      "고기/양념 볶기: 뚝배기에 우삼겹을 볶아 기름을 냅니다. 고기가 익으면 된장(2T), 쌈장(1T), 고춧가루(1T), 다진 마늘(1T), 고추장(0.5T, 선택)을 넣고 중약불에 볶아 '장기름'을 냅니다. (타지 않게 주의)",
      "끓이기: 양념이 잘 볶아지면 양파, 애호박을 넣고 가볍게 볶은 후, 육수 500ml를 붓고 센 불에 끓입니다. (팁: 시판 사골육수를 사용하면 깊은 맛을 내기 좋습니다)",
      "밥 넣기: 국물이 끓고 채소가 익으면 두부와 찬밥 1공기를 넣고 밥알을 잘 풀어줍니다.",
      "마무리: 중불로 줄여 3~5분간 걸쭉하게 끓인 뒤, 대파와 청양고추를 넣고 한소끔 더 끓여 완성합니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1uiWb",
    youtubeUrl: 'https://youtube.com/shorts/lVe8_sFjHu0?si=h08WxugdLgpSjhCy'
  },
  {
    id: 221,
    name: "포항 구룡포 모리 국수",
    mainCategory: "면",
    subCategory: "얼큰한 국물 국수",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
      { name: '칼국수 면', amount: 1, unit: '인분' },
      { name: '대게', amount: 0.5, unit: '마리' },
      { name: '홍합, 오징어, 새우', amount: 1, unit: '줌' },
      { name: '우럭, 도다리 등 생선', amount: 50, unit: 'g' },
      { name: '고춧가루', amount: 2, unit: 'T' },
      { name: '각종 채소', amount: 1, unit: '줌' }
    ],
    recipeSteps: [
      "큰 냄비에 그날 잡힌 싱싱한 해산물(대게, 생선, 홍합 등)을 넣고 끓입니다.",
      "얼큰하게 고춧가루 양념을 하고 채소를 넣습니다.",
      "국물이 우러나면 칼국수 면을 넣고 걸쭉하게 끓여냅니다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/b95glL',
    youtubeUrl: 'https://www.youtube.com/watch?v=l_NqW9K4VwA'
  },
  // 2. 난이도: 보통 (★★★☆☆)
  {
    id: 1,
    name: "돼지국밥 (맑은)",
    mainCategory: "국밥",
    subCategory: "든든한 맑은 국밥",
    difficulty: "보통",
    baseServings: 1,
    ingredientsList: [
      { name: '사골 육수 (시판)', amount: 500, unit: 'ml' },
      { name: '돼지고기 수육', amount: 100, unit: 'g' },
      { name: '밥', amount: 1, unit: '공기' },
      { name: '부추 (겉절이용)', amount: 1, unit: '줌' },
      { name: '새우젓', amount: 0.5, unit: 'T' },
      { name: '대파 (송송)', amount: 0.5, unit: '줌' }
    ],
    recipeSteps: [
      "(시판 사골 육수 사용 기준 레시피입니다. 육수를 직접 낼 경우 난이도는 '어려움' 이상이며 6시간 이상 소요됩니다.)",
      "사골과 고기를 8시간 이상 푹 끓여 육수를 냅니다. (잡내 제거가 관건)",
      "고기는 건져서 얇게 썹니다.",
      "뚝배기에 밥과 고기를 담고 뜨거운 육수를 붓습니다. (토렴)",
      "부추, 새우젓, 다대기를 곁들여 간을 맞춥니다."
    ],
    purchaseUrl: 'https://www.coupang.com/np/search?q=%EB%90%BC%EC%A7%80%EA%B5%AD%EB%B0%A5+%EB%B0%80%ED%82%A4%ED%8A%B8',
    youtubeUrl: 'https://youtu.be/WQHX32fxAJE?si=H_qCNz3exGbgvzju'
  },
  {
    id: 5,
    name: "얼큰 순대국밥 (다대기)",
    mainCategory: "국밥",
    subCategory: "얼큰 칼칼한 국밥",
    difficulty: "보통",
    baseServings: 1,
    ingredientsList: [
      { name: '사골 육수', amount: 500, unit: 'ml' },
      { name: '시판 순대', amount: 100, unit: 'g' },
      { name: '돼지 부속물 (선택)', amount: 50, unit: 'g' },
      { name: '다대기', amount: 1, unit: 'T' },
      { name: '들깨가루', amount: 1, unit: 'T' },
      { name: '새우젓 (간)', amount: 0.5, unit: 'T' }
    ],
    recipeSteps: [
      "(시판 사골 육수 사용 기준 레시피입니다. 육수를 직접 낼 경우 난이도는 '어려움' 이상이며 6시간 이상 소요됩니다.)",
      "뚝배기에 사골 육수를 붓고 끓입니다.",
      "육수가 끓으면 순대와 부속물을 넣고 한소끔 더 끓입니다.",
      "다대기(고춧가루, 다진마늘, 국간장, 사골육수)를 크게 한 스푼 넣습니다.",
      "부추, 들깨가루, 새우젓을 넣어 간을 맞춰 먹습니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1tWZO",
    youtubeUrl: 'https://youtube.com/shorts/30u9ic_9Czo?si=d3nz7wKl3m4qnqEQ'
  },
    {
      id: 39,
      name: "선지국밥",
      mainCategory: "국밥",
      subCategory: "얼큰 칼칼한 국밥",
      difficulty: "보통",
      baseServings: 1,
      ingredientsList: [
        { name: '사골곰탕 (시판)', amount: 1, unit: '팩 (500ml)' },
        { name: '선지 (쇠피)', amount: 100, unit: 'g' },
        { name: '무 (나박썰기)', amount: 80, unit: 'g' },
        { name: '대파', amount: 0.5, unit: '대' },
        { name: '다진 마늘', amount: 0.5, unit: 'T' },
        { name: '국간장', amount: 1, unit: 'T' },
        { name: '고춧가루', amount: 1, unit: 'T' },
        { name: '된장 (선택)', amount: 0.5, unit: 'T' },
        { name: '밥', amount: 1, unit: '공기' }
      ],
      recipeSteps: [
        "(시판 사골 육수 사용 기준 레시피입니다. 선지 손질에만 신경쓰면 어렵지 않게 만들 수 있습니다.)",
        "선지는 먹기 좋게 썰어 끓는 물에 살짝 데쳐 잡내를 제거한 후 건져둡니다. (가장 중요!)",
        "뚝배기에 사골곰탕 육수와 큼직하게 썬 무를 넣고 끓입니다.",
        "무가 익기 시작하면 데쳐둔 선지와 다진 마늘, 고춧가루, 국간장을 넣습니다. (팁: 된장 0.5T를 풀면 더 깊은 맛이 납니다.)",
        "한소끔 더 끓여 무가 푹 익고 선지에 맛이 배면, 마지막으로 대파를 듬뿍 넣습니다.",
        "밥과 함께 따로 내어(따로국밥) 깍두기나 김치와 곁들여 먹습니다."
      ],
      purchaseUrl: "https://link.coupang.com/a/c1t9aD",
      youtubeUrl: 'https://youtube.com/shorts/uReTq3Mr-PQ?si=IPBW5-9f_UPgC9JF'
    },
  {
    id: 8,
    name: "병천 순대국밥 (충남)",
    mainCategory: "국밥",
    subCategory: "지역별/특별 국밥",
    difficulty: "보통",
    baseServings: 1,
    ingredientsList: [
      { name: '병천순대 (피순대)', amount: 150, unit: 'g' },
      { name: '사골 육수', amount: 500, unit: 'ml' },
      { name: '돼지 부속물', amount: 50, unit: 'g' },
      { name: '새우젓 (간)', amount: 0.5, unit: 'T' },
      { name: '들깨가루', amount: 1, unit: 'T' }
    ],
    recipeSteps: [
      "(시판 사골 육수 사용 기준 레시피입니다. 육수를 직접 낼 경우 난이도는 '어려움' 이상이며 6시간 이상 소요됩니다.)",
      "일반 순대국밥과 비슷하지만, 당면 대신 선지와 채소가 들어간 '병천순대'를 사용합니다.",
      "사골 육수에 순대와 부속물을 넣고 끓입니다.",
      "다대기 없이 맑고 진하게 끓여내며, 새우젓과 들깨가루로 간을 하는 것이 특징입니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1tWZO",
    youtubeUrl: 'https://youtu.be/mlWQircXDJc?si=xRyhgShDD1zf2Z_9'
  },
  {
    id: 22,
    name: "광주 애호박 국밥 (고추장 찌개식)",
    mainCategory: "국밥",
    subCategory: "지역별/특별 국밥",
    difficulty: "보통",
    baseServings: 1, 
    ingredientsList: [
      { name: '돼지고기 (채썬 것)', amount: 150, unit: 'g' },
      { name: '애호박 (채썬 것)', amount: 0.5, unit: '개' },
      { name: '양파 (채썬 것)', amount: 0.3, unit: '개' },
      { name: '물 또는 멸치육수', amount: 500, unit: 'ml' },
      { name: '고추장', amount: 1, unit: 'T' },
      { name: '고춧가루', amount: 1, unit: 'T' },
      { name: '다진 마늘', amount: 1, unit: 'T' },
      { name: '국간장', amount: 1, unit: 'T' },
      { name: '새우젓 (선택)', amount: 0.5, unit: 'T' }
    ],
    recipeSteps: [
      "육수 만들기: 물 600ml에 멸치(10마리)를 넣고 15분간 끓인 후 건더기를 건집니다. (시판 멸치 육수 500ml로 대체 가능)",
      "냄비에 기름을 두르고 돼지고기와 다진 마늘을 볶습니다.",
      "고기가 익으면 고춧가루를 넣고 약불에 볶아 고추기름을 냅니다.",
      "물(또는 육수)을 붓고 고추장(1T)을 풉니다.",
      "국물이 끓으면 채 썬 애호박과 양파를 듬뿍 넣습니다.",
      "애호박이 익을 때까지 푹 끓인 후, 국간장이나 새우젓으로 간을 맞춥니다. 밥과 함께 냅니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1ufgv",
    youtubeUrl: 'https://youtu.be/BmlK4bl6olI?si=sA9-wfYuCJ1k0fS6'
  },
  {
    id: 27,
    name: "제주 몸국 (몸 = 모자반)",
    mainCategory: "국밥",
    subCategory: "지역별/특별 국밥",
    difficulty: "보통",
    baseServings: 1,
    ingredientsList: [
      { name: '돼지 사골 육수', amount: 500, unit: 'ml' },
      { name: '삶은 모자반(몸)', amount: 100, unit: 'g' },
      { name: '삶은 돼지고기/내장', amount: 50, unit: 'g' },
      { name: '메밀가루', amount: 2, unit: 'T' },
      { name: '신김치 (송송)', amount: 30, unit: 'g' }
    ],
    recipeSteps: [
      "(시판 사골 육수 사용 기준 레시피입니다. 육수를 직접 낼 경우 난이도는 '어려움' 이상이며 6시간 이상 소요됩니다.)",
      "돼지 육수에 삶은 모자반과 잘게 썬 돼지고기/내장, 신김치를 넣고 끓입니다.",
      "메밀가루를 육수에 잘 풀어 넣으면서 농도를 걸쭉하게 맞춥니다.",
      "한소끔 푹 끓여내 밥과 함께 먹습니다.",
      "제주도의 대표적인 향토 음식입니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1tVOx",
    youtubeUrl: 'https://youtu.be/hE0PKau24dU?si=E6AAlgm_CVQOU-GS'
  },
  {
    id: 28,
    name: "제주 흑돼지국밥",
    mainCategory: "국밥",
    subCategory: "지역별/특별 국밥",
    difficulty: "보통",
    baseServings: 1,
    ingredientsList: [
      { name: '흑돼지 고기 (수육용)', amount: 120, unit: 'g' },
      { name: '사골 육수', amount: 500, unit: 'ml' },
      { name: '콩나물', amount: 1, unit: '줌' },
      { name: '대파 (송송)', amount: 0.5, unit: '줌' },
      { name: '새우젓 (간)', amount: 0.5, unit: 'T' }
    ],
    recipeSteps: [
      "(시판 사골 육수 사용 기준 레시피입니다. 육수를 직접 낼 경우 난이도는 '어려움' 이상이며 6시간 이상 소요됩니다.)",
      "제주 흑돼지를 사용한 국밥입니다. (가정에서는 일반 돼지고기 수육으로 대체 가능)",
      "뚝배기에 사골 육수를 붓고 끓입니다.",
      "육수가 끓으면 밥과 흑돼지 수육, 콩나물을 넣고 한소끔 끓입니다.",
      "대파를 올리고 새우젓으로 간을 맞춰 먹습니다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/c1tSda',
    youtubeUrl: 'https://youtu.be/JLt0xWPr3Jg?si=Pr5WEE96L9PRzfEK'
  },
  {
    id: 30,
    name: "올갱이 국밥 (다슬기)",
    mainCategory: "국밥",
    subCategory: "지역별/특별 국밥",
    difficulty: "보통",
    baseServings: 1,
    ingredientsList: [
      { name: '삶은 올갱이 (다슬기)', amount: 80, unit: 'g' },
      { name: '멸치/올갱이 육수', amount: 500, unit: 'ml' },
      { name: '된장', amount: 0.5, unit: 'T' },
      { name: '고추장 (선택)', amount: 0.5, unit: 'T' },
      { name: '아욱 또는 배추', amount: 50, unit: 'g' },
      { name: '부추 (송송)', amount: 1, unit: '줌' },
      { name: '다진 마늘', amount: 0.5, unit: 'T' },
      { name: '밀가루/전분물 (선택)', amount: 1, unit: 'T' }
    ],
    recipeSteps: [
      "육수 만들기: 올갱이(다슬기) 삶은 물을 육수로 사용하거나, 물 600ml에 멸치(10마리)를 넣고 15분간 끓여 멸치 육수를 냅니다. (시판 멸치 육수 500ml로 대체 가능)",
      "올갱이(다슬기)는 껍질째 삶아 살을 발라내고, 삶은 물은 육수로 사용합니다. (가정에서는 손질된 올갱이와 멸치 육수 사용)",
      "뚝배기에 육수를 붓고 된장(0.5T)과 고추장(0.5T, 선택)을 풀어 끓입니다.",
      "국물이 끓으면 손질한 아욱/배추와 올갱이, 다진 마늘을 넣고 끓입니다.",
      "국물 맛이 어우러지면, 기호에 따라 밀가루/전분물을 살짝 풀어 농도를 맞춥니다.",
      "마지막에 부추를 듬뿍 넣고 밥과 함께 냅니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1MQxQ",
    youtubeUrl: 'https://youtu.be/76nbkX_DomU?si=KIgo4AIHs0lUNVcU'
  },
  {
    id: 38,
    name: "소고기 시래기 국밥",
    mainCategory: "국밥",
    subCategory: "든든한 맑은 국밥",
    difficulty: "보통",
    baseServings: 2,
    ingredientsList: [
      { name: '시래기 (마른)', amount: 100, unit: 'g' },
      { name: '소고기 (양지/설깃살)', amount: 200, unit: 'g' },
      { name: '밥', amount: 2, unit: '공기' },
      { name: '무', amount: 150, unit: 'g' },
      { name: '대파', amount: 0.5, unit: '대' },
      { name: '다진 마늘', amount: 1, unit: 'T' },
      { name: '생강 (선택)', amount: 1, unit: '쪽' },
      { name: '국간장', amount: 2, unit: 'T' },
      { name: '소금', amount: 0.5, unit: 't' },
      { name: '후춧가루', amount: 0, unit: '약간' },
      { name: '참기름', amount: 0.5, unit: 't' },
      { name: '고춧가루 (선택)', amount: 1, unit: 't' },
      { name: '청양고추 (선택)', amount: 1, unit: '개' }
    ],
    recipeSteps: [
      "시래기 준비하기: 마른 시래기는 찬물에 30분 이상 불린 후, 손으로 주물러 헹궈 물기를 꽉 짜둡니다.",
      "소고기 육수 내기: 냄비에 소고기, 무, 대파 흰부분, 생강 슬라이스를 넣고 물 800ml~1L를 부어 거품을 걷어내며 30~40분 끓여 육수를 우립니다.",
      "육수가 우러나면 고기와 무는 건져내고, 육수에 다진 마늘과 국간장을 넣고 끓입니다.",
      "준비된 시래기와 건져낸 소고기, 무를 다시 넣고 15~20분 더 끓입니다. (칼칼하게 드시려면 이때 고춧가루, 청양고추를 추가하세요.)",
      "마지막으로 소금, 후춧가루로 간을 맞춥니다. 그릇에 밥을 담고 국을 부은 뒤, 대파 푸른 부분과 참기름을 올려 완성합니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1tMG2",
    youtubeUrl: 'https://youtu.be/YJkJgSPv8Yo?si=MeZH6i1W75XBR01f'
  },
  {
    id: 42,
    name: "해물 짬뽕밥",
    mainCategory: "국밥",
    subCategory: "얼큰 칼칼한 국밥",
    difficulty: "보통",
    baseServings: 1,
    ingredientsList: [
      { name: '당면', amount: 50, unit: 'g' },
      { name: '양배추', amount: 1, unit: '줌' },
      { name: '양파', amount: 0.5, unit: '개' },
      { name: '대파', amount: 0.5, unit: '대' },
      { name: '당근', amount: 20, unit: 'g' },
      { name: '고추', amount: 1, unit: '개' },
      { name: '새우', amount: 5, unit: '마리' },
      { name: '오징어', amount: 1, unit: '마리' },
      { name: '돼지고기', amount: 100, unit: 'g' },
      { name: '식용유', amount: 2, unit: 'T' },
      { name: '다진 마늘', amount: 1, unit: 'T' },
      { name: '간장', amount: 2, unit: 'T' },
      { name: '고춧가루', amount: 3, unit: 'T' },
      { name: '물', amount: 500, unit: 'ml' },
      { name: '치킨 스톡 (선택)', amount: 1, unit: 'T' },
      { name: '설탕', amount: 0.3, unit: 'T' },
      { name: '소금', amount: 0, unit: '약간' },
      { name: '계란', amount: 1, unit: '개' },
      { name: '밥', amount: 1, unit: '공기' }
    ],
    recipeSteps: [
      "따뜻한 물에 당면을 미리 불려둡니다.",
      "양배추, 양파, 대파, 당근, 고추 등 야채를 썰어서 준비합니다.",
      "오징어는 몸통에 대각선으로 칼집을 넣은 뒤 1.5~2cm 간격으로 썰어 준비합니다.",
      "팬에 식용유(또는 고추기름)를 두르고 돼지고기를 넣어 볶아줍니다.",
      "고기가 익으면 다진 마늘과 간장을 넣고 함께 볶습니다.",
      "불을 약간 줄인 뒤 고춧가루를 넣어 타지 않게 잘 볶아줍니다.",
      "준비한 야채와 해물(새우, 오징어)을 모두 넣고 다시 한번 볶습니다.",
      "재료가 볶아지면 물 500ml를 붓고 끓입니다.",
      "국물이 끓어오르면 치킨 스톡(선택 사항), 설탕 1/3스푼, 소금을 넣어 간을 맞춥니다.",
      "마지막으로 계란 하나를 풀어 국물에 넣고 너무 휘젓지 말고 살짝 익혀줍니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1uEjp",
    youtubeUrl: 'https://youtu.be/cRrv_YLIxEw?si=2Tx_k3c9Pw_ZXe77'
  },
  {
    id: 43,
    name: "소고기 장터 국밥",
    mainCategory: "국밥",
    subCategory: "얼큰 칼칼한 국밥",
    difficulty: "보통",
    baseServings: 4,
    ingredientsList: [
      { name: '아롱사태', amount: 600, unit: 'g' },
      { name: '물', amount: 3, unit: 'L' },
      { name: '집 된장', amount: 3, unit: 'T' },
      { name: '멸치액젓', amount: 2, unit: 'T' },
      { name: '국간장', amount: 2, unit: 'T' },
      { name: '고춧가루', amount: 5, unit: 'T' },
      { name: '맛술', amount: 2, unit: 'T' },
      { name: '소고기 다시다', amount: 1, unit: 'T' },
      { name: '다진 마늘', amount: 2, unit: 'T' },
      { name: '무', amount: 300, unit: 'g' },
      { name: '삶은 우거지', amount: 300, unit: 'g' },
      { name: '대파', amount: 1, unit: '대' },
      { name: '청양고추', amount: 2, unit: '개' },
      { name: '홍고추', amount: 1, unit: '개' },
      { name: '후추', amount: 0, unit: '약간' }
    ],
    recipeSteps: [
      "끓는 물에 아롱사태를 넣고 살짝 데쳐줍니다. (이렇게 하면 핏물을 따로 뺄 필요가 없어요.)",
      "깨끗한 냄비에 물 3L와 데친 아롱사태를 넣고 1시간 반 동안 푹 끓여줍니다. 이때 처음 물 높이를 기억해두세요.",
      "1시간 반 뒤, 고기를 건져 한김 식힌 후 결 반대 방향으로 썰어줍니다.",
      "냄비에 처음 기억해둔 물 높이만큼 물을 추가로 붓습니다.",
      "물에 집 된장, 멸치액젓, 국간장, 고춧가루, 맛술, 소고기 다시다, 마늘, 썰어둔 아롱사태, 무, 삶은 우거지를 넣고 센 불에서 15분간 끓입니다.",
      "15분 뒤, 대파, 청양고추, 홍고추, 후추를 넣고 5분 더 끓여주면 완성입니다.",
      "팁: 국밥은 바로 먹는 것보다 조금 두었다가 먹으면 우거지가 국물에 풀어져 더욱 맛있습니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1NqVR",
    youtubeUrl: "https://youtube.com/shorts/awXehdHT_G8?si=8_GadVwbHXB37Ubt"
  },
  {
    id: 44,
    name: "소 내장 국밥",
    mainCategory: "국밥",
    subCategory: "얼큰 칼칼한 국밥",
    difficulty: "보통",
    baseServings: 4,
    ingredientsList: [
      { name: '한우 내장', amount: 1300, unit: 'g' },
      { name: '소금 & 밀가루 (세척용)', amount: 0, unit: '약간' },
      { name: '소주 (데치기/육수용)', amount: 0, unit: '약간' },
      { name: '육수용 야채 (마늘, 월계수잎, 건고추, 대파, 생강)', amount: 0, unit: ' ' },
      { name: '무', amount: 0.3, unit: '개' },
      { name: '대파', amount: 1, unit: '대' },
      { name: '콩나물', amount: 1, unit: '줌' },
      { name: '얼갈이배추', amount: 1, unit: '단' },
      { name: '다진 마늘', amount: 2, unit: 'T' },
      { name: '된장', amount: 1, unit: 'T' },
      { name: '고춧가루', amount: 2, unit: 'T' },
      { name: '국간장', amount: 1, unit: 'T' },
      { name: '소고기 다시다', amount: 1, unit: 'T' },
      { name: '미원', amount: 0.3, unit: 't' },
      { name: '고추기름', amount: 2, unit: 'T' },
      { name: '후추 및 소금', amount: 0, unit: '약간' }
    ],
    recipeSteps: [
      "내장 손질: 내장에 소금과 밀가루를 넣고 냄새와 불순물이 제거되도록 바락바락 주무릅니다. 기름 덩어리 등을 제거하고, 냄새가 나지 않을 때까지 깨끗하게 헹굽니다.",
      "1차 삶기(데치기): 깨끗이 씻은 내장을 냄비에 넣고 물을 잠길 만큼 붓습니다. 소주를 두세 바퀴 둘러 넣고, 물이 끓기 시작하면 15분간 끓여줍니다.",
      "15분 뒤 물은 모두 버리고, 냄비와 내장을 다시 한번 깨끗하게 씻어 불순물을 제거합니다.",
      "2차 삶기(육수내기): 깨끗한 냄비에 씻은 내장과 새 물을 붓습니다. 육수용 야채(통마늘, 월계수잎, 건고추, 대파, 생강)를 넣고, 소주를 다시 부어 끓입니다. (압력솥 30분, 일반 솥 1시간 20분)",
      "부재료 준비: 내장이 삶아지는 동안 무, 파를 썰어 준비합니다. 얼갈이는 끓는 물에 데쳐 풋내를 제거한 뒤 찬물에 헹궈 준비합니다.",
      "다대기 양념장 만들기: 분량의 재료(다진 마늘, 된장, 고춧가루, 국간장, 다시다, 미원, 고추기름, 후추)를 섞어 다대기 양념장을 만듭니다.",
      "내장탕 끓이기: 다 삶아진 내장은 건져 먹기 좋게 썰고, 육수는 기름을 걷어냅니다. 육수에 무, 파, 데친 얼갈이, 양념장을 넣고 무가 익을 때까지 약 10분간 끓입니다.",
      "마지막으로 콩나물과 썰어둔 내장을 넣고 한소끔 더 끓인 뒤, 소금으로 간을 맞춥니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1N7ds",
    youtubeUrl: "https://youtu.be/1i6hM7rJePA?si=BkUNrA8OdZlU3l1C"
  },
  {
    id: 105,
    name: "소고기 볶음밥",
    mainCategory: "볶음밥",
    subCategory: "고기 볶음밥",
    difficulty: "보통",
    baseServings: 1,
    ingredientsList: [
      { name: '소고기 다짐육', amount: 100, unit: 'g' },
      { name: '밥', amount: 1, unit: '공기' },
      { name: '계란', amount: 1, unit: '개' },
      { name: '양파', amount: 0.25, unit: '개' },
      { name: '당근', amount: 30, unit: 'g' },
      { name: '대파', amount: 0.5, unit: '대' },
      { name: '굴소스', amount: 1, unit: 'T' },
      { name: '간장', amount: 1, unit: 't' },
      { name: '설탕', amount: 0.5, unit: 't' },
      { name: '다진 마늘', amount: 0.5, unit: 't' },
      { name: '후추', amount: 0, unit: '약간' }
    ],
    recipeSteps: [
      "소고기에 간장, 설탕, 다진 마늘, 후추로 밑간을 해둡니다.",
      "팬에 기름을 두르고 파를 볶아 파기름을 냅니다.",
      "다진 양파와 당근을 넣고 볶다가, 한쪽에서 계란 스크램블을 만들어 섞습니다.",
      "밑간한 소고기를 넣고 핏기가 없어질 때까지 볶습니다.",
      "찬밥을 넣고 볶다가 굴소스로 간을 하고 후추를 뿌려 마무리합니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/b9yWpS",
    youtubeUrl: "https://www.youtube.com/watch?v=Qy9Z_BqRyfk"
  },
  {
    id: 107,
    name: "불닭 볶음밥",
    mainCategory: "볶음밥",
    subCategory: "소스/퓨전 볶음밥",
    difficulty: "보통",
    baseServings: 1,
    ingredientsList: [
      { name: '닭고기', amount: 100, unit: 'g' },
      { name: '밥', amount: 1, unit: '공기' },
      { name: '양배추', amount: 50, unit: 'g' },
      { name: '깻잎', amount: 5, unit: '장' },
      { name: '모차렐라 치즈', amount: 50, unit: 'g' },
      { name: '고추장', amount: 1, unit: 'T' },
      { name: '간장', amount: 1, unit: 'T' },
      { name: '설탕', amount: 1, unit: 'T' },
      { name: '고춧가루', amount: 1, unit: 'T' },
      { name: '다진 마늘', amount: 0.5, unit: 'T' }
    ],
    recipeSteps: [
      "고추장, 간장, 설탕, 고춧가루, 다진 마늘을 섞어 양념장을 만듭니다.",
      "팬에 기름을 두르고 파기름을 낸 후, 닭고기와 채 썬 양배추를 볶습니다.",
      "닭고기가 익으면 양념장을 넣고 볶아줍니다.",
      "찬밥을 넣고 양념과 잘 섞이도록 볶습니다.",
      "불을 끄고 채 썬 깻잎을 섞은 후, 모차렐라 치즈를 올려 뚜껑을 덮고 녹여줍니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/b9yWGR",
    youtubeUrl: "https://www.youtube.com/watch?v=fIpC6jMMgqE"
  },
  {
    id: 109,
    name: "나시고랭",
    mainCategory: "볶음밥",
    subCategory: "소스/퓨전 볶음밥",
    difficulty: "보통",
    baseServings: 1,
    ingredientsList: [
      { name: '밥', amount: 1, unit: '공기' },
      { name: '새우', amount: 50, unit: 'g' },
      { name: '닭고기', amount: 50, unit: 'g' },
      { name: '숙주', amount: 1, unit: '줌' },
      { name: '양파', amount: 0.25, unit: '개' },
      { name: '계란 프라이', amount: 1, unit: '개' },
      { name: '케찹 마니스 (또는 대체 소스)', amount: 2, unit: 'T' },
      { name: '피시 소스 (선택)', amount: 1, unit: 't' }
    ],
    recipeSteps: [
      "케찹 마니스 대체 소스: 간장 1T, 굴소스 1T, 설탕 1T를 섞습니다.",
      "팬에 기름을 두르고 파기름을 낸 후, 닭고기, 새우, 양파를 볶습니다.",
      "재료가 익으면 찬밥을 넣고 볶다가 소스를 부어 골고루 섞습니다.",
      "불을 끄기 직전에 숙주를 넣어 살짝 숨만 죽입니다.",
      "그릇에 담고 반숙 계란 프라이를 올려 완성합니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/b9yWUf",
    youtubeUrl: "https://www.youtube.com/watch?v=mPCJbYY7A2Q"
  },
  {
    id: 110,
    name: "오므라이스",
    mainCategory: "볶음밥",
    subCategory: "소스/퓨전 볶음밥",
    difficulty: "보통",
    baseServings: 1,
    ingredientsList: [
      { name: '밥', amount: 1, unit: '공기' },
      { name: '햄', amount: 50, unit: 'g' },
      { name: '양파', amount: 0.25, unit: '개' },
      { name: '당근', amount: 30, unit: 'g' },
      { name: '완두콩 (선택)', amount: 1, unit: 'T' },
      { name: '계란', amount: 2, unit: '개' },
      { name: '케첩', amount: 3, unit: 'T' },
      { name: '우스터소스 (or 굴소스)', amount: 1, unit: 'T' },
      { name: '버터', amount: 1, unit: 't' }
    ],
    recipeSteps: [
      "햄과 채소는 잘게 다집니다.",
      "팬에 기름을 두르고 파기름을 낸 후, 햄과 채소를 볶습니다.",
      "채소가 익으면 케첩과 우스터소스를 넣고 살짝 끓여 신맛을 날립니다.",
      "찬밥을 넣고 볶다가 버터를 넣어 마무리한 후 그릇에 모양을 잡아 담습니다.",
      "계란을 풀어 얇은 지단을 부치거나 부드러운 스크램블을 만들어 밥 위에 덮고 케첩을 뿌립니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/b9yW3S",
    youtubeUrl: "https://www.youtube.com/watch?v=jWzG-n2yZ-s"
  },
  {
    id: 111,
    name: "파인애플 볶음밥",
    mainCategory: "볶음밥",
    subCategory: "소스/퓨전 볶음밥",
    difficulty: "보통",
    baseServings: 1,
    ingredientsList: [
      { name: '밥', amount: 1, unit: '공기' },
      { name: '새우', amount: 50, unit: 'g' },
      { name: '닭고기', amount: 50, unit: 'g' },
      { name: '파인애플', amount: 50, unit: 'g' },
      { name: '파프리카', amount: 30, unit: 'g' },
      { name: '캐슈넛', amount: 1, unit: 'T' },
      { name: '피시 소스 (액젓)', amount: 1, unit: 'T' },
      { name: '굴소스', amount: 1, unit: 'T' },
      { name: '카레 가루', amount: 1, unit: 't' }
    ],
    recipeSteps: [
      "팬에 기름을 두르고 파기름을 낸 후, 닭고기와 새우, 파프리카를 볶습니다.",
      "재료가 익으면 찬밥을 넣고 볶습니다.",
      "피시 소스, 굴소스, 카레 가루를 넣고 골고루 섞어줍니다.",
      "마지막에 파인애플과 캐슈넛을 넣고 가볍게 볶아 마무리합니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/b9yXbY",
    youtubeUrl: "https://www.youtube.com/watch?v=rC7qJp_72yA"
  },
  {
    id: 201,
    name: "잔치국수",
    mainCategory: "면",
    subCategory: "따뜻한 국물 국수",
    difficulty: "보통",
    baseServings: 1,
    ingredientsList: [
        { name: '소면', amount: 100, unit: 'g' },
        { name: '멸치/다시마 육수', amount: 500, unit: 'ml' },
        { name: '애호박', amount: 30, unit: 'g' },
        { name: '당근', amount: 20, unit: 'g' },
        { name: '계란 지단', amount: 0.5, unit: '개' },
        { name: '국간장', amount: 1, unit: 'T' },
    ],
    recipeSteps: [
        "멸치, 다시마 등으로 맑은 육수를 내어 국간장/소금으로 간을 맞춘다.",
        "소면을 삶아 찬물에 헹군 뒤 그릇에 담는다.",
        "볶은 애호박, 당근, 계란 지단 등 고명을 올린다.",
        "뜨거운 육수를 부어 완성한다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/b9487b',
    youtubeUrl: 'https://www.youtube.com/watch?v=FqgqX3P6n-E'
  },
  {
    id: 204,
    name: "바지락 칼국수",
    mainCategory: "면",
    subCategory: "따뜻한 국물 국수",
    difficulty: "보통",
    baseServings: 1,
    ingredientsList: [
        { name: '칼국수 생면', amount: 150, unit: 'g' },
        { name: '바지락 (해감)', amount: 200, unit: 'g' },
        { name: '애호박', amount: 50, unit: 'g' },
        { name: '감자', amount: 0.5, unit: '개' },
        { name: '멸치/다시마 육수', amount: 600, unit: 'ml' },
        { name: '다진 마늘', amount: 1, unit: 't' }
    ],
    recipeSteps: [
        "멸치 육수에 감자를 넣고 끓이다가 칼국수 면의 전분기를 털어내고 넣는다.",
        "면이 반쯤 익으면 애호박, 다진 마늘, 바지락을 넣고 끓인다.",
        "바지락이 입을 벌리면 국간장이나 소금으로 간을 맞춘다.",
        "대파를 넣고 한소끔 더 끓여 완성한다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/b949t1',
    youtubeUrl: 'https://www.youtube.com/watch?v=kYpY-I-A-lU'
  },
  {
    id: 208,
    name: "일본 라멘",
    mainCategory: "면",
    subCategory: "따뜻한 국물 국수",
    difficulty: "보통",
    baseServings: 1,
    ingredientsList: [
        { name: '라멘 생면', amount: 1, unit: '인분' },
        { name: '차슈 (or 삼겹살)', amount: 50, unit: 'g' },
        { name: '맛계란', amount: 1, unit: '개' },
        { name: '숙주, 대파', amount: 1, unit: '줌' },
        { name: '시판 사골 육수', amount: 400, unit: 'ml' },
        { name: '일본 된장 (미소)', amount: 1, unit: 'T' },
        { name: '간장', amount: 1, unit: 't' }
    ],
    recipeSteps: [
        "팬에 마늘(선택)을 볶다 사골 육수와 미소, 간장, 맛술(선택)을 풀어 끓인다.",
        "삶은 면을 그릇에 담고 뜨거운 육수를 붓는다.",
        "준비한 차슈, 맛계란, 숙주, 대파 등 고명을 올린다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/b9497d',
    youtubeUrl: 'https://www.youtube.com/watch?v=0tzo22y2iXo'
  },
  {
    id: 209,
    name: "락사",
    mainCategory: "면",
    subCategory: "얼큰한 국물 국수",
    difficulty: "보통",
    baseServings: 1,
    ingredientsList: [
        { name: '쌀국수면', amount: 100, unit: 'g' },
        { name: '새우', amount: 50, unit: 'g' },
        { name: '닭고기', amount: 50, unit: 'g' },
        { name: '숙주', amount: 1, unit: '줌' },
        { name: '유부', amount: 2, unit: '개' },
        { name: '시판 락사 페이스트', amount: 2, unit: 'T' },
        { name: '코코넛 밀크', amount: 200, unit: 'ml' },
        { name: '닭 육수', amount: 200, unit: 'ml' }
    ],
    recipeSteps: [
        "팬에 락사 페이스트를 볶아 향을 낸다.",
        "닭 육수와 코코넛 밀크를 붓고 끓인다.",
        "새우, 닭고기, 유부를 넣어 익힌다.",
        "삶은 면 위에 국물을 붓고 숙주, 고수(선택)를 올린다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/b95akR',
    youtubeUrl: 'https://www.youtube.com/watch?v=7M0i6R-5Xp8'
  },
  {
    id: 212,
    name: "팟타이",
    mainCategory: "면",
    subCategory: "소스가 핵심인 면요리",
    difficulty: "보통",
    baseServings: 1,
    ingredientsList: [
        { name: '쌀국수 면 (넓적한 것)', amount: 80, unit: 'g' },
        { name: '새우', amount: 50, unit: 'g' },
        { name: '계란', amount: 1, unit: '개' },
        { name: '숙주, 부추', amount: 1, unit: '줌' },
        { name: '땅콩 분태', amount: 1, unit: 'T' },
        { name: '팟타이 소스 (시판)', amount: 3, unit: 'T' }
    ],
    recipeSteps: [
        "면은 미리 불린다.",
        "팬에 새우, 두부(선택)를 볶고 한쪽에서 계란 스크램블을 만든다.",
        "불린 면과 소스를 넣고 센 불에 빠르게 볶는다.",
        "마지막에 숙주, 부추를 넣고 잔열로 익힌 뒤 땅콩가루를 뿌린다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/b95beW',
    youtubeUrl: 'https://www.youtube.com/watch?v=1oW2W-nL-u4'
  },
  {
    id: 215,
    name: "까르보나라 (전통식)",
    mainCategory: "면",
    subCategory: "파스타",
    difficulty: "보통",
    baseServings: 1,
    ingredientsList: [
        { name: '스파게티 면', amount: 100, unit: 'g' },
        { name: '관찰레 (or 베이컨)', amount: 50, unit: 'g' },
        { name: '페코리노 로마노 치즈', amount: 30, unit: 'g' },
        { name: '계란 노른자', amount: 2, unit: '개' },
        { name: '통후추', amount: 0, unit: '약간' }
    ],
    recipeSteps: [
        "관찰레(베이컨)는 바싹 볶는다.",
        "볼에 계란 노른자, 간 치즈, 후추를 섞어둔다.",
        "삶은 면을 볼에 넣고 면수와 베이컨 기름을 조금씩 추가하며 빠르게 비벼 잔열로 소스를 만든다.",
        "(주의: 불 위에 올리면 계란이 익어 스크램블이 될 수 있다)"
    ],
    purchaseUrl: 'https://link.coupang.com/a/b95b3d',
    youtubeUrl: 'https://www.youtube.com/watch?v=zL3wW-20E2c'
  },
  {
    id: 217,
    name: "새우 크림 파스타",
    mainCategory: "면",
    subCategory: "파스타",
    difficulty: "보통",
    baseServings: 1,
    ingredientsList: [
        { name: '페투치네 면', amount: 100, unit: 'g' },
        { name: '새우', amount: 80, unit: 'g' },
        { name: '양파', amount: 0.25, unit: '개' },
        { name: '마늘 (편)', amount: 2, unit: '쪽' },
        { name: '생크림', amount: 100, unit: 'ml' },
        { name: '우유', amount: 100, unit: 'ml' },
        { name: '파마산 치즈', amount: 1, unit: 'T' }
    ],
    recipeSteps: [
        "팬에 오일, 마늘, 양파를 볶다 새우, 브로콜리(선택)를 볶는다.",
        "생크림과 우유(or 면수)를 1:1로 붓고 끓인다.",
        "소스가 끓으면 삶은 면과 파마산 치즈를 넣고 끓여 농도를 맞춘다.",
        "소금, 후추로 간을 하고 마무리한다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/b95cuH',
    youtubeUrl: 'https://www.youtube.com/watch?v=vVqy-D2vzyE'
  },
  {
    id: 219,
    name: "팥 칼국수",
    mainCategory: "면",
    subCategory: "따뜻한 국물 국수",
    difficulty: "보통",
    baseServings: 2,
    ingredientsList: [
      { name: '팥', amount: 350, unit: 'g' },
      { name: '칼국수 생면', amount: 300, unit: 'g' },
      { name: '물 (팥 삶을 물)', amount: 1800, unit: 'ml' },
      { name: '소금', amount: 0.5, unit: 'T' },
      { name: '찹쌀가루 (새알심용, 선택)', amount: 50, unit: 'g' },
      { name: '설탕 (취향껏, 선택)', amount: 0, unit: 'g' }
    ],
    recipeSteps: [
      "팥 준비: 팥(350g)을 깨끗이 씻어 4시간 이상 불립니다. 냄비에 불린 팥과 물을 넣고 끓어오르면 첫 물은 버려 떫은 맛을 제거합니다.",
      "팥 삶기: 다시 팥과 물(약 8~10컵)을 넣고, 중약불에서 팥알이 쉽게 으깨질 때까지 1시간~1시간 반 동안 푹 삶아줍니다.",
      "팥물 만들기: 삶은 팥을 삶은 물과 함께 믹서에 곱게 갑니다. 부드러운 국물을 원하면 체에 걸러 껍질을 제거하고, 진한 맛을 원하면 그대로 사용합니다.",
      "새알심 만들기 (선택): 찹쌀가루에 뜨거운 물로 익반죽하여 동그랗게 새알심을 만듭니다.",
      "끓이기: 냄비에 팥물을 붓고 중불에서 계속 저어줍니다. 끓기 시작하면 칼국수 면과 새알심을 넣고, 면이 익을 때까지(약 7~10분) 눌어붙지 않게 계속 저어줍니다.",
      "마무리: 면이 다 익으면 소금으로 간을 맞춥니다. 먹을 때 취향에 따라 소금이나 설탕을 추가해 드세요."
    ],
    purchaseUrl: 'https://link.coupang.com/a/b95cyQ',
    youtubeUrl: 'https://www.youtube.com/watch?v=kRk7221y3lQ'
  },
  {
    id: 222,
    name: "태백 도토리 국수",
    mainCategory: "면",
    subCategory: "지역별/특별 국수",
    difficulty: "보통",
    baseServings: 1,
    ingredientsList: [
      { name: '도토리 가루', amount: 100, unit: 'g' },
      { name: '밀가루', amount: 50, unit: 'g' },
      { name: '된장', amount: 2, unit: 'T' },
      { name: '시래기', amount: 1, unit: '줌' },
      { name: '물', amount: 600, unit: 'ml' },
    ],
    recipeSteps: [
      "된장을 푼 물에 시래기 등을 넣고 끓여 육수를 만듭니다.",
      "도토리 가루와 밀가루를 섞어 반죽한 뒤, 밀대로 밀어 칼국수처럼 썰어냅니다.",
      "만들어진 면을 된장 육수에 넣고 끓여 완성합니다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/b95gCS',
    youtubeUrl: 'https://www.youtube.com/watch?v=6K_K5Y1L13g'
  },
  {
    id: 223,
    name: "고성 동치미 메밀 국수",
    mainCategory: "면",
    subCategory: "시원한 국물 국수",
    difficulty: "보통",
    baseServings: 1,
    ingredientsList: [
      { name: '메밀면', amount: 1, unit: '인분' },
      { name: '동치미 국물', amount: 400, unit: 'ml' },
      { name: '무', amount: 50, unit: 'g' },
      { name: '김치 국물 (선택)', amount: 50, unit: 'ml' }
    ],
    recipeSteps: [
      "국수틀로 뽑아낸 메밀면을 끓는 물에 바로 삶아 헹군다. (시판 메밀면으로 대체 가능)",
      "그릇에 면을 담고 차가운 동치미 국물을 붓는다.",
      "기호에 따라 김치 국물을 타서 먹기도 한다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/b95hba',
    youtubeUrl: 'https://www.youtube.com/watch?v=Ew1t-9A5hQ4'
  },
  // 3. 난이도: 어려움 (★★★★☆)
  {
    id: 7,
    name: "뼈해장국 (감자탕)",
    mainCategory: "국밥",
    subCategory: "얼큰 칼칼한 국밥",
    difficulty: "어려움",
    baseServings: 1,
    ingredientsList: [
      { name: '돼지 등뼈', amount: 400, unit: 'g' },
      { name: '감자', amount: 1, unit: '개' },
      { name: '삶은 우거지/시래기', amount: 100, unit: 'g' },
      { name: '들깨가루', amount: 2, unit: 'T' },
      { name: '된장', amount: 1, unit: 'T' },
      { name: '고춧가루', amount: 2, unit: 'T' }
    ],
    recipeSteps: [
      "등뼈는 핏물을 빼고 초벌로 삶아 불순물을 제거합니다.",
      "깨끗이 씻은 등뼈와 물, 된장(1T), 맛술을 넣고 1시간 이상 푹 삶습니다.",
      "삶은 우거지, 감자, 양념(고춧가루, 국간장, 다진마늘, 생강)을 넣고 30분 더 끓입니다.",
      "마지막에 들깨가루와 대파, 깻잎을 넣습니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1t6mI",
    youtubeUrl: 'https://youtu.be/1gDK0w1Er1o?si=u1cKr39S2hYk5rOd'
  },
  {
    id: 21,
    name: "진주식 빨간 머리국밥",
    mainCategory: "국밥",
    subCategory: "지역별/특별 국밥",
    difficulty: "어려움",
    baseServings: 1,
    ingredientsList: [
      { name: '돼지 머릿고기 (편육)', amount: 100, unit: 'g' },
      { name: '사골 육수 (대체)', amount: 500, unit: 'ml' },
      { name: '고춧가루', amount: 1, unit: 'T' },
      { name: '다진 마늘', amount: 1, unit: 'T' },
      { name: '국간장', amount: 1, unit: 'T' },
      { name: '부추/대파', amount: 1, unit: '줌' }
    ],
    recipeSteps: [
      "영상 속 '진주 반성시장' 스타일 국밥입니다. 뼈가 아닌 돼지머리로 육수를 내는 것이 특징입니다.",
      "가정에서는 시판 사골 육수에 고춧가루(1T), 다진 마늘(1T), 국간장(1T)를 풀어 얼큰한 밑 국물을 만듭니다.",
      "뚝배기에 밥과 편육(머릿고기)을 담습니다.",
      "뜨거운 국물을 부었다 따랐다 반복하여 밥을 데웁니다 (토렴).",
      "마지막으로 뜨거운 국물을 붓고, 위에 부추와 대파를 듬뿍 올려 냅니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1t6Tv",
    youtubeUrl: 'https://youtu.be/Xuao8ub6z3s?si=yuWA2TMl3f5dGc1f'
  },
  {
    id: 31,
    name: "대구식 따로국밥",
    mainCategory: "국밥",
    subCategory: "얼큰 칼칼한 국밥",
    difficulty: "어려움",
    baseServings: 1,
    ingredientsList: [
      { name: '사골 육수', amount: 500, unit: 'ml' },
      { name: '소고기 양지 (삶은 것)', amount: 100, unit: 'g' },
      { name: '선지', amount: 80, unit: 'g' },
      { name: '무 (나박썰기)', amount: 100, unit: 'g' },
      { name: '대파', amount: 0.5, unit: '대' },
      { name: '고춧가루', amount: 1.5, unit: 'T' },
      { name: '국간장', amount: 1, unit: 'T' },
      { name: '다진 마늘', amount: 1, unit: 'T' }
    ],
    recipeSteps: [
      "(시판 사골 육수 사용 기준 레시피입니다. 육수를 직접 낼 경우 난이도는 '전문가'이며 8시간 이상 소요됩니다.)",
      "냄비에 사골 육수와 큼직하게 썬 무를 넣고 끓입니다.",
      "무가 익으면 미리 삶아 찢어둔 양지와 선지를 넣습니다.",
      "고춧가루(1.5T), 국간장(1T), 다진 마늘(1T)로 양념하고 한소끔 더 끓입니다.",
      "마지막에 대파를 듬뿍 넣고, 소금과 후추로 간을 맞춥니다. 이름처럼 밥은 따로 냅니다 (따로국밥)."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1ukIE",
    youtubeUrl: 'https://youtu.be/c5p1anbDp8o?si=KW0RcCaUJ_7uRYcx'
  },
  {
    id: 34,
    name: "광주식 오리국밥",
    mainCategory: "국밥",
    subCategory: "지역별/특별 국밥",
    difficulty: "어려움",
    baseServings: 4,
    ingredientsList: [
      { name: '생오리', amount: 1, unit: '마리 (약 2kg)' },
      { name: '토란대', amount: 250, unit: 'g' },
      { name: '고구마 줄기 (데친 것)', amount: 200, unit: 'g' },
      { name: '생들깨', amount: 120, unit: 'g' },
      { name: '찹쌀 (2시간 불린 것)', amount: 2, unit: 'T' },
      { name: '건고추', amount: 7, unit: '개' },
      { name: '된장', amount: 3, unit: 'T' },
      { name: '고춧가루', amount: 2, unit: 'T' },
      { name: '다진 마늘', amount: 2, unit: 'T' },
      { name: '다진 생강', amount: 0.5, unit: 'T' },
      { name: '생강', amount: 1, unit: '톨' },
      { name: '소주 (또는 정종)', amount: 0.75, unit: '컵' },
      { name: '소금', amount: 1, unit: 'T' },
      { name: '미나리', amount: 0.5, unit: '줌' },
      { name: '깻잎', amount: 8, unit: '장' },
      { name: '부추', amount: 0.5, unit: '줌' },
      { name: '대파', amount: 20, unit: 'cm' },
      { name: '양파', amount: 0.5, unit: '개' },
      { name: '물', amount: 3, unit: 'L' }
    ],
    recipeSteps: [
      "토란대 준비: 끓는 물에 된장 1스푼을 풀고 토란대 250g을 5분간 삶은 후, 5분간 뜸을 들입니다. 찬물에 헹궈 물기를 짜고 먹기 좋게 썹니다.",
      "오리 초벌 삶기: 냄비에 다진 생강 1톨, 소주 반 컵, 오리 1마리를 넣고 물이 끓으면 4분간 삶아 찬물에 깨끗이 헹굽니다.",
      "채소 손질: 대파, 깻잎, 미나리, 부추는 큼직하게 썰고, 양파도 썰어 준비합니다.",
      "들깨 육수 만들기: 믹서기에 생들깨 120g, 2시간 불린 찹쌀 2스푼, 물 400ml를 넣고 곱게 갈아 체에 걸러 진한 국물만 받습니다.",
      "양념장 만들기: 믹서기에 건고추 7개, 물 200ml를 갈아 된장 2스푼, 다진 마늘 2스푼, 다진 생강 1/2스푼, 고춧가루 2스푼, 소주 1/4컵을 섞습니다.",
      "양념장에 손질한 토란대와 고구마 줄기를 넣고 30분간 재워둡니다.",
      "끓이기: 냄비에 오리와 물 1.5리터를 붓고 5분 끓인 후, 들깨 육수와 양념한 채소를 넣습니다.",
      "뚜껑을 닫고 40분간 끓입니다. 눌어붙지 않도록 중간중간 저어주고 15분 후부터는 중불로 줄입니다.",
      "마무리: 소금 1스푼으로 간을 맞춘 뒤, 손질해둔 나머지 채소(미나리, 양파, 부추, 깻잎, 대파)를 넣고 한소끔 더 끓여 완성합니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1tZND",
    youtubeUrl: 'https://youtu.be/JdsdP3-W9AA?si=akrNUk5gRh5fEFK2'
  },
  {
    id: 207,
    name: "짬뽕",
    mainCategory: "면",
    subCategory: "얼큰한 국물 국수",
    difficulty: "어려움",
    baseServings: 1,
    ingredientsList: [
        { name: '중화면', amount: 150, unit: 'g' },
        { name: '해물믹스', amount: 100, unit: 'g' },
        { name: '돼지고기', amount: 50, unit: 'g' },
        { name: '양파, 배추, 애호박', amount: 1, unit: '줌' },
        { name: '닭/사골 육수', amount: 500, unit: 'ml' },
        { name: '고춧가루', amount: 2, unit: 'T' },
        { name: '다진 마늘', amount: 1, unit: 'T' },
        { name: '굴소스', amount: 1, unit: 'T' }
    ],
    recipeSteps: [
        "팬에 기름, 마늘, 고춧가루, 돼지고기를 볶아 고추기름을 낸다.",
        "센 불에 채소와 해물, 청주(선택)를 볶아 불향을 낸다.",
        "육수를 붓고 끓인 뒤 굴소스/간장으로 간을 맞춘다.",
        "삶은 면 위에 완성된 짬뽕 국물을 부어준다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/b949Wv',
    youtubeUrl: 'https://www.youtube.com/watch?v=0kG3P712-O8'
  },
  {
    id: 211,
    name: "짜장면",
    mainCategory: "면",
    subCategory: "소스가 핵심인 면요리",
    difficulty: "어려움",
    baseServings: 1,
    ingredientsList: [
        { name: '중화면', amount: 1, unit: '인분' },
        { name: '춘장', amount: 2, unit: 'T' },
        { name: '돼지고기 다짐육', amount: 80, unit: 'g' },
        { name: '양파 (듬뿍)', amount: 1, unit: '개' },
        { name: '감자, 애호박', amount: 50, unit: 'g' },
        { name: '설탕', amount: 1, unit: 'T' },
        { name: '굴소스', amount: 1, unit: 'T' },
        { name: '전분물', amount: 2, unit: 'T' }
    ],
    recipeSteps: [
        "기름에 춘장을 튀기듯 볶아 따로 둔다.",
        "팬에 파기름을 내고 돼지고기, 깍둑 썬 채소를 볶는다.",
        "볶은 춘장, 굴소스, 설탕을 넣고, 물을 붓고 끓인다.",
        "전분물로 농도를 맞춘 뒤 삶은 면 위에 부어 비벼 먹는다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/b95aWd',
    youtubeUrl: 'https://www.youtube.com/watch?v=Zc-n52k6-g0'
  },
  {
    id: 220,
    name: "안동 건진 국수",
    mainCategory: "면",
    subCategory: "지역별/특별 국수",
    difficulty: "어려움",
    baseServings: 1,
    ingredientsList: [
      { name: '밀가루', amount: 70, unit: 'g' },
      { name: '콩가루', amount: 30, unit: 'g' },
      { name: '소 양지머리', amount: 150, unit: 'g' },
      { name: '계란 지단', amount: 0.5, unit: '개' },
      { name: '버섯', amount: 20, unit: 'g' },
      { name: '당근', amount: 20, unit: 'g' }
    ],
    recipeSteps: [
      "양지머리로 맑은 육수를 낸다.",
      "밀가루와 콩가루를 7:3으로 섞어 반죽한 뒤, 홍두깨로 종이장처럼 얇게 밀어낸다.",
      "면을 최대한 가늘게 썰어 삶은 뒤, 즉시 찬물에 헹궈 건져낸다. (그래서 '건진 국수'라고 부릅니다.)",
      "그릇에 면을 담고 오방색 고명을 얹은 뒤, 차갑거나 따뜻하게 식힌 맑은 고기 육수를 부어 완성한다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/b95f2A',
    youtubeUrl: 'https://www.youtube.com/watch?v=wX-c6928L80'
  },
  {
    id: 224,
    name: "고기폭탄 짬뽕",
    mainCategory: "면",
    subCategory: "얼큰한 국물 국수",
    difficulty: "어려움",
    baseServings: 1,
    ingredientsList: [
        { name: '중화면', amount: 1, unit: '인분' },
        { name: '사골 육수 (시판)', amount: 500, unit: 'ml' },
        { name: '돼지고기 (짬뽕용)', amount: 50, unit: 'g' },
        { name: '양파', amount: 0.25, unit: '개' },
        { name: '배추', amount: 2, unit: '잎' },
        { name: '애호박', amount: 30, unit: 'g' },
        { name: '대파', amount: 0.5, unit: '대' },
        { name: '다진 마늘', amount: 1, unit: 'T' },
        { name: '고춧가루', amount: 2, unit: 'T' },
        { name: '식용유', amount: 2, unit: 'T' },
        { name: '간장', amount: 1, unit: 'T' },
        { name: '굴소스', amount: 1, unit: 'T' },
        { name: '돼지고기 (불고기용)', amount: 300, unit: 'g' },
        { name: '고명용 간장', amount: 1, unit: 'T' },
        { name: '고명용 굴소스', amount: 1, unit: 'T' },
        { name: '고명용 고춧가루', amount: 0.5, unit: 'T' }
    ],
    recipeSteps: [
        "기본 짬뽕 만들기: 팬에 식용유, 대파, 마늘, 고춧가루를 볶아 고추기름을 냅니다.",
        "짬뽕용 돼지고기를 넣고 볶다가 간장, 굴소스를 넣어 불맛을 냅니다.",
        "양파, 배추, 애호박 등 채소를 넣고 센 불에 볶습니다.",
        "육수를 붓고 끓인 뒤, 소금, 후추로 간을 맞춥니다.",
        "고기폭탄 토핑 만들기: 다른 팬에 파기름을 내고, 고명용 고기(300g)를 볶습니다.",
        "고기가 익으면 고명용 간장, 굴소스, 고춧가루로 간을 세게 해서 볶아냅니다.",
        "완성: 삶은 면을 그릇에 담고 짬뽕 국물을 부은 뒤, 볶은 고기를 산더미처럼 쌓아 올립니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/b95jXJ",
    youtubeUrl: "https://www.youtube.com/watch?v=FjZu7_iI-Q0"
  },
  {
    id: 225,
    name: "왕갈비 짬뽕",
    mainCategory: "면",
    subCategory: "얼큰한 국물 국수",
    difficulty: "어려움",
    baseServings: 1,
    ingredientsList: [
        { name: '중화면', amount: 1, unit: '인분' },
        { name: '사골 육수', amount: 500, unit: 'ml' },
        { name: '양파', amount: 0.25, unit: '개' },
        { name: '배추', amount: 2, unit: '잎' },
        { name: '애호박', amount: 30, unit: 'g' },
        { name: '고춧가루', amount: 2, unit: 'T' },
        { name: '굴소스', amount: 1, unit: 'T' },
        { name: '돼지 등갈비(왕갈비)', amount: 2, unit: '대' },
        { name: '갈비찜용 간장', amount: 3, unit: 'T' },
        { name: '갈비찜용 설탕', amount: 1.5, unit: 'T' },
        { name: '갈비찜용 맛술', amount: 1, unit: 'T' },
        { name: '갈비찜용 다진 마늘', amount: 1, unit: 'T' }
    ],
    recipeSteps: [
        "왕갈비 토핑 만들기: 왕갈비는 핏물을 빼고 한번 삶아 불순물을 제거합니다.",
        "갈비찜 양념(간장, 설탕, 맛술, 마늘 등)에 1시간 이상 푹 쪄서 부드럽게 만듭니다. (압력솥 사용 추천)",
        "짬뽕 국물 만들기: 팬에 고추기름을 내고 채소를 볶습니다.",
        "육수를 붓고 끓인 뒤, 굴소스, 소금, 후추로 간을 맞춥니다.",
        "완성: 삶은 면을 그릇에 담고 짬뽕 국물을 부은 뒤, 쪄낸 왕갈비를 통째로 올립니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/b95jex",
    youtubeUrl: "https://www.youtube.com/watch?v=hB9ST5H6Y-g"
  },
  {
    id: 226,
    name: "대만식 고기폭탄 우육면",
    mainCategory: "면",
    subCategory: "따뜻한 국물 국수",
    difficulty: "어려움",
    baseServings: 1,
    ingredientsList: [
        { name: '중면', amount: 1, unit: '인분' },
        { name: '소고기 사태', amount: 400, unit: 'g' },
        { name: '소고기 육수', amount: 600, unit: 'ml' },
        { name: '청경채', amount: 1, unit: '개' },
        { name: '대파', amount: 0.5, unit: '대' },
        { name: '마늘', amount: 3, unit: '쪽' },
        { name: '생강', amount: 1, unit: '쪽' },
        { name: '간장', amount: 3, unit: 'T' },
        { name: '굴소스', amount: 1, unit: 'T' },
        { name: '설탕', amount: 1, unit: 'T' },
        { name: '팔각', amount: 2, unit: '개' }
    ],
    recipeSteps: [
        "소고기 덩어리는 핏물을 뺀 후 겉면을 팬에 노릇하게 굽습니다.",
        "냄비에 기름을 두르고 대파, 마늘, 생강을 볶아 향을 냅니다.",
        "향신료(팔각 등)를 넣고 볶다가 간장, 굴소스, 설탕을 넣어 끓입니다.",
        "구운 소고기와 육수를 붓고, 고기가 아주 부드러워질 때까지 1.5~2시간 푹 끓입니다.",
        "삶은 면을 그릇에 담고, 데친 청경채를 올린 뒤 국물을 붓습니다.",
        "푹 익은 소고기를 듬뿍 썰어서 고명으로 올립니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/b95jsS",
    youtubeUrl: "https://www.youtube.com/watch?v=yY-3s3p7_9I"
  },
  {
    id: 227,
    name: "차슈 폭탄 라멘",
    mainCategory: "면",
    subCategory: "따뜻한 국물 국수",
    difficulty: "어려움",
    baseServings: 1,
    ingredientsList: [
        { name: '라멘 생면', amount: 1, unit: '인분' },
        { name: '시판 돈코츠 라멘 육수', amount: 1, unit: '팩' },
        { name: '돼지고기 삼겹살 덩어리', amount: 400, unit: 'g' },
        { name: '맛계란', amount: 1, unit: '개' },
        { name: '대파', amount: 0.25, unit: '대' },
        { name: '숙주', amount: 1, unit: '줌' },
        { name: '조림용 물', amount: 3, unit: '컵' },
        { name: '조림용 간장', amount: 1, unit: '컵' },
        { name: '조림용 맛술', amount: 0.5, unit: '컵' },
        { name: '조림용 설탕', amount: 0.5, unit: '컵' }
    ],
    recipeSteps: [
        "차슈 만들기: 삼겹살 덩어리를 말아 실로 묶고, 팬에 겉면을 노릇하게 굽습니다.",
        "냄비에 조림장 재료(물, 간장, 맛술, 설탕 등)와 구운 고기를 넣고 1~2시간 약불에 푹 조립니다.",
        "고기를 건져 식힌 뒤 얇게 10~15장 썹니다. (토치로 그을리면 '바베큐' 풍미가 더해집니다)",
        "라멘 완성: 시판 육수를 끓이고 면을 삶습니다.",
        "그릇에 면과 육수를 담고, 맛계란, 대파, 숙주를 올립니다.",
        "그릇 가장자리에 차슈를 꽃잎처럼 겹쳐서 그릇을 완전히 덮도록 둘러 담습니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/b95jIM",
    youtubeUrl: "https://www.youtube.com/watch?v=0tzo22y2iXo"
  },
  {
    id: 228,
    name: "중국식 왕갈비 국수",
    mainCategory: "면",
    subCategory: "따뜻한 국물 국수",
    difficulty: "어려움",
    baseServings: 1,
    ingredientsList: [
        { name: '중화면', amount: 1, unit: '인분' },
        { name: '맑은 소고기 육수', amount: 500, unit: 'ml' },
        { name: '청경채', amount: 1, unit: '개' },
        { name: '돼지 등갈비(왕갈비)', amount: 2, unit: '대' },
        { name: '조림용 간장', amount: 3, unit: 'T' },
        { name: '노추 (색내기용)', amount: 1, unit: 'T' },
        { name: '설탕', amount: 1.5, unit: 'T' },
        { name: '팔각', amount: 1, unit: '개' },
        { name: '계피', amount: 1, unit: '조각' }
    ],
    recipeSteps: [
        "왕갈비찜 만들기: 갈비 핏물을 빼고 한번 삶아냅니다.",
        "팬에 기름과 설탕을 녹여 캐러멜색을 낸 뒤, 갈비를 볶아 코팅합니다.",
        "간장, 노추, 향신료, 물을 붓고 갈비가 부드러워질 때까지 1시간 이상 푹 조립니다.",
        "국수 완성: 삶은 면을 그릇에 담고, 맑은 육수(소금 간)를 붓고 데친 청경채를 올립니다.",
        "그 위에 별도로 조리한 '중국식 왕갈비찜'을 푸짐하게 올립니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/b95jex",
    youtubeUrl: "https://www.youtube.com/watch?v=F3_8_L0YhV0"
  },
  // 볶음밥
  {
      id: 101,
      name: "김치볶음밥",
      mainCategory: "볶음밥",
      subCategory: "클래식 볶음밥",
      difficulty: "쉬움",
      baseServings: 1,
      ingredientsList: [
        { name: '밥', amount: 1, unit: '공기' },
        { name: '신김치', amount: 150, unit: 'g' },
        { name: '돼지고기/참치/베이컨/햄', amount: 50, unit: 'g' },
        { name: '양파', amount: 0.25, unit: '개' },
        { name: '대파', amount: 0.5, unit: '대' },
        { name: '계란 프라이', amount: 1, unit: '개' },
        { name: '김가루', amount: 0, unit: '약간' },
        { name: '식용유', amount: 2, unit: 'T' },
        { name: '설탕', amount: 0.5, unit: 'T' },
        { name: '고춧가루', amount: 0.5, unit: 'T' },
        { name: '간장', amount: 1, unit: 'T' },
        { name: '참기름', amount: 1, unit: 't' }
      ],
      recipeSteps: [
        "대파를 송송 썰어 식용유에 볶아 파기름을 냅니다.",
        "돼지고기(또는 햄 등)와 양파를 넣고 볶아줍니다.",
        "고기가 익으면 잘게 썬 김치와 설탕, 고춧가루를 넣고 김치가 투명해질 때까지 볶습니다.",
        "찬밥을 넣고 주걱으로 잘 섞어가며 볶아줍니다.",
        "팬 가장자리에 간장을 둘러 불맛을 냅니다.",
        "불을 끄고 참기름과 김가루를 섞은 후, 계란 프라이를 올려 완성합니다."
      ],
      purchaseUrl: "https://link.coupang.com/a/b41Fau",
      youtubeUrl: 'https://www.youtube.com/watch?v=sO4z2aQ_L9w'
  },
  {
      id: 102,
      name: "새우볶음밥",
      mainCategory: "볶음밥",
      subCategory: "해물 볶음밥",
      difficulty: "쉬움",
      baseServings: 1,
      ingredientsList: [
          { name: '밥', amount: 1, unit: '공기' },
          { name: '칵테일 새우', amount: 80, unit: 'g' },
          { name: '계란', amount: 2, unit: '개' },
          { name: '대파', amount: 0.5, unit: '대' },
          { name: '양파', amount: 0.25, unit: '개' },
          { name: '당근', amount: 30, unit: 'g' },
          { name: '굴소스', amount: 1, unit: 'T' },
          { name: '소금', amount: 0, unit: '약간' },
          { name: '후추', amount: 0, unit: '약간' },
      ],
      recipeSteps: [
          "새우는 해동 후 맛술로 밑간을 해둡니다. 채소는 잘게 다집니다.",
          "팬에 기름을 두르고 대파를 볶아 파기름을 냅니다.",
          "양파와 당근을 넣고 볶다가 새우를 넣고 소금, 후추로 간을 합니다.",
          "팬의 한쪽에서 계란 스크램블을 만들어 섞어줍니다.",
          "찬밥을 넣고 볶다가 굴소스로 간을 하고 참기름/후추로 마무리합니다."
      ],
      purchaseUrl: 'https://link.coupang.com/a/b41FhU',
      youtubeUrl: 'https://www.youtube.com/watch?v=d_2A-Sa4a8w'
  },
  {
    id: 103,
    name: "계란 볶음밥",
    mainCategory: "볶음밥",
    subCategory: "클래식 볶음밥",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
      { name: '밥', amount: 1, unit: '공기' },
      { name: '계란', amount: 3, unit: '알' },
      { name: '대파 (흰 부분)', amount: 1, unit: '대' },
      { name: '굴소스', amount: 1, unit: 'T' },
      { name: '간장', amount: 0.5, unit: 'T' },
      { name: '소금', amount: 0, unit: '약간' },
      { name: '후추', amount: 0, unit: '약간' },
      { name: '식용유', amount: 3, unit: 'T' }
    ],
    recipeSteps: [
      "대파 흰 부분을 송송 썰어 기름에 볶아 파기름을 충분히 냅니다.",
      "팬 한쪽으로 파를 밀고, 풀어둔 계란을 부어 스크램블을 만듭니다.",
      "찬밥을 넣고 주걱을 세워 자르듯이 밥알을 풀어가며 볶습니다.",
      "밥알이 고슬고슬해지면 굴소스와 간장을 팬 가장자리에 둘러 불맛을 냅니다.",
      "소금과 후추로 최종 간을 맞추고 쪽파를 뿌려 마무리합니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/b41FhU",
    youtubeUrl: "https://www.youtube.com/watch?v=s6cvm_a8o-0"
  },
  {
    id: 104,
    name: "삼겹살 김치볶음밥",
    mainCategory: "볶음밥",
    subCategory: "고기 볶음밥",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
      { name: '삼겹살', amount: 150, unit: 'g' },
      { name: '신김치', amount: 150, unit: 'g' },
      { name: '밥', amount: 1, unit: '공기' },
      { name: '대파', amount: 0.5, unit: '대' },
      { name: '깻잎', amount: 5, unit: '장' },
      { name: '김가루', amount: 0, unit: '약간' },
      { name: '고춧가루', amount: 0.5, unit: 'T' },
      { name: '설탕', amount: 0.5, unit: 'T' },
      { name: '참기름', amount: 1, unit: 't' }
    ],
    recipeSteps: [
      "삼겹살을 노릇하게 구워 기름을 낸 후, 먹기 좋게 자릅니다.",
      "삼겹살 기름에 파를 볶아 향을 냅니다.",
      "신김치와 설탕, 고춧가루를 넣고 충분히 볶아줍니다.",
      "찬밥을 넣고 고기와 김치, 밥이 잘 섞이도록 볶습니다.",
      "불을 끄고 참기름을 두른 뒤, 김가루와 채 썬 깻잎을 올려 마무리합니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/b9yWf1",
    youtubeUrl: "https://www.youtube.com/watch?v=2pA_wW9z-mI"
  },
  {
    id: 106,
    name: "카레 볶음밥",
    mainCategory: "볶음밥",
    subCategory: "소스/퓨전 볶음밥",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
      { name: '밥', amount: 1, unit: '공기' },
      { name: '카레 가루', amount: 2, unit: 'T' },
      { name: '감자', amount: 50, unit: 'g' },
      { name: '당근', amount: 30, unit: 'g' },
      { name: '양파', amount: 0.25, unit: '개' },
      { name: '햄', amount: 50, unit: 'g' },
      { name: '계란', amount: 1, unit: '개' }
    ],
    recipeSteps: [
      "모든 채소와 햄은 작은 깍둑썰기를 합니다. (감자와 당근은 미리 살짝 익혀두면 좋습니다.)",
      "팬에 기름을 두르고 파기름을 낸 후, 단단한 채소(감자, 당근)부터 볶습니다.",
      "양파와 햄을 넣고 볶다가 카레 가루를 넣고 타지 않게 볶아 향을 냅니다.",
      "찬밥을 넣고 볶은 후, 한쪽에서 계란 스크램블을 만들어 섞어줍니다.",
      "부족한 간은 소금/후추로 맞춥니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/b9yWzN",
    youtubeUrl: "https://www.youtube.com/watch?v=0hYV-8ThREk"
  },
  {
    id: 108,
    name: "갈릭 볶음밥",
    mainCategory: "볶음밥",
    subCategory: "소스/퓨전 볶음밥",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
      { name: '밥', amount: 1, unit: '공기' },
      { name: '마늘 (다진 것)', amount: 1, unit: 'T' },
      { name: '마늘 (편 썬 것)', amount: 1, unit: 'T' },
      { name: '베이컨', amount: 2, unit: '줄' },
      { name: '계란', amount: 1, unit: '개' },
      { name: '버터', amount: 1, unit: 't' },
      { name: '굴소스', amount: 0.5, unit: 'T' },
      { name: '후추', amount: 0, unit: '약간' }
    ],
    recipeSteps: [
      "팬에 기름을 두르고 편 마늘을 노릇하게 튀겨 건져둡니다 (토핑용).",
      "같은 팬에 다진 마늘과 베이컨을 넣고 볶아 향을 냅니다.",
      "한쪽에서 계란 스크램블을 만들어 섞습니다.",
      "찬밥을 넣고 볶다가 굴소스나 소금으로 간을 합니다.",
      "불을 끄고 버터와 후추를 넣어 섞은 후, 튀긴 마늘을 올려 마무리합니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/b9yWOm",
    youtubeUrl: "https://www.youtube.com/watch?v=Kz4D52nw-Ag"
  },
  {
    id: 112,
    name: "닭갈비 볶음밥",
    mainCategory: "볶음밥",
    subCategory: "K-후식 볶음밥",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
      { name: '남은 닭갈비 양념/건더기', amount: 1, unit: '컵' },
      { name: '밥', amount: 1, unit: '공기' },
      { name: '김치', amount: 50, unit: 'g' },
      { name: '깻잎', amount: 5, unit: '장' },
      { name: '김가루', amount: 0, unit: '약간' },
      { name: '모차렐라 치즈', amount: 50, unit: 'g' },
      { name: '참기름', amount: 1, unit: 'T' }
    ],
    recipeSteps: [
      "남은 닭갈비 건더기와 양념을 가위로 잘게 자릅니다.",
      "팬에 김치를 넣고 볶다가 닭갈비와 함께 볶습니다.",
      "찬밥을 넣고 양념과 잘 섞이도록 볶아줍니다.",
      "밥을 넓게 편 후, 채 썬 깻잎과 김가루를 뿌리고 가운데에 모차렐라 치즈를 올립니다.",
      "뚜껑을 덮어 치즈를 녹인 후, 참기름을 둘러 마무리합니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/b9yXiw",
    youtubeUrl: "https://www.youtube.com/watch?v=n8uGqL8_p84"
  },
  {
    id: 113,
    name: "낙지/쭈꾸미 볶음밥",
    mainCategory: "볶음밥",
    subCategory: "K-후식 볶음밥",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
      { name: '남은 볶음 양념', amount: 1, unit: '컵' },
      { name: '밥', amount: 1, unit: '공기' },
      { name: '날치알', amount: 2, unit: 'T' },
      { name: '김가루', amount: 0, unit: '약간' },
      { name: '깻잎/쪽파', amount: 0, unit: '약간' },
      { name: '참기름', amount: 1, unit: 'T' }
    ],
    recipeSteps: [
      "남은 낙지/쭈꾸미 볶음 양념에 밥을 넣고 볶습니다.",
      "밥이 잘 섞이면 날치알, 김가루, 채 썬 깻잎/쪽파를 넣고 가볍게 섞습니다.",
      "참기름을 둘러 마무리합니다.",
      "팁: 팬에 얇게 눌러 누룽지를 만들어 먹으면 더욱 맛있습니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/b9yXq1",
    youtubeUrl: "https://www.youtube.com/watch?v=jP-SClH_Hqk"
  },
  {
    id: 114,
    name: "명란 볶음밥",
    mainCategory: "볶음밥",
    subCategory: "특별 재료 볶음밥",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
      { name: '밥', amount: 1, unit: '공기' },
      { name: '명란젓', amount: 1, unit: '개' },
      { name: '대파', amount: 0.5, unit: '대' },
      { name: '다진 마늘', amount: 0.5, unit: 't' },
      { name: '계란 노른자', amount: 1, unit: '개' },
      { name: '김가루', amount: 0, unit: '약간' },
      { name: '마요네즈', amount: 1, unit: 'T' }
    ],
    recipeSteps: [
      "명란젓은 칼집을 내어 알만 발라냅니다.",
      "팬에 기름을 두르고 파와 마늘을 볶아 향을 냅니다.",
      "불을 살짝 줄이고 명란 알을 넣어 볶아줍니다.",
      "찬밥을 넣고 명란과 잘 섞이도록 볶습니다 (명란이 짜므로 간은 따로 하지 않아도 됩니다).",
      "불을 끄고 마요네즈를 넣어 섞은 후, 김가루와 계란 노른자를 올려 마무리합니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/b9yXAN",
    youtubeUrl: "https://www.youtube.com/watch?v=L-S-Muj2WJY"
  },
  {
    id: 115,
    name: "참치김치마요 볶음밥",
    mainCategory: "볶음밥",
    subCategory: "특별 재료 볶음밥",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
      { name: '캔 참치', amount: 100, unit: 'g' },
      { name: '신김치', amount: 100, unit: 'g' },
      { name: '밥', amount: 1, unit: '공기' },
      { name: '대파', amount: 0.5, unit: '대' },
      { name: '마요네즈', amount: 2, unit: 'T' },
      { name: '설탕', amount: 0.5, unit: 'T' },
      { name: '간장 (선택)', amount: 0.5, unit: 'T' }
    ],
    recipeSteps: [
      "참치는 기름을 빼고, 김치는 잘게 썹니다.",
      "팬에 기름을 두르고 파기름을 낸 후, 참치와 김치, 설탕을 넣고 볶습니다.",
      "찬밥을 넣고 볶다가, 팬 가장자리에 간장을 둘러 불맛을 냅니다.",
      "불을 끄고 마요네즈를 듬뿍 넣어 잘 섞어주면 완성입니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/b9yXJk",
    youtubeUrl: "https://www.youtube.com/watch?v=rWl-jCFs8aw"
  },
  {
    id: 116,
    name: "옥수수 마요 볶음밥",
    mainCategory: "볶음밥",
    subCategory: "특별 재료 볶음밥",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
      { name: '밥', amount: 1, unit: '공기' },
      { name: '캔 옥수수', amount: 0.5, unit: '컵' },
      { name: '햄', amount: 50, unit: 'g' },
      { name: '계란', amount: 1, unit: '개' },
      { name: '대파', amount: 0.5, unit: '대' },
      { name: '마요네즈', amount: 2, unit: 'T' },
      { name: '소금', amount: 0, unit: '약간' },
      { name: '후추', amount: 0, unit: '약간' }
    ],
    recipeSteps: [
      "옥수수는 물기를 빼고, 햄은 잘게 썹니다.",
      "팬에 기름을 두르고 파기름을 낸 후, 햄을 볶습니다.",
      "한쪽에서 계란 스크램블을 만들고, 옥수수를 넣어 함께 볶습니다.",
      "찬밥을 넣고 볶다가 소금과 후추로 간을 합니다.",
      "불을 끄고 마요네즈를 넣어 잘 섞어주면 톡톡 터지는 식감의 볶음밥 완성입니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/b9yXSR",
    youtubeUrl: "https://www.youtube.com/watch?v=mQ6y-tyoM58"
  },
  {
    id: 117,
    name: "컬리플라워 라이스 볶음밥",
    mainCategory: "볶음밥",
    subCategory: "건강/대체 볶음밥",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
      { name: '컬리플라워 라이스', amount: 200, unit: 'g' },
      { name: '닭가슴살', amount: 100, unit: 'g' },
      { name: '계란', amount: 1, unit: '개' },
      { name: '각종 채소 (양파, 파프리카 등)', amount: 100, unit: 'g' },
      { name: '굴소스', amount: 1, unit: 'T' },
      { name: '소금', amount: 0, unit: '약간' },
      { name: '후추', amount: 0, unit: '약간' }
    ],
    recipeSteps: [
      "냉동 컬리플라워 라이스는 마른 팬에 볶아 수분을 날려줍니다.",
      "팬에 기름을 두르고 파기름을 낸 후, 닭가슴살과 채소를 볶습니다.",
      "한쪽에서 계란 스크램블을 만들어 섞습니다.",
      "수분을 날린 컬리플라워 라이스를 넣고 함께 볶습니다.",
      "굴소스, 소금, 후추로 간을 맞춰 마무리합니다. (밥 대신 사용하여 탄수화물을 줄인 레시피입니다.)"
    ],
    purchaseUrl: "https://link.coupang.com/a/b9yXXg",
    youtubeUrl: "https://www.youtube.com/watch?v=lcaOa7g73wA"
  },
  // 면
  {
      id: 202,
      name: "비빔국수",
      mainCategory: "면",
      subCategory: "매콤한 비빔 국수",
      difficulty: "쉬움",
      baseServings: 1,
      ingredientsList: [
          { name: '소면', amount: 100, unit: 'g' },
          { name: '신김치', amount: 80, unit: 'g' },
          { name: '오이', amount: 0.25, unit: '개' },
          { name: '삶은 계란', amount: 0.5, unit: '개' },
          { name: '고추장', amount: 2, unit: 'T' },
          { name: '고춧가루', amount: 1, unit: 'T' },
          { name: '설탕', amount: 1, unit: 'T' },
          { name: '식초', amount: 1.5, unit: 'T' },
          { name: '간장', amount: 1, unit: 'T' },
          { name: '다진 마늘', amount: 0.5, unit: 'T' },
          { name: '참기름', amount: 1, unit: 'T' }
      ],
      recipeSteps: [
          "면을 삶아 찬물에 헹궈 물기를 꽉 짠다.",
          "분량의 재료로 양념장을 만든다.",
          "면, 채 썬 채소, 양념장을 모두 넣고 비빈다.",
          "삶은 계란을 올려 마무리한다."
      ],
      purchaseUrl: 'https://link.coupang.com/a/b41FxV',
      youtubeUrl: 'https://www.youtube.com/watch?v=Ixs_W0qAAbQ'
  },
  {
    id: 203,
    name: "베트남 쌀국수",
    mainCategory: "면",
    subCategory: "따뜻한 국물 국수",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
        { name: '쌀국수 면', amount: 100, unit: 'g' },
        { name: '소고기 (차돌박이)', amount: 80, unit: 'g' },
        { name: '숙주', amount: 1, unit: '줌' },
        { name: '양파', amount: 0.25, unit: '개' },
        { name: '시판 쌀국수 육수', amount: 400, unit: 'ml' },
        { name: '고수, 라임 (선택)', amount: 0, unit: '약간' }
    ],
    recipeSteps: [
        "쌀국수 면은 미리 물에 불려둔다.",
        "그릇에 불린 면, 숙주, 얇게 썬 양파와 소고기를 담는다.",
        "시판 육수를 팔팔 끓여 부어주어 고기를 익힌다.",
        "취향에 따라 고수, 라임, 해선장, 스리라차 소스를 곁들인다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/b949im',
    youtubeUrl: 'https://www.youtube.com/watch?v=2f357l_e8rY'
  },
  {
    id: 205,
    name: "메밀소바",
    mainCategory: "면",
    subCategory: "시원한 국물 국수",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
        { name: '메밀면', amount: 100, unit: 'g' },
        { name: '시판 쯔유', amount: 100, unit: 'ml' },
        { name: '물', amount: 200, unit: 'ml' },
        { name: '무', amount: 50, unit: 'g' },
        { name: '쪽파', amount: 0, unit: '약간' },
        { name: '와사비', amount: 0, unit: '약간' }
    ],
    recipeSteps: [
        "쯔유와 물을 1:2 비율로 희석해 냉동실에 넣어 살얼음이 끼게 만든다.",
        "메밀면을 삶아 얼음물에 헹궈 물기를 뺀다.",
        "차가운 쯔유에 간 무, 송송 썬 쪽파, 와사비를 푼다.",
        "면을 쯔유에 찍어 먹는다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/b949C6',
    youtubeUrl: 'https://www.youtube.com/watch?v=Jb-ILhDeTVg'
  },
  {
    id: 206,
    name: "콩국수",
    mainCategory: "면",
    subCategory: "시원한 국물 국수",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
        { name: '소면', amount: 100, unit: 'g' },
        { name: '두부', amount: 0.5, unit: '모' },
        { name: '볶은 콩가루', amount: 2, unit: 'T' },
        { name: '견과류 (잣/땅콩)', amount: 1, unit: 'T' },
        { name: '물', amount: 200, unit: 'ml' },
        { name: '오이, 토마토', amount: 0, unit: '약간' },
        { name: '소금/설탕', amount: 0, unit: '취향껏' }
    ],
    recipeSteps: [
        "믹서에 두부, 볶은 콩가루, 견과류, 물, 소금을 넣고 곱게 간다.",
        "만들어진 콩국을 냉장고에 넣어 아주 차갑게 식힌다.",
        "소면을 삶아 헹군 뒤 그릇에 담고 차가운 콩국을 붓는다.",
        "채 썬 오이와 토마토를 고명으로 올리고, 소금이나 설탕으로 간을 맞춰 먹는다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/b949Me',
    youtubeUrl: 'https://www.youtube.com/watch?v=NnMyR2u6yJ8'
  },
  {
    id: 210,
    name: "쫄면",
    mainCategory: "면",
    subCategory: "매콤한 비빔 국수",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
        { name: '쫄면 사리', amount: 1, unit: '인분' },
        { name: '콩나물', amount: 1, unit: '줌' },
        { name: '양배추', amount: 1, unit: '줌' },
        { name: '삶은 계란', amount: 1, unit: '개' },
        { name: '고추장', amount: 3, unit: 'T' },
        { name: '식초', amount: 2, unit: 'T' },
        { name: '설탕', amount: 2, unit: 'T' },
        { name: '고춧가루', amount: 1, unit: 'T' },
        { name: '다진 마늘', amount: 1, unit: 'T' }
    ],
    recipeSteps: [
        "면을 삶아 찬물에 헹군다. 콩나물은 따로 삶아 식힌다.",
        "분량의 재료를 섞어 양념장을 만든다.",
        "그릇에 면, 채 썬 채소, 콩나물, 양념장을 넣고 비빈다.",
        "삶은 계란을 올려 마무리한다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/b95aF8',
    youtubeUrl: 'https://www.youtube.com/watch?v=f-3n1-z-d_8'
  },
  {
    id: 213,
    name: "볶음우동",
    mainCategory: "면",
    subCategory: "소스가 핵심인 면요리",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
        { name: '우동면', amount: 1, unit: '인분' },
        { name: '돼지고기 (or 해물)', amount: 80, unit: 'g' },
        { name: '양배추, 숙주, 양파', amount: 1, unit: '줌' },
        { name: '굴소스', amount: 2, unit: 'T' },
        { name: '간장', amount: 1, unit: 'T' },
        { name: '설탕', amount: 1, unit: 'T' },
        { name: '가쓰오부시', amount: 0, unit: '약간' }
    ],
    recipeSteps: [
        "우동면은 살짝 데쳐둔다.",
        "팬에 파기름과 고기를 볶고 채소를 볶는다.",
        "데친 면과 소스(굴소스, 간장, 설탕, 맛술)를 넣고 센 불에 볶는다.",
        "불 끄기 직전 숙주를 넣고, 접시에 담아 가쓰오부시를 뿌린다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/b95bsy',
    youtubeUrl: 'https://www.youtube.com/watch?v=l8D-68O0R-s'
  },
  {
    id: 214,
    name: "알리오 올리오",
    mainCategory: "면",
    subCategory: "파스타",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
        { name: '스파게티 면', amount: 100, unit: 'g' },
        { name: '마늘 (편 썬 것)', amount: 5, unit: '쪽' },
        { name: '페페론치노 (건고추)', amount: 2, unit: '개' },
        { name: '올리브 오일', amount: 3, unit: 'T' },
        { name: '면수 (면 삶은 물)', amount: 100, unit: 'ml' }
    ],
    recipeSteps: [
        "면을 삶는다 (포장지에 적힌 시간보다 1분 덜).",
        "팬에 올리브 오일, 마늘, 페페론치노를 약불에 볶아 향을 낸다.",
        "삶은 면과 '면수'를 넣고 센 불로 올려 빠르게 저어 소스를 걸쭉하게 만든다(유화).",
        "소금, 후추로 간을 하고 마무리한다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/b95bH4',
    youtubeUrl: 'https://www.youtube.com/watch?v=4x-2-dJg-3U'
  },
  {
    id: 216,
    name: "아라비아따",
    mainCategory: "면",
    subCategory: "파스타",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
        { name: '펜네 (or 스파게티)', amount: 100, unit: 'g' },
        { name: '홀토마토 (캔)', amount: 200, unit: 'g' },
        { name: '마늘 (편)', amount: 3, unit: '쪽' },
        { name: '페페론치노', amount: 3, unit: '개' },
        { name: '올리브 오일', amount: 2, unit: 'T' }
    ],
    recipeSteps: [
        "팬에 올리브 오일, 마늘, 페페론치노를 볶아 매운 향을 낸다.",
        "베이컨(선택)을 볶다 으깬 홀토마토를 넣고 끓인다.",
        "삶은 면과 면수를 넣고 섞어 졸인다.",
        "소금, 후추로 간을 하고 파슬리(선택)를 뿌린다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/b95cgX',
    youtubeUrl: 'https://www.youtube.com/watch?v=R5oT_sTeK-M'
  },
  {
    id: 218,
    name: "로제 파스타",
    mainCategory: "면",
    subCategory: "파스타",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
        { name: '파스타면', amount: 100, unit: 'g' },
        { name: '베이컨', amount: 50, unit: 'g' },
        { name: '양파', amount: 0.25, unit: '개' },
        { name: '마늘', amount: 2, unit: '쪽' },
        { name: '시판 토마토소스', amount: 150, unit: 'ml' },
        { name: '생크림', amount: 100, unit: 'ml' }
    ],
    recipeSteps: [
        "팬에 오일, 마늘, 양파, 베이컨을 볶는다.",
        "토마토소스를 붓고 끓이다가 생크림을 부어 로제색을 만든다.",
        "삶은 면을 넣고 섞어 졸인다.",
        "소금, 후추로 간을 하고 파슬리(선택)를 뿌린다."
    ],
    purchaseUrl: 'https://link.coupang.com/a/b95cO5',
    youtubeUrl: 'https://www.youtube.com/watch?v=pAYy_E9i-ug'
  }
];