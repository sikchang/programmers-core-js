/*
- 문제 제목

홀수 짝수 판별하기

- 문제 설명

숫자 my_numbers 가 매개변수로 주어집니다. my_numbers 안의 각 숫자의 합이 짝수면 even, 홀수면 odd를 출력하는 함수를 작성하세요.

- 입력/출력 예시

📥 입력 예시

checkCase(123);
checkCase(99999);
checkCase(513658235);

📤 출력 예시

even
odd
even

- 제한 조건

- 1 ≤ `my_numbers` 의 길이 ≤ 1,000
- `my_numbers` 은 0 이상 9007199254740991 이하의 자연수
- 공백이나 특수문자는 주어지지 않습니다.

*/

//숫자 my_numbers 가 매개변수로 주어집니다. my_numbers 안의 각 숫자의 합이 짝수면 even, 홀수면 odd를 출력하는 함수를 작성하세요.
//checkCase(123);

function solution(my_numbers) {
  let sum = 0;
  const numbers = String(my_numbers);

  for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i]);
    // console.log(sum);
  }
  if (sum % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

solution(123);
solution(99999);
solution(513658235);