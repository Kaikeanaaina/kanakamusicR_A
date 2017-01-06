module.exports = function(sequelize, DataTypes) {
  var Gig = sequelize.define("Gig", {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Month: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    Day: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    startHour: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    startMinute: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    promoter: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description : {
      type: DataTypes.STRING(10000),
      allowNull: false
    },
  }, {
    classMethods : {
      associate : function(models) {
        Gig.belongsTo(models.Artist);
        Gig.belongsTo(models.Venue);
      }
    }
  });

  return Gig;
};
