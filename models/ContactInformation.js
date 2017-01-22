module.exports = function (sequelize, DataTypes) {
  var ContactInformation = sequelize.define('ContactInformation', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    faxNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
  })

  return ContactInformation
}
