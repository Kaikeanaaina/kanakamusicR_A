const React = require('react')
const axios = require('axios')
const { Link } = require('react-router')
const { domain } = require('../Domain')
const MediaQuery = require('react-responsive')

const style = {
  songListContainer: {

  },
  songListDivContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around'
  },
  songListDiv: {
    width: '24%'
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
      songs: [],
      songs4DivArray1: [],
      songs4DivArray2: [],
      songs4DivArray3: [],
      songs4DivArray4: [],
      songs3DivArray1: [],
      songs3DivArray2: [],
      songs3DivArray3: [],
      songs2DivArray1: [],
      songs2DivArray2: []
    }
  }
  componentDidMount () {
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
        let divAmount = 4
        let songsLength = this.state.songs.length
        const standardEach = Math.floor(songsLength / divAmount)
        let songs4DivArray1 = []
        let songs4DivArray2 = []
        let songs4DivArray3 = []
        let songs4DivArray4 = []

        if (songsLength % divAmount === 1) {
          console.log('one remainder')
          for (let i = 0; i < (standardEach + 1); i++) {
            songs4DivArray1.push(this.state.songs[i])
          }
          for (let j = (standardEach + 1); (j < (standardEach * 2) + 1); j++) {
            songs4DivArray2.push(this.state.songs[j])
          }
          for (let k = ((standardEach * 2) + 1); (k < (standardEach * 3) + 1); k++) {
            songs4DivArray3.push(this.state.songs[k])
          }
          for (let l = ((standardEach * 3) + 1); (l < (standardEach * 4) + 1); l++) {
            songs4DivArray4.push(this.state.songs[l])
          }
          this.setState({
            songs4DivArray1: songs4DivArray1,
            songs4DivArray2: songs4DivArray2,
            songs4DivArray3: songs4DivArray3,
            songs4DivArray4: songs4DivArray4
          })
        } else if (songsLength % divAmount === 2) {
          console.log('two remainder')
          for (let i = 0; i < (standardEach + 1); i++) {
            songs4DivArray1.push(this.state.songs[i])
          }
          for (let j = (standardEach + 1); (j < (standardEach * 2) + 2); j++) {
            songs4DivArray2.push(this.state.songs[j])
          }
          for (let k = ((standardEach * 2) + 2); (k < (standardEach * 3) + 2); k++) {
            songs4DivArray3.push(this.state.songs[k])
          }
          for (let l = ((standardEach * 3) + 2); (l < (standardEach * 4) + 2); l++) {
            songs4DivArray4.push(this.state.songs[l])
          }
          this.setState({
            songs4DivArray1: songs4DivArray1,
            songs4DivArray2: songs4DivArray2,
            songs4DivArray3: songs4DivArray3,
            songs4DivArray4: songs4DivArray4
          })
        } else if (songsLength % divAmount === 3) {
          console.log('three remainder')
          for (let i = 0; i < (standardEach + 1); i++) {
            songs4DivArray1.push(this.state.songs[i])
          }
          for (let j = (standardEach + 1); (j < (standardEach * 2) + 2); j++) {
            songs4DivArray2.push(this.state.songs[j])
          }
          for (let k = ((standardEach * 2) + 2); (k < (standardEach * 3) + 3); k++) {
            songs4DivArray3.push(this.state.songs[k])
          }
          for (let l = ((standardEach * 3) + 3); (l < (standardEach * 4) + 3); l++) {
            songs4DivArray4.push(this.state.songs[l])
          }
          this.setState({
            songs4DivArray1: songs4DivArray1,
            songs4DivArray2: songs4DivArray2,
            songs4DivArray3: songs4DivArray3,
            songs4DivArray4: songs4DivArray4
          })
        } else {
          console.log('four remainder')
          for (let i = 0; i < standardEach; i++) {
            songs4DivArray1.push(this.state.songs[i])
          }
          for (let j = standardEach; j < (standardEach * 2); j++) {
            songs4DivArray2.push(this.state.songs[j])
          }
          for (let k = (standardEach * 2); k < (standardEach * 3); k++) {
            songs4DivArray3.push(this.state.songs[k])
          }
          for (let l = (standardEach * 3); l < (standardEach * 4); l++) {
            songs4DivArray4.push(this.state.songs[l])
          }
          this.setState({
            songs4DivArray1: songs4DivArray1,
            songs4DivArray2: songs4DivArray2,
            songs4DivArray3: songs4DivArray3,
            songs4DivArray4: songs4DivArray4
          })
        }
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    }
  }
  render () {
    return (<div style={style.songListContainer}>
      <div>
        <h2>Songs</h2>
      </div>

      <MediaQuery query='(min-width: 1000px)' style={style.songListDivContainer} >
        <div style={style.songListDiv}>
          {this.state.songs4DivArray1.map((song, i) => (
            <div style={{backgroundColor: 'red'}} key={i} >
              <Link key={i} to={`/song/${song.id}`} style={style.songLink} >
                <div key={i} style={style.SongText}>
                  {song.title}
                </div>
                <br />
              </Link>
            </div>
          ))}
        </div>
        <div style={style.songListDiv}>
          {this.state.songs4DivArray2.map((song, i) => (
            <div style={{backgroundColor: 'blue'}} key={i} >
              <Link key={i} to={`/song/${song.id}`} style={style.songLink} >
                <div key={i} style={style.SongText}>
                  {song.title}
                </div>
                <br />
              </Link>
            </div>
          ))}
        </div>
        <div style={style.songListDiv}>
          {this.state.songs4DivArray3.map((song, i) => (
            <div style={{backgroundColor: 'green'}} key={i} >
              <Link key={i} to={`/song/${song.id}`} style={style.songLink} >
                <div key={i} style={style.SongText}>
                  {song.title}
                </div>
                <br />
              </Link>
            </div>
          ))}
        </div>
        <div style={style.songListDiv}>
          {this.state.songs4DivArray4.map((song, i) => (
            <div style={{backgroundColor: 'yellow'}} key={i} >
              <Link key={i} to={`/song/${song.id}`} style={style.songLink} >
                <div key={i} style={style.SongText}>
                  {song.title}
                </div>
                <br />
              </Link>
            </div>
          ))}
        </div>
      </MediaQuery>
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
