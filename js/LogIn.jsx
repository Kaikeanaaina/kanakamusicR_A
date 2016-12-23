const React = require('react')
const axios = require('axios')
const { domain } = require('./MainContent/Domain')

class LogIn extends React.Component {
  constructor () {
    super()
    this.logIn = this.logIn.bind(this)
  }
  logIn (e) {
    e.preventDefault()

    let object = {
      email: this.refs.email,
      password: this.refs.password
    }

    axios.post(`${domain}/users/login`, object)
    .then((res) => {

    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  render () {
    return (
      <div>
        <h3>Log In </h3>
        <form onSubmit={this.logIn}>
          <label>
            <input type='text' ref='email' placeholder='email' />
            <input type='password' ref='password' placeholder='password' />
          </label>
          <button>Log In</button>
        </form>
      </div>
    )
  }
}

module.exports = LogIn
