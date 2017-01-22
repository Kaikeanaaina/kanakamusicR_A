module.exports = function (sequelize, DataTypes) {
  var About = sequelize.define('About', {
    about: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })

  return About
}
