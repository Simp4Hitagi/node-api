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