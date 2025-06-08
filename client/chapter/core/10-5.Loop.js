/* --------------- */
/* For Of Loop     */
/* --------------- */

// enumerable => 열거 가능한.(조회가 되냐 안되냐)
// iterable   => 반복 가능한.
// mutable    => 변형 가능한.
// immutable    => 변형 할 수 없는

// for...of => iterable(반복 가능한) 요소만 사용 가능

// 배열은 iterable 합니다.
/* 배열의 특징
   여러 자료형을 넣을 수 있다.
   순서(index)가 있다.
   for...in 사용 지양
   length(길이)가 있다.
*/

// 유사배열
const arrayLike = {
    0: 'body',
    1: 'head',
    2: 'div',
    3: ()=>{},
    4: 100,
    length: 5,
    // Symbol(Symbol.iterable) (){},
}

// 문자도 for...of 할 수 있다.
for (const value of 'hello javascript') {
    // console.log(value);
}

// [] => 배열, {} => 객체->value,value가 있음
const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];

Object.prototype.nickName = 'tiger'

// for ~ of 문
for (const value of languages) {
    // console.table(value);
    // console.log(value);
    
    // - 특정 조건에서 건너띄기
    const name = value.name
    if (name.includes('Java') && name.length < 5) continue;
    // console.table(value);
}

// for문 : 모든 데이터 순환 => 예열 코드가 많다.
// for...in : 객체 데이터 순환 => 정해진 아이템의 갯수만큼 => 조상 아이템 순환
// for...of : iterable(반복) 데이터 순환 => 정해진 아이템의 갯수만큼 반복 => 조상 아이템 순환 X

const obj = {
    nickName: 'tiger',
    age:30,
}

// 객채 순환 for...in 써야 함 => 조상 아이템
// hasOwn...
// 객체인데...for..of를 사용하면 안될까?
// symbol.iterator를 입력하면 사용할 수 있긴하지만 할 바에 hasOwn을 사용한다.;;
// 객체를 배열로 만든다면.?

// 객체의 key들을 모아 새로운 배열을 '반환' 하는 유틸 함수
const keys = Object.keys(obj); 
// ['nickName', 'age']

// 객체의 value들을 모아 새로운 배열을 '반환' 하는 유틸 함수
const values = Object.values(obj); 
// ['tiger', 30]

// 객체의 key,value를 모아 한 쌍의 배열로 '반환'하는 유틸 함수
// entries가 가장 많이 사용된다. 꼭 기억해야함.
const entries = Object.entries(obj);

for (const keyvalue of entries) {

    const key = keyvalue[0];
    const value = keyvalue[1];
    
    // console.log(key, value);
}

// - 특정 조건에서 중단하기

const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: {
      offset: '-4:00',
      description: 'Atlantic Time (Canada), Caracas, La Paz',
    },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

// 객체의 키, 값 순환
// - for ~ in 문

/* for (const key in randomUser) {
    
    if (Object.hasOwn(randomUser, key)) {
        // console.log(randomUser[key]);
        
        const L1 = randomUser[key];

        if (typeof L1 === 'object') {
            for (const key in L1) {
                // console.log(L1[key]);

                if (Object.hasOwn(L1, key)) {
                    const L2 = L1[key];

                    if (typeof L2 === 'object') {
                      for (const key in L2) {
                        if (Object.hasOwn(L2, key)) {
                          const L3 = L2[key];

                          console.log(`\t\t\t`, L3);
                        }
                      }
                    }
                }
            }
        }
    }
} */

// - for ~ of 문
for (const keyvalue of Object.entries(randomUser)) {
    const key = keyvalue[0];
    const value = keyvalue[1];
    
    if (typeof value === 'object') {
        for (const keyvalue of Object.entries(value)) {
            const key = keyvalue[0];
            const value = keyvalue[1];
            
            if (typeof value === 'object') {
                for (const keyvalue of Object.entries(value)) {
                    const key = keyvalue[0];
                    const value = keyvalue[1];

                    console.log(value);
                }
            }
        }
    }
}
// 위 복잡한 순환을 하지 않고 편하게 가능한 것이 재귀함수이다.


// - 성능 비교 진단
