'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    price: DataTypes.INTEGER,
    host: DataTypes.INTEGER,
    description: DataTypes.STRING,
    reviews:  DataTypes.INTEGER,
    rules: DataTypes.INTEGER,
    amenities:  DataTypes.INTEGER

  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
  };
  return Spot;
};