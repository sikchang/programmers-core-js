function solution(k, score) {
  const k_arr = [];
  var result = [];

  for (let i = 0; i < score.length; i++) {
    let s = score[i];
    console.log('for 아래 s : ', s);
    if (k_arr.length < k) {
      k_arr.push(s);
    } else {
      let min_arr = Math.min(...k_arr);
      console.log('else 아래 min_arr : ', min_arr);
      if (s > min_arr) {
        console.log('s : ', s);
        console.log('min_arr : ', min_arr);
        let index_arr = k_arr.indexOf(min_arr);
        console.log('index_arr : ', index_arr);
        k_arr.splice(index_arr, 1);
        k_arr.push(s);
      }
    }
    result.push(Math.min(...k_arr));
  }

  return result;
}
