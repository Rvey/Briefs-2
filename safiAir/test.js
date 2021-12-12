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



// stpes

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap flex-col">
    <div class="flex mx-auto flex-wrap mb-20">
      <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>STEP 1
      </a>
      <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>STEP 2
      </a>
      <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <circle cx="12" cy="5" r="3"></circle>
          <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
        </svg>STEP 3
      </a>
      <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>STEP 4
      </a>
    </div>
    <img class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    <div class="flex flex-col text-center w-full">
      <h1 class="text-xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
  </div>
</section>