const React = require('react')
const { Link } = require('react-router')
const axios = require('axios')

class AddNewAlbum extends React.Component {
  constructor (props) {
    super(props)
    this.recordLabelChange = this.recordLabelChange.bind(this)
    this.artistChange = this.artistChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      recordLabels: [],
      type: '',
      artists: [],
      linkToNewArtist: false,
      linkToNewRecordLabel: false
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
    let AddNewArtistLink = null
    if (this.state.linkToNewArtist) {
      AddNewArtistLink = <div><br /><Link to='/AddNewArtist'>Add New Artist</Link><br /></div>
    }
    let AddNewRecordLabelLink = null
    if (this.state.linkToNewRecordLabel) {
      AddNewRecordLabelLink = <div><br /><Link to='/AddNewRecordLabel'>Add New Record Label</Link><br /></div>
    }
    return (
      <div id='AddNewAlbum'>
        <h3>Add New Album</h3>
        <form onSubmit={this.onSubmit}>
          <input type='text' ref='title' placeholder='title' />
          <br />
          <select onChange={this.artistChange} ref='artist'>
            <option value='' >artist here</option>
            <option value='giveAddNewArtistLink'>AddNewArtist</option>
            {this.state.artists.map((artist, index) => (
              <option key={index} value={artist.id} > {artist.name} </option>
            ))}
          </select>
          {AddNewArtistLink}
          <br />
          <select onChange={this.recordLabelChange} ref='recordLabel'>
            <option value='' >record label here</option>
            <option value='giveAddNewRecordLabelLink'>AddNewRecordLabel</option>
            {this.state.recordLabels.map((recordlabel, index) => (
              <option key={index} value={recordlabel.id} > {recordlabel.name} </option>
            ))}
          </select>
          {AddNewRecordLabelLink}
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
