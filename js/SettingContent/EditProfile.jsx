const React = require('react')

class EditProfile extends React.Component {
  render () {
    return (
      <div>
        <h1> EditProfile </h1>
        <p>profile picture</p>
        <label>
          Username:
          <br />
          <input placeholder='Username' />
        </label>
        <br />
        <br />

        <label>
          Email:
          <br />
          <input placeholder='Email' />
          <br />
          <input placeholder='Retype Email' />
          <br />
        </label>

        <br />

        <label>
          Change Password:
          <br />
          <input placeholder='old password' type='password' />
          <br />
          <input placeholder='new password' type='password' />
          <br />
          <input placeholder='retype password' type='password' />
          <br />
        </label>
        <p>opt-out of email notification</p>
        <p>opt-in of email notification</p>

        <button> Submit Edit </button>

      </div>
    )
  }
}

module.exports = EditProfile
