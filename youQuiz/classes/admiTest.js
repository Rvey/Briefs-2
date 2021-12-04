class Quiz {
  constructor(
    startBtnElement,
    nextChallenge,
    nextBtnElement,
    quizQuestionElement,
    questionElement,
    answersBtnsElement,
    resultElement,
    questions,
    index,
    score,
    btnClass
  ) {
    this.startBtnElement = startBtnElement;
    this.nextChallenge = nextChallenge;
    this.nextBtnElement = nextBtnElement;
    this.quizQuestionElement = quizQuestionElement;
    this.questionElement = questionElement;
    this.answersBtnsElement = answersBtnsElement;
    this.resultElement = resultElement;
    this.questions = questions;
    this.index = index;
    this.score = score;
    this.btnClass = btnClass;
  }
  // --- starting game (after pressing "START QUIZ")
  startQuiz() {
    this.startBtnElement.classList.add("hide");
    this.quizQuestionElement.classList.remove("hide");
    // -- resetting score and index
    if (!this.resultElement.classList.contains("hide")) {
      this.resultElement.classList.add("hide");
      this.score = 0;
    }
    this.index = 0;
    this.setNextQuestion();
  }
  // --- resetting "NEXT QUESTION" button and setting new
  setNextQuestion() {
    this.resetState();

    this.showQuestion(this.questions[this.index]);
  }

  // --- selecting answer (by clicking on it's button)
  selectAnswer(e, self) {
    let correct = e.target.dataset.correct;
    if (correct) {
      e.target.classList.add("correct");
      e.target.innerHTML += ` <i class="fas fa-check"></i>`;
      this.score++;
      sessionStorage.setItem('AdministrationScore' , JSON.stringify( { AdministrationScore: this.score }))
      

    } else {
      e.target.classList.add("wrong");
      e.target.innerHTML += ` <i class="fas fa-times"></i>`;
    }

    Array.from(self.answersBtnsElement.children).forEach(
      (btn) => (btn.disabled = true)
    );

    if (this.questions.length > this.index + 1) {
      this.nextBtnElement.classList.remove("hide");

    } else {
      this.nextChallenge.innerText = "Save and redirect";
      this.resultElement.classList.remove("hide");
      this.resultElement.innerHTML = `
          <h1><i class="fas fa-trophy"></i></h1>
          <h3>Congrats! You are a champ !</h3>
          `;
          // const user = JSON.parse(sessionStorage.getItem("currentUser"));
          // const AdministrationScore = { AdministrationScore : this.score };
          // updateCandidates(AdministrationScore, user.id);
        
        this.quizQuestionElement.classList.add("hide");
        this.nextChallenge.classList.remove("hide");
    }
  }
  
  updateUserAScore() {
    const user = JSON.parse(sessionStorage.getItem("currentUser"));

    const AdministrationScore = { AdministrationScore : this.score };
   const merge = {
     ...AdministrationScore , 
     ...user
   }
   fetch(`http://localhost:3000/candidates/${user.id}`, {
    method: "PUT",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(merge),
  }).then(() => {
    window.location.replace("./home.html");
  })

  }



  // -- showing question and answers from questions array
  showQuestion(question) {
    this.questionElement.innerText = question.question;
    let self = this;
    question.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn", this.btnClass);

      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", (e) => this.selectAnswer(e, self));

      this.answersBtnsElement.appendChild(button);
    });
  }
  // -- showing next question (after clicking "NEXT QUESTION")
  showNextQuestion() {
    this.index++;
    this.setNextQuestion();
  }
  // -- reseting "NEXT QUESTION" button and answer buttons (removing previous ones)
  resetState() {
    this.nextBtnElement.classList.add("hide");
    while (this.answersBtnsElement.firstChild) {
      this.answersBtnsElement.removeChild(this.answersBtnsElement.firstChild);
    }
  }
}
