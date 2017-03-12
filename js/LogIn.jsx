const React = require('react')
const { PropTypes } = require('react')
// const axios = require('axios')
// const { domain } = require('./Domain')
const { ButtonToolbar, Button } = require('react-bootstrap')
const AuthService = require('./utils/AuthService')

// import styles from './styles.module.css'

class Login extends React.Component {
  constructor () {
    super()
    this.login = this.login.bind(this)
  }
  login () {
    this.props.auth.login()
  }
  render () {
    return (
      <div>
        <h2>Login</h2>
        <ButtonToolbar>
          <Button onClick={this.login}>Login</Button>
        </ButtonToolbar>
      </div>
    )
  }
}

Login.propTypes = {
  location: PropTypes.object,
  auth: PropTypes.instanceOf(AuthService)
}

module.exports = Login

// render () {
//     return (
//       <div className={styles.root}>
//         <h2>Login</h2>
//         <ButtonToolbar className={styles.toolbar}>
//           <Button bsStyle='primary' onClick={this.login}>Login</Button>
//         </ButtonToolbar>
//       </div>
//     )
//   }
