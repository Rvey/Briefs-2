// -- DOM elements
const startBtnElement = document.querySelector("#start-btn");
const nextChallenge = document.querySelector("#backHome");
const nextBtnElement = document.querySelector("#next-btn");
const quizQuestionElement = document.querySelector("#quiz__question");
const questionElement = document.querySelector("#question");
const answersBtnElement = document.querySelector("#answers-btns");
const resultElement = document.querySelector("#result");
//
const user = JSON.parse(sessionStorage.getItem('currentUser'))
const userScore = JSON.parse(sessionStorage.getItem('AdministrationScore'))
const displayCurrent = document.querySelector('.user').innerHTML += `<h1>${user.id}</h1>`
// -- logic
let administrationQuestions = [];
let index;
let score = 0;

let btnClass = "btn-html";

const endPoint = "http://localhost:3000/administrationQuestions/";

const fetchQuestions = () => {
  fetch(endPoint)
    .then((response) => response.json())
    .then((data) => administrationQuestions.push(...data));
};
fetchQuestions();

// instance of Quiz Class
const quiz = new Quiz(
  startBtnElement,
  nextChallenge,
  nextBtnElement,
  quizQuestionElement,
  questionElement,
  answersBtnElement,
  resultElement,
  administrationQuestions,
  index,
  score,
  btnClass
);
//Events
document.addEventListener("DOMContentLoaded", () => {
  startBtnElement.style.backgroundColor = "red";
});
startBtnElement.addEventListener("click", () => quiz.startQuiz());
nextChallenge.addEventListener("click", (e) => {
  e.preventDefault()
quiz.updateUserAScore()
// window.location.replace("./home.html");
});
nextBtnElement.addEventListener("click", () => quiz.showNextQuestion());


