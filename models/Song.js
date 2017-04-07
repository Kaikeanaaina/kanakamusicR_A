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
    lyric1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric5: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric6: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric7: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric8: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric9: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric10: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric11: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric12: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric13: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric14: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric15: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric16: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric17: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric18: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric19: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric20: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric21: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric22: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric23: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric24: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric25: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric26: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric27: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric28: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric29: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lyric30: {
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
