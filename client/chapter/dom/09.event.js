/* ------------------------ */
/* Event delegation         */
/* ------------------------ */


const nav = document.querySelector('.navigation')
const links = document.querySelectorAll('a');
const _links = document.querySelector('.about')
console.log(links);
console.log(_links);



nav.addEventListener('click', (e) => {
    e.preventDefault();

    const target = e.target.closest('li');
    // console.log(target);
    // about 클래스가 있는 li에게만 hit문자 출력
    
    /* 클래스를 사용한 위임 ---------------- */
    // if (target.matches('.about')){
    if (target.classList.contains('about')){
        console.log('about');
    }
    
    /* 속성을 사용한 위임 ------------------ */

    // 해당 속성 가지고 있는지? (getAttribute)
    // console.log(target.getAttribute('data-name'));
    // console.log(target.dataset.name);
    if (target.dataset.name === 'contact') {
        console.log('contact!!');
    }

})





/* 노드를 사용한 위임 ------------------ */


