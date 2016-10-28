const React = require('react')
const axios = require('axios')

class Song extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      song: {}
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
        <h1>{this.state.song.title}</h1>
        <h4>{this.state.song.line1}</h4>
        <h4>{this.state.song.line2}</h4>
        <h4>{this.state.song.line3}</h4>
      </div>
    )
  }
}

Song.propTypes = {
  params: React.PropTypes.object
}

module.exports = Song
