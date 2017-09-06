'use strict';
module.exports = (sequelize, DataTypes) => {
  var ProtocolReviewer = sequelize.define(
    'ProtocolReviewer',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      ProtocolId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      classMethods: {
        associate: models => {
          models.ProtocolReviewer.belongsTo(models.Protocol);
          models.ProtocolReviewer.belongsTo(models.User);
        },
      },
    }
  );
  return ProtocolReviewer;
};
