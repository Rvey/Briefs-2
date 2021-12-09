// config   = require('config');
// const http = require("http");
// const fs = require("fs");
// const ejs = require("ejs");

// const server = http.createServer((request, response) => {
//   var path = url.parse(request.url, true).pathname;

//   if (request.method === "POST") {
// if (path === "/home") {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   let htmlContent = fs.readFileSync(__dirname + `/views/${page}.ejs`, "utf8");
//   let htmlRenderized = ejs.render(htmlContent, {
//     filename: `${page}.ejs`,
//     data,
//     params: req.params,
//   });
//   res.end(htmlRenderized);
// }
//         response.end(data, "utf-8");
//       });
//     } else {
//       response.end(404);
//     }
//   }
// });

// const PORT = process.env.PORT || 5500;

// server.listen(PORT, () => console.log(`server running on ${PORT}`));

// ejs.renderFile("./views/pages/index.ejs", (err, str) => {
//   // str => Rendered HTML string
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(str);
//   }
// });

// const renderFile = (file, data) => {
//     return new Promise(resolve => {
//      ejs.renderFile(file, data, (err, result) => {
//       if (err) {
//        logger.error(err);
//       }
//       resolve(result);
//      });
//     });
//    }

// const http = require("http");
// const server = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "text/html" });
//   let htmlContent = fs.readFileSync(__dirname + '/views/pages/index.ejs' , 'utf8')
//   let htmlRenderized = ejs.render(htmlContent , {data})
//   response.end(htmlRenderized)
// });

// const PORT = process.env.PORT || 5500;
// server.listen(PORT, () => console.log(`server running on ${PORT}`));

const http = require("http");
const ejs = require("ejs");


//register view engin



const server = http.createServer((req, res) => {
  //set header content type

    res.setHeader("Content-Type", "text/html");

    let path = "./views/";
    switch (req.url) {
        case "/":
        path += "index.ejs";
        res.statusCode = 200;
        break;
        case "/reservation":
            path += "pages/reservation.ejs";
        res.statusCode = 200;
        break;
        case "/admin":
        path += "pages/adminPanel.ejs";
        res.statusCode = 200;
        break;
        case "/check-out":
        res.statusCode = 301;
        res.setHeader("Location", "/checkout");
        res.end();
        break;
        default:
        path += "404.ejs";
        res.statusCode = 404;
        break;
    }

    ejs.renderFile(path, {}, function(err, str){
        // str => Rendered HTML string
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(str);
        }
    });
});

server.listen(3000, "localhost", () => {
  console.info("listening for request on port 3000");
});