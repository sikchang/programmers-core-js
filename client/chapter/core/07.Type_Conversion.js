/*
숫자형으로 변환
    - 명시적 변환   
*/

/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2025;
console.log(YEAR);
console.log(typeof(YEAR));
console.log(typeof String(YEAR)); // 명시적 형변환
console.log(typeof (YEAR + '')); // 암시적 형변환
console.log();

console.log('----');
console.log(1 + '1');
console.log(typeof (1 + '1'));
// undefined, null
let days = null;
console.log(days + '');

let undef;
console.log(undef + '');
// boolean


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined (NaN) 계산 X
console.log('--undefined (NaN)--');
let friend;
console.log(Number(friend));

// null 계산됨
console.log('--null--');
let money = null;
console.log(money * 1);
console.log(money / 1);
console.log(money);

// boolean 
console.log('--boolean--');
let isActive = true;
console.log(isActive * 1);

let isActive2 = false;
console.log(isActive2 * 1);

// string
console.log('--string--');
let num = '100';
console.log(num * 1);
// numeric string
const width = '120.5px';
console.log(width);
console.log(typeof width);
console.log(Number(width));
console.log(width * 1);
console.log(width / 1);
console.log(+width);

// 정수로 해석해준다 뒤에 문자가 있다면 parseInt로 변환이 가능함.
console.log(parseInt(width));
console.log(parseFloat(width,10) + 10 + 'px');
console.log(typeof (parseFloat(width,10) + 10 + 'px'));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.clear();

console.log(Boolean(friend));
console.log(Boolean(money));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(NaN));
// 값이 있다고 판단되면 True
console.log(Boolean('0'));
console.log(Boolean(' '));
console.log(Boolean('-1'));

// 암시적 형변환
console.log('--암시적형변환--');
console.log(!!{});
console.log(!![]);
console.log(!![false]);
console.log(Boolean(() => { }));
console.log(!!(() => {}));
