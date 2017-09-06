'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProtocolSection = sequelize.define(
    'ProtocolSection',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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
      ProtocolId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      TemplateSectionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ParentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      content: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      StateId: {
        type: DataTypes.INTEGER,
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
          models.ProtocolSection.belongsTo(models.Protocol);
          models.ProtocolSection.belongsTo(models.TemplateSection);
          models.ProtocolSection.belongsTo(models.State);
          models.ProtocolSection.belongsTo(models.ProtocolSection, {
            as: 'Parent',
          });
          models.ProtocolSection.hasMany(models.SectionAuthor);
          models.ProtocolSection.hasMany(models.SectionReviewer);
        },
      },
    }
  );
  return ProtocolSection;
};
