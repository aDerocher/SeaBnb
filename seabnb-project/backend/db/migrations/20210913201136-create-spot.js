'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      host: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users'}
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      reviews: {
        type: Sequelize.INTEGER
      },
      rules: {
        type: Sequelize.INTEGER
      },
      amenities: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      photo1: {
        type: Sequelize.STRING
      },
      photo2: {
        type: Sequelize.STRING
      },
      photo3: {
        type: Sequelize.STRING
      },
      photo4: {
        type: Sequelize.STRING
      },
      photo5: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Spots');
  }
};