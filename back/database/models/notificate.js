"use strict";
module.exports = (sequelize, DataTypes) => {
  const Notificate = sequelize.define(
    "Notificate",
    {
      email: DataTypes.STRING,
      currency: DataTypes.STRING,
      value: DataTypes.FLOAT
    },
    {}
  );
  Notificate.associate = function(models) {
    // associations can be defined here
  };
  return Notificate;
};
