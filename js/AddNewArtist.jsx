const React = require('react')
const axios = require('axios')
const PreviewModal = require('./PreviewModal')

class AddNewArtist extends React.Component {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.state = {
      modalIsOpen: false
    }
  }
  openModal () {
    this.setState({
      modalIsOpen: true
    })
  }
  closeModal () {
    this.setState({
      modalIsOpen: false
    })
  }
  onSubmit (e) {
    e.preventDefault()
    if (!this.refs.name.value || !this.refs.type.value) {
      console.log('fill in name or type')
      return
    } else {
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

      axios.post('http://localhost:5050/artists', object)
      .then((res) => {
        window.location.href = '/#/AddNewSong'
      })
    }
  }
  render () {
    return (
      <div id='AddNewArtist'>
        <h3>AddNewArtist</h3>
        <form onSubmit={this.onSubmit}>
          <input type='text' ref='name' placeholder='artist name' />
          <br />
          <select ref='type' >
            <option value=''> type </option>
            <option value='hawaii' > Hawaii </option>
            <option value='contemporary'> Contemporary </option>
          </select>
          <br />
          <textarea type='text' ref='description' placeholder='description' />
          <br />
          <input type='text' ref='facebook' placeholder='facebook' />
          <br />
          <input type='text' ref='instagram' placeholder='instagram' />
          <br />
          <input type='text' ref='twitter' placeholder='twitter' />
          <br />
          <input type='text' ref='bookingEmail' placeholder='bookingEmail' />
          <br />
          <input type='text' ref='bookingPhoneNumber' placeholder='bookingPhoneNumber' />
          <br />
        </form>
        <button onClick={this.openModal} > Add Artist </button>
        <PreviewModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} type='addArtist' />
      </div>
    )
  }
}

module.exports = AddNewArtist
