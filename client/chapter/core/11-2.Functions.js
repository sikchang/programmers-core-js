/* 
일급 함수 first class function :  함수를 값으로 취급하는 것

자바스크립트에서 함수는 값이다. 실행한 결과도 줄 순 있지만 본문을 줄 수도 있다.
합수는 실행(return)하냐 실행(본문)하지 않냐에 크게 차이남
*/

/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

// 함수 선언문
function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  //집합 데이터
  // 함수 안에서만 접근 가능한 인수들의 집합 객체: arguments
  // console.log(arguments);

  let total = 0;

  // for문 total 내보내기
  // for (let i = 0; i < arguments.length; i++){
  //   total += arguments[i];
  // }

  // return total

  //for...of
  // for (const value of arguments) { total += value; }
  // return total

  // 배열의 메서드
  // forEach, reduce, map, filter ...

  // const arr = Array.prototype.slice.call(arguments); // 첫 번째 배열 만드는 방법
  // array instance method

  // const arr = Array.from(arguments);
  // array static method

  const arr = [...arguments];
  // spread syntax (전개구문)

  // arr.forEach(function (value) {
  //   // 각각의 아이템들을 순환해주는 것
  //   // console.log(`${index} : ${value}`); // 기본  사용 방법
  //   total += value;
  // })
  // return total;

  // console.log(arr);
  // prev를 acc(누적값)로 자주 쓴다.
  /* arr.reduce(function (acc, current) {
  // return arr.reduce(function (acc, current, index) {
    // console.log(current);
    return acc + current
  },0) */

  /* return arr.reduce(function (acc, current) {
    return acc + current;
  }, 0); */

  /*
    forEach : 값을 반환하지 X
    reduce : 새로운 값을 반환 (any)
  */

  // arguments => 유사배열 => 1회성으로 한번만 사용하고 싶다면 forEach를 사용하긴 하는데 빌려쓴다 .call
  // first : 빌리는 대상 (arguments)
  // second : 인수
  /* Array.prototype.forEach.call(arguments, function (value) {

    total += value;
  });
  return total */

  // 바꿔치기(부모)
  arguments.__proto__ = Array.prototype

  console.log(arguments);

};
const result = calculateTotal(1000, 3000, 5000, 2300);
console.log(result);


console.clear();
/*
  forEach : 값을 반환하지 X
  reduce  : 새로운 값을 반환 (any)
  map     : 새로운 배열을 반환
  filter  : 새로운 배열을 반환
*/
const friends = ['홍길동', '이순신', '장보고'];

const newFrieds = friends.map(function (name, index) {
  return `<li data-order="${index}">이름 : [FE]${name}</li>`;
})

console.log(newFrieds);

document.body.insertAdjacentHTML('beforeend',newFrieds.join(''))


// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {
  
};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {
  
};

namedFunctionExpression();

// 콜백 함수 (표현)식
let cb = function (condition, success,fail) {

  if (condition) success()
  else fail()


};

cb(
  false,
  function () {console.log('성공');},
  function () {console.log('실패');}
)


function movePage(url,success,fail) {
  
  if (url.includes('https')) {
    success(url)
  } else {
    fail()
  }
}

movePage(
  'httpsL//www.naver.com',
  function (url) {
    console.log(`현재 입력하신 url은 ${url}입니다.`);
  },
  function () {
    console.log('잘못된 url입니다.');
  }
)

/* function getGeolocation(success) {
  navigator.geolocation.getCurrentPosition(function (so) {
    const data = so.coords.latitude;
    
    success(data); // arguments
  
  })
} */

// promise
// async await

// getGeolocation(function (value) {
//   console.log(value);
// });


// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;



// encapsulation (캡슐화) => closure
// module programming을 많이 사용함
  // import 를 통해서 값을 가져오는 경우가 많음.
const MASTER = (function() {

  let uuid = 'pwdpwdpwd'

  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    },
  };

})()


console.log(MASTER.setKey('123123'));
console.log(MASTER.getKey());

console.clear();





// rem(pxValue : numver|string, vase: number) : string;
  // rem : html의 
// let rem;

function rem(pxValue, base = 16) {

  if (!pxValue) {
    throw new Error('rem 함수의 첫 번째 인수는 필수 입력 값 입니다.')
  }

  if (typeof base === 'string') {
    throw new TypeError('rem 함수의 두 번째 인수는 숫자 타입 이여야 합니다.')
  }

  if (typeof pxValue === 'string') {
    pxValue = parseInt(pxValue);
  }

  return pxValue / base + 'rem'
}

console.assert(rem(20) === '1.25rem');
console.assert(rem('25px') === '1.5625rem')
console.assert(rem('30px',10) === '3rem')



// 1. function 함수의 이름
// 2. argument 함수의 실행부 작성 (함수가 어떤 값을 return하는지)
// 3. parameter 매개변수 확인
// 4. return value
// 5. validation (throw new Error)
// 6. Test Driven Development (TDD)


/* function setCss(node,prop,value){

  if(typeof node === 'string') node = document.querySelector(node);
  
  if(!(prop in document.body.style)) {
    throw new ReferenceError('setCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.');
  }
  if(!value) throw new Error('setCss 함수의 세 번째 인수는 필수 입력 값 입니다.');
  
  node.style[prop] = value;

}

setCss(first,'color','orange');


// getter function

function getCss(node,prop){

  if(typeof node === 'string'){
    node = document.querySelector(node)
  }

  if(!(prop in document.body)){
    throw new ReferenceError('getCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.');
  }

  return getComputedStyle(node)[prop]
}


const fontSize = getCss('.first','font-size') // '28px' */


// css값을 가져오는(설정) 함수
// setter function
function setCss(gethtml, prop, value) {
  if (typeof gethtml === 'string') gethtml = document.querySelector(gethtml);
  //gethtml = document.querySelector(gethtml);

  if (!(prop in document.body.style)) {
    throw new TypeError(
      'setCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.'
    );
  }

  if(!value) throw new Error('setCss 함수의 세 번째 인수는 필수 입력 값입니다.')

  gethtml.style[prop] = value;
}

//대상을 잡고 스타일에 접근해서 무엇으로 바꾸겠다.
setCss(`.first`, `color`, `orange`);


// getter function
function getCss(gethtml,prop) {

  if (typeof gethtml === 'string') {
    gethtml = document.querySelector(gethtml)
  }
  if (!(prop in document.body.style))
    throw new ReferenceError('getCss 함수의 두 번째 인수는 유효한 css 속성 이여야 합니다.');

  return getComputedStyle(gethtml)[prop];
}

// getComputedStyle() 함수
const fontSize = getCss('.first', 'font-size') 


function css(node, prop, value) {

  // if (!value) {
  //   return getCss(node,prop)
  // } else {
  //   setCss(node,prop,value)
  // }
  // 위 if문 3항식으로 변형
  return !value ? getCss(node, prop) : setCss(node, prop, value);


}


// css('.first','color'); // get
// css('.first','color','blue'); // set
// console.log(css('.first', 'color'));
// console.log(css('.first', 'color', 'blue')); // set

// const _css = (node, prop, value) => !value ? getCss(node, prop) : setCss(node, prop, value);



(function () {
  function setCss(node,prop,value){

  if(typeof node === 'string') node = document.querySelector(node);
  
  if(!(prop in document.body.style)) {
    throw new ReferenceError('setCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.');
  }
  if(!value) throw new Error('setCss 함수의 세 번째 인수는 필수 입력 값 입니다.');
  
  node.style[prop] = value;

}

  setCss('.first','color','orange');


// getter function

function getCss(node,prop){

  if(typeof node === 'string'){
    node = document.querySelector(node)
  }

  if(!(prop in document.body)){
    throw new ReferenceError('getCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.');
  }

  return getComputedStyle(node)[prop]
}
})()











