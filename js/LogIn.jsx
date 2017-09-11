const React = require('react')
const axios = require('axios')
// const { domain } = require('./Domain')

class LogIn extends React.Component {
  constructor () {
    super()
    this.logIn = this.logIn.bind(this)
  }
  componentDidMount () {
    console.log('1111111')
    axios.get(`/users`)
    .then((res) => {
      console.log('33333333')
      console.log('success')
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  logIn (e) {
    e.preventDefault()

    // let object = {
    //   email: this.refs.email,
    //   password: this.refs.password
    // }

    // console.log(object.email.value, object.password.value)
    // // axios.post(`${domain}/users/login`, object)
    // // .then((res) => {
    // axios.get(`/users/`)
    // .then((res) => {
    //   console.log('success')
    // })
    // .catch((error) => {
    //   console.log('axios error', error)
    // })
    // // })
    // // .catch((error) => {
    // //   console.log('axios error', error)
    // // })
    console.log('123123123132', this.refs.email, this.refs.password)
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
