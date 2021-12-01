export class Users {
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


  