const React = require('react')
const axios = require('axios')
// const { domain } = require('./Domain')

const style = {
  warning: {
    color: 'red',
    width: '100%'
  }
}

class LogIn extends React.Component {
  constructor () {
    super()
    this.state = {
      showingSignUpForm: false,
      showingSubmitSignUpButton: false,
      errorMessage: '',
      totalViews: 0
    }
    this.showSignUpForm = this.showSignUpForm.bind(this)
    this.showLogInForm = this.showLogInForm.bind(this)
    this.submitSignUp = this.submitSignUp.bind(this)
    this.showSubmitButton = this.showSubmitButton.bind(this)
    this.logIn = this.logIn.bind(this)
    this.hitTheRoute = this.hitTheRoute.bind(this)
  }
  componentWillUnmount () {
    this.refs.email.value = null
    this.refs.password.value = null
  }
  showSignUpForm () {
    this.setState({
      showingSignUpForm: true
    })
  }
  showLogInForm () {
    this.setState({
      showingSignUpForm: false
    })
  }
  submitSignUp (e) {
    e.preventDefault()
    let user = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    axios.post(`/users`, user)
    .then((res) => {
      if (res.data.error) {
        this.setState({
          errorMessage: res.data.error
        })
      } else {
        this.setState({
          errorMessage: '',
          showingSignUpForm: false
        })
        this.refs.email.value = null
        this.refs.password.value = null
      }
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  showSubmitButton (e) {
    if (this.refs.email.value === null || !this.refs.email.value) {
      return this.setState({ showingSubmitSignUpButton: false })
    }

    if (this.refs.verifyEmail.value === null || !this.refs.verifyEmail.value) {
      return this.setState({ showingSubmitSignUpButton: false })
    }

    if (this.refs.password.value === null || !this.refs.password.value) {
      return this.setState({ showingSubmitSignUpButton: false })
    }

    if (this.refs.verifyPassword.value === null || !this.refs.verifyPassword.value) {
      return this.setState({ showingSubmitSignUpButton: false })
    }

    if (this.refs.email.value !== this.refs.verifyEmail.value) {
      return this.setState({ showingSubmitSignUpButton: false })
    }

    if (this.refs.password.value !== this.refs.verifyPassword.value) {
      return this.setState({ showingSubmitSignUpButton: false })
    }

    this.setState({
      showingSubmitSignUpButton: true
    })
  }
  logIn () {
    console.log('111111111 log in fired')
    let user = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }

    console.log('22222222222 created user', user)

    axios.post(`/users/login`, user)
    .then((res) => {
      console.log('8888888888 got a response', res)
      if (res.data.message) {
        console.log('9a9a9a9a9a9a got an errorMessage')
        this.setState({
          errorMessage: res.data.message
        })
      } else if (res.data.user) {
        console.log('9b9b9b9b9b9b9 got a user back', res.data.user)
        window.location.href = '/#/Home'
      } else {
        console.log('9c9c9c9c9c9c9c9c got nothing back', res.data)
        this.setState({
          errorMessage: ''
        })
      }
    })
    .catch((error) => {
      console.log('88f8f8f8f8f8f8f8 got an error')
      console.log('axios error', error)
    })
  }
  hitTheRoute () {
    console.log('hi')
  }
  render () {
    let signUpOrLogInSection = null
    let submitSignUpButton = null
    if (this.state.showingSubmitSignUpButton) {
      submitSignUpButton = <div> <button>SignUp</button></div>
    }

    if (this.state.showingSignUpForm) {
      signUpOrLogInSection = <div><h3>Sign Up</h3><br /><form onSubmit={this.submitSignUp}><label><input type='text' ref='email' placeholder='email' onChange={this.showSubmitButton} /> <br /><input type='text' ref='verifyEmail' placeholder='verify email' onChange={this.showSubmitButton} /> <br /><input type='password' ref='password' placeholder='password' onChange={this.showSubmitButton} /> <br /><input type='password' ref='verifyPassword' placeholder='verifyPassword' onChange={this.showSubmitButton} /> <br /></label>{submitSignUpButton}</form> <br /><br /><br /><button onClick={this.showLogInForm} >Show LogIn</button></div>
    } else {
      signUpOrLogInSection = <div><h3>Log In </h3><br /><form onSubmit={this.logIn}><label><input type='text' ref='email' placeholder='email' /><br /><input type='password' ref='password' placeholder='password' /></label><br /><button>Log In</button></form><br /><br /><br /><button onClick={this.showSignUpForm} >Show SignUp</button></div>
    }

    let theErrorMessageBlock = null

    if (this.state.errorMessage) {
      theErrorMessageBlock = <div style={style.warning}>{this.state.errorMessage}</div>
    }

    return (
      <div>
        {theErrorMessageBlock}
        {signUpOrLogInSection}
        <button onClick={this.hitTheRoute} > hit the route</button>
      </div>

    )
  }
}

module.exports = LogIn
