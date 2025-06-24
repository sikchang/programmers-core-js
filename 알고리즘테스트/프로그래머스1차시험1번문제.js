function solution(t, p) {
  let count = 0;
  const pLen = p.length;

  for (let i = 0; i <= t.length - pLen; i++) {
    let strResult = t.slice(i, i + pLen);
    if (Number(strResult) <= Number(p)) {
      ++count;
    }
  }
  return count;
} 
