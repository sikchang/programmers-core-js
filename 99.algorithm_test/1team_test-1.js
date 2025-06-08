/*
- 문제 제목
홀수 인덱스 숫자 합의 짝수 여부 판단하기

- 문제 설명

문자열 my_string 이 매개변수로 주어집니다. my_string안의 홀수 인덱스 위치에 있는 숫자들의 합이 짝수인지 여부를 return하도록 solution
함수를 완성해주세요.

- 입력/출력 예시

📥 입력 예시
solution("a7fsdf1ge6we54tsdf6546we8f654")
solution("25s4we325e5w6c1d0wa698d1"); 5 4 e 2 e w c d w 6 8 1
solution("0wd5f900fse5s4e8y6h4op");

📤 출력 예시
false
true
false

- 제한 조건

- `my_string`은 소문자, 대문자 그리고 한자리 숫자(0~9)로만 구성되어있습니다.
- 연속된 숫자도 각각 한 자리 숫자로 취급합니다.

*/

// -----------------------------------------------------------------------------------------


let my_string = '25s4we325e5w6c1d0wa698d1';


// 
let sum = 0;
function solution(my_string) {

    // 5 4 e 2 e w c d w 6 8 1
    for (let i = 0; i < my_string.length; i++){
        console.log(i);
        
        if (i % 2 != 0) {
            if (!isNaN(my_string[i])) {
                sum += Number(my_string[i]);
            }
        }
    }
}
