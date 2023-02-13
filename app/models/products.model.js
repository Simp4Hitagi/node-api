module.exports = (sequelize, Sequelize) => {
    const Products = sequelize.define("products", {
      id: {
        type: Sequelize.INT
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      },
      year: {
        type: Sequelize.INT
      },

    });
  
    return Products;
  };