const React = require('react')
const axios = require('axios')

class Song extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      song: {},
      Artist: [],
      Album: []
    }
  }
  componentDidMount () {
    axios.get(`http://localhost:5050/songs/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        song: res.data
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
          <h4>{this.state.Artist}</h4>
          <h4>{this.state.Album}</h4>
          <h4>{this.state.song.description}</h4>
        </div>
        <div>
          <h3>{this.state.song.line1}</h3>
          <h3>{this.state.song.line2}</h3>
          <h3>{this.state.song.line3}</h3>
          <h3>{this.state.song.line3}</h3>
          <h3>{this.state.song.line4}</h3>
          <h3>{this.state.song.line5}</h3>
          <h3>{this.state.song.line6}</h3>
          <h3>{this.state.song.line7}</h3>
          <h3>{this.state.song.line8}</h3>
          <h3>{this.state.song.line9}</h3>
          <h3>{this.state.song.line10}</h3>
          <h3>{this.state.song.line11}</h3>
          <h3>{this.state.song.line12}</h3>
          <h3>{this.state.song.line13}</h3>
          <h3>{this.state.song.line14}</h3>
          <h3>{this.state.song.line15}</h3>
          <h3>{this.state.song.line16}</h3>
          <h3>{this.state.song.line17}</h3>
          <h3>{this.state.song.line18}</h3>
          <h3>{this.state.song.line19}</h3>
          <h3>{this.state.song.line20}</h3>
          <h3>{this.state.song.line21}</h3>
          <h3>{this.state.song.line22}</h3>
          <h3>{this.state.song.line23}</h3>
          <h3>{this.state.song.line24}</h3>
          <h3>{this.state.song.line25}</h3>
          <h3>{this.state.song.line26}</h3>
          <h3>{this.state.song.line27}</h3>
          <h3>{this.state.song.line28}</h3>
          <h3>{this.state.song.line29}</h3>
          <h3>{this.state.song.line30}</h3>
        </div>
      </div>
    )
  }
}

Song.propTypes = {
  params: React.PropTypes.object
}

module.exports = Song
