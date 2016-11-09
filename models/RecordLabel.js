module.exports = function (sequelize, DataTypes) {
  var RecordLabel = sequelize.define('RecordLabel', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        RecordLabel.hasMany(models.Album)
      }
    }
  })

  return RecordLabel
}
