const nodemailer = require("nodemailer");
const { getData } = require("../utils/utils")

const sendMail = async ( req , res)  => {
  try {
    const body = await getData(req);
    
   const ticket = JSON.parse(body)
    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "******",
        pass: "*******",
      },
    });
    let mailDetails = {
      from: "********",
      to:   `${ticket.email}`,
      subject: "deltaAir flight confirmation",
       html : `hello ${ticket.email} your flight at <h3> departure : ${ticket.departure_date} - arrival : ${ticket.arrival_date}</h3> <br/> <h3> from :${ticket.from} to ${ticket.to}</h3> <br/> has been booked successfully` 
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