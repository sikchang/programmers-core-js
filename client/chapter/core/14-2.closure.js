

function earth() {
    
    let water = true;
    let gravity = 10;

    function tiger(value) {

        water = value;
    }

    return tiger;
}


const ufo = earth();


ufo(false)




// 개념은 이해했어요. 근데, 어디다 쓰나요?
const button = document.querySelector('.btn');

// IIFE -> 클로져에서 사용이됨. (괄호로 묶어준다.)
const handleClick = (() => {

    let isclicked = false;

    return () => { 
        if (!isclicked) {
            document.body.style.background = 'orange';
        } else {
            document.body.style.background = 'white';
        }
        isclicked = !isclicked;
    }
})()

button.addEventListener('click', handleClick)

document.querySelector('.first').addEventListener('click', () => {
    button.removeEventListener('click', handleClick);
})


function bindEvent(node, eventType, fn) {

    if (typeof node === 'string') node = document.querySelector(node);

    node.addEventListener(eventType, fn);

    return () => node.removeEventListener(eventType, fn)
}

const remove = bindEvent('.first', 'click', handleClick);




// read는 value를 읽는 것 write는 기존 value를 수정하는 것.
function useState(init) {
    let value = init;

    function read() {
        return value;
    }

    function write(newValue) {
      value = newValue;
    }

    return [read, write];

}

const [value, setValue] = useState('hello');











