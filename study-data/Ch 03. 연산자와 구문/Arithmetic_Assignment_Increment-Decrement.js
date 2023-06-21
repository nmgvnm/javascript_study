// 산술, 할당, 증감 연산자
// 산술 (Arithmetic)

console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5); // 나머지 연산자

function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(3));
console.log(isEven(12));

// 할당
const a = 3;
// a = a + 2
console.log(a);

let b = 2;

b = b + 4;
b *= 2;
console.log(b);

// 증감 연산자 (Increment & Decrement)

let c = 3
c -= 1
console.log(c);
console.log(c);
