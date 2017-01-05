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
    let price
    if (this.props.gig.price === 0) {
      price = (<p>Free</p>)
    } else {
      price = (<p>${this.props.gig.price}</p>)
    }
    let age
    if (this.props.gig.age === 0) {
      age = (<p>All Ages</p>)
    } else {
      age = (<p>{this.props.gig.age}</p>)
    }
    let time
    if (this.props.gig.startHour < 12) {
      time = (<p>{this.props.gig.startHour}:{this.props.gig.startMinute} am</p>)
    } else {
      time = (<p>{this.props.gig.startHour - 12}:{this.props.gig.startMinute} pm</p>)
    }
    return (
      <div>
        <h1> Gig Card </h1>

        <div style={{backgroundColor: 'rgba(0,255,0,0.4)'}}>
          <label>
            <strong>Name:</strong>
            <p>{this.props.gig.name}</p>
          </label>
          <label>
            <strong>Artists:</strong>
            <p>{this.state.Artist.name}</p>
          </label>

          <div>
            <label>
              <strong>Date:</strong>
              <p>{this.props.gig.Month}/{this.props.gig.Day}/{this.props.gig.Year}</p>
            </label>
            <label>
              <strong>Time:</strong>
              {time}
            </label>
          </div>

          <label>
            <strong>Venue:</strong>
            <p>{this.state.Venue.name}</p>
          </label>
          <label>
            <strong>Age:</strong>
            {age}
          </label>
          <label>
            <strong>Price:</strong>
            {price}
          </label>
          <label>
            <strong>Promoters:</strong>
            <p>{this.props.gig.promoter}</p>
          </label>
          <label>
            <strong>Contact:</strong>
            <p>{this.props.gig.contact}</p>
          </label>
          <label>
            <strong>Description:</strong>
            <p>{this.props.gig.description}</p>
          </label>
        </div>

      </div>
    )
  }
}

GigCard.propTypes = {
  gig: React.PropTypes.object
}

module.exports = GigCard
