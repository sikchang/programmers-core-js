import { getNode } from '../dom/getNode.js';

// callback 함수
function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

/* delay(() => {
    first.style.top = '-100px';
    second.style.top = '100px';
    
    delay(() => {
        first.style.transform = 'rotate(360deg)';
        second.style.transform = 'rotate(-360deg)';

        delay(() => {
            first.style.top = 0;
            second.style.top = 0;
        })
    })
}) */

// 내가 이거 끝나면 꼭 너한테 알려줄게 (약속)

//promise 는 객체를 만드는 것이고 거기서 성공과 실패를 확인
/* const p = new Promise((resolve, reject) => {
  resolve('성공!');
}); */

/* 
Promise를 사용하는 이유?
 - 콜백의 한계 극복 (콜백 지옥 탈출)
 - 가독성을 위해
 - 비동기 작업을 순차적으로 처리하기 위해서 👍👍👍
*/

// 유연한 함수로 변경
function delayP(shouldRejected = false, timeout = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve('성공!');
      } else {
        reject({ message: '오류!' });
      }
    }, timeout);
  });
}

// console.log(delayP());

// delayP를 실행 했을 때 [[promise object]]가 나와야함
/* delayP(true)
    .then((result) => {
    console.log(result);
    }, (err) => {
        console.log(err);
    }) */

delayP()
  // 빈 껍대기 promise 반환
  .then(() => {
    first.style.top = '-100px';
    second.style.top = '100px';

    return delayP();
  })
  .then(() => {
    first.style.transform = 'rotate(360deg)';
    second.style.transform = 'rotate(-360deg)';

    return delayP();
  })
  .then(() => {
    first.style.top = 0;
    second.style.top = 0;
  });






























