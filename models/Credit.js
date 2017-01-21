module.exports = function (sequelize, DataTypes) {
  var Credit = sequelize.define('Credit', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    organization: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  })
  return Credit
}
