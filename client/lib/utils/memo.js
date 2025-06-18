




// getter, setter의 역활을 하는 것을 생성해 보자
// 커링 function
// memoization 어떠한 상태를 기억하고 저장해 놓고  쓰는 것
export const memo = (() => {
    
    const cache = {};
    
    return (key, fn) => {
      if (!fn) return cache[key];

      if (cache[key]) {
        console.warn(`${key} 안에는 이미 캐시된 값이 존재합니다.`);

        if (confirm('덮어쓰기 허쉴?')) {
          const history = cache[key];
          cache[key] = fn();
          const current = cache[key];
        }
      }
      cache[key] = fn();
    };
})()

//       키             콜백
// memo('cube', () => document.querySelector('#cube'));
// memo('cube', () => document.querySelector('#cube'));
// console.log(memo('cube'));

memo('say', () => 'hello')
console.log(memo('hello'));

















