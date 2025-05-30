/* -------------------------------------------- */
/*                  Legacy var                  */
/* -------------------------------------------- */

// var로 선언한 변수의 스코프는 함수 스코프이거나 전역 스코프입니다.
// 블록 기준으로 스코프가 생기지 않기 때문에 블록 밖에서 접근 가능합니다.



// var는 변수의 중복 선언을 허용합니다
// var는 블록 스코프를 무시합니다.

// let, const는 블록 스코프를 가집니다.
let a = 10;

{
    let b = 20;
}

console.log(a);


// 선언하기 전 사용할 수 있는 var

// console.log(c);

// var c = 100;
let c = 100;


// 함수는 자신만의 스코프를 따로 가집니다. 함수 스코프 (함수 실행 환경)
// var outside = 'outer';
let outside;

function sum() {
    outside = 'outer';
}


sum()


console.log(outside);

let age = 30;
let nickName = 'sik';

console.log(`나는 ${nickName}야 나이는 ${age}`);

/* 
표현식, 연산자 = 값을 반환
*/

