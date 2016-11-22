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
  }
}

class SongList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      songs: []
    }
  }
  componentDidMount () {
    if (this.props.ArtistId) {
      axios.get(`http://localhost:5050/songs/ByArtistId/${this.props.ArtistId}`)
      .then((res) => {
        this.setState({
          songs: res.data
        })
      })
    } else if (this.props.AlbumId) {
      axios.get(`http://localhost:5050/songs/ByAlbumId/${this.props.AlbumId}`)
      .then((res) => {
        this.setState({
          songs: res.data
        })
      })
    } else {
      axios.get('http://localhost:5050/songs')
      .then((res) => {
        this.setState({
          songs: res.data
        })
      })
    }
  }
  render () {
    return (<div style={style.songListContainer}>
    {this.state.songs.map((song, i) => (
      <div style={style.songLinkContainer} key={i} >
        <Link key={i} to={`/song/${song.id}`} style={style.songLink} >
          <div key={i} style={style.SongText}>
            {song.title}
          </div>
          <br />
        </Link>
      </div>
    ))}
    </div>)
  }
}

SongList.propTypes = {
  songs: React.PropTypes.arrayOf(React.PropTypes.object),
  ArtistId: React.PropTypes.number,
  AlbumId: React.PropTypes.number
}

module.exports = SongList
