module.exports = function(sequelize, DataTypes) {
  var BandMember = sequelize.define("BandMember", {
    name : {
      type: DataTypes.STRING( 100 ),
      allowNull: false
    },
    instrument: {
      type: DataTypes.STRING( 255 ),
      allowNull: true
    },
    howYouStartedToPlayMusic: {
      type: DataTypes.STRING( 1000 ),
      allowNull: true
    },
    whatMotivatesYouToPlayMusic: {
      type: DataTypes.STRING( 1000 ),
      allowNull: true
    },
    whoDoYouLookUpTo: {
      type: DataTypes.STRING( 1000 ),
      allowNull: true
    },
    additionComments: {
      type: DataTypes.STRING,
      allowNull: true
    },
    visibility: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    classMethods : {
      associate : function(models) {
        BandMember.belongsTo(models.Artist);
      }
    }
  });

  return BandMember;
};
