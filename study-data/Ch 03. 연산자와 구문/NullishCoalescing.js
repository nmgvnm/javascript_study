// Nullish 병합(Nullish Coalescing)

// OR 연산자를 사용한 경우
const n = 0;
const num1 = n || 7;
console.log(num1); // 7

// Nullish 병합 연산자를 사용한 경우
const num2 = n ?? 7
console.log(num2); // 0

console.log(null ?? 1); // 1
console.log(undefined ?? 2); // 2
console.log(null ?? undefined); // undefined (가장 마지막에 만난 false값 반환)
console.log(null ?? 1 ?? 2); // 1 (가장 먼저 만난 true 반환)
console.log(false ?? 1 ?? 2); // false (null, undefined 만 거짓으로 생각함)