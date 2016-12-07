const React = require('react')
const axios = require('axios')
const PreviewModal = require('../Modal/PreviewModal')
const SuccessEntryModal = require('../Modal/SuccessEntryModal')
const { domain } = require('../Domain')

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
      object: {},
      showSubmitButton: false
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.returnToHome = this.returnToHome.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.showSubmitButton = this.showSubmitButton.bind(this)
  }
  openModal () {
    let splitTitle = this.refs.title.value.split('')
    let splitTitleStartWithCap = splitTitle[0].toUpperCase()
    splitTitle.splice(0, 1, splitTitleStartWithCap)
    let capitalizeTitle = splitTitle.join('')

    let object = {
      title: capitalizeTitle,
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
    axios.get(`${domain}/recordLabels`)
    .then((res) => {
      this.setState({
        recordLabels: res.data
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
  }
  onSubmit (e) {
    e.preventDefault()

    axios.post(`${domain}/albums`, this.state.object)
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
  showSubmitButton (e) {
    if (this.refs.title.value && this.refs.artist.value && this.refs.recordLabel.value) {
      this.setState({
        showSubmitButton: true
      })
    } else {
      this.setState({
        showSubmitButton: false
      })
    }
  }
  render () {
    let submitButton = null
    if (this.state.showSubmitButton) {
      submitButton = <button onClick={this.openModal}>Add Album</button>
    }
    return (
      <div id='AddNewAlbum'>
        <h3>Add New Album</h3>
        <form onSubmit={this.onSubmit}>
          <input type='text' ref='title' placeholder='title' style={styles} onChange={this.showSubmitButton} />
          <br />
          <select ref='artist' style={styles} onChange={this.showSubmitButton} >
            <option value='' >artist here</option>
            {this.state.artists.map((artist, index) => (
              <option key={index} value={artist.id} > {artist.name} </option>
            ))}
          </select>
          <br />
          <select ref='recordLabel' style={styles} onChange={this.showSubmitButton} >
            <option value='' >record label here</option>
            {this.state.recordLabels.map((recordlabel, index) => (
              <option key={index} value={recordlabel.id} > {recordlabel.name} </option>
            ))}
          </select>
          <br />
          <textarea type='text' ref='description' placeholder='description' style={styles} />
          <br />
        </form>
        {submitButton}
        <PreviewModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} type='addAlbum' object={this.state.object} onSubmit={this.onSubmit} contentLabel='previewModal' />
        <SuccessEntryModal modalIsOpen={this.state.successModalIsOpen} closeModal={this.closeModal} returnToHome={this.returnToHome} contentLabel='successEntryModal' />
      </div>
    )
  }
}

module.exports = AddNewAlbum
