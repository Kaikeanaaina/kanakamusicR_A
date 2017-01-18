const React = require('react')
const MyTitle = require('./MyTitle')
const { Link } = require('react-router')
const axios = require('axios')
const { domain } = require('./Domain')

class PrivacyPolicy extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      privacyPolicy: ''
    }
  }
  componentDidMount () {
    axios.get(`${domain}/privacyPolicies/1`)
    .then((res) => {
      this.setState({
        privacyPolicy: res.data.privacyPolicy
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })
  }
  render () {
    return (
      <div>
        <MyTitle title='PrivacyPolicy' />
        <button>
          <Link to='/EditPrivacyPolicy'> Edit Privacy Policy </Link>
        </button>

        <p>{this.state.privacyPolicy}</p>

      </div>
    )
  }
}

module.exports = PrivacyPolicy
