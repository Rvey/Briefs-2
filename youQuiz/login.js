const form = document.querySelector(".form");

class Users {
  constructor(email, age) {
    this.email = email;
    this.age = age;
  }
  getUser = () => {
    return `hello user ${this.email}`;
  };
}
class candidates {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}
// const red = new User('redone@gmail.com' , )
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.email.value;
  //   const currentDay  = new Date().toDateString()
  const emailCandidate = `${Math.random()
    .toString(36)
    .substr(3, 7)}@hehe.com`;
  const passwordCandidate = `${Math.random().toString(36).substr(2, 9)}`;
  //   console.log(`email : ${Math.random().toString(36).substr(3, 7)}@hehe.com`);
  //   console.log(`password : ${Math.random().toString(36).substr(2, 9)}`);
  //   console.log(currentDay);
  const user = new Users(email, 324234);
  fetch("http://localhost:3000/users/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  const candidate = new candidates(emailCandidate, passwordCandidate);
  fetch("http://localhost:3000/candidates/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(candidate),
  });
  // alert(`email : ${emailCandidate}
  // password : ${passwordCandidate}
  // `);
});

fetch("http://localhost:3000/users/")
  .then((response) => response.json())
  .then((data) => console.log(data));
  fetch("http://localhost:3000/candidates/")
  .then((response) => response.json())
  .then((data) => console.log(data));