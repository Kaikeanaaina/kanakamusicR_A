const React = require('react')

class LogIn extends React.Component {
  constructor () {
    super()
    this.state = {
      blank: ''
    }
  }
  render () {
    return (
      <div>
        <h1>log in</h1>
        <input type='text' />
        <input type='password' />
        <button>submit</button>
      </div>
    )
  }
}

module.exports = LogIn
