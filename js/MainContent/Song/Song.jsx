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
  lyrics: {
    fontSize: '24px'
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
        <div style={style.lyrics}>
          <p>{this.state.song.line1}</p>
          <p>{this.state.song.line2}</p>
          <p>{this.state.song.line3}</p>
          <p>{this.state.song.line3}</p>
          <p>{this.state.song.line4}</p>
          <p>{this.state.song.line5}</p>
          <p>{this.state.song.line6}</p>
          <p>{this.state.song.line7}</p>
          <p>{this.state.song.line8}</p>
          <p>{this.state.song.line9}</p>
          <p>{this.state.song.line10}</p>
          <p>{this.state.song.line11}</p>
          <p>{this.state.song.line12}</p>
          <p>{this.state.song.line13}</p>
          <p>{this.state.song.line14}</p>
          <p>{this.state.song.line15}</p>
          <p>{this.state.song.line16}</p>
          <p>{this.state.song.line17}</p>
          <p>{this.state.song.line18}</p>
          <p>{this.state.song.line19}</p>
          <p>{this.state.song.line20}</p>
          <p>{this.state.song.line21}</p>
          <p>{this.state.song.line22}</p>
          <p>{this.state.song.line23}</p>
          <p>{this.state.song.line24}</p>
          <p>{this.state.song.line25}</p>
          <p>{this.state.song.line26}</p>
          <p>{this.state.song.line27}</p>
          <p>{this.state.song.line28}</p>
          <p>{this.state.song.line29}</p>
          <p>{this.state.song.line30}</p>
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
