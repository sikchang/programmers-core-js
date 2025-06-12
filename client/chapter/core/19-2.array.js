/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const people = [
    {
        id: 0,
        name: '이순신',
        age: 40,
        job: '장군',
        imgSrc: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        imgAlt:'대체 텍스트입니다..'
    },
    {
        id: 1,
        name: '장보고',
        age: 42,
        job: '해군',
        imgSrc: 'https://randomuser.me/api/portraits/med/men/30.jpg',
        imgAlt:'대체 텍스트입니다..'
    },
    {
        id: 2,
        name: '홍길동',
        age: 38,
        job: '조선 루팡 2세',
        imgSrc: 'https://randomuser.me/api/portraits/med/men/20.jpg',
        imgAlt:'대체 텍스트입니다..'
    }
]

/* 요소 순환 ---------------------------- */

// forEach


// people.forEach((user) => {
//     console.log(user);
// })

// 위 화살표함수는 인행이 이렇게 된다.
/* function user(user) {
    console.log(user);
}
people.forEach(user); */

const spans = document.querySelectorAll('span');

// event delegation => 위임 (나중에 따로 배움)
spans.forEach((span, index) => {
    span.addEventListener('click', (e)=>{
        
        // 해당 span 클릭 시 글자 색 오렌지로 변경
        e.currentTarget.style.color = 'orange'

        console.log(e.currentTarget);

    })
})

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift

// reverse는 위험하다 원본을 훼손하기 때문에. 그러나 toReversed는 안전하다.
const reverse = people.toReversed();
console.log( reverse );


const splice = people.toSpliced(0,0,{name:'선범'});

const arr = [5,4,3,7,3,1];

function compare(a,b){
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

const sort = arr.toSorted(compare)

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

// 사람들의 직업만을 모아놓은 배열 반환 

const jobs = people.map(user => user.job);



// 현재 나이에서 전부 +2살 새로운 배열 반환

const ages = people.map(user => user.age + 2);



const tags = people.map((user)=> {
  
  const template = /* html */ `
    <li>
      <figure>
        <img src="${user.imgSrc}"/>
        <figcaption>${user.imgAlt}</figcaption>
      </figure>
      <ul>
        <li>이름 : ${user.name}</li>
        <li>나이 : ${user.age}</li>
        <li>직업 : ${user.job}</li>
      </ul>
    </li>
  `
  return template

})

tags.forEach((li)=> document.querySelector('ul').insertAdjacentHTML('beforeend',li))













/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight

/* string ←→ array 변환 ------------------ */

// split
// join