const React = require('react')
const axios = require('axios')

const style = {
  socialMedia: {
    backgroundColor: 'pink'
  },
  booking: {
    backgroundColor: 'lightblue'
  },
  description: {
    backgroundColor: 'lightgreen'
  }
}

class Artist extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      artist: {}
    }
  }
  componentDidMount () {
    let domain = 'http://localhost:5050/'

    axios.get(`${domain}artists/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        artist: res.data
      })
    })
  }
  render () {
    return (
      <div>
        <div>
          <h1>{this.state.artist.name}</h1>
        </div>
        <div style={style.description}>
          <h3>{this.state.artist.description}</h3>
        </div>
        <div style={style.booking}>
          <h3>{this.state.artist.bookingEmail}</h3>
          <h3>{this.state.artist.bookingPhoneNumber}</h3>
        </div>
        <div style={style.socialMedia}>
          <h3>{this.state.artist.twitter}</h3>
          <h3>{this.state.artist.facebook}</h3>
          <h3>{this.state.artist.instagram}</h3>
        </div>
      </div>
    )
  }
}

Artist.propTypes = {
  params: React.PropTypes.object
}

module.exports = Artist
