const loginForm = document.querySelector(".form");
const badCreds = document.querySelector(".bad");
// const candidates = JSON.parse(sessionStorage.getItem("candidates"));
let candidatesData = [];
// const currentUser = JSON.parse(sessionStorage.getItem('currentUser'))



loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

//   returnLast(candidatesData);

  candidatesData.map((el) => {
    if (
      loginForm.email.value == el.genEmail &&
      loginForm.password.value == el.genPassword
    ) {
      badCreds.style.display = "none";
      window.location.replace("./testPage.html");
      
    } else {
      badCreds.classList.remove("hidden");
    }
  });
});


const CandidatePort = "http://localhost:3000/candidates/";
fetch(CandidatePort)
  .then((response) => response.json())
  .then((data) => candidatesData.push(...data));


