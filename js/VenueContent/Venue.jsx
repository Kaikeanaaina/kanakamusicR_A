const React = require('react')
const axios = require('axios')
const { domain } = require('../Domain')

class Venue extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Venue: {}
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.deleteVenue = this.deleteVenue.bind(this)
  }
  componentDidMount () {
    axios.get(`${domain}/venues/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        Venue: res.data
      })
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  deleteVenue () {
    console.log('delete')
    axios.delete(`${domain}/venues/${this.state.Venue.id}`)
    .then((res) => {
      console.log('44444')
      window.location.href = '/#/AddNewVenue'
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  onSubmit (e) {
    e.preventDefault()

    let object = {
      id: this.state.Venue.id,
      name: this.refs.name.value,
      streetAddress: this.refs.streetAddress.value,
      city: this.refs.city.value,
      zipCode: this.refs.zipCode.value,
      state: this.refs.state.value,
      image: this.refs.image.value
    }

    if (!this.refs.name.value) {
      object.name = this.state.Venue.name
    }
    if (!this.refs.streetAddress.value) {
      object.streetAddress = this.state.Venue.streetAddress
    }
    if (!this.refs.city.value) {
      object.city = this.state.Venue.city
    }
    if (!this.refs.zipCode.value) {
      object.zipCode = this.state.Venue.zipCode
    }
    if (!this.refs.state.value) {
      object.state = this.state.Venue.state
    }
    if (!this.refs.image.value) {
      object.state = this.state.Venue.image
    }

    axios.put(`${domain}/venues/${this.state.Venue.id}`, object)
    .then((res) => {
      window.location.href = '/#/'
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  render () {
    return (
      <div>
        <h1> Venue</h1>
        <form onSubmit={this.onSubmit} >
          <label>
            Name:
            <input ref='name' type='text' placeholder={this.state.Venue.name} />
          </label>
          <br />
          <label>
            Street Address:
            <input ref='streetAddress' type='text' placeholder={this.state.Venue.streetAddress} />
          </label>
          <br />
          <label>
            City:
            <input ref='city' type='text' placeholder={this.state.Venue.city} />
          </label>
          <br />
          <label>
            Zip Code:
            <input ref='zipCode' type='text' placeholder={this.state.Venue.zipCode} />
          </label>
          <br />
          <label>
            State:
            <input ref='state' type='text' placeholder={this.state.Venue.state} />
          </label>
          <br />
          <label>
            Image:
            <input ref='image' type='text' placeholder={this.state.Venue.image} />
          </label>
          <br />
          <button type='submit'> Edit Venue </button>
        </form>
        <br />
        <button onClick={this.deleteVenue} > Delete Venue </button>
      </div>
    )
  }
}

Venue.propTypes = {
  params: React.PropTypes.object
}

module.exports = Venue
