const React = require('react')
const axios = require('axios')
const { domain } = require('../Domain')
const PreviewModal = require('./Modal/PreviewModal')
const { Link } = require('react-router')

class AddNewVenue extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showSubmitButton: false,
      modalIsOpen: false,
      object: {},
      venues: [],
      selectVenue: {}
    }
    this.showSubmitButton = this.showSubmitButton.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.returnToHome = this.returnToHome.bind(this)
  }
  componentDidMount () {
    axios.get(`${domain}/venues`)
    .then((res) => {
      this.setState({
        venues: res.data
      })
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  showSubmitButton (e) {
    if (this.refs.name.value && this.refs.streetAddress.value && this.refs.city.value && this.refs.zipCode.value && this.refs.state.value) {
      console.log('made it')
      this.setState({
        showSubmitButton: true
      })
    } else {
      console.log('didnt make it')
      this.setState({
        showSubmitButton: false
      })
    }
  }
  openModal () {
    let splitName = this.refs.name.value.split('')
    let splitNameStartWithCap = splitName[0].toUpperCase()
    splitName.splice(0, 1, splitNameStartWithCap)
    let capitalizeName = splitName.join('')
    var object = {
      name: capitalizeName,
      streetAddress: this.refs.streetAddress.value,
      city: this.refs.city.value,
      zipCode: this.refs.zipCode.value,
      state: this.refs.state.value
    }

    this.setState({
      object: object
    })
    this.setState({
      modalIsOpen: true
    })
  }
  afterOpenModal () {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00'
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
    window.location.href = '/#/home'
  }
  onSubmit (e) {
    e.preventDefault()

    axios.post(`${domain}/venues`, this.state.object)
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
    let submitButton = null
    if (this.state.showSubmitButton) {
      submitButton = <div><button onClick={this.openModal}> Add Venue </button></div>
    }
    return (
      <div>
        <h1> add new venue </h1>

        <div>
          <form onSubmit={this.onSubmit}>

            <label>
              Name:
              <input ref='name' type='text' placeholder='name' onChange={this.showSubmitButton} />
            </label>
            <br />

            <label>
              Street Address:
              <input ref='streetAddress' type='text' placeholder='street address' onChange={this.showSubmitButton} />
            </label>
            <br />

            <label>
              City:
              <input ref='city' type='text' placeholder='city' onChange={this.showSubmitButton} />
            </label>
            <br />

            <label>
              Zip Code:
              <input ref='zipCode' type='text' placeholder='zip code' onChange={this.showSubmitButton} />
            </label>
            <br />

            <label>
              State:
              <input ref='state' type='text' placeholder='state' onChange={this.showSubmitButton} />
            </label>
            <br />

            <label>
              Image:
              <input ref='image' type='text' placeholder='image' />
            </label>
            <br />

          </form>

          {submitButton}
          <br />
          <PreviewModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} object={this.state.object} onSubmit={this.onSubmit} contentLabel='previewModal' />
        </div>

        <div>
          <div>
            {this.state.venues.map((venue, i) => (
              <div key={i} >
                <Link key={i} to={`/venue/${venue.id}`} >
                  <div key={i}>
                    {venue.name}
                  </div>
                  <br />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

module.exports = AddNewVenue
