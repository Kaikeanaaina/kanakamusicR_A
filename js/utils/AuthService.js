const { EventEmitter } = require('events')
const { isTokenExpired } = require('./jwtHelper')
const Auth0Lock = require('auth0-lock')
const { browserHistory } = require('react-router')

export default class AuthService extends EventEmitter {
  constructor (clientId, domain) {
    super()
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: `${window.location.origin}/login`,
        responseType: 'token'
      }
    })
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    // Add callback for lock `authorization_error` event
    this.lock.on('authorization_error', this._authorizationError.bind(this))
    // binds login functions to keep this context
    this.login = this.login.bind(this)
  }

  _doAuthentication (authResult) {
    // Saves the user token
    this.setToken(authResult.idToken)
    // navigate to the home route
    browserHistory.replace('/home')

    // Async loads the user profile data
    this.lock.getProfile(authResult.idToken, (error, profile) => {
      if (error) {
        console.log('Error loading the Profile', error)
      } else {
        this.setProfile(profile)
      }
    })
  }

  _authorizationError (error) {
    // Unexpected authentication error
    console.log('Authentication Error', error)
  }

  login () {
    // Call the show method to display the widget.
    this.lock.show()
  }

  loggedIn () {
    // Checks if there is a saved token and it's still valid
    return !!this.getToken()
  }

  setToken (idToken) {
    // Saves user token to local storage
    this.localStorage.setItem('id_token', idToken)
  }

  getToken () {
    // Retrieves the user token from local storage
    return this.localStorage.getItem('id_token')
  }

  logout () {
    // Clear user token and profile data from local storage
    this.localStorage.removeItem('id_token')
  }
}

module.exports = AuthService

