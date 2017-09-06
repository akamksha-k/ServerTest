'use strict';
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define(
    'State',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      state: { type: DataTypes.STRING, allowNull: false },
       createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
        }
    }
  );
  return State;
};
