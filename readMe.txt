===Participants====:

-Deno Rautenbach(MySQL & Clever Cloud)
-Luntu Sogeyana (NODE)

===Clever Cloud Credentials====:

module.exports = {
    HOST: "b9pmtpkzmj3tzbax3pn7-mysql.services.clever-cloud.com",
    USER: "uvgvjx8jpvznz3yl",
    PASSWORD: "HoCoa5b3is1mttzGo8gY",
    DB: "b9pmtpkzmj3tzbax3pn7",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

====Routes====:

module.exports = app => {
    const products = require("../controllers/products.controller.js");
    var router = require("express").Router();
    // Create a new Product
    router.post("/", products.create);
    // Retrieve all Products
    router.get("/", products.findAll);
    // Retrieve all published Products
    router.get("/published", products.findAllPublished);
    // Retrieve a single Products with id
    router.get("/:id", products.findOne);
    // Update a Products with id
    router.put("/:id", products.update);
    // Delete a Product with id
    router.delete("/:id", products.delete);
    // Delete all Products
    router.delete("/", products.deleteAll);
    app.use('/api/products', router);
  };