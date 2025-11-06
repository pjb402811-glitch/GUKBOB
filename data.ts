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
    name: "김치국밥",
    mainCategory: "국밥",
    subCategory: "얼큰 칼칼한 국밥",
    difficulty: "쉬움",
    baseServings: 1,
    ingredientsList: [
      { name: '멸치 육수', amount: 500, unit: 'ml' },
      { name: '신김치 (송송)', amount: 150, unit: 'g' },
      { name: '돼지고기 (선택)', amount: 50, unit: 'g' },
      { name: '밥', amount: 1, unit: '공기' },
      { name: '계란', amount: 1, unit: '개' },
      { name: '대파', amount: 0.5, unit: '줌' }
    ],
    recipeSteps: [
      "육수 만들기: 물 600ml에 멸치(10마리), 다시마(1장)를 넣고 15분간 끓인 후 건더기를 건집니다. (시판 멸치 육수 500ml로 대체 가능)",
      "냄비에 김치를 송송 썰어 볶습니다. (돼지고기 사용 시 같이 볶습니다)",
      "멸치 육수를 붓고 끓입니다.",
      "국물이 끓으면 밥을 넣고 한소끔 더 끓입니다.",
      "국간장, 소금으로 간을 맞추고, 마지막에 대파와 계란을 풀어 완성합니다."
    ],
    purchaseUrl: "https://link.coupang.com/a/c1t2TE",
    youtubeUrl: 'https://youtu.be/IsvrgIHeau8?si=o1zNYkAVkcqlBulN'
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
        { name: '돼지고기 또는 햄', amount: 50, unit: 'g' },
        { name: '양파', amount: 0.25, unit: '개' },
        { name: '식용유', amount: 2, unit: 'T' },
        { name: '계란', amount: 1, unit: '개' },
        { name: '참기름', amount: 1, unit: 't' }
      ],
      recipeSteps: [
        "김치와 돼지고기(햄), 양파를 잘게 썹니다.",
        "팬에 식용유를 두르고 양파와 돼지고기를 볶아줍니다.",
        "고기가 익으면 김치를 넣고 함께 볶습니다. (김치국물을 조금 넣으면 더 맛있어요)",
        "밥을 넣고 주걱으로 잘 섞어가며 볶아줍니다.",
        "불을 끄고 참기름을 둘러 마무리합니다. 계란 후라이를 올려 함께 드세요."
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
          { name: '계란', amount: 1, unit: '개' },
          { name: '대파', amount: 0.25, unit: '대' },
          { name: '굴소스', amount: 1, unit: 'T' },
          { name: '소금', amount: 0, unit: '약간' },
          { name: '후추', amount: 0, unit: '약간' },
      ],
      recipeSteps: [
          "대파는 송송 썰어 기름에 볶아 파기름을 냅니다.",
          "계란을 풀어 스크램블 에그를 만들어 잠시 덜어둡니다.",
          "파기름에 해동한 새우를 넣고 소금, 후추로 간하며 볶습니다.",
          "새우가 익으면 밥과 굴소스를 넣고 잘 볶아줍니다.",
          "마지막에 만들어둔 스크램블 에그를 넣고 가볍게 섞어 마무리합니다."
      ],
      purchaseUrl: 'https://link.coupang.com/a/b41FhU',
      youtubeUrl: 'https://www.youtube.com/watch?v=d_2A-Sa4a8w'
  },
  // 면
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
          "멸치, 다시마로 육수를 진하게 우려낸 후 국간장과 소금으로 간을 합니다.",
          "애호박과 당근은 채 썰어 살짝 볶아 준비합니다.",
          "계란은 흰자와 노른자를 분리하여 지단을 부쳐 채 썹니다.",
          "소면을 삶아 찬물에 헹궈 물기를 뺍니다.",
          "그릇에 소면을 담고 뜨거운 육수를 부은 뒤, 준비한 고명을 올려 완성합니다."
      ],
      purchaseUrl: 'https://link.coupang.com/a/b41FmS',
      youtubeUrl: 'https://www.youtube.com/watch?v=FqgqX3P6n-E'
  },
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
          { name: '고추장', amount: 1.5, unit: 'T' },
          { name: '설탕', amount: 1, unit: 'T' },
          { name: '식초', amount: 1, unit: 'T' },
          { name: '참기름', amount: 1, unit: 't' },
      ],
      recipeSteps: [
          "소면을 삶아 찬물에 헹궈 물기를 뺍니다.",
          "김치는 송송 썰고, 오이는 채 썹니다.",
          "그릇에 고추장, 설탕, 식초, 참기름을 넣고 잘 섞어 양념장을 만듭니다.",
          "삶은 소면에 양념장과 김치를 넣고 비벼줍니다.",
          "그릇에 담고 채 썬 오이와 삶은 계란을 올려 마무리합니다."
      ],
      purchaseUrl: 'https://link.coupang.com/a/b41FxV',
      youtubeUrl: 'https://www.youtube.com/watch?v=Ixs_W0qAAbQ'
  }
];