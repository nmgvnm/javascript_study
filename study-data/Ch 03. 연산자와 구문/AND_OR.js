// 논리 (Logical)

// AND 연산자
const a = true;
const b = false;

if (a && b) {
  console.log("all true!");
} else {
  console.log("all false");
}

// OR(또는) 연산자
if (a || b) {
  console.log("하나 이상이 참!");
} else {
  console.log("all false");
}

// AND 연산자 (가장 먼저 만나는 false의 값을 반환)
console.log(true && false);
console.log(1 && 0);
console.log(1 && 2 && 0);
console.log(1 && 0 && 2);
console.log(0 && 1 && 2);
console.log("A" && "B" && "");
console.log("A" && "B" && "C"); // 모두가 참일 때 가장 마지막 값이 반환된다.

// OR(또는) 연산자 (가장 먼저 만나는 true 값을 반환)
console.log(true || false);
console.log(1 || 0);
console.log(1 || 2 || 0);
console.log(1 || 0 || 2);
console.log(0 || 1 || 2);
console.log(false || 0 || {});
console.log(false || [] || null);
console.log(function () {} || undefined || "");
console.log(false || 0 || NaN); // 모두가 거짓일 때 가장 마지막 값이 반환된다.
