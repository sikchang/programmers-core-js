/* eslint-disable no-constant-binary-expression */
/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB);

// Logical And Assignment(논리곱 할당 연산.)
/* a &&= b // 이렇게 사용 가능 [뜻 : a = a && b;]
console.log(a); */

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// a ||= b
// console.log(a);

// 부정 연산자 ( 반전 시킨다. )
let reverseValue = !value;
console.log(reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};

console.clear(); 

// let user = prompt('당신은 누구인가요?', '');
/* if (user === '사용자') {
    alert('환영합니다 사용자님');
} else if (user === '마스터') {
    alert('환영합니다. 마스터');
    let pwd = prompt('비밀번호를 입력해주세요', '');
    
    if (pwd === '123') {
        alert('접속 완료입니다. 마스터');
    } else if (!pwd) {
        alert('비밀번호가 잘 못되었습니다.')
    } else {
        alert('취소되었습니다.')
    }
} else {
    alert('취소되었습니다');
} */

function LogIn() {
    let userName = prompt('당신은 누구인가요?', '');

    // if(userName === null || userName === undefined) return
    if(!userName) return
    
    console.log(userName);

    if (userName?.toLowerCase() === 'admin') {
      const pwd = prompt('비밀번호는?');

      if (pwd?.toUpperCase === 'THEMASTER') {
        console.log('환영합니다.');
      } else if (pwd === null) {
        console.log('2취소했습니다.');
      } else {
        console.log('비밀번호가 다릅니다. 실패');
      }
    } else if (userName === null || userName.replace(/\s*/g, '') === '') {
        console.log('1취소했습니다.');
    } else {
        console.log('아이디가 다릅니다. 실패');
    }
}