module.exports = function(sequelize, DataTypes) {
  var Gigs = sequelize.define("Gigs", {
    band: DataTypes.STRING,
    location : DataTypes.STRING,
    date : DataTypes.TIME,
    cover: DataTypes.INTEGER,
    description : DataTypes.TEXT,
    promoter: DataTypes.STRING,
    promoter_contact:DataTypes.STRING,
  }, {
    classMethods : {
      associate : function(models) {
        Gigs.belongsTo(models.Artist);
      }
    }
  });

  return Gigs;
};
