const React = require('react')
const axios = require('axios')

const style = {
  socialMedia: {
    backgroundColor: 'pink'
  },
  booking: {
    backgroundColor: 'lightblue'
  },
  description: {
    backgroundColor: 'lightgreen'
  }
}

class EditArtist extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Artist: {}
    }
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount () {
    let domain = 'http://localhost:5050/'

    axios.get(`${domain}artists/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        Artist: res.data
      })
    })
  }
  onSubmit (e) {
    e.preventDefault()

    let object = {}

    if (this.refs.name.value) {
      object.name = this.refs.name.value
    } else {
      object.name = this.state.Artist.name
    }

    if (this.refs.description.value) {
      object.description = this.refs.description.value
    } else {
      object.description = this.state.Artist.description
    }

    if (this.refs.bookingEmail.value) {
      object.bookingEmail = this.refs.bookingEmail.value
    } else {
      object.bookingEmail = this.state.Artist.bookingEmail
    }

    if (this.refs.bookingPhoneNumber.value) {
      object.bookingPhoneNumber = this.refs.bookingPhoneNumber.value
    } else {
      object.bookingPhoneNumber = this.state.Artist.bookingPhoneNumber
    }

    if (this.refs.twitter.value) {
      object.twitter = this.refs.twitter.value
    } else {
      object.twitter = this.state.Artist.twitter
    }

    if (this.refs.facebook.value) {
      object.facebook = this.refs.facebook.value
    } else {
      object.facebook = this.state.Artist.facebook
    }

    if (this.refs.instagram.value) {
      object.instagram = this.refs.instagram.value
    } else {
      object.instagram = this.state.Artist.instagram
    }

    axios.put(`http://localhost:5050/artists/${this.state.Artist.id}`, object)
    .then((res) => {
      axios.put(`http://localhost:5050/albums/ByArtistId/${this.state.Artist.id}`, object)
      .then((res) => {
        axios.put(`http://localhost:5050/songs/ByArtistId/${this.state.Artist.id}`, object)
        .then((res) => {
          window.location.href = `/#/album/${this.state.Album.id}`
        })
      })
    })
  }
  render () {
    let visibleProperty
    if (this.state.Artist.visibility) {
      visibleProperty = (<div>visibility: true</div>)
    } else {
      visibleProperty = (<div>visibility: false</div>)
    }
    return (
      <div>
        <div>
          <h1>
            Edit Artist page
          </h1>
        </div>
        <form onSubmit={this.onSubmit} >
          <div>
            <label>
              <span> Name </span>
              <input ref='name' placeholder={this.state.Artist.name} />
            </label>
          </div>
          <br></br>
          <div style={style.description}>
            <div>
              <label>
                <span> description </span>
                <textarea ref='description' placeholder={this.state.Artist.description} />
              </label>
            </div>
            <div>
              <label>
                <span> Visibility </span>
                <select type='text' ref='visibility' placeholder='visibility' >
                  <option> visibility </option>
                  <option value='false' >false</option>
                  <option value='true' >true</option>
                </select>
                {visibleProperty}
              </label>
            </div>
          </div>
          <br></br>
          <div style={style.booking}>
            <div>
              <label>
                <span> booking email </span>
                <input ref='bookingEmail' placeholder={this.state.Artist.bookingEmail} />
              </label>
            </div>
            <div>
              <label>
                <span> booking Phone Number </span>
                <input ref='bookingPhoneNumber' placeholder={this.state.Artist.bookingPhoneNumber} />
              </label>
            </div>
          </div>
          <br></br>
          <div style={style.socialMedia}>
            <div>
              <label>
                <span> twitter </span>
                <input ref='twitter' placeholder={this.state.Artist.twitter} />
              </label>
            </div>
            <div>
              <label>
                <span> facebook </span>
                <input ref='facebook' placeholder={this.state.Artist.facebook} />
              </label>
            </div>
            <div>
              <label>
                <span> instagram </span>
                <input ref='instagram' placeholder={this.state.Artist.instagram} />
              </label>
            </div>
          </div>
          <br></br>
          <div>
            <button type='submit'> Edit Album </button>
          </div>
        </form>
      </div>
    )
  }
}

EditArtist.propTypes = {
  params: React.PropTypes.object
}

module.exports = EditArtist