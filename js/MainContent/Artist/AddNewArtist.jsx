const React = require('react')
const axios = require('axios')
const PreviewModal = require('../Modal/PreviewModal')
const SuccessEntryModal = require('../Modal/SuccessEntryModal')

const styles = {
  fontSize: '18px',
  padding: '5px',
  margin: '5px',
  width: '80%',
  borderRadius: '5px'
}

class AddNewArtist extends React.Component {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.returnToHome = this.returnToHome.bind(this)
    this.showSubmitButton = this.showSubmitButton.bind(this)
    this.state = {
      modalIsOpen: false,
      successModalIsOpen: false,
      object: {},
      showSubmitButton: false
    }
  }
  openModal () {
    let splitName = this.refs.name.value.split('')
    let splitNameStartWithCap = splitName[0].toUpperCase()
    splitName.splice(0, 1, splitNameStartWithCap)
    let capitalizeName = splitName.join('')

    let object = {
      name: capitalizeName,
      description: this.refs.description.value,
      facebook: this.refs.facebook.value,
      instagram: this.refs.instagram.value,
      twitter: this.refs.twitter.value,
      bookingEmail: this.refs.bookingEmail.value,
      bookingPhoneNumber: this.refs.bookingPhoneNumber.value
    }
    if (!this.refs.description.value) {
      object.description = null
    }
    if (!this.refs.facebook.value) {
      object.facebook = null
    }
    if (!this.refs.instagram.value) {
      object.instagram = null
    }
    if (!this.refs.twitter.value) {
      object.twitter = null
    }
    if (!this.refs.bookingEmail.value) {
      object.bookingEmail = null
    }
    if (!this.refs.bookingPhoneNumber.value) {
      object.bookingPhoneNumber = null
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
    window.location.href = '/#/Home'
  }
  onSubmit (e) {
    e.preventDefault()

    axios.post(`/artists`, this.state.object)
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
    if (this.refs.name.value) {
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
      submitButton = <div><button onClick={this.openModal} > Add Artist </button></div>
    }
    return (
      <div id='AddNewArtist'>
        <h3>AddNewArtist</h3>
        <form onSubmit={this.onSubmit}>
          <input type='text' ref='name' style={styles} placeholder='artist name' onChange={this.showSubmitButton} />
          <br />
          <textarea type='text' ref='description' placeholder='description' style={styles} />
          <br />
          <input type='text' ref='facebook' placeholder='facebook' style={styles} />
          <br />
          <input type='text' ref='instagram' placeholder='instagram' style={styles} />
          <br />
          <input type='text' ref='twitter' placeholder='twitter' style={styles} />
          <br />
          <input type='text' ref='bookingEmail' placeholder='bookingEmail' style={styles} />
          <br />
          <input type='text' ref='bookingPhoneNumber' placeholder='bookingPhoneNumber' style={styles} />
          <br />
        </form>
        {submitButton}
        <PreviewModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} type='addArtist' object={this.state.object} onSubmit={this.onSubmit} contentLabel='previewModal' />
        <SuccessEntryModal modalIsOpen={this.state.successModalIsOpen} closeModal={this.closeModal} returnToHome={this.returnToHome} contentLabel='SuccessEntryModal' />
      </div>
    )
  }
}

module.exports = AddNewArtist
