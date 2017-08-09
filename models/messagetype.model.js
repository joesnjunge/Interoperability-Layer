"use strict";

module.exports = function(sequelize, DataTypes) {
  let MessageType = sequelize.define("MessageType", {
    name: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true
    },
    verboseName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    description: DataTypes.TEXT
  })

  MessageType.associate = function(models) {
    MessageType.belongsToMany(models.Entity, {through: models.Subscriber})
  }
  
  return MessageType
}