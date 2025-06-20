import { xhrPromise} from './xhr.js';


export const END_POINT = 'https://jsonplaceholder.typicode.com/users';


/* const response = await fetch(END_POINT)
// console.log(response.json());
// const data = await response.json();

if (response.ok) {
    const data = await response.json();
}
console.log(response); */

/* 
    fetch API를 활용한 sik 함수 만들기

    1. 함수로 전달받은 url을 fetch의 인수로 넣어주세요
    2. 통신을 통해 전달받은 promise객체의 result를 확인해주세요
    3. 원하는 데이터를 return 해주세요
    4. defaultOPptions와 함수로부터 전달받은 인자를 병합(mixin)해주세요.
*/

/* 
const sik = async (options) => {
    
    // 1번
    const { url } = options;

    let data = null;

    const response = await fetch(url);
    
    if (response.ok) {
        response.data = await response.json();
    }

    return response;
};

// 위에서 아무리 await으로 값 실행하더라도 사용할 때에도 await을 
const {data} = await sik({ url: END_POINT });

console.log(data);
 */

/* 
async함수 : [무 조 건] promise object를 리턴하는 함수
await함수 : 코드의 실행 흐름 제어 
            result(결과)의 값을 (바로)꺼낼 수 있다.
*/

const obj = {
    name: 'sik',
    age:30
}

// fetch는 url(END_POINT)를 받을 수 있다.
// const response = await fetch(END_POINT, { method: 'POST', body:JSON.stringify(obj) })

// const response = await fetch(END_POINT)
// const data = await response.json();


// console.log(data);

const defaultOptions = {
  method: 'GET',
  url:'',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};


export const sik = async (options) => {
    
    // 구조분해.
    const { url, ...rest } = {
        ...defaultOptions,
        ...options,
        headers: {
            ...defaultOptions.headers,
            ...options.headers
        }
    }

    const response = await fetch(url, rest);

    if (response.ok) {
        response.data = await response.json();
    }

    return response;
}

/* 이렇게 일일이 하는게 불편하면 114줄부터
const { data } = await sik({
    url: END_POINT,
    method: 'POST',
    body:JSON.stringify(obj),
})

 */

// sik.get()
// sik.post()
// sik.put()
// sik.delete()

sik.get = (url, options) => {
    // 함수 실행
    return sik({
      url,
      // 열거해서 넣는다. (...options)
      ...options,
    });
    
}

sik.post = (url, body, options ) => {
    return sik({
        method:'POST',
        url,
        body: JSON.stringify(body),
        ...options,
    })
}

sik.put = (url, body, options) => {
  return sik({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

sik.patch = (url, body, options) => {
  return sik({
    method: 'PATCH',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

sik.delete = (url, options) => {
    return sik({
        method:'DELETE',
        url,
        ...options
    })
}










