const React = require('react')

class authenticatedUser extends React.Component {
  constructor () {
    super()
    this.state = {
      user: {},
      isLoggedIn: false,
    }
    this.logInUser() = this.logInUser.bind(this)
    this.logOutUser() = this.logOutUser.bind(this)
    this.requiredAuth() = this.requiredAuth.bind(this)
  }
  logInUser (user) {
    console.log('logging in')
  }
  logOutUser () {
    console.log('logging out')
  }
  requiredAuth (nextState, replace) {
    console.log('requires auth')
  }
 }

module.exports = authenticatedUser
