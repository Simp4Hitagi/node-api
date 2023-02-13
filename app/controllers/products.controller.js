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
// creating product
const product = {
  title: req.body.title,
  description: req.body.description,
  published: req.body.published ? req.body.published : false
};

// saving product in db and error handling
Products.create(product)
.then(data => {
  res.send(data);
})
.catch(err => {
  res.status(500).send({
    message:
      err.message || "Some error occurred while creating the Tutorial."
  });
});

// retrieve objects
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Products.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    });
};

// retrieve single object
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Product with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Product with id=" + id
      });
    });
};

// Updating object
exports.update = (req, res) => {
  const id = req.params.id;

  Products.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Products was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Products with id=${id}. Maybe products was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Products with id=" + id
      });
    });
};

// Delete All Object
exports.delete = (req, res) => {
  const id = req.params.id;

  Products.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Products was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Products with id=${id}. Maybe Products was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Products with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Products.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Products were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all products."
      });
    });
};

// Find all objects by condition
exports.findAllPublished = (req, res) => {
  Products.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    });
};

