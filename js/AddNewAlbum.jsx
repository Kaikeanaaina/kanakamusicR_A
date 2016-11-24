const React = require('react')
const axios = require('axios')

class AddNewAlbum extends React.Component {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      recordLabels: [],
      type: '',
      artists: []
    }
  }
  componentDidMount () {
    axios.get('http://localhost:5050/recordLabels')
    .then((res) => {
      this.setState({
        recordLabels: res.data
      })
    })
    axios.get('http://localhost:5050/artists')
    .then((res) => {
      this.setState({
        artists: res.data
      })
    })
  }
  onSubmit (e) {
    e.preventDefault()
    if (!this.refs.title.value) {
      return console.log('fill in the title')
    }
    if (!this.refs.artist.value) {
      return console.log('pick artist')
    }
    if (!this.refs.recordLabel.value) {
      return console.log('pick recordLabel')
    }
    let object = {
      title: this.refs.title.value,
      RecordLabelId: this.refs.recordLabel.value,
      ArtistId: this.refs.artist.value,
      description: this.refs.description.value
    }
    if (!this.refs.description.value) {
      object.description = null
    }
    axios.post('http://localhost:5050/albums', object)
    .then((res) => {
      window.location.href = '/#/AddNewSong'
    })
  }
  render () {
    return (
      <div id='AddNewAlbum'>
        <h3>Add New Album</h3>
        <form onSubmit={this.onSubmit}>
          <input type='text' ref='title' placeholder='title' />
          <br />
          <select ref='artist'>
            <option value='' >artist here</option>
            <option value='giveAddNewArtistLink'>AddNewArtist</option>
            {this.state.artists.map((artist, index) => (
              <option key={index} value={artist.id} > {artist.name} </option>
            ))}
          </select>
          <br />
          <select ref='recordLabel'>
            <option value='' >record label here</option>
            <option value='giveAddNewRecordLabelLink'>AddNewRecordLabel</option>
            {this.state.recordLabels.map((recordlabel, index) => (
              <option key={index} value={recordlabel.id} > {recordlabel.name} </option>
            ))}
          </select>
          <br />
          <textarea type='text' ref='description' placeholder='description' />
          <br />
          <button type='submit'>Add Album</button>
        </form>

      </div>
    )
  }
}

module.exports = AddNewAlbum
