'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    guest: DataTypes.INTEGER,
    spot: DataTypes.INTEGER,
    checkIn: DataTypes.DATE,
    checkOut: DataTypes.DATE
  }, {});
  Booking.associate = function(models) {
    // Booking.belongsTo(models.Spot, {
    //     foreignKey: 'spot',
    // });
    // Booking.belongsTo(models.User, {
    //     foreignKey: 'guest',
    // });
  };
  return Booking;
};