const React = require('react')
const axios = require('axios')
const SongList = require('../Song/SongList')
const { Link } = require('react-router')
const { domain } = require('../Domain')

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
      Artist: {},
      RecordLabel: {},
      recordLabels: [],
      artists: [],
      linkToNewArtist: false,
      linkToNewRecordLabel: false
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.DeleteAlbum = this.DeleteAlbum.bind(this)
    this.recordLabelChange = this.recordLabelChange.bind(this)
    this.artistChange = this.artistChange.bind(this)
  }
  componentDidMount () {
    axios.get(`${domain}/albums/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        Album: res.data
      })

      axios.get(`${domain}/artists/${this.state.Album.ArtistId}`)
      .then((res) => {
        this.setState({
          Artist: res.data
        })
      })
      .catch((error) => {
        console.log('axios error', error)
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

    axios.get(`${domain}/artists`)
    .then((res) => {
      this.setState({
        artists: res.data
      })
    })
    .catch((error) => {
      console.log('axios error', error)
    })

    axios.get(`${domain}/recordLabels`)
    .then((res) => {
      this.setState({
        recordLabels: res.data
      })
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  recordLabelChange (e) {
    e.preventDefault()
    if (e.target.value === 'giveAddNewRecordLabelLink') {
      this.setState({
        linkToNewRecordLabel: true
      })
    } else {
      this.setState({
        linkToNewRecordLabel: false
      })
    }
  }
  artistChange (e) {
    e.preventDefault()
    if (e.target.value === 'giveAddNewArtistLink') {
      this.setState({
        linkToNewArtist: true
      })
    } else {
      this.setState({
        linkToNewArtist: false
      })
    }
  }
  DeleteAlbum (e) {
    e.preventDefault()

    axios.delete(`${domain}/albums/${this.state.Album.id}`, this.state.Album.id)
    .then((res) => {
      axios.delete(`${domain}/songs/ByAlbumId/${this.state.Album.id}`, this.state.Album.id)
      .then((res) => {
        window.location.href = '/#/'
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  onSubmit (e) {
    e.preventDefault()

    let object = {
      id: this.state.Album.id
    }

    if (this.refs.title.value) {
      object.title = this.refs.title.value
    } else {
      object.title = this.state.Album.title
    }

    if (this.refs.artist.value !== 'artist here') {
      object.ArtistId = this.refs.artist.value
    } else {
      object.ArtistId = this.state.Album.ArtistId
    }

    if (this.refs.recordLabel.value !== 'record label here') {
      object.RecordlLabelId = this.refs.recordLabel.value
    } else {
      object.RecordLabelId = this.state.Album.RecordLabelId
    }

    if (this.refs.visibilityByAlbum.value !== 'visibility') {
      object.visibilityByAlbum = this.refs.visibilityByAlbum.value
    } else {
      object.visibilityByAlbum = this.state.Album.visibilityByAlbum
    }

    if (this.refs.description.value) {
      object.description = this.refs.description.value
    } else if (this.refs.description.value === ' ') {
      object.description = null
    } else {
      object.description = this.state.Album.description
    }

    object.visibilityByArtist = this.state.Album.visibilityByArtist

    axios.put(`${domain}/albums/${this.state.Album.id}`, object)
    .then((res) => {
      axios.put(`${domain}/songs/ByAlbumId/${this.state.Album.id}`, object)
      .then((res) => {
        window.location.href = `/#/album/${this.state.Album.id}`
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  render () {
    let visibleByAlbumProperty
    if (this.state.Album.visibilityByAlbum) {
      visibleByAlbumProperty = (<div>visibilityByAlbum: true</div>)
    } else {
      visibleByAlbumProperty = (<div>visibilityByAlbum: false</div>)
    }
    let visibleByArtistProperty
    if (this.state.Album.visibilityByArtist) {
      visibleByArtistProperty = (<div>visibilityByArtist: true</div>)
    } else {
      visibleByArtistProperty = (<div>visibilityByArtist: false</div>)
    }
    let AddNewArtistLink = null
    if (this.state.linkToNewArtist) {
      AddNewArtistLink = <div><br /><Link to='/AddNewArtist'>Add New Artist</Link><br /></div>
    }
    let AddNewRecordLabelLink = null
    if (this.state.linkToNewRecordLabel) {
      AddNewRecordLabelLink = <div><br /><Link to='/AddNewRecordLabel'>Add New Record Label</Link><br /></div>
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
          <br />
          <div style={style.details}>
            <label>
              <span>Artist:</span>
              <select onChange={this.artistChange} ref='artist'>
                <option >artist here</option>
                <option value='giveAddNewArtistLink'>AddNewArtist</option>
                {this.state.artists.map((artist, index) => (
                  <option key={index} value={artist.id} > {artist.name} </option>
                ))}
              </select>
              <span> Current: {this.state.Artist.name} </span>
              {AddNewArtistLink}
            </label>
            <br />
            <label>
              <span>Record Label </span>
              <select onChange={this.recordLabelChange} ref='recordLabel'>
                <option >record label here</option>
                <option value='giveAddNewRecordLabelLink'>AddNewRecordLabel</option>
                {this.state.recordLabels.map((recordlabel, index) => (
                  <option key={index} value={recordlabel.id} > {recordlabel.name} </option>
                ))}
              </select>
              <span> Current: {this.state.RecordLabel.name} </span>
              {AddNewRecordLabelLink}
            </label>
            <br />
            <label>
              <span> Visibility </span>
              <select type='text' ref='visibilityByAlbum' placeholder='visibility' >
                <option > visibility </option>
                <option value='false' >false</option>
                <option value='true' >true</option>
              </select>
              {visibleByAlbumProperty}
            </label>
            <div>
              {visibleByArtistProperty}
            </div>
          </div>
          <br />
          <div style={style.description}>
            <label>
              <span> Description </span>
              <textarea ref='description' placeholder={this.state.Album.description} />
            </label>
          </div>
          <button type='submit'> Edit Album </button>
        </form>

        <SongList AlbumId={this.state.Album.id} />
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
