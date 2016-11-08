const React = require('react')
const axios = require('axios')
const { Link } = require('react-router')

const style = {
  songListContainer: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: '10px',
    margin: '10px'
  },
  songLinkContainer: {
    alignItems: 'center',
    padding: '10px',
    margin: '10px',
    backgroundColor: 'pink'
  },
  songLink: {
    fontSize: '24px',
    textDecoration: 'none',
    color: 'blue',
    borderBottom: 'black solid 1px',
    backgroundColor: 'lightgrey',
    margin: '10px',
    borderRadius: '10px'
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
    axios.get('http://localhost:5050/songs')
    .then((res) => {
      this.setState({
        songs: res.data
      })
    })
  }
  render () {
    return (<div style={style.songListContainer}>
    {this.state.songs.map((song, i) => (
      <div style={style.songLinkContainer}>
        <Link key={i} to={`/song/${song.id}`}>
          <div style={style.songLink}>
            {song.title}
          </div>
          <br></br>
        </Link>
      </div>
    ))}
    </div>)
  }
}

SongList.propTypes = {
  songs: React.PropTypes.arrayOf(React.PropTypes.object)
}

module.exports = SongList
