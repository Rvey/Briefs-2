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

// const red = new User('redone@gmail.com' , )
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.email.value;
  //   const currentDay  = new Date().toDateString()

  //   console.log(`email : ${Math.random().toString(36).substr(3, 7)}@hehe.com`);
  //   console.log(`password : ${Math.random().toString(36).substr(2, 9)}`);
  //   console.log(currentDay);
  const user = new Users(email, 324234);
  fetch("http://localhost:3000/user/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
});


fetch('http://localhost:3000/user/')
.then((response) => response.json())
.then((data) => console.log((data)));