module.exports = function (sequelize, DataTypes) {
  var Artist = sequelize.define('Artist', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    facebook: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    instagram: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    twitter: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bookingPhoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bookingEmail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    visibilityByArtist: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function (models) {
        Artist.hasMany(models.Album)
        Artist.hasMany(models.Song)
      }
    }
  })

  return Artist
}
