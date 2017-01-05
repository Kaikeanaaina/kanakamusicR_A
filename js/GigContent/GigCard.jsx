const React = require('react')
const axios = require('axios')
const { domain } = require('../Domain')

class GigCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = ({
      Artist: {},
      Venue: {}
    })
  }
  componentDidMount () {
    axios.get(`${domain}/artists/${this.props.gig.ArtistId}`)
    .then((res) => {
      this.setState({
        Artist: res.data
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })

    axios.get(`${domain}/venues/${this.props.gig.VenueId}`)
    .then((res) => {
      this.setState({
        Venue: res.data
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })
  }
  render () {
    return (
      <div>
        <h1> Gig Card </h1>

        <div style={{backgroundColor: 'rgba(0,255,0,0.4)'}}>
          <h3>{this.props.gig.name}</h3>
          <h3>{this.state.Artist.name}</h3>
          <h3>{this.props.gig.Month}</h3>
          <h3>{this.props.gig.Day}</h3>
          <h3>{this.state.Venue.name}</h3>
          <h3>{this.props.gig.age}</h3>
          <h3>{this.props.gig.price}</h3>
          <h3>{this.props.gig.promoter}</h3>
          <h3>{this.props.gig.contact}</h3>
          <h3>{this.props.gig.description}</h3>
        </div>

      </div>
    )
  }
}

GigCard.propTypes = {
  gig: React.PropTypes.object
}

module.exports = GigCard
