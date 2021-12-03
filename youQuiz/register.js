// import { Users } from "./classes/UserClass";
// import { Candidates } from "./classes/UserClass";

const form = document.querySelector(".form");
const modalPlaceholder = document.querySelector(".modal");
const modalForm = document.querySelector(".modal-form");
const candidatesEmail = document.querySelector(".candidateEmail");
const candidatesPassword = document.querySelector(".candidatePassword");

const test = document.querySelector(".test");
let email = "";
let age = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //
  email = form.email.value;
  age = form.age.value;

  const candidateEmail = `${Math.random()
    .toString(36)
    .substring(2, 10)}@youQuiz.com`;
  const candidatePassword = `${Math.random().toString(36).substring(2, 9)}`;


  if (age >= 18 && age <= 35 && email.length !== 0) {
    modalPlaceholder.classList.remove("hidden");
    candidatesEmail.value += candidateEmail;
    candidatesPassword.value += candidatePassword;

  } else {
    // candidatesEmail.classList.remove('bg-gray-600')
  }
});

//
modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const currentDay = new Date().toDateString();

  const user = new Users(email, age);
  const candidate = new Candidates(
    user.email,
    user.age,
    candidatesEmail.value,
    candidatesPassword.value,
    currentDay
  );

    Candidates.addCandidates(candidate);
    Users.addUser(user);
});
