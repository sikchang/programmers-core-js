/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

// let resultX = calculateTotal(10000, 8900, 1360, 2100);
// let resultY = calculateTotal(21500, 3200, 9800, 4700);
// let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식

// spread syntax [...arr]

/* rest parameter */
let calcAllMoney = (...rest) => {
        
    // 빼서 쓴다면?
    // const arr = [...rest];
    // const first = arr[0]

    /* let total = 0;

    // for...of total 출력
    for (let value of rest) {
        // console.log(value);
        total += value;
    }

    return total; */

    let total = 0;
    // forEach
    // let arr = [...rest];

    // forEach arrow function
    // rest.forEach((item, index) => (total += item));
        /* arr.forEach((item, index) => {
        total += item;
        });
 */
    // reduce arrow function
    return rest.reduce((acc,cur) => acc + cur, 0)
        /* total = rest.reduce((acc,cur) => {
            return acc + cur
        },0) */

    // return total;
}

// console.log(calcAllMoney(10000, 8900, 1360, 2100));


let _calcAllMoney = (...rest) => rest.reduce((acc, cur) => acc + cur, 0);

// console.log(_calcAllMoney(20000, 8900, 1360, 2100));



// 일반 함수는 나를 호출한 대상으로 기준으로 this를 바인딩합니다.
// 화살표 함수와 this
function a() {
    console.log(this);
}

// a();


//  화살표 함수는 this를 바인딩하지 않는다. 상위 컨텍스트에서 가져옵니다.
const b = () => {
    console.log(this);
}

// b();


// 자바스크립트의 함수는 양면의 얼굴
// 1. 일반 함수 (normal function)
// 2. 생성자 함수 (constructor function) : 객체를 리턴함.
    // 생성자 함수는 대문자시작(규칙)
function button(text = 'empty') {

    return `<button>${text}</button>`;
}

button('hi')


// this 찾기
// 일반 함수
// constructor가 내장 (concise method 예외)
// this : 나를 호출한 대상 this
// 객체에 메서드로 많이 사용됨 => this를 찾기 위해

// 화살표 함수
// constructor 비내장 (성능 최적화를 위해서) <- -> class
// this : 바인딩 하지 않음. -> 상위 컨텍스트에서 찾음
// 메서드 안에서의 함수 => 내 상위 컨텍스트에서 this를 가져와야 함.



const user = {
    name: '장보고',
    total: 0,
    grades: [50, 70, 40],
    /* sayHi: function () {
        // 일반함수 일 때 장보고 나옴
            // constructor가 있음
        console.log(this.name);
    },
    sayHi2: () => {
      //상위 컨텍스트를 가져오기 때문에 window가 나옴
      // constructor가 없음 new써도 안나옴
      console.log(this);
    }, */
    totalGrades() {
        // constructor가 없음 new써도 안나옴
        // this.grades.forEach((g) => (this.total += g));
        
        /* this.grades.forEach((g) => {
          this.total += g;
        }, this);
        console.log((this.total)); */

        this.total = this.grades.reduce((acc,cur) => acc + cur,0)

        return this.total
    },

    sayHi() {
        const sayBye = () => {
            console.log(this);
        }
        sayBye()
    }

}


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
    let total = 1;

    for (let i = 0; i < powerCount; i++){
        total = total * numeric
    }
    return total
};

let _pow = (numeric, powerCount) => {
    // 배열을 강제로 만들어준다.
    return Array(powerCount).fill(null).reduce(acc => {
        return acc * numeric;
    },1)
};


// pow(2,53)

// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {

    let s_text = '';

    for (let i = 0; i < repeatCount; i++){
        s_text += text
        //s_text = s_text + text
    }
    return s_text
};

let _repeat = (text, repeatCount) => {
    return Array(repeatCount).fill(null).reduce(acc => {
        return acc + text
    },'')
};