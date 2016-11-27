const React = require('react')
const axios = require('axios')
const PreviewModal = require('./PreviewModal')
const SuccessEntryModal = require('./SuccessEntryModal')

const styles = {
  fontSize: '24px',
  padding: '5px',
  margin: '5px',
  width: '80%',
  borderRadius: '5px'
}

class AddNewAlbum extends React.Component {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      recordLabels: [],
      type: '',
      artists: [],
      modalIsOpen: false,
      successModalIsOpen: false,
      object: {}
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.returnToHome = this.returnToHome.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  openModal () {
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

    this.setState({
      object: object
    })

    this.setState({
      modalIsOpen: true
    })
  }
  closeModal () {
    this.setState({
      modalIsOpen: false,
      successModalIsOpen: false
    })
  }
  returnToHome () {
    this.setState({
      successModalIsOpen: false
    })
    window.location.href = '/#/'
  }
  componentDidMount () {
    axios.get('http://localhost:5050/recordLabels')
    .then((res) => {
      this.setState({
        recordLabels: res.data
      })
    })
    .catch((error) => {
      console.log('axios error', error)
    })
    axios.get('http://localhost:5050/artists')
    .then((res) => {
      this.setState({
        artists: res.data
      })
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  onSubmit (e) {
    e.preventDefault()

    axios.post('http://localhost:5050/albums', this.state.object)
    .then((res) => {
      // should catch error here
      return this.setState({
        modalIsOpen: false,
        successModalIsOpen: true
      })
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  render () {
    return (
      <div id='AddNewAlbum'>
        <h3>Add New Album</h3>
        <form onSubmit={this.onSubmit}>
          <input type='text' ref='title' placeholder='title' style={styles} />
          <br />
          <select ref='artist' style={styles} >
            <option value='' >artist here</option>
            {this.state.artists.map((artist, index) => (
              <option key={index} value={artist.id} > {artist.name} </option>
            ))}
          </select>
          <br />
          <select ref='recordLabel' style={styles} >
            <option value='' >record label here</option>
            {this.state.recordLabels.map((recordlabel, index) => (
              <option key={index} value={recordlabel.id} > {recordlabel.name} </option>
            ))}
          </select>
          <br />
          <textarea type='text' ref='description' placeholder='description' style={styles} />
          <br />
        </form>
        <button onClick={this.openModal}>Add Album</button>
        <PreviewModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} type='addAlbum' object={this.state.object} onSubmit={this.onSubmit} />
        <SuccessEntryModal modalIsOpen={this.state.successModalIsOpen} closeModal={this.closeModal} returnToHome={this.returnToHome} />
      </div>
    )
  }
}

module.exports = AddNewAlbum
