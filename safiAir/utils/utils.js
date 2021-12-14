const ejs = require("ejs");
const getData = (req) => {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      req.on("data", (bufferData) => {
        body += bufferData.toString();
      });
      req.on("end", () => {
        resolve(body);
      });
    } catch (err) {
      reject(err);
    }
  });
};
const redirect = (path, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  ejs.renderFile(path, function (err, str) {
    // str => Rendered HTML string
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(str);
    }
  });
};

// const redirectJS = (path, res) => {
//   res.writeHead(200, { "Content-type": "application/javascript" });
//   ejs.renderFile(path, function (err, str) {
//     // str => Rendered HTML string
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       res.setHeader("X-Content-Type-Options", "nosniff");
//     }
//   });
// };
module.exports = {
  getData,
  redirect,
  // redirectJS
};
