/* ---------------- */
/* Switch           */
/* ---------------- */

const a = 15;


switch (a) {
    case 10: console.log('값이 낮아서 다릅니다.'); break;
    
    case 15: console.log('정답'); break;
    
    case 20: console.log('값이 높아서 다릅니다.'); break;
    
    default: console.log('숫자를 입력해주세요.');
}


const
    MORNING = '아침',
    LUNCH = '점심',
    DINNER = '저녁',
    NIGHT = '밤',
    LATE_NIGHT = '심야',
    DAWN = '새벽';

let thisTime;
// let thisTime = prompt('조건 유형을 입력해 주세요');

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */
switch (thisTime) {
  // 조건 유형(case): '아침'
  // '뉴스 기사 글을 읽는다.'
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;

  // 조건 유형(case): '점심'
  // '자주 가는 식당에 가서 식사를 한다.'
  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;
  // 조건 유형(case): '저녁'
  // '동네 한바퀴를 조깅한다.'
  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;
  // 조건 유형(case): '밤'
  // '친구에게 전화를 걸어 수다를 떤다.'
  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;
  // 조건 유형(case): '심야'
  // 조건 유형(case): '새벽'
  // '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'
  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
}   
        
/* switch문 → if문 변환 --------------------------------------------------- */

/* switch vs. if -------------------------------------------------------- */


console.clear();

//prompt를 통해 숫자를 입력 받는다. (0 ~ 6까지)
// 받은 숫자를 사용해서 switch case 사용해주세요.

/* 
0: 일
1: 월
2: 화
3: 수
4: 목
5: 금
6: 토
*/

// const days = +prompt('오늘의 요일은?', '');

// 랜덤한 값(0~6)을 받아서 랜덤한 요일을 출력해보자!
// 함수는 하나의 기능만을 수행하는 것 목표 (클린코드)
// 분리 목적 : 함수는 '재사용성'을 고려해야 합니다. (유연한 함수)
// 매개변수(parameta)를 유연하게 받는 습관 필요
// separation of concerns (함수를 한가지 기능만 하도록 분리 -> 명칭 : 관심사의 분리)

function getRandom(n) {
    const days = Math.floor(Math.random() * n);
    return days;
}

function getDay(days) {
    
    switch (days) {
        case 0: return'일';
        case 1: return'월';
        case 2: return'화';
        case 3: return'수';
        case 4: return'목';
        case 5: return'금';
        case 6: return'토';
    }
}

// const day = getDay() // undefined
// const day = getDay(getRandom(7)) // getDay(인수 / argument) 

// console.log(day);

// `오늘은 ${day}요일 입니다.`
// getDay 함수를 가지고
// 주말인지 평일인지 구분할 수 있는 함수를 만들어 주세요.(weekend)
// weekend() -> 오늘은 토요일입니다. 그러므로 주말입니다.
//              오늘은 화요일입니다. 그러므로 평일입니다.

function weekend() {
    
    // 요일 가져오기
    const today = getDay(getRandom(7));

    /* if (today.includes('토') || today.includes('일')) {
        return `오늘은 ${today}요일 입니다. 그러므로 주말입니다.`
    }
    return `오늘은 ${today}요일 입니다. 그러므로 평일입니다.` */

    // const day = today.includes('토') || today.includes('일') ?
    return today.includes('토') || today.includes('일') ?
                `오늘은 ${today}요일입니다. 그러므로 주말입니다.` :
                `오늘은 ${today}요일입니다. 그러므로 평일입니다.`
    // return day;
}

// const week = weekend(getDay());