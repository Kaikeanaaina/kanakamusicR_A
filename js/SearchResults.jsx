const React = require('react')
const axios = require('axios')
const { Link } = require('react-router')

const style = {
  songListContainer: {

  },
  songLinkContainer: {

  },
  songLink: {
    textDecoration: 'none',
    fontSize: '24px'
  },
  SongText: {
    borderBottom: 'black solid 1px',
    color: 'grey'
  },
  artistListContainer: {

  },
  artistLinkContainer: {

  },
  artistLink: {
    textDecoration: 'none',
    fontSize: '24px'
  },
  ArtistText: {
    borderBottom: 'black solid 1px',
    color: 'grey'
  },
  albumListContainer: {

  },
  albumLinkContainer: {

  },
  albumLink: {
    textDecoration: 'none',
    fontSize: '24px'
  },
  AlbumText: {
    borderBottom: 'black solid 1px',
    color: 'grey'
  }
}

class SearchResults extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      songs: [],
      albums: [],
      artists: []
    }
  }
  componentDidMount () {
    axios.get('http://localhost:5050/songs')
    .then((res) => {
      this.setState({
        songs: res.data
      })
    })
    axios.get('http://localhost:5050/artists')
    .then((res) => {
      this.setState({
        artists: res.data
      })
    })
    axios.get('http://localhost:5050/albums')
    .then((res) => {
      this.setState({
        albums: res.data
      })
    })
  }
  render () {
    return (
      <div>
        <h1>
          All Search Results
        </h1>
        <div>
          {this.state.songs
            .filter((song) => `${song.title} ${song.description}`.toUpperCase().indexOf(this.props.searchInput.toUpperCase()) >= 0)
            .map((song, i) => (
              <div style={style.songLinkContainer} key={i} >
                <Link key={i} to={`/song/${song.id}`} style={style.songLink} >
                  <div key={i} style={style.SongText}>
                    {song.title}
                  </div>
                  <br />
                </Link>
              </div>
          ))}
        </div>
        <div>
          {this.state.artists
            .filter((artist) => `${artist.name} ${artist.description}`.toUpperCase().indexOf(this.props.searchInput.toUpperCase()) >= 0)
            .map((artist, i) => (
              <div style={style.artistLinkContainer} key={i} >
                <Link key={i} to={`/artist/${artist.id}`} style={style.artistLink} >
                  <div key={i} style={style.ArtistText} >
                    {artist.name}
                  </div>
                  <br />
                </Link>
              </div>
          ))}
        </div>
        <div>
          {this.state.albums
            .filter((album) => `${album.title} ${album.description}`.toUpperCase().indexOf(this.props.searchInput.toUpperCase()) >= 0)
            .map((album, i) => (
              <div style={style.albumLinkContainer} key={i} >
                <Link key={i} to={`/album/${album.id}`} style={style.albumLink} >
                  <div key={i} style={style.AlbumText} >
                    {album.title}
                  </div>
                  <br />
                </Link>
              </div>
          ))}
        </div>
      </div>
    )
  }
}

SearchResults.propTypes = {
  searchInput: React.PropTypes.string
}

module.exports = SearchResults
