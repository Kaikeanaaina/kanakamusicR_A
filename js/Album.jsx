const React = require('react')
const axios = require('axios')
const { Link } = require('react-router')
const SongList = require('./SongList')

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
      Album: {},
      Artist: {},
      RecordLabel: {},
      songs: [],
      showSongList: false
    }
  }
  componentDidMount () {
    let domain = 'http://localhost:5050/'

    axios.get(`${domain}albums/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        Album: res.data
      })
      axios.get(`${domain}songs/ByAlbumId/${this.state.Album.id}`)
      .then((res) => {
        this.setState({
          songs: res.data,
          showSongList: true
        })
      })
      axios.get(`${domain}recordLabels/${this.state.Album.RecordLabelId}`)
      .then((res) => {
        this.setState({
          RecordLabel: res.data
        })
      })
      axios.get(`${domain}artists/${this.state.Album.ArtistId}`)
      .then((res) => {
        this.setState({
          Artist: res.data
        })
      })
    })
  }
  render () {
    let SongListing
    if (this.state.showSongList) {
      SongListing = <SongList AlbumId={this.state.Album.id} />
    }
    return (
      <div>
        <div>
          <h1>Album Page</h1>
          <h1>{this.state.Album.title}</h1>
          <p>{this.state.Artist.name}</p>
          <p>{this.state.RecordLabel.name}</p>
        </div>
        <div>
          <button>
            <Link to={`/album/edit/${this.state.Album.id}`}> Edit Album </Link>
          </button>
        </div>
        <div style={style.description}>
          <p>{this.state.Album.description}</p>
        </div>
        {SongListing}
      </div>
    )
  }
}

Album.propTypes = {
  params: React.PropTypes.object
}

module.exports = Album
