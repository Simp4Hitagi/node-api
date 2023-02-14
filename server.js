// importing modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = require("./app/models");
  db.sequelize.sync({ force: true }).then(() => {
      console.log("Drop and re-sync db.");
    });

var options4Cors = {
    origin: "http://localhost:1234"
  };

  // sends package and converts
app.use(express.json());
app.use(cors(options4Cors));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// route
app.get("/", (request, response) => {
    //displaying
    response.json({ message: "Welcome, enter my realm if you dare." });
  });

// require("./app/routes/products.routes")(app);

//   optional ports
  const PORT = process.env.PORT || 1234;
//   listening
  app.listen(PORT, () => {
    console.log(`Server is running on this port ${PORT}.`);

  });
