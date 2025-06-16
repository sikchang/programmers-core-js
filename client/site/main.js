



const links = document.querySelectorAll('nav a');
const header = document.querySelector('#header')
const depthList = document.querySelector


/* 
1. 각 메뉴에 마우스를 올렸을 때
2. 선택된 자식의 depth를 찾아서
    - 대상의 마지막 자식 요소 (lastElementChild)
3. heigth = '100px'로 설정
    - element.style.height = '100px'
4. 선택된 대상의 depth가 아니면 나머지는 height = 0;
    - 나머지 = 전체
*/




links.forEach((a) => {
    a.addEventListener('mouseenter', (e) => {
        // console.log(e.currentTarget.lastElementChild);
        const currentDepth = e.currentTarget.lastElementChild;
        currentDepth.style.height = '100px';
    })
});


header.addEventListener('mouseleave', () => {
    depthList.forEach((depth) => {
        depth.style.height = 0
    })
})