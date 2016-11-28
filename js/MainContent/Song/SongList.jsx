const React = require('react')
const axios = require('axios')
const { Link } = require('react-router')
const { domain } = require('../Domain')

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
    var songHui = document.getElementById('songHui')
    console.log(songHui)

    if (this.props.ArtistId) {
      axios.get(`${domain}/songs/ByArtistId/${this.props.ArtistId}`)
      .then((res) => {
        this.setState({
          songs: res.data
        })
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    } else if (this.props.AlbumId) {
      axios.get(`${domain}/songs/ByAlbumId/${this.props.AlbumId}`)
      .then((res) => {
        this.setState({
          songs: res.data
        })
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    } else {
      axios.get(`${domain}/songs`)
      .then((res) => {
        this.setState({
          songs: res.data
        })
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    }
  }
  render () {
    let column1 = null
    let column2 = null
    let column3 = null
    let column4 = null
    return (<div id='songHui' style={style.songListContainer}>
      <div>
        <h2>Songs</h2>
      </div>
      <div>{column1}</div>
      <div>{column2}</div>
      <div>{column3}</div>
      <div>{column4}</div>
      <div>
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
    </div>)
  }
}

SongList.propTypes = {
  songs: React.PropTypes.arrayOf(React.PropTypes.object),
  ArtistId: React.PropTypes.number,
  AlbumId: React.PropTypes.number
}

module.exports = SongList
