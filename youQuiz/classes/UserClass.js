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
  constructor(email, age, genEmail, genPassword, date   ) {
    super(email, age);
    this.genEmail = genEmail;
    this.genPassword = genPassword;
    this.date = date;
  }
  static addCandidates = (candidate) => {
    return addCandidate(candidate);
  };
}
