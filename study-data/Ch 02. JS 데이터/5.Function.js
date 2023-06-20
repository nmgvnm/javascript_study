// 참조형 - Function

// function hello() {
//   console.log("Hello!");
// }

// hello();
// console.log(hello);

// function getNumber() {
//   return 123;
// }
const getNumber = function () {
  return 123;
};

console.log(typeof getNumber());

const a = function () {
  console.log("A");
};

const b = function (c) {
  console.log(c);
  c()
};
// b(123);
b(a);
