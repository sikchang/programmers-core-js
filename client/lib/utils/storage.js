import { isString } from "../utils/type.js";


console.log('storage');


const { localStorage: storage } = window;

const obj = {
    name: 'sik',
    age: 31,
    do() {
        return 'nice';
    }
};

// storage.setItem('user', JSON.stringify(obj));

// console.log( JSON.parse(storage.getItem('user')));


function setStorage(key,value) {
    return new Promise((resolve, reject) => {
        if (isString(key)) {
            storage.setItem(key, JSON.stringify(value));
            resolve();
        } else {
            reject({message:'setStorage 함수의 첫 번째 인수는 문자 타입 이어야 합니다.'})
        }
    })
}

// setStorage('user',obj)
//     .then(() => {
//     //
// })

function getStroage(key) {
  return new Promise((resolve, reject) => {
      if (isString(key)) {
        resolve(JSON.parse(storage.getItem(key)))
      } else {
        reject({message:'getStorage 함수의 인수는 문자 타입 이여야 합니다.'})
    }
  });
}

// const {name, age} = await getStroage('user')

// getStroage('user')
//     .then((res) => {
//     console.log(res);
// })


function deleteStorage() {
    new 
}

deleteStorage('user')

























