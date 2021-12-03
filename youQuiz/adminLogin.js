const adminEndPoint = "http://localhost:3000/admin/";
fetch(adminEndPoint)
  .then((response) => response.json())
  .then((data) => admin.push(...data));

const loginForm = document.querySelector(".form");
const badCreds = document.querySelector(".bad");

let admin = [];

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  admin.map((el) => {
    if (
      loginForm.email.value == el.email &&
      loginForm.password.value == el.password
    ) {
      badCreds.style.display = "none";
      window.location.replace("./adminPanel.html");
      console.log("welcome");
    } else {
      badCreds.classList.remove("hidden");
      console.log("bad creds");
    }
  });
});
