module.exports = function (sequelize, DataTypes) {
  var Venue = sequelize.define('Venue', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    streetAddress: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    zipCode: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    classMethods : {
      associate : function (models) {
        Venue.hasMany(models.Gig)
      }
    }
  })

  return Venue
}
