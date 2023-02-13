// CRUD system
const db = require("../models");
const Products = db.products;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
//   validating request
if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
}};

