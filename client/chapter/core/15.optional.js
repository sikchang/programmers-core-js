/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */

const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q',
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }


// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.

// -> portableFan && portableFan.photos && portableFan.photos.animate

// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.
portableFan.photos?.animate

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.
const fullName = portableFan.getFullName();

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.


// BROWSER API

const button = document.querySelector('_btn');

const timeout = setTimeout(() => {

  const tag = /* html */`
  <button type="button" class="_btn">나를 눌러줭</button>
  `

  document.body.insertAdjacentHTML('beforeend', tag);

}, 4000);


// 옵셔널체인 ?.
button?.addEventListener('click', ()=>{})

// console.log(timeout);
// clearTimeout(timeout); 이것을 이용하면 제거할 수 있다

let any;



// any.addEventListener



let count = 0;

// 단일 처리이기 때문에 비동기적 (시간을 보장해주지 않는다.)
/* 
http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
주소 : 이벤트 처리 순서를 시각적으로 보여줌
*/
const _timeout = setInterval(() => {
  

  const second = document.querySelector('.second');

  second.style.transform = `
    transLateY(${++count}px) rotate(-${count}deg)
  `

  if (count >= 500) {
    // clearInterval(_timeout)
    clearTimeout(_timeout);
  }

}, 10);

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n <= 2) return 1;
  return fibonacci(n - 1);
}



let _count = 0;

function animation() {
  
  const first = document.querySelector('.first')
  first.style.transform = `
    translateY(${++_count}px)rotate(${_count}deg)
  `

  const id = requestAnimationFrame(animation);

  if (_count >= 500) {
    cancelAnimationFrame(id)
  }

}

// 성능 최적화를 하는데에는 아래 함수가 많이 사용된다.
// requestAnimationFrame();

animation();





















