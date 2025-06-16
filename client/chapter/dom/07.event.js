/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

const first = getNode('.first');

// first.onclick = () => {

//   console.log('hit');

// }

// wheel !== scroll

// function handler(e){
//   console.log(e.wheelDeltaY);

//   if(e.wheelDeltaY > 0){
//     console.log('up');
//   }else{
//     console.log('down');
//   }

// }

function handler(e) {
  console.log(e.offsetX, e.offsetY);
}

// first.addEventListener('wheel',handler);
first.addEventListener('click', handler);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const ground = getNode('.ground');
const ball = getNode('.ball');

function handleBall({ offsetX: x, offsetY: y }) {
  // const {offsetX:x, offsetY:y} = e;

  // const x = e.offsetX;
  // const y = e.offsetY;

  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  ball.style.transform = `translate(${x - w / 2}px,${y - h / 2}px)`;
}

// ground.addEventListener('click',handleBall)

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function handleMove({ offsetX: x, offsetY: y }) {
    //   console.log(x, y);
    throttle(() => {
        console.log('쫄쫄쫄');
    })
}

// ground.addEventListener('mousemove', debounce(handleMove));
ground.addEventListener('mousemove', throttle(handleMove));

function debounce(f, limit = 1000) {
  let timeout;

  return function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      f.call(this, e);
    }, limit);
  };
}

// debounce(() => console.log('hello'),1000)
// debounce(() => console.log('hello'),1000)
// debounce(() => console.log('hello'),1000)

// throttle debounce



function throttle(f, limit=1000) {
    
    let wait = false;

    return () => {
        if (!wait) {
          f();
          wait = true;
          setTimeout(() => wait = false, limit);
        }
    }
}