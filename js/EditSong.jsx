const React = require('react')
const axios = require('axios')

const style = {
  details: {
    backgroundColor: 'pink',
    fontSize: '24px'
  },
  lyrics: {
    backgroundColor: 'lightblue',
    fontSize: '24px'
  },
  description: {
    backgroundColor: 'lightgreen',
    fontSize: '24px'
  }
}

class EditSong extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      song: {},
      Artist: {},
      Album: {},
      RecordLabel: {}
    }
  }
  componentDidMount () {
    let domain = 'http://localhost:5050/'

    axios.get(`${domain}songs/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        song: res.data
      })

      axios.get(`${domain}artists/${this.state.song.ArtistId}`)
      .then((res) => {
        this.setState({
          Artist: res.data
        })
      })

      axios.get(`${domain}albums/${this.state.song.AlbumId}`)
      .then((res) => {
        this.setState({
          Album: res.data
        })
        axios.get(`${domain}recordLabels/${this.state.Album.RecordLabelId}`)
          .then((res) => {
            this.setState({
              RecordLabel: res.data
            })
          })
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
          <h1>Edit Song Page</h1>
        </div>
        <div style={style.details}>
          <div>
            <label>
              <span> Title </span>
              <input placeholder={this.state.song.title} />
            </label>
          </div>
          <div>
            <label>
              <span> Artist </span>
              <input placeholder={this.state.Artist.name} />
            </label>
          </div>
          <div>
            <label>
              <span> Album </span>
              <input placeholder={this.state.Album.title} />
            </label>
          </div>
          <div>
            <label>
              <span> Record Label </span>
              <input placeholder={this.state.RecordLabel.name} />
            </label>
          </div>
        </div>
        <br></br>
        <div style={style.lyrics}>
          <div>
            <label>
              <span> Line 1 </span>
              <input placeholder={this.state.song.line1} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 2 </span>
              <input placeholder={this.state.song.line2} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 3 </span>
              <input placeholder={this.state.song.line3} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 4 </span>
              <input placeholder={this.state.song.line4} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 5 </span>
              <input placeholder={this.state.song.line5} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 6 </span>
              <input placeholder={this.state.song.line6} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 7 </span>
              <input placeholder={this.state.song.line7} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 8 </span>
              <input placeholder={this.state.song.line8} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 9 </span>
              <input placeholder={this.state.song.line9} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 10 </span>
              <input placeholder={this.state.song.line10} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 11 </span>
              <input placeholder={this.state.song.line11} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 12 </span>
              <input placeholder={this.state.song.line12} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 13 </span>
              <input placeholder={this.state.song.line13} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 14 </span>
              <input placeholder={this.state.song.line14} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 15 </span>
              <input placeholder={this.state.song.line15} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 16 </span>
              <input placeholder={this.state.song.line16} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 17 </span>
              <input placeholder={this.state.song.line17} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 18 </span>
              <input placeholder={this.state.song.line18} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 19 </span>
              <input placeholder={this.state.song.line19} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 20 </span>
              <input placeholder={this.state.song.line20} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 21 </span>
              <input placeholder={this.state.song.line21} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 22 </span>
              <input placeholder={this.state.song.line22} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 23 </span>
              <input placeholder={this.state.song.line23} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 24 </span>
              <input placeholder={this.state.song.line24} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 25 </span>
              <input placeholder={this.state.song.line25} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 26 </span>
              <input placeholder={this.state.song.line26} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 27 </span>
              <input placeholder={this.state.song.line27} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 28 </span>
              <input placeholder={this.state.song.line28} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 29 </span>
              <input placeholder={this.state.song.line29} />
            </label>
          </div>
          <div>
            <label>
              <span> Line 30 </span>
              <input placeholder={this.state.song.line30} />
            </label>
          </div>
        </div>
        <br></br>
        <div style={style.description}>
          <label>
            <span>Description </span>
            <input placeholder={this.state.song.description} />
          </label>
        </div>
      </div>
    )
  }
}

EditSong.propTypes = {
  params: React.PropTypes.object
}

module.exports = EditSong
