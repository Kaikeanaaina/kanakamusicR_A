module.exports = function (sequelize, DataTypes) {
  var Song = sequelize.define('Song', {
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    line1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line3: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  })

  return Song
}
