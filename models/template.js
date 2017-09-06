'use strict';
module.exports = (sequelize, DataTypes) => {
  const Template = sequelize.define(
    'Template',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      //If sponsor Id is null it means it is Transcelerate, So title column is not required
      sponsorId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      version: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      classMethods: {
        associate: models => {
          models.Template.hasMany(models.TemplateSection);
          models.Template.hasMany(models.Protocol);
        },
      },
    }
  );

  return Template;
};
