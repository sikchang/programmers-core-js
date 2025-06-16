const links = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

/*  복습 할 때 주석을 생각해서 해보도록
1. 각 메뉴에 마우스를 올렸을 때 
2. 선택된 자식의 depth를 찾아서 
    - 대상의 마지막 자식 요소 (lastElementChild)

3. height = '100px'
    - element.style.height = '100px'

4. 선택된 대상의 depth가 아니면 나머지는 height = 0;
    - 나머지 = 전체

*/

// const h = (t) => {
//   t.style.height = 0
// }

const h = (t) => (t.style.height = 0);

function vanilla() {
    links.forEach((a) => {
      a.addEventListener('mouseenter', (e) => {
        const currentDepth = e.currentTarget.lastElementChild;

        // 모든 depth 높이 없애!
        depthList.forEach(h);

        currentDepth.style.height = '100px';
      });
    });

    // header.addEventListener('mouseleave',()=>{

    //   depthList.forEach((d) => {
    //     d.style.height = 0
    //     h(d)
    //   })

    // })

    header.addEventListener('mouseleave', () => depthList.forEach(h));
}

// console.log(gsap);

links.forEach((a) => {

    a.addEventListener('mouseenter', () => { })
    
})