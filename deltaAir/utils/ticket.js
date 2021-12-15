const nodemailer = require("nodemailer");
const { getData } = require("../utils/utils")

const sendMail = async ( req , res)  => {
  try {
    const body = await getData(req);
    
   const ticket = JSON.parse(body)
    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "*****",
        pass: "*****",
      },
    });
    let mailDetails = {
      from: "*****",
      to:   "*****",
      subject: "deltaAir flight confirmation",
       html : `your flight from ${ticket.from} to  ${ticket.to} has been booked successfully` 
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