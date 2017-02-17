module.exports = function (sequelize, DataTypes) {
  var Admin = sequelize.define('Admin', {
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  })

  return Admin
}
