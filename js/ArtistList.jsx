const React = require('react')
const axios = require('axios')
const { Link } = require('react-router')

const style = {
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
  }
}

class ArtistList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      artists: []
    }
  }
  componentDidMount () {
    axios.get('http://localhost:5050/artists')
    .then((res) => {
      this.setState({
        artists: res.data
      })
    })
  }
  render () {
    return (
      <div style={style.artistListContainer}>
        <div>
          <h2>Artists</h2>
        </div>
        {this.state.artists.map((artist, i) => (
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
    )
  }
}

ArtistList.propTypes = {
  artists: React.PropTypes.arrayOf(React.PropTypes.object)
}

module.exports = ArtistList
