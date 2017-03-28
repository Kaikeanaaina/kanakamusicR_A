module.exports = function (sequelize, DataTypes) {
  var Song = sequelize.define('Song', {
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    urlTitle: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(20),
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
    },
    line4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line5: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line6: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line7: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line8: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line9: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line10: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line11: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line12: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line13: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line14: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line15: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line16: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line17: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line18: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line19: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line20: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line21: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line22: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line23: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line24: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line25: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line26: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line27: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line28: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line29: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    line30: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord5: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord6: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord7: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord8: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord9: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord10: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord11: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord12: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord13: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord14: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord15: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord16: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord17: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord18: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord19: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord20: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord21: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord22: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord23: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord24: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord25: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord26: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord27: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord28: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord29: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chord30: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    visibilityBySong: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    visibilityByAlbum: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    visibilityByArtist: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    totalViews: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    weeklyViews: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    monthlyViews: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    memberTotalViews: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    memberWeeklyViews: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    memberMonthlyViews: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    classMethods: {
      associate: function (models) {
        Song.belongsTo(models.Artist)
        Song.belongsTo(models.Album)
      }
    }
  })

  return Song
}
