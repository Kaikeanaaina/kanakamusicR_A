module.exports = function (sequelize, DataTypes) {
  var Resource = sequelize.define('Resource', {
    bibliography: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })

  return Resource
}
