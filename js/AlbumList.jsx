const React = require('react')
const axios = require('axios')
const { Link } = require('react-router')

const style = {
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

class AlbumList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      albums: []
    }
  }
  componentDidMount () {
    if (this.props.ArtistId) {
      axios.get(`http://localhost:5050/albums/ByArtistId/${this.props.ArtistId}`)
      .then((res) => {
        this.setState({
          albums: res.data
        })
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    } else if (this.props.RecordLabelId) {
      axios.get(`http://localhost:5050/albums/ByRecordLabelId/${this.props.ArtistId}`)
      .then((res) => {
        this.setState({
          albums: res.data
        })
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    } else {
      axios.get('http://localhost:5050/albums')
      .then((res) => {
        this.setState({
          albums: res.data
        })
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    }
  }
  render () {
    return (
      <div style={style.albumListContainer}>
        <div>
          <h2>Albums</h2>
        </div>
        {this.state.albums.map((album, i) => (
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
    )
  }
}

AlbumList.propTypes = {
  ArtistId: React.PropTypes.number,
  RecordLabelId: React.PropTypes.number
}

module.exports = AlbumList
