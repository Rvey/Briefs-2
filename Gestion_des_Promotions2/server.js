const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')
const cors = require("cors");

// set the view engine to ejs
app.set('view engine', 'ejs');


const PORT = process.env.PORT || 8082;

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

require("./routes/routes")(app);


//connect
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}.`);
});
