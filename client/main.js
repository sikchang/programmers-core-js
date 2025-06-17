import { attr, diceAnimation, getNode, insertLast } from './lib/index.js';


// 구조분해
const [
  rollingButton,
  recordButton,
  resetButton] = document.querySelectorAll('.buttonGroup button');

const recordListWrapper = getNode('.recordListWrapper');

// const rollingButton = button[0]
// const recordButton = button[1]
// const resetButton = button[2]

/* 
  1. 주사위 굴리기 버튼을 선택
    -querySelector OR getNode

  2. 클릭 이벤트 바인딩
    - click

  3. setInterval diceAnimation 
    - setInterval diceAnimation

  4. 같은 버튼을 눌렀을 때 토글 처리
    - 상태 변수 만들기
      - isClicked = false;

      - isClicked = !isClicked;
    - 조건 처리
  
  5. 애니메이션 재생 or 정지
    - setInterval
    - clearInterval
  
  6. recordButton, resetButton 활성화/비활성화
    - target.
*/


/*
    4. 같은 버튼을 눌렀을 때 토글 처리
  - 상태 변수 만들기
    - isClicked = false;

    - isClicked = !isClicked;
*/

/* 
  1. 주사위 눈 가져오기
    - cube의 dice 속성 값

  2. 태그 만들기
    - <tr>
        <td>0</td> // 회차
        <td>5</td> // 주사위 눈 수
        <td>5</td> // 주사위 눈의 총 합
      </tr>
  
  3. 태그 렌더링하기
    - insertLast
*/

let count = 0;
let total = 0;

function createItem(value) {
  
  return /* html */ `
    <tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${(total += value)}</td>
    </tr>
  `;

}

function renderRecordItem() {
  
  /* 1. 주사위 눈 가져오기
  - cube의 dice 속성 값 */
  const diceNumber = +attr('#cube', 'dice');

  insertLast('tbody', createItem(diceNumber));
  // 유틸 함수로 변경해보도록.
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
}


/* 
  3. setInterval diceAnimation 
    - setInterval diceAnimation
*/
const handleRollingDice = (() => {
  
  let isclicked = false;
  let id;

  return () => {
    /* 5. 애니메이션 재생 or 정지
    - setInterval
    - clearInterval */
    if (!isclicked) {
      id = setInterval(diceAnimation, 500);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(id);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }

    isclicked = !isclicked;

    // setInterval(diceAnimation, 1000)
  };
})()

function handleRecord() {
  recordListWrapper.hidden = false;

  renderRecordItem();
}

function handleReset() {
  recordListWrapper.hidden = true;
}

/*  
2. 클릭 이벤트 바인딩
    - click
*/
rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord)
resetButton.addEventListener('click',handleReset)

