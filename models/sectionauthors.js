'use strict';
module.exports = (sequelize, DataTypes) => {
  var SectionAuthor = sequelize.define(
    'SectionAuthor',
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
          models.SectionAuthor.belongsTo(models.ProtocolSection);
          models.SectionAuthor.belongsTo(models.Protocol);
          models.SectionAuthor.belongsTo(models.User);
        },
      },
    }
  );
  return SectionAuthor;
};
