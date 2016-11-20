const React = require('react')
const axios = require('axios')
const AlbumList = require('./AlbumList')
const SongList = require('./SongList')

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
      Artist: {},
      albums: [],
      songs: [],
      showAlbumList: false,
      showSongList: false
    }
    this.EditArtist = this.EditArtist.bind(this)
  }
  componentDidMount () {
    let domain = 'http://localhost:5050/'

    axios.get(`${domain}artists/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        Artist: res.data,
        showAlbumList: true,
        showSongList: true
      })
    })

    axios.get(`${domain}albums/ByArtistId/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        albums: res.data
      })
    })

    axios.get(`${domain}songs/ByArtistId/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        songs: res.data

      })
    })
  }
  EditArtist (e) {
    e.preventDefault()
    console.log('edit artist')
  }
  render () {
    let AlbumListing
    if (this.state.showAlbumList) {
      AlbumListing = <AlbumList ArtistId={this.state.Artist.id} />
    }
    let SongListing
    if (this.state.showSongList) {
      SongListing = <SongList ArtistId={this.state.Artist.id} />
    }
    return (
      <div>
        <div>
          <h1>{this.state.Artist.name}</h1>
        </div>
        <div>
          <button onClick={this.EditArtist}> Edit Artist </button>
        </div>
        <div style={style.description}>
          <h3>{this.state.Artist.description}</h3>
        </div>
        <div style={style.booking}>
          <h3>{this.state.Artist.bookingEmail}</h3>
          <h3>{this.state.Artist.bookingPhoneNumber}</h3>
        </div>
        <div style={style.socialMedia}>
          <h3>{this.state.Artist.twitter}</h3>
          <h3>{this.state.Artist.facebook}</h3>
          <h3>{this.state.Artist.instagram}</h3>
        </div>
        <div>
          {AlbumListing}
        </div>
        <div>
          {SongListing}
        </div>
      </div>
    )
  }
}

Artist.propTypes = {
  params: React.PropTypes.object
}

module.exports = Artist
