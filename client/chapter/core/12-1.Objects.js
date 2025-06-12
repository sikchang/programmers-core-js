/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let dialog = {
  position: 'fixed',
  zIndex: '10000',
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uuid: crypto.randomUUID(),
  name: 'sikchang',
  email: 'changsik323@gmail.com',
  isSignIn: false,
  permission: 'paid', // paid | free
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// 객체의 key만을 모아서 배열로 반환하는 객체의 static method는?
const keys = Object.keys(authUser);

function getKeys(obj) {
  let arr = [];

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      arr.push(key);
    }
  }
  return arr;
}

getKeys(authUser);

// 객체의 value만을 모아서 배열로 반환하는 객체의 static method는?
const values = Object.values(authUser);

function getValues(obj) {
  let arr = [];

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      arr.push(obj[key]);
    }
  }
  return arr;
}

getValues(authUser);

// 객체의 key와 value를 하나의 쌍으로 묶어서 새로운 배열을 반환하는 객체의 static method는?
const entries = Object.entries(authUser);

// key,value를 배열로 동시에 나타네는 함수
function getEntries(obj) {
  let arr = [];

  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      arr.push([key, obj[key]]);
    }
  }
  return arr;
}

getEntries(authUser);

// 제거(remove) vs 삭제(delete)
//   비워두기        메모리 제거
function removeProperty(obj, key) {
  // 정확한 타입(유형)을 확인 하기 위해서는 Object.prototype.toString가 필요하다.
  if (isObject(obj)) {
    // if (Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === 'object') {
    obj[key] = null;
  } else {
    throw new Error(
      'removeProperty함수의 첫 번째 인수는 객체 타입만 사용할 수 있습니다.'
    );
  }
}

removeProperty(authUser, 'email');

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel
// 객체 키 값을 유동적으로 받아줄 때 computed property 사용
function createUser(name, age, phone) {
  return {
    name,
    age,
    [calculateProperty + '번호']: phone,
  };
}

// 프로퍼티 포함 여부 확인

// 프로퍼티 나열

// 프로퍼티 제거 or 삭제

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin,
};

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

// 순서(order)를 바꿀 수 없음. 변수명은 내마음대로 가능
// 유사배열에게도 할당이 가능
const arr = [10, 100, 1000, 10_000];

const [a1, , a3, a4] = arr;

// const a1 = arr[0]
// const a2 = arr[1]
// const a3 = arr[2]
console.log(a1, a3, a4);
// console.log(a3,  a1, a4);

const [first, second] = document.querySelectorAll('span');

// const [first, second] = spans;

// console.log(first, second);
// console.log(Object.entries(authUser));

for (const [k, v] of Object.entries(authUser)) {
  console.log(k, v);
}
console.clear();
// Object.entries(authUser).forEach((item)=> console.log(item))
Object.entries(authUser).forEach(([k, v]) => console.log(k, v));

const mapArray = Object.entries(authUser).map(([_, v]) => v);
console.log(mapArray);

const arrow = () => {};

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

console.clear();

// 순서가 필요 없다.
// 별칭(alias) 설정 가능

const salaries = {
  장보고: 400,
  엄준식: 80,
  이순신: 130,
};

// const 장 = salaries.장보고;
// const 엄 = salaries.엄준식;
// const 이 = salaries.이순신;

// const {장보고:장, 엄준식:엄, 이순신:이, 식창:식 = 20} = salaries;
const { 장보고: 장, 엄준식: 엄, ...나머지 } = salaries;

// console.log(장, 엄, 이, 식 );
// console.log(나머지);

const { log: g } = console;

const data = {
  name: '성창식',
  age: 31,
  address: '경기도',
  phone: '010-1234-4321',
  job: '백수',
};

function createUserObject({
    name,
    age,
    address,
    phone,
    job,
    ...rest } = {}) {
  // const { name, age, address, phone,job } = obj;

  return {
    name,
    age,
    address,
    phone,
    job,
    ...rest
  };
}

const user = createUserObject(data);

g(user);

















