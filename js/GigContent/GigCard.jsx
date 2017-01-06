const React = require('react')
const axios = require('axios')
const { domain } = require('../Domain')

const style = {
  GigCardContainer: {
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-around'
  },
  NameContainer: {
    backgroundColor: 'blue'
  },
  ArtistsContainer: {
    backgroundColor: 'yellow'
  },
  DetailsContainer: {
    backgroundColor: 'green'
  },
  DetailsContainer1: {
    backgroundColor: 'orange',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-around'
  },
  DetailsContainer2: {
    backgroundColor: 'gray',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around'
  },
  DetailItems: {

  },
  contactContainer: {
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around'
  },
  contactItem: {

  }
}

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
      age = (<p>{this.props.gig.age}+</p>)
    }
    let time
    if (this.props.gig.startHour < 12) {
      time = (<p>{this.props.gig.startHour}:{this.props.gig.startMinute} am</p>)
    } else {
      time = (<p>{this.props.gig.startHour - 12}:{this.props.gig.startMinute} pm</p>)
    }
    let description = null
    if (this.props.gig.description) {
      description = (<div><i><p>{this.props.gig.description}</p></i></div>)
    }
    return (
      <div style={style.GigCardContainer}>

        <div style={style.NameContainer}>
          <p>{this.props.gig.name}</p>
        </div>

        <div style={style.ArtistsContainer}>
          <p>{this.state.Artist.name}</p>
        </div>

        <div style={style.DetailsContainer}>
          <div style={style.DetailsContainer1}>
            <div style={style.DetailsContainer2}>
              <div style={style.DetailItems}> <p>{this.state.Venue.name}</p> </div>
              <div style={style.DetailItems}> <p>{this.props.gig.Month}/{this.props.gig.Day}</p> </div>
              <div style={style.DetailItems}> {time} </div>
              <div style={style.DetailItems}> {age} </div>
              <div style={style.DetailItems}> {price} </div>
            </div>

            <div style={style.contactContainer}>
              <div style={style.contactItem}>
                <p>{this.props.gig.promoter}</p>
              </div>

              <div style={style.contactItem}>
                <p>{this.props.gig.contact}</p>
              </div>
            </div>

          </div>

          <div>
            {description}
          </div>
        </div>

      </div>
    )
  }
}

GigCard.propTypes = {
  gig: React.PropTypes.object
}

module.exports = GigCard
