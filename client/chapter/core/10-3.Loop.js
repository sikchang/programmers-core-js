/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기

let a = 0;

while (a <= 10) {
    a++;

    if (a % 2 !== 0) continue;
    
    console.log(a);
}

for (let b = 0; b <= 10; b++){
    
    if (b % 2 !== 0) continue;

    console.log(b);
}

console.clear();

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

while (i < l) {
    // console.log(frontEndDev[i]);
    i += 1;
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.
for (i = 0; i < l; i++){

    const value = frontEndDev[i];
    const lower = value.toLowerCase();

    if (lower.includes('jquery') || lower.includes('svg')) continue;
    
    // console.log(value);
}


//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

const arr = [...frontEndDev];

// pop, shift 아이템 제거 => 원본을 훼손
for (let i = 0; i < l; i++){
    console.log(arr.shift());
}

// console.log(frontEndDev);
console.log(arr);

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)
