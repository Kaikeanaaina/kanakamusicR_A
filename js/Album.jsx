const React = require('react')
const axios = require('axios')
const { Link } = require('react-router')

const style = {
  details: {
    backgroundColor: 'pink',
    fontSize: '24px'
  },
  description: {
    backgroundColor: 'lightgreen',
    fontSize: '24px'
  },
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

class Album extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      album: {},
      songs: []
    }
    this.DeleteAlbum = this.DeleteAlbum.bind(this)
  }
  componentDidMount () {
    let domain = 'http://localhost:5050/'

    axios.get(`${domain}albums/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        album: res.data
      })
      axios.get(`${domain}songs/ofAlbum/${this.state.album.id}`)
      .then((res) => {
        this.setState({
          songs: res.data
        })
      })
    })
  }
  DeleteAlbum (e) {
    e.preventDefault()
    console.log('delete album')
  }
  render () {
    return (
      <div>
        <div>
          <h1>Album Page</h1>
          <h1>{this.state.album.title}</h1>
        </div>
        <div>
          <button>
            <Link to={`/album/edit/${this.state.album.id}`}> Edit Album </Link>
          </button>
          <button onClick={this.DeleteAlbum}>Delete Album</button>
        </div>
        <div style={style.description}>
          <p>{this.state.album.description}</p>
        </div>
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
      </div>
    )
  }
}

Album.propTypes = {
  params: React.PropTypes.object
}

module.exports = Album
