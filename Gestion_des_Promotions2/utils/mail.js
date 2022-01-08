const nodemailer = require("nodemailer");

const sendMail = async (email, password , url) => {
  try {
    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rredouane3440@gmail.com",
        pass: "Red1234@",
      },
    });
    let mailDetails = {
      from: "rredouane3440@gmail.com",
      to: `${email}`,
      subject: "MARJAN CORP",
      title: "YOU CENTER ADMIN PASSWORD",
      html: `Your password is <h1>${password}</h1> <h3>http://localhost:8082/${url}</h3> `,
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log("Error Occurs");
      } else {
        console.log("Email sent successfully");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendMail,
};
