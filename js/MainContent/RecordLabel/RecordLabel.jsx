const React = require('react')
const axios = require('axios')
const AlbumList = require('../Album/AlbumList')
const { Link } = require('react-router')
const { domain } = require('../Domain')

class Artist extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      RecordLabel: {}
    }
  }
  componentDidMount () {
    axios.get(`${domain}/recordLabels/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        RecordLabel: res.data
      })
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  render () {
    return (
      <div>
        <div>
          <h1>{this.state.RecordLabel.name}</h1>
        </div>
        <div>
          <button>
            <Link to={`/recordLabel/edit/${this.state.RecordLabel.id}`}> Edit Record Label </Link>
          </button>
        </div>
        <div>
          <AlbumList RecordLabelId={this.state.RecordLabel.id} />
        </div>
      </div>
    )
  }
}

Artist.propTypes = {
  params: React.PropTypes.object
}

module.exports = Artist
