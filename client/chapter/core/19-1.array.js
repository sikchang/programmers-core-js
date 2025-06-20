/* -------------------- */
/* Array Type           */
/* -------------------- */

// 객체(Object) : 키(key)를 사용해 식별할 수 있는 값을 담은 집합 - `키:값의 집합`
// 배열(Array) : 순서(index)가 있는 집합 - `값의 집합`

// ※ 배열은 특별한 종류의 객체로 대괄호를 사용해 요소에 접근하는 방식은 객체 문법을 사용.
//   배열은 키(key)가 숫자(index)라는 점이 다름. 즉, 본질은 객체.
//   순서에 따른 제어가 가능하도록 다양한 메서드와 length 프로퍼티를 언어에서 제공.


// 배열 선언
let friends = '장보고 이순신 홍길동 김사장 성사장'.split(' ');

console.log(friends);

// 배열 요소의 총 갯수

// 배열 요소 변경
friends[0] = '차사장';


// 배열 요소 추가
let unshift = friends.unshift('식창');
let push = friends.push('나사장');

// 배열 요소 제거
let shift = friends.shift();
let pop = friends.pop();

// 큐(queue) vs. 스택(stack)
// 큐 FIFO (먼저 들어온 것이 먼저 나간다) ← queue ←
// 스택 LIFO (나중에 들어온 것이 먼저 나간다) ↓ stack ↑

// 배열 요소 순환(loop)
// for 문, for ~ of문

// 배열 복사
// let copiedArray = [...friends];
// let copiedArray = Array.from(friends); // 배열의 스태틱 메서드
let copiedArray = friends.slice();

// let arr = friends; // 참조복사


// 다차원 배열
// 행렬을 저장하는 용도

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 행렬의 정중앙에 위치한 요소를 찾으려면?

matrix[1][1]