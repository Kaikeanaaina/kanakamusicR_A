const React = require('react')
const axios = require('axios')
// const { domain } = require('./Domain')

class LogIn extends React.Component {
  constructor () {
    super()
    this.state = {
      showingSignUpForm: false
    }
    this.logIn = this.logIn.bind(this)
    this.showSignUpForm = this.showSignUpForm.bind(this)
    this.showLogInForm = this.showLogInForm.bind(this)
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
    console.log('123123123132', this.refs.email.value, this.refs.password.value)
  }
  showSignUpForm (e) {
    e.preventDefault()
    this.setState({
      showingSignUpForm: true
    })
    console.log('sign up function')
  }
  showLogInForm (e) {
    e.preventDefault()
    this.setState({
      showingSignUpForm: false
    })
  }
  render () {
    let signUpOrLogInSection = null

    if (this.state.showingSignUpForm) {
      signUpOrLogInSection = <div>
      Hi
      <button onClick={this.showLogInForm()} >LogIn</button>
      </div>
    } else {
      signUpOrLogInSection = <div>
        <h3>Log In </h3>
        <form onSubmit={this.logIn}>
          <label>
            <input type='text' ref='email' placeholder='email' />
            <input type='password' ref='password' placeholder='password' />
          </label>
          <button>Log In</button>
        </form>
        <button onClick={this.showSignUpForm()} > SignUp </button></div>
    }
    return (
      <div>
        {signUpOrLogInSection}
      </div>
    )
  }
}

module.exports = LogIn
