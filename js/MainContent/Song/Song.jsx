const React = require('react')
const axios = require('axios')
const { Link } = require('react-router')

const style = {
  details: {
    backgroundColor: 'rgba(200,200,200,0.4)',
    fontSize: '18px',
    padding: '5px'
  },
  detailItems: {
    margin: '0px'
  },
  lyricsContainer: {
    margin: '10px'
  },
  lyrics: {
    fontSize: '18px',
    fontFamily: 'Courier',
    margin: 0,
    padding: 0
  },
  description: {
    fontSize: '18px'
  }
}

class Song extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      song: {},
      Artist: [],
      Album: [],
      RecordLabel: {}
    }
    this.hitTheRoute = this.hitTheRoute.bind(this)
  }
  componentWillMount () {
    axios.get(`/songs/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        song: res.data
      })

      axios.get(`/artists/${this.state.song.ArtistId}`)
      .then((res) => {
        this.setState({
          Artist: res.data
        })
      })
      .catch((error) => {
        console.log('axios error', error)
      })

      axios.get(`/albums/${this.state.song.AlbumId}`)
      .then((res) => {
        this.setState({
          Album: res.data
        })
        axios.get(`/recordLabels/${this.state.Album.RecordLabelId}`)
          .then((res) => {
            this.setState({
              RecordLabel: res.data
            })
          })
          .catch((error) => {
            console.log('axios error', error)
          })
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    })
    .catch((error) => {
      console.error('axios error', error)
    })
  }
  hitTheRoute () {
    console.log(this)
  }
  render () {
    return (
      <div>
        <div>
          <h1>{this.state.song.title}</h1>
        </div>
        <button onClick={this.hitTheRoute} >hit the route</button>
        <div>
          <button>
            <Link to={`/song/edit/${this.state.song.id}`}> Edit Song </Link>
          </button>
        </div>
        <div style={style.details}>
          <p style={style.detailItems}>{this.state.Artist.name}</p>
          <p style={style.detailItems}>{this.state.Album.title}</p>
          <p style={style.detailItems}>{this.state.RecordLabel.name}</p>
        </div>
        <div style={style.lyricsContainer}>
          <p style={style.lyrics} >{this.state.song.chord1}</p>
          <p style={style.lyrics} >{this.state.song.lyric1}</p>
          <br />
          <p style={style.lyrics}>{this.state.song.chord2}</p>
          <p style={style.lyrics}>{this.state.song.lyric2}</p>

          <p style={style.lyrics}>{this.state.song.chord3}</p>
          <p style={style.lyrics}>{this.state.song.lyric3}</p>

          <p style={style.lyrics}>{this.state.song.chord4}</p>
          <p style={style.lyrics}>{this.state.song.lyric4}</p>

          <p style={style.lyrics}>{this.state.song.chord5}</p>
          <p style={style.lyrics}>{this.state.song.lyric5}</p>

          <p style={style.lyrics}>{this.state.song.chord6}</p>
          <p style={style.lyrics}>{this.state.song.lyric6}</p>

          <p style={style.lyrics}>{this.state.song.chord7}</p>
          <p style={style.lyrics}>{this.state.song.lyric7}</p>

          <p style={style.lyrics}>{this.state.song.chord8}</p>
          <p style={style.lyrics}>{this.state.song.lyric8}</p>

          <p style={style.lyrics}>{this.state.song.chord9}</p>
          <p style={style.lyrics}>{this.state.song.lyric9}</p>

          <p style={style.lyrics}>{this.state.song.chord10}</p>
          <p style={style.lyrics}>{this.state.song.lyric10}</p>

          <p style={style.lyrics}>{this.state.song.chord11}</p>
          <p style={style.lyrics}>{this.state.song.lyric11}</p>

          <p style={style.lyrics}>{this.state.song.chord12}</p>
          <p style={style.lyrics}>{this.state.song.lyric12}</p>

          <p style={style.lyrics}>{this.state.song.chord13}</p>
          <p style={style.lyrics}>{this.state.song.lyric13}</p>

          <p style={style.lyrics}>{this.state.song.chord14}</p>
          <p style={style.lyrics}>{this.state.song.lyric14}</p>

          <p style={style.lyrics}>{this.state.song.chord15}</p>
          <p style={style.lyrics}>{this.state.song.lyric15}</p>

          <p style={style.lyrics}>{this.state.song.chord16}</p>
          <p style={style.lyrics}>{this.state.song.lyric16}</p>

          <p style={style.lyrics}>{this.state.song.chord17}</p>
          <p style={style.lyrics}>{this.state.song.lyric17}</p>

          <p style={style.lyrics}>{this.state.song.chord18}</p>
          <p style={style.lyrics}>{this.state.song.lyric18}</p>

          <p style={style.lyrics}>{this.state.song.chord19}</p>
          <p style={style.lyrics}>{this.state.song.lyric19}</p>

          <p style={style.lyrics}>{this.state.song.chord20}</p>
          <p style={style.lyrics}>{this.state.song.lyric20}</p>

          <p style={style.lyrics}>{this.state.song.chord21}</p>
          <p style={style.lyrics}>{this.state.song.lyric21}</p>

          <p style={style.lyrics}>{this.state.song.chord22}</p>
          <p style={style.lyrics}>{this.state.song.lyric22}</p>

          <p style={style.lyrics}>{this.state.song.chord23}</p>
          <p style={style.lyrics}>{this.state.song.lyric23}</p>

          <p style={style.lyrics}>{this.state.song.chord24}</p>
          <p style={style.lyrics}>{this.state.song.lyric24}</p>

          <p style={style.lyrics}>{this.state.song.chord25}</p>
          <p style={style.lyrics}>{this.state.song.lyric25}</p>

          <p style={style.lyrics}>{this.state.song.chord26}</p>
          <p style={style.lyrics}>{this.state.song.lyric26}</p>

          <p style={style.lyrics}>{this.state.song.chord27}</p>
          <p style={style.lyrics}>{this.state.song.lyric27}</p>

          <p style={style.lyrics}>{this.state.song.chord28}</p>
          <p style={style.lyrics}>{this.state.song.lyric28}</p>

          <p style={style.lyrics}>{this.state.song.chord29}</p>
          <p style={style.lyrics}>{this.state.song.lyric29}</p>

          <p style={style.lyrics}>{this.state.song.chord30}</p>
          <p style={style.lyrics}>{this.state.song.lyric30}</p>
        </div>
        <div style={style.description}>
          <p><i>{this.state.song.description}</i></p>
        </div>
      </div>
    )
  }
}

Song.propTypes = {
  params: React.PropTypes.object
}

module.exports = Song
