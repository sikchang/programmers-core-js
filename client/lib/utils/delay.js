import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './type.js';
import { xhrPromise } from './xhr.js';
import {insertLast } from '../dom/insert.js'

// callback 함수
function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// 콜백 지옥...
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

// 구조흐름 파악
// 유연한 함수로 변경 onject mixin (객체의 합성)
const defaultOptions = {
    shouldRejected: false,
    data: '성공',
    errorMessage: '알 수 없는 오류',
    timeout:1000,
}

export function delayP(options) {

    let config = {...defaultOptions}

    // options이 숫자일 때 isNumber
    if (isNumber(options)) {
      config.timeout = options;
      console.log(config.timeout);
    }
    // options이 객체일 때 isObhect
    if (isObject(options)) {
      // 개채 합성
      config = { ...defaultOptions, ...options };
    }

    // console.log(config);

    const { shouldRejected, timeout, errorMessag : err, data } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject({ message: err });
      }
    }, timeout);
  });
}

/* delayP({
    errorMessage:',..'
}); */

// console.log(delayP());

// delayP를 실행 했을 때 [[promise object]]가 나와야함
/* delayP(true)
    .then((result) => {
    console.log(result);
    }, (err) => {
        console.log(err);
    }) */

/* delayP()
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
  }); */


// async await

/* 
async함수 : [무 조 건] promise object를 리턴하는 함수
await함수 : 코드의 실행 흐름 제어 
            result(결과)의 값을 (바로)꺼낼 수 있다.
*/

async function f() {
  return 10;
}

const a = await f();

// console.log(a);


async function delayA() {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('성공')
    }, 2000);
  })
}

const result = await delayA();
// console.log(result);

// 아래는 Promise 객체를 가져옴
// console.log(delayA());


async function 라면끓이기() {
  
  const a = await delayP({ data: '물' })
  console.log(a);
  
  const b = await delayP({ data: '불켜기' })
  console.log(b);
  
  const c = await delayP({ data: '스프' })
  console.log(c);
  

  console.log('면');
  console.log('계란');
  console.log('먹기');

  // const d = await delayP({ data: '' })
  // console.log();
}

// 라면끓이기()

async function getData() {
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/12')

  const src = data.sprites.other.showdown['front_default'];

  insertLast(document.body,`<img src="${src}" alt="" />`)
}

// getData();






























