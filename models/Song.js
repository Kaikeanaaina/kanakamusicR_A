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
    visibility: {
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
  })

  return Song
}
