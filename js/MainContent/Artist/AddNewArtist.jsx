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

class AddNewArtist extends React.Component {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.returnToHome = this.returnToHome.bind(this)
    this.state = {
      modalIsOpen: false,
      successModalIsOpen: false,
      object: {}
    }
  }
  openModal () {
    if (!this.refs.name.value || !this.refs.type.value) {
      // throw error message here
      return console.log('fill in the name input')
    }
    let splitName = this.refs.name.value.split('')
    if (splitName[0] !== splitName[0].toUpperCase()) {
      // throw error message here
      return console.log('tell the admin to make sure it starts in upper case')
    }
    let object = {
      name: this.refs.name.value,
      type: this.refs.type.value,
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
    window.location.href = '/#/'
  }
  onSubmit (e) {
    e.preventDefault()

    axios.post(`${domain}/artists`, this.state.object)
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
      <div id='AddNewArtist'>
        <h3>AddNewArtist</h3>
        <form onSubmit={this.onSubmit}>
          <input type='text' ref='name' style={styles} placeholder='artist name' />
          <br />
          <select ref='type' style={styles} >
            <option value=''> type </option>
            <option value='hawaii' > Hawaii </option>
            <option value='contemporary'> Contemporary </option>
          </select>
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
        <button onClick={this.openModal} > Add Artist </button>
        <PreviewModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} type='addArtist' object={this.state.object} onSubmit={this.onSubmit} />
        <SuccessEntryModal modalIsOpen={this.state.successModalIsOpen} closeModal={this.closeModal} returnToHome={this.returnToHome} />
      </div>
    )
  }
}

module.exports = AddNewArtist
