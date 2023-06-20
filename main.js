// 참과 거짓(Truthy & Faisy)

if (123) {
  console.log("참!");
}

const fruits = ["Apple", "Banana"];
const fruits2 = ['Apple'];

if (fruits) {
  console.log("fruits : 이 아이템이 들어있음!");
}
if (fruits2.length) {
  console.log("fruits2 : 이 아이템이 들어있음!");
} else {
  console.log("fruits2 : 이 아이템은 없음");
}
