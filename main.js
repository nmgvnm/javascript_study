const a = 0.1;
const b = 0.2;

console.log(typeof a);
console.log(typeof (a + b).toFixed(1));
console.log(Number((a + b).toFixed(1))); // 부동소수점 오류
