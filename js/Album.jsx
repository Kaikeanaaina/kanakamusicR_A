const React = require('react')
const axios = require('axios')

class Album extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      album: {}
    }
  }
  componentDidMount () {
    let domain = 'http://localhost:5050/'

    axios.get(`${domain}albums/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        album: res.data
      })
    })
  }
  render () {
    return (
      <div>
        <div>
          <h1>{this.state.album.title}</h1>
        </div>
        <div>
        </div>
      </div>
    )
  }
}

Album.propTypes = {
  params: React.PropTypes.object
}

module.exports = Album
