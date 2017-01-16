const React = require('react')
const axios = require('axios')
const { domain } = require('../Domain')
const { Link } = require('react-router')

const style = {
  GigCardContainer: {
    backgroundColor: 'rgba(100,100,100,0.3)',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    margin: '4px',
    padding: '5px'
  },
  NameContainer: {
  },
  ArtistsContainer: {
  },
  DetailsContainer: {
  },
  DetailsContainer1: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-around'
  },
  DetailsContainer2: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-around'
  },
  DetailsContainer3: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around'
  },
  DetailsContainer4: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-around'
  },
  DetailItems: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around'
  },
  DetailItems1: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center'
  },
  contactContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center'
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
      price = (<p style={{margin: 0}}>Free</p>)
    } else {
      price = (<p style={{margin: 0}}>${this.props.gig.price}</p>)
    }
    let age
    if (this.props.gig.age === 0) {
      age = (<p style={{margin: 0}}>All Ages</p>)
    } else {
      age = (<p style={{margin: 0}}>{this.props.gig.age}+</p>)
    }
    let time
    if (this.props.gig.startHour < 12) {
      time = (<p style={{margin: 0}}>{this.props.gig.startHour}:{this.props.gig.startMinute}am</p>)
    } else {
      time = (<p style={{margin: 0}}>{this.props.gig.startHour - 12}:{this.props.gig.startMinute}pm</p>)
    }
    let description = null
    if (this.props.gig.description) {
      description = (<div><i><p style={{textAlign: 'center', margin: 0}}>{this.props.gig.description}</p></i></div>)
    }
    let editPath = `/editGig/${this.props.gig.id}`
    return (
      <div style={style.GigCardContainer}>
        <div>
          <Link to={editPath} >Edit</Link>
        </div>

        <div style={style.NameContainer}>
          <p style={{textAlign: 'center', margin: 0}}>{this.props.gig.name}</p>
        </div>

        <div style={style.ArtistsContainer}>
          <h3 style={{margin: 0}}> Music: {this.state.Artist.name}</h3>
        </div>

        <div style={style.DetailsContainer}>
          <div style={style.DetailsContainer1}>
            <div style={style.DetailsContainer2}>
              <div style={style.DetailsContainer3}>
                <div style={style.DetailsContainer4}>
                  <div>
                    <h4 style={{textAlign: 'center', margin: 0}}> {this.state.Venue.name} </h4>
                  </div>
                  <div style={style.DetailItems}>
                    <p style={{margin: 0}}> {this.state.Venue.streetAddress}, {this.state.Venue.city}, {this.state.Venue.state} {this.state.Venue.zipCode}</p>
                  </div>
                </div>
              </div>
              <div style={style.DetailItems1}>
                <div> <p style={{marginTop: 0, marginBottom: 0, marginLeft: 4, marginRight: 4}}>{this.props.gig.Month}/{this.props.gig.Day}</p> </div>
                <div style={{marginLeft: 4, marginRight: 4}}> {time} </div>
                <div style={{marginLeft: 4, marginRight: 4}}> {age} </div>
                <div style={{marginLeft: 4, marginRight: 4}}> {price} </div>
              </div>
            </div>

            <div style={style.contactContainer}>
              <div style={style.contactItem}>
                <p style={{marginTop: 0, marginBottom: 0, marginLeft: 4, marginRight: 4}}>{this.props.gig.promoter}</p>
              </div>

              <div style={style.contactItem}>
                <p style={{marginTop: 0, marginBottom: 0, marginLeft: 4, marginRight: 4}}>{this.props.gig.contact}</p>
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
