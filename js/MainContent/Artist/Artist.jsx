const React = require('react')
const axios = require('axios')
const AlbumList = require('../Album/AlbumList')
const SongList = require('../Song/SongList')
const { Link } = require('react-router')

const style = {
  socialMedia: {
    margin: '5px'
  },
  socialMediaItems: {
    fontSize: '18px',
    margin: '0px'
  },
  booking: {
    fontSize: '18px',
    margin: '5px'
  },
  bookingItems: {
    fontSize: '18px',
    margin: '0px'
  },
  description: {
    margin: '5px'
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
  }
  componentDidMount () {
    axios.get(`/artists/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        Artist: res.data,
        showAlbumList: true,
        showSongList: true
      })
    })
    .catch((error) => {
      console.log('axios error', error)
    })

    axios.get(`/albums/ByArtistId/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        albums: res.data
      })
    })
    .catch((error) => {
      console.log('axios error', error)
    })

    axios.get(`/songs/ByArtistId/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        songs: res.data

      })
    })
    .catch((error) => {
      console.log('axios error', error)
    })
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
          <button>
            <Link to={`/artist/edit/${this.state.Artist.id}`}> Edit Artist </Link>
          </button>
        </div>
        <div style={style.booking}>
          <p style={style.bookingItems}>{this.state.Artist.bookingEmail}</p>
          <p style={style.bookingItems}>{this.state.Artist.bookingPhoneNumber}</p>
        </div>
        <div>
          <a style={style.socialMedia} href={this.state.Artist.twitter}>{this.state.Artist.twitter}</a>
          <a style={style.socialMedia} href={this.state.Artist.facebook}>{this.state.Artist.facebook}</a>
          <a style={style.socialMedia} href={this.state.Artist.instagram}>{this.state.Artist.instagram}</a>
        </div>
        <div style={style.description}>
          <p><i>{this.state.Artist.description}</i></p>
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
