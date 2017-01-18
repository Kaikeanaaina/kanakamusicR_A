const React = require('react')
const axios = require('axios')
const { domain } = require('./Domain')

class EditPrivacyPolicy extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      privacyPolicy: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
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
  onChange (e) {
    this.setState({
      privacyPolicy: e.target.value
    })
  }
  onSubmit () {
    let object = {
      privacyPolicy: this.refs.privacyPolicy.value
    }
    console.log(this.refs.privacyPolicy.value)
    if (this.state.privacyPolicy.length === undefined || this.state.privacyPolicy.length === null || this.state.privacyPolicy.length === 0) {
      axios.post(`${domain}/privacyPolicies/`, object)
      .then((res) => {
        window.location.href = '/#/PrivacyPolicy'
      })
      .catch((err) => {
        console.log('axios error', err)
      })
    } else {
      axios.put(`${domain}/privacyPolicies/1`, object)
      .then((res) => {
        window.location.href = '/#/PrivacyPolicy'
      })
      .catch((err) => {
        console.log('axios error', err)
      })
    }
  }
  render () {
    return (
      <div>
        <h1> Edit Private Policy </h1>
        <textArea value={this.state.privacyPolicy} ref='privacyPolicy' onChange={this.onChange} />
        <form onSubmit={this.onSubmit}>
          <button type='submit' > submit </button>
        </form>
      </div>
    )
  }
}

module.exports = EditPrivacyPolicy
