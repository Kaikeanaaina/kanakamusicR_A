module.exports = function (sequelize, DataTypes) {
  var PrivacyPolicy = sequelize.define('PrivacyPolicy', {
    privacyPolicy: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })

  return PrivacyPolicy
}
