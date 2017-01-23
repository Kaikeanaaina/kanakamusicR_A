const React = require('react')
const axios = require('axios')
const { domain } = require('./Domain')

class BandMembers extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bandMembers: []
    }
  }
  componentDidMount () {
    axios.get(`${domain}/bandMembers`)
    .then((res) => {
      this.setState({
        bandMembers: res.data
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })
  }
  render () {
    return (
      <div>
        <h1> Band Member </h1>
      </div>
    )
  }
}

module.exports = BandMembers
