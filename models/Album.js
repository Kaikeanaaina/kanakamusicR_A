module.exports = function (sequelize, DataTypes) {
  var Album = sequelize.define('Album', {
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    visibility: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function (models) {
        Album.belongsTo(models.Artist)
        Album.belongsTo(models.RecordLabel)
        Album.hasMany(models.Song)
      }
    }
  })

  return Album
}
