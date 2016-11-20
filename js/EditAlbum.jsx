const React = require('react')
const axios = require('axios')


const style = {
  details: {
    backgroundColor: 'pink',
    fontSize: '24px'
  },
  description: {
    backgroundColor: 'lightgreen',
    fontSize: '24px'
  }
}

class EditAlbum extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Album: {},
      recordLabels: [],
      artists: []
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.DeleteAlbum = this.DeleteAlbum.bind(this)
  }
  componentDidMount () {
    let domain = 'http://localhost:5050/'

    axios.get(`${domain}albums/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        Album: res.data
      })
    })
    axios.get(`${domain}artists`)
    .then((res) => {
      this.setState({
        artists: res.data
      })
    })
    axios.get(`${domain}recordLabels`)
    .then((res) => {
      this.setState({
        recordLabels: res.data
      })
    })
  }
  DeleteAlbum (e) {
    e.preventDefault()

    let domain = 'http://localhost:5050/'

    axios.delete(`${domain}albums/${this.state.Album.id}`)
    .then((res) => {
      axios.delete(`${domain}songs/ByAlbumId/${this.state.Album.id}`)
      .then((res) => {
        window.location.href = '/#/'
      })
    })
  }
  onSubmit (e) {
    e.preventDefault()

    let object = {}

    if (this.refs.title.value) {
      object.title = this.refs.title.value
    } else {
      object.title = this.state.Album.title
    }

    if (this.refs.visibility.value !== 'visibility') {
      object.visibility = this.refs.visibility.value
    } else {
      object.visibility = this.state.Album.visibility
    }

    if (this.refs.description.value) {
      object.description = this.refs.description.value
    } else if (this.refs.description.value === ' ') {
      object.description = null
    } else {
      object.description = this.state.Album.description
    }

    axios.put(`http://localhost:5050/albums/${this.state.Album.id}`, object)
    .then((res) => {
      axios.put(`http://localhost:5050/songs/ByAlbumId/${this.state.Album.id}`, object)
      .then((res) => {
        window.location.href = `/#/album/${this.state.Album.id}`
      })
    })
  }
  render () {
    let visibleProperty
    if (this.state.Album.visibility) {
      visibleProperty = (<div>visibility: true</div>)
    } else {
      visibleProperty = (<div>visibility: false</div>)
    }
    return (
      <div>
        <div>
          <h1> Edit Album Page </h1>
        </div>
        <form onSubmit={this.onSubmit} >
          <div style={style.details}>
            <label>
              <span> Title </span>
              <input ref='title' placeholder={this.state.Album.title} />
            </label>
          </div>
          <br></br>
          <div style={style.details}>
            <label>
              <span> Visibility </span>
              <select type='text' ref='visibility' placeholder='visibility' >
                <option> visibility </option>
                <option value='false' >false</option>
                <option value='true' >true</option>
              </select>
              {visibleProperty}
            </label>
          </div>
          <br></br>
          <div style={style.description}>
            <label>
              <span> Description </span>
              <textarea ref='description' placeholder={this.state.Album.description} />
            </label>
          </div>
          <button type='submit'> Edit Album </button>
        </form>
        <div>
          <button onClick={this.DeleteAlbum}>Delete Album</button>
        </div>
      </div>
    )
  }
}

EditAlbum.propTypes = {
  params: React.PropTypes.object
}

module.exports = EditAlbum
