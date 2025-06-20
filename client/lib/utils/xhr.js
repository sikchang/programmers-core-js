// 비동기 통신 ajax

const END_POINT = 'https://jsonplaceholder.typicode.com/users';

/* 
    [readyState]
    0 : uninitialized
    1 : loading
    2 : loaded
    3 : interactive
    4 : complete    성공 | 실패
*/

// new 객체 (생성)


// console.log(xhr);

// console.log(xhr.response);

// console.log(xhr.readyState);


/* 
  1. xhr 함수를 만들어서 재사용성을 높여보자
    functopm xhr ...
*/

// callback 방식
function xhr({
  method = 'GET',
  url = '',
  success = null,
  fail = null,
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

    if (!(method === 'DELETE')) {
        Object.entries(headers).forEach(([k, v]) => {
          xhr.setRequestHeader(k, v);
        });
  }

  xhr.addEventListener('readystatechange', () => {
    const { readyState, status, response } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        const data = JSON.parse(response);

        success(data);
      } else {
        console.error('데이터 로드 실패!');
        fail({ message: '오류가 발생했습니다!' });
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

const obj = {
  name: 'tiger',
  age: 30,
  email: 'tiger@gmail.com',
};

/* xhr({
  method: 'POST',
  url: END_POINT,
  success: () => {},
  fail: () => {},
  body: obj,
}); */


// DELETE
/* xhr({
  method: 'DELETE',
  url: `${END_POINT}/4`,
  success: (data) => console.log(data),
  fail: ({ message }) => console.log(message),
}); */

xhr.get = (url,success,fail) => {
    xhr({ url, success, fail })
}

// 장점 : 메소드를 명시하지 않아도 사용가능
// compound pattern
xhr.get(
    END_POINT,
    // (data) => console.log(data), 
    () => { },
)

xhr.post = (url, body, success, fail) => {
    xhr({
      method:'POST',
      url,
      body,
      success,
      fail,
    });
}

xhr.post(
    END_POINT,
    () => { },
    () => { },
    )


xhr.delete = (url,success,fail) => {
    xhr({method:'DELETE',url,success,fail})
}

xhr.delete(
    `${END_POINT}/4`,
    () => {},
    () => {}
);

xhr.put = (url, body, success, fail) => {
  xhr({
    method: 'PUT',
    body,
    success,
    fail,
  });
};
  

xhr.patch = (url, body, success, fail) => {
  xhr({
    method: 'PATCH',
    body,
    success,
    fail,
  });
};



const defaultOptions = {
  method:'GET',
  url:'',
  body:null,
  errorMessage:'서버와의 통신이 원활하지 않습니다.',
  headers: {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}

export function xhrPromise(options = {}){
  // 객채합성해서 config에 담았다 그러나 아래 구조분해 부분을 나눌 필요 없이 한번에 가능하다.
  const {method,url,headers,body,errorMessage:message} = {
    ...defaultOptions,
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  };

    // config 담은  후 구조분해
  // const { method, url, headers, body, errorMessage: message } = config

  const xhr = new XMLHttpRequest();

  xhr.open(method,url);

  if(!(method === 'DELETE')){
    Object.entries(headers).forEach(([k,v])=>{
      xhr.setRequestHeader(k,v);
    })
  }

  xhr.send(body ? JSON.stringify(body) : null);

  return new Promise((resolve, reject) => {
      xhr.addEventListener('readystatechange',()=>{
      const { readyState, status, response } = xhr;
      if(readyState === 4){
        if(status >= 200 && status < 400){
          resolve(JSON.parse(response));
        }else{
          reject({message});
        }
      }
    })
  })
}


// xhrPromise({ url:END_POINT })
// .then((res)=>{
//   console.log( res );
  
// })


xhrPromise.get = (url) => xhrPromise({ url });
xhrPromise.post = (url,body) => xhrPromise({url,body,menubar:'POST'})
xhrPromise.put = (url, body) => xhrPromise({ url, body, menubar: 'PUT' });
xhrPromise.patch = (url, body) => xhrPromise({ url, body, menubar: 'PATCH' });
xhrPromise.delete = url => xhrPromise({url,method:'DELETE'})



































