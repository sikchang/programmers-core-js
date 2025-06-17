/* ---------------------------- */
/* Functions → Declaration      */
/* ---------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

function getRandomValue(){
  return Math.random() > 0.5 ? 1 : 0;
}

// 함수 선언

function calcPrice(
  priceA,
  priceB = getRandomValue(),
  priceC = getRandomValue(),
  priceD = getRandomValue()
){

  // if(priceD === undefined) priceD = 0;
  // if(!priceD) priceD = 0;
  // priceD = priceD || 0;
  // priceD ||= 1000;
  // priceD = priceD ?? 100;
  // priceD ??= 100;

  if(!priceA){
    throw new Error('calcPrice 함수는 1개 이상의 매개변수를 설정해야 합니다.');
  }


  return priceA + priceB + priceC + priceD
}

// 함수 호출
const result = calcPrice(1000);

console.log( result );


// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건


// 1. 함수는 하나의 기능만을 수행해야 한다.
// 2. 외부변수를 직접 수정하지 않는다.
// 3. 함수는 재사용성이 좋아야 한다. (매개변수)
// 4. 함수는 이름을 잘 지어야 한다.(동사) => 가독성 => 바로 알 수 있게. get..show...
// 5. 인자와 인수는 (4개 이상을 넘지 않는다)



















/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
let rem;




// css(node: string, prop: string, value: number|strung) : string;
let css;





// node의 값을 'h1'으로 받았을 경우 

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 style 속성이 아닐 경우 

// value의 값이 number가 아닌 경우 



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.