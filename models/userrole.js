'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserRole = sequelize.define(
    'UserRole',
    {
      UserId: { type: DataTypes.INTEGER, allowNull: false },
      RoleId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      classMethods: {
        associate: models => {
          models.UserRole.belongsTo(models.User);
          models.UserRole.belongsTo(models.Role);
        },
      },
    }
  );
  return UserRole;
};
