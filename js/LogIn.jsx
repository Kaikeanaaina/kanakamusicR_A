const React = require('react')
const axios = require('axios')
// const { domain } = require('./Domain')

class LogIn extends React.Component {
  constructor () {
    super()
    this.state = {
      showingSignUpForm: false,
      showingSubmitSignUpButton: false
    }
    this.showSignUpForm = this.showSignUpForm.bind(this)
    this.showLogInForm = this.showLogInForm.bind(this)
    this.submitSignUp = this.submitSignUp.bind(this)
    this.showSubmitButton = this.showSubmitButton.bind(this)
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
  submitSignUp () {
    let user = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    console.log('signing up', user)
  }
  showSubmitButton (e) {
    console.log(e.target.value)

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
    console.log('made it')
  }
  render () {
    let signUpOrLogInSection = null

    if (this.state.showingSignUpForm) {
      signUpOrLogInSection = <div><h3>Sign Up</h3><br /><form onSubmit={this.submitSignUp}><label><input type='text' ref='email' placeholder='email' onChange={this.showSubmitButton} /> <br /><input type='text' ref='verifyEmail' placeholder='verify email' onChange={this.showSubmitButton} /> <br /><input type='password' ref='password' placeholder='password' onChange={this.showSubmitButton} /> <br /><input type='password' ref='verifyPassword' placeholder='verifyPassword' onChange={this.showSubmitButton} /> <br /></label>{submitSignUpButton}</form> <br /><br /><br /><button onClick={this.showLogInForm} >Show LogIn</button></div>
    } else {
      signUpOrLogInSection = <div><h3>Log In </h3><br /><form onSubmit={this.logIn}><label><input type='text' ref='email' placeholder='email' /><br /><input type='password' ref='password' placeholder='password' /></label><br /><button>Log In</button></form><br /><br /><br /><button onClick={this.showSignUpForm} >Show SignUp</button></div>
    }

    let submitSignUpButton = null
    if (this.state.showingSubmitSignUpButton) {
      submitSignUpButton = <div> <button>SignUp</button></div>
    }
    return (
      <div>
        {signUpOrLogInSection}
      </div>

    )
  }
}

module.exports = LogIn
