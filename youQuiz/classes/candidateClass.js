import  Users  from "./UserClass.js";

export class Candidates extends Users {
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
  