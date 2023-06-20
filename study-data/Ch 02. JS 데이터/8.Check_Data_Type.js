// 데이터 타입 확인

// string
console.log(`"Hello" : ${typeof "Hello"}`);
console.log(typeof "Hello" === "string");

// number
console.log(`${123} : ${typeof 123}`);
console.log(typeof 123 === "number");

// boolean
console.log(`${false} : ${typeof false}`);
console.log(typeof false === "boolean");

// undefined
console.log(`${undefined} : ${typeof undefined}`);
console.log(typeof undefined === "undefined");

// null
console.log(`${null} : ${typeof null}`);
console.log(typeof null === "object");

// 배열데이터
console.log(`${["배열"]} : ${typeof []}`);
console.log(typeof [] === "object");

// 객체데이터
console.log(`${{}} : ${typeof {}}`);
console.log(typeof {} === "object");

// 익명함수
console.log(`${function () {}} : ${typeof function () {}}`);
console.log(typeof function () {} === "function");

console.log([].constructor === Array);
console.log({}.constructor === Object);

console.log(Object.prototype.toString.call(null).slice(8, -1) === "Null");

function checkType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
console.log(checkType(function () {}));
console.log(checkType(null) === "Null");
console.log(checkType([]) == "Array");
console.log(checkType({}));
