'use strict';
module.exports = (sequelize, DataTypes) => {
  const TemplateSection = sequelize.define(
    'TemplateSection',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      TemplateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      number: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //1 for Medic, 2 for Statistician, 3 for StudyManagers & it should be null if it is subsection.. No Seperate Section Type table is required for MVP
      sectionTypeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ParentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      structure: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
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
          models.TemplateSection.belongsTo(models.Template);
          models.TemplateSection.belongsTo(models.TemplateSection, {
            as: 'Parent',
            foreignKey: 'ParentId',
          });
          models.TemplateSection.hasMany(models.TemplateSection, {
            as: 'Children',
            foreignKey: 'ParentId',
          });
          models.TemplateSection.hasMany(models.ProtocolSection);
        },
      },
    }
  );
  return TemplateSection;
};
