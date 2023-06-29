// 삼항 연산자(Ternary)

const a = 1;

if (a < 2) {
  console.log("참!");
} else {
  console.log("거짓...");
}

// 삼항연산자
// 조건 ? 참 : 거짓
console.log(a < 2 ? "true" : "false..");

function getAlert(message) {
  return message ? message : "메시지가 존재하지 않습니다!";
}

getAlert("안녕하세요");
console.log(getAlert("안녕하세요"));
console.log(getAlert(""));
