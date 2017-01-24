const React = require('react')
const axios = require('axios')
const { domain } = require('./../Domain')
const BandMemberCard = require('./BandMemberCard')

class BandMembers extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bandMembers: []
    }
  }
  componentDidMount () {
    axios.get(`${domain}/bandMembers/ByArtistId/${this.props.params.id}`)
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
        {this.state.bandMembers.map((bandMember, i) => (
          <BandMemberCard bandMember={bandMember} key={i} />
        ))}
      </div>
    )
  }
}

const { object } = React.PropTypes

BandMembers.propTypes = {
  params: object
}

module.exports = BandMembers
