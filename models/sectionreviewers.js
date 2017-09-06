'use strict';
module.exports = (sequelize, DataTypes) => {
  var SectionReviewer = sequelize.define(
    'SectionReviewer',
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
      ProtocolSectionId: {
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
          models.SectionReviewer.belongsTo(models.ProtocolSection);
          models.SectionReviewer.belongsTo(models.Protocol);
          models.SectionReviewer.belongsTo(models.User);
        },
      },
    }
  );
  return SectionReviewer;
};
