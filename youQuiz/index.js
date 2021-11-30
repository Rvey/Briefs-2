class Users {
  constructor(email, age) {
    this.email = email;
    this.age = age;
  }
  getUser = () => {
    return `hello user ${this.email}`;
  };
}
// class candidates extends Users {
//   constructor(email, age, users) {
//     super(email, age);
//     this.users = users;
//   }
//   addCandidates = (users) => {
//     return this.users.push(users);
//   };
//   getCandidate = () => {
//     return this.users;
//   };
// }
// const user = new Users("red@gg.com", 324234);
// console.log(user.age);

const ehe = "http://localhost:3000/users/";

fetch("http://localhost:3000/users/")
  .then((response) => response.json())
  .then((data) => console.log(data));

document.querySelector(".botona").addEventListener("click", (e) => {
  e.preventDefault();
  const user = new Users("red@gg.com", 324234);

  fetch("http://localhost:3000/users/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  
  fetch("http://localhost:3000/candidates/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
});
