/* ------------------------ */
/* Data Types               */
/* ------------------------ */
/* 
아래 7개 primitive value (원시값)
1. 숫자형(number) -> 123456 -> 2 ** 53 -1 (안전한 정수)
2. bigInt -> 123n
3. 문자형(string) -> `hello ${1 + 2}`
4. 불린형(boolean) -> true / false
5. null -> 값을 임의로 비웠다.
6. undefined -> 존재하지 않는
8. 심볼(symbol) -> Symbol('uuid')
---------------------------------

7. 객체(Object) -> const a = {} 복잡한 자료구조를 나눌 때 사용
    배열(Array) //배열과 함수는 객체 안에 있음.
    함수(function)

---------------------------------
*/

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty); //typeof null은 언어상의 오류다.
// 2. 값이 할당되지 않은 상태 undefined
let age;
console.log(age);
// console.log(typeof age);
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const str1 = 'hi'; // string literal 방식
const str2 = 'single';
const str3 = `1 더하기 2는 ${1 + 2}`;
console.log(str1);
console.log(str2);
console.log(str3);

console.clear();

// 문자 생성자 함수 (constructor function)
// const str4 = new String('hello');
// console.log(str4);

// 4. 정수, 부동 소수점 숫자(길이 제약)
const bigInt = 123n;
const integer = 150; //numver literal(값)
const floatingPointNumber = 1.23;

console.log(bigInt);

const num = new Number(20.23);
console.log(num);

// console.log(integer);
// console.log(floatingPointNumber);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

// 6. 참(true, yes) 또는 거짓(false, no)
// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
// 8. 고유한 식별자(unique identifier)

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object
console.clear();
// property : key, value 와 쌍을 이룬다.

// 일반 함수 -> this : 나를 호출한 대상
// 화살표 함수 (arrow function) : this를 바인딩하지 않습니다. ("상위 컨텍스트"에서 this를 찾습니다.)

console.log(this); // undefined

/* 
1. normal function method 일반함수
2. arrow function method -> 객체의 메서드로 잘 사용되지 않나요? OO 
  화살표 함수
3. concise method -> **가장 많이 사용됨**
  간결한 메소드

**객체 메소드를 생각할 때 제일 간결한 것이 좋다.**
*/

const obj = {
  name: 'tiger',
  age: 30,
  sayHi: function () {
    console.log(this);
    //prototype가 있어야지먄 new가 붙을 수 있음.
  },
  sayHi2: () => {
    // console.log('bello~');
    console.log(this.name);
  },
  sayHi3() {
    console.log('bello~');
    console.log(this);
  },
};



console.log(obj);

// Array 배열
// 순서가 보장이 되어 있음
const arr = ['a', 'b', 'c', 'd'];

// const _arr = new Array([]);

console.log(arr);

// function

function a(매개변수) {
  console.log('a함수 실행됨');
}
// a()

function 붕어빵틀(재료) {
  return `뜨겁고 맛있는 ${재료} 빵`;
}

// const 슈붕 = 붕어빵틀('팥');
const 팥붕 = 붕어빵틀('팥');
const 슈붕 = 붕어빵틀('슈크림');
const 피붕 = 붕어빵틀('피자');

console.log(피붕);

// this
