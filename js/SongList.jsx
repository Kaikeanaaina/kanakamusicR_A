const React = require('react')
const axios = require('axios')
const { Link } = require('react-router')

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
    return (<div>
    {this.state.songs.map((song, index) => (
      <Link key={index} to={`/song/${song.id}`}>
          {song.title}
      </Link>
    ))}
    </div>)
  }
}

SongList.propTypes = {
  songs: React.PropTypes.arrayOf(React.PropTypes.object)
}

module.exports = SongList
