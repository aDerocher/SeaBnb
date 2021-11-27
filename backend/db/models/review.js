'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    guest: DataTypes.INTEGER,
    spot: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    // Review.belongsTo(models.Spot, {
    //     foreignKey: 'spot',
    // });
    // Review.belongsTo(models.User, {
    //     foreignKey: 'guest',
    // });
  };
  return Review;
};