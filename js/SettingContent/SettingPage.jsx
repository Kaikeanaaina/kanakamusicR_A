const React = require('react')
const { Link } = require('react-router')

class SettingPage extends React.Component {
  render () {
    return (
      <div>
        <h1> Settings </h1>

        <h3>
          <Link to='/EditProfile'> Edit Profile </Link>
        </h3>

        <h3>
          <Link to='/LayoutAddOns'> Layouts </Link>
        </h3>

        <h3>
          <Link to='/Feedback'> Feedback </Link>
        </h3>

        <h3>
          <Link to='/Sources'> Sources </Link>
        </h3>

        <h3>
          <Link to='/Credits'> Credits </Link>
        </h3>
      </div>
    )
  }
}

module.exports = SettingPage
