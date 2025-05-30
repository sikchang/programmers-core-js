/* ---------------- */
/* Operators        */
/* ---------------- */

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

// prompt는 값이 비워있으면 NaN을 준다
// const first = prompt('첫 번째 값') * 1;
// const second = prompt('두 번째 값') / 1;

// console.log(Number(first) + Number(second));
// console.log((first * 1) + (second * 1));
// console.log((first / 1) + (second / 1));
// console.log(+first + +second);
// console.log(second);

//연산자 : 연산을 표시하기 위한 기호
//피연산자 :

let a = '10';
let b = '30';

// 단항 연산자
let unary = +a;

// 이항 연산자
let binary = +a + +b;
console.log(binary);

// 삼항 연산자
let ternary = a > 5 ? true : false;
let message;

if (a > 5) {
    message = '최악이야'
} else {
    message = '최고야'
}

console.log(`ㅎㅇ 나는 식창 너를 만나서 ${a > 5 ? '최고야' : '최악이야'}`);

// (condition[조건]) ? value1 : value2

// console.log(ternary);

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 1 - 2;

// 산술 연산자: 곱셈
let multiplication = 2 * 3;

// 산술 연산자: 나눗셈
let division = 2 / 5;

// 산술 연산자: 나머지
let remainder = 4;
console.log(remainder % 2 === 0 ? '짝수' : '홀수' );


// 산술 연산자: 거듭 제곱
let power = 2 ** 3 - 1;
console.log(power);

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6];
console.clear();

let first = [1, 2, 3];
let second = [4, 5, 6];

//1. console.log(first.concat(second)); 잘 사용 안함(배열 합치기)
//2. 전개 구문(spread syntax) OR 전개 연산자(spread operator) ★★중요함!★★
console.log([...first, ...second]);

// rest parameter (나머지 매개변수)
function sum(...rest) {
    
}

// console.log(onlyWorkDefaultValues);

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

// 선,후 증감 연산자
// ++, --

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
// let total = (count % 4) * (count /= 2) + count ** 3; // ?
let total = count % 4;

count = count / 2;

let pow = count ** 3;

total = total * count + pow

console.log(total);

