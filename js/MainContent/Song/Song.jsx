const React = require('react')
const axios = require('axios')
const { Link } = require('react-router')
const { domain } = require('../../Domain')

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
  }
  componentDidMount () {
    axios.get(`${domain}/songs/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        song: res.data
      })

      axios.get(`${domain}/artists/${this.state.song.ArtistId}`)
      .then((res) => {
        this.setState({
          Artist: res.data
        })
      })
      .catch((error) => {
        console.log('axios error', error)
      })

      axios.get(`${domain}/albums/${this.state.song.AlbumId}`)
      .then((res) => {
        this.setState({
          Album: res.data
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
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    })
    .catch((error) => {
      console.error('axios error', error)
    })
  }
  render () {
    return (
      <div>
        <div>
          <h1>{this.state.song.title}</h1>
        </div>
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
          <p style={style.lyrics} >{this.state.song.line1}</p>
          <br />
          <p style={style.lyrics}>{this.state.song.chord2}</p>
          <p style={style.lyrics}>{this.state.song.line2}</p>

          <p style={style.lyrics}>{this.state.song.chord3}</p>
          <p style={style.lyrics}>{this.state.song.line3}</p>

          <p style={style.lyrics}>{this.state.song.chord4}</p>
          <p style={style.lyrics}>{this.state.song.line4}</p>

          <p style={style.lyrics}>{this.state.song.chord5}</p>
          <p style={style.lyrics}>{this.state.song.line5}</p>

          <p style={style.lyrics}>{this.state.song.chord6}</p>
          <p style={style.lyrics}>{this.state.song.line6}</p>

          <p style={style.lyrics}>{this.state.song.chord7}</p>
          <p style={style.lyrics}>{this.state.song.line7}</p>

          <p style={style.lyrics}>{this.state.song.chord8}</p>
          <p style={style.lyrics}>{this.state.song.line8}</p>

          <p style={style.lyrics}>{this.state.song.chord9}</p>
          <p style={style.lyrics}>{this.state.song.line9}</p>

          <p style={style.lyrics}>{this.state.song.chord10}</p>
          <p style={style.lyrics}>{this.state.song.line10}</p>

          <p style={style.lyrics}>{this.state.song.chord11}</p>
          <p style={style.lyrics}>{this.state.song.line11}</p>

          <p style={style.lyrics}>{this.state.song.chord12}</p>
          <p style={style.lyrics}>{this.state.song.line12}</p>

          <p style={style.lyrics}>{this.state.song.chord13}</p>
          <p style={style.lyrics}>{this.state.song.line13}</p>

          <p style={style.lyrics}>{this.state.song.chord14}</p>
          <p style={style.lyrics}>{this.state.song.line14}</p>

          <p style={style.lyrics}>{this.state.song.chord15}</p>
          <p style={style.lyrics}>{this.state.song.line15}</p>

          <p style={style.lyrics}>{this.state.song.chord16}</p>
          <p style={style.lyrics}>{this.state.song.line16}</p>

          <p style={style.lyrics}>{this.state.song.chord17}</p>
          <p style={style.lyrics}>{this.state.song.line17}</p>

          <p style={style.lyrics}>{this.state.song.chord18}</p>
          <p style={style.lyrics}>{this.state.song.line18}</p>

          <p style={style.lyrics}>{this.state.song.chord19}</p>
          <p style={style.lyrics}>{this.state.song.line19}</p>

          <p style={style.lyrics}>{this.state.song.chord20}</p>
          <p style={style.lyrics}>{this.state.song.line20}</p>

          <p style={style.lyrics}>{this.state.song.chord21}</p>
          <p style={style.lyrics}>{this.state.song.line21}</p>

          <p style={style.lyrics}>{this.state.song.chord22}</p>
          <p style={style.lyrics}>{this.state.song.line22}</p>

          <p style={style.lyrics}>{this.state.song.chord23}</p>
          <p style={style.lyrics}>{this.state.song.line23}</p>

          <p style={style.lyrics}>{this.state.song.chord24}</p>
          <p style={style.lyrics}>{this.state.song.line24}</p>

          <p style={style.lyrics}>{this.state.song.chord25}</p>
          <p style={style.lyrics}>{this.state.song.line25}</p>

          <p style={style.lyrics}>{this.state.song.chord26}</p>
          <p style={style.lyrics}>{this.state.song.line26}</p>

          <p style={style.lyrics}>{this.state.song.chord27}</p>
          <p style={style.lyrics}>{this.state.song.line27}</p>

          <p style={style.lyrics}>{this.state.song.chord28}</p>
          <p style={style.lyrics}>{this.state.song.line28}</p>

          <p style={style.lyrics}>{this.state.song.chord29}</p>
          <p style={style.lyrics}>{this.state.song.line29}</p>

          <p style={style.lyrics}>{this.state.song.chord30}</p>
          <p style={style.lyrics}>{this.state.song.line30}</p>
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
