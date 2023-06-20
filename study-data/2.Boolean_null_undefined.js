// 원시형 - Boolean, null, undefined
// Boolean(불린)
const a = true;
const b = false;

if (a) {
  console.log("Hello(a) -> true 값이므로 실행");
}
if (b) {
  console.log("Hello(b) false 값이므로 실행 안함");
}

// null
let age = null;
console.log(age);
setTimeout(() => {
  age = 85;
  console.log(age);
}, 1000);

// undefined 암시적 변수 (값이 할당되어 있지 않다)
// let age2 = undefined;
let age2;

console.log(age2);
setTimeout(() => {
  age2 = 95;
  console.log(age2);
}, 1000);
