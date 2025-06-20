


// const END_POINT = 'https://jsonplaceholder.typicode.com/users'





// const response = await fetch(END_POINT);


// if(response.ok){
//   const data = await response.json();
// }


/* 
  fetch API를 활용한 sik 함수 만들기

  1. 함수로 전달받은 url을 fetch의 인수로 넣어주세요
  2. 통신을 통해 전달받은 promise객체의 result를 확인해주세요
  3. 원하는 데이터를 return 해주세요
  4. defaultOptions와 함수로부터 전달받은 인자를 병합(mixin)해주세요

*/


// const { data } = await sik({
//   url:END_POINT,
//   method:'POST',
//   body:JSON.stringify(obj)
// });




// async : 무 조 건 promise object를 리턴하는 함수
// await : 코드 실행 흐름 제어
//         result의 값을 꺼낼 수 있다.
const obj = {
  name:'sik',
  age:30
}

const defaultOptions = {
  method:'GET',
  url:'',
  body:null,
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}

export const sik = async (options) => {

  const { url, ...rest } = {
    ...defaultOptions, 
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  }

  const response = await fetch(url,rest);

  if(response.ok){
    response.data = await response.json();
  }
  
  return response ;
}


sik.get = (url,options) => {
  return sik({
    url,
    ...options
  })
}

sik.post = (url,body,options) => {
  return sik({
    method:'POST',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

sik.put = (url,body,options) => {
  return sik({
    method:'PUT',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

sik.patch = (url,body,options) => {
  return sik({
    method:'PATCH',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

sik.delete = (url,options) => {
  return sik({
    method:'DELETE',
    url,
    ...options
  })
}































