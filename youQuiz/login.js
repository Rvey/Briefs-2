const form = document.querySelector(".form");

class Users {
  constructor(email, age) {
    this.email = email;
    this.age = age;
  }
  static getUser = () => {
    return getUsers();
  };

  static addUser = (user) => {
    return addUser(user);
  };
}

class Candidates extends Users {
  constructor(email, age, genEmail, genPassword, date) {
    super(email, age);
    this.genEmail = genEmail;
    this.genPassword = genPassword;
    this.date = date;
  }
  static addCandidates = (candidate) => {
    return addCandidate(candidate)
  };
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //
  const userEmail = form.email.value;
  const userAge = form.age.value;
  const currentDay = new Date().toDateString();
  const candidateEmail = `${Math.random()
    .toString(36)
    .substring(3, 7)}@youQuiz.com`;
  const candidatePassword = `${Math.random().toString(36).substring(2, 9)}`;
  //

  const user = new Users(userEmail, userAge);
  const candidate = new Candidates(user.email, user.age, candidateEmail, candidatePassword, currentDay);

  if (userAge >= 18 && userAge <= 35 && userEmail.length !== 0) {
    Users.addUser(user)
    Candidates.addCandidates(candidate)

  } else {
    console.log('Something went wrong');
  }
});

