module.exports = function (sequelize, DataTypes) {
  var TermsOfService = sequelize.define('TermsOfService', {
    terms: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  return TermsOfService
}
