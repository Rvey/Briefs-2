const loginForm = document.querySelector(".form");
const badCreds = document.querySelector(".bad");

let candidatesData = [];




loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  candidatesData.map((el) => {
    if (
      loginForm.email.value == el.genEmail &&
      loginForm.password.value == el.genPassword
    ) {
      badCreds.style.display = "none";
      window.location.replace("../test/testPage.html");
      
    } else {
      badCreds.classList.remove("hidden");
    }
  });
});

fetch("http://localhost:3000/candidates/")
  .then((response) => response.json())
  .then((data) => candidatesData.push(...data));


