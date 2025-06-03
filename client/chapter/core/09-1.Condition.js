/* ---------------- */
/* Condition        */
/* ---------------- */

/* let scriptName = 0;

const result = prompt(`자바스크립트의 '공식' 이름은 무엇인가요?`,'');

if (result === 'ECMAScript') {
  alert('정답입니다.');
} else {
    alert('오답입니다.')
} */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
// let didWatchMovie = prompt('극한직업 영화 봤니?','');
// let didWatchMovie = confirm('극한직업 영화 봤니?', '');

// 영화 볼거니?
// let goingToWatchMovie = prompt('베테랑 영화 볼거니?');
// let goingToWatchMovie = confirm('베테랑 영화 볼거니?');

// if 문(statement)
// else 절(clause)
// else if 복수 조건 처리
function withWho() {
    if (didWatchMovie) {
      console.log('역시 그 영화 아는구나 재미있지');
    } else {
      let goingToWatchMovie = confirm('베테랑 영화 볼거니?');

      if (goingToWatchMovie) {
        let withwho = prompt('누구랑 볼거여?');
        if (withwho === '너') {
          console.log('이번주 주말 시간 어때?');
        } else if (withwho === '부모님') {
          console.log('그렇구나');
        } else {
          console.log('누구랑?');
        }
      } else {
        alert('노래방 갈래?');
      }
    }
}

let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';
// 조건부 연산자

// 멀티 조건부 연산자 식
const message =
  // didWatchMovie === 'yes' ? '영화 재미있어 봐바?' :
  didWatchMovie.includes('yes')
    ? '영화 재미있어 봐바?'
    : // goingToWatchMovie === 'yes' ? '언제볼래?' : '어쩔 수 없지'
      goingToWatchMovie.includes('yes')
      ? '언제볼래?'
            : '어쩔 수 없지';
// console.log(message);


// 조건부 렌더링
function render(node, isActive) {
    const test = `
        <div>${isActive ? '안녕' : '잘가'}</div>
        `

    node.insertAdjacentHTML('beforeend',test)
}

// render(document.body,true)
