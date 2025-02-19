'use strict';

module.exports = {
   up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('pizzas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pizza_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      devoured: {
        type: Sequelize.BOOLEAN
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('pizzas');
  }
};