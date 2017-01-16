const React = require('react')
const axios = require('axios')
const { Link } = require('react-router')
const SongList = require('../Song/SongList')
const { domain } = require('../../Domain')

const style = {
  details: {
    backgroundColor: 'pink',
    fontSize: '24px'
  },
  description: {
    fontSize: '18px'
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
    axios.get(`${domain}/albums/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        Album: res.data
      })

      axios.get(`${domain}/songs/ByAlbumId/${this.state.Album.id}`)
      .then((res) => {
        this.setState({
          songs: res.data,
          showSongList: true
        })
      })
      .catch((error) => {
        console.log('axios error', error)
      })

      axios.get(`${domain}/recordLabels/${this.state.Album.RecordLabelId}`)
      .then((res) => {
        this.setState({
          RecordLabel: res.data
        })
      })
      .catch((error) => {
        console.log('axios error', error)
      })

      axios.get(`${domain}/artists/${this.state.Album.ArtistId}`)
      .then((res) => {
        this.setState({
          Artist: res.data
        })
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    })
    .catch((error) => {
      console.log('axios error', error)
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
          <h1>{this.state.Album.title}</h1>
          <div>
            <button>
              <Link to={`/album/edit/${this.state.Album.id}`}> Edit Album </Link>
            </button>
          </div>
          <p>{this.state.Artist.name}</p>
          <p>{this.state.RecordLabel.name}</p>
        </div>
        <div style={style.description}>
          <p><i>{this.state.Album.description}</i></p>
        </div>
        <div>
          {SongListing}
        </div>
      </div>
    )
  }
}

Album.propTypes = {
  params: React.PropTypes.object
}

module.exports = Album
