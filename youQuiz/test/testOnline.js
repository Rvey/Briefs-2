// importing modules
import { Quiz } from "../modules/testClass.js";
// -- DOM elements
const startBtnElement = document.querySelector("#start-btn");
const nextChallenge = document.querySelector(".nextChallenge-btn");
const exitChallenge = document.querySelector(".exitChallenge-btn");
const nextBtnElement = document.querySelector("#next-btn");
const quizQuestionElement = document.querySelector("#quiz__question");
const questionElement = document.querySelector("#question");
const answersBtnElement = document.querySelector("#answers-btns");
const resultElement = document.querySelector("#result");

//
const user = JSON.parse(sessionStorage.getItem("currentUser"));

(document.querySelector(
  ".user"
).innerHTML += `<h1>${user.id}</h1>`);
// -- logic
let questions = [];
let index;
let score = 0;

let btnClass = "btn-html";

const endPoint = "http://localhost:3000/questions/";

const fetchQuestions = () => {
  fetch(endPoint)
    .then((response) => response.json())
    .then((data) => questions.push(...data));
};
fetchQuestions();

// instance of Quiz Class
const quiz = new Quiz(
  startBtnElement,
  nextChallenge,
  exitChallenge,
  nextBtnElement,
  quizQuestionElement,
  questionElement,
  answersBtnElement,
  resultElement,
  questions,
  index,
  score,
  btnClass
);
//Events
document.addEventListener("DOMContentLoaded", () => {
  startBtnElement.style.backgroundColor = "";
});
startBtnElement.addEventListener("click", () => quiz.startQuiz());
nextChallenge.addEventListener("click", (e) => {
  quiz.updateUserScore();
});
exitChallenge.addEventListener("click", (e) => {
  quiz.removeCandidate()
});

nextBtnElement.addEventListener("click", () => quiz.showNextQuestion());
