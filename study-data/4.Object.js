// 참조형 - Object (객체)

// 객체데이터
// const user = new Object();
// user.name = "yoonjin";
// user.age = 28;

// function User() {
//   this.name = "yoonjin";
//   this.age = 28;
// }
// const user = new User();

// {} 기호를 사용해서 데이터를 생성하는 방법은 리터럴 데이터
// const user = {
//   name: "yoonjin",
//   age: 28,
// };

// const key = "age";
// console.log(user);
// console.log(user.name);
// console.log(user[key]);

const userA = {
  name: "harry",
  age: 30,
};

const userB = {
  name: "yoonjin",
  age: 13,
  parent: userA,
};

console.log(userB.parent.name);
console.log(userB['parent']['name']);

const users = [userA, userB]
console.log(users);
console.log(users[0].name);
console.log(users[0]['name']);
