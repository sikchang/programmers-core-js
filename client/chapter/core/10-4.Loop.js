/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
//     hasOwnProperty() {
//       return '😊'
//   }
};

// 전역 오염시키는 방법
Object.prototype.nickName = 'tiger';

// console.log('nickName' in javaScript);

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고있는지(has) 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// in 문을 확인하는 방법

// console.log(javaScript.hasOwnProperty('nickName'));

// console.log(Object.prototype.hasOwnProperty.call(javaScript,'creator'));
// console.log( ({}).hasOwnProperty.call(javaScript,'creator'));

// console.log(Object.hasOwn(javaScript, 'nickName'));
    // 확실히 가진 애들만 조회를 해줌.


// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

// for..in문은 객체를 순환하는 용도로 사용됨.  => 원본 훼손 여지 => hasOwn을 같이 사용

for ( const key in javaScript ) {
    
    // console.log(key);
    // if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
    if (Object.hasOwn(javaScript, key)) {
    
        const value = javaScript[key];

        // console.log(value);
    }
}

const tens = [10, 100, 1000, 10_000];

// for..in을 사용해서 배열을 순환 => 순서를 보장하지 않기 때문에, 위험하다.
// 객체 순환용으로만 사용해야 한다.
for (const key in tens) {

    console.log(tens[key]);

}

// enumerable 열거 가능한

const obj = {};

obj.nickName = 'tiger'

console.log(obj);

Object.defineProperty(obj, 'age',{
    value: 30,
    enumerable: true,
    writable: false,
    configurable: false,
})

for (const key in obj) {
    console.log(key);
}