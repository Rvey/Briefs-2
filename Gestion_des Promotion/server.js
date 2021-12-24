const express = require("express");
const app = express();

const cors = require("cors");

const PORT = process.env.PORT || 8082;

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());
require("./routes/routes")(app);

//connect
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}.`);
});
