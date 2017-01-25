const React = require('react')
const axios = require('axios')
const { domain } = require('./../Domain')
const BandMemberCard = require('./BandMemberCard')
const { Link } = require('react-router')
const Modal = require('react-modal')

const style = {
  socialMedia: {
    margin: '5px'
  },
  socialMediaItems: {
    fontSize: '18px',
    margin: '0px'
  },
  booking: {
    fontSize: '18px',
    margin: '5px'
  },
  bookingItems: {
    fontSize: '18px',
    margin: '0px'
  },
  description: {
    margin: '5px'
  }
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

class BandMembers extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      BandMember: {},
      bandMembers: [],
      Artist: {},
      editModalIsOpen: false,
      deleteModalIsOpen: false,
      name: '',
      instrument: '',
      howYouStartedToPlayMusic: '',
      whatMotivatesYouToPlayMusic: '',
      whoDoYouLookUpTo: '',
      additionComments: '',
      ArtistId: '',
      artists: []
    }
    this.openEditModal = this.openEditModal.bind(this)
    this.openDeleteModal = this.openDeleteModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.changingName = this.changingName.bind(this)
    this.changingInstrument = this.changingInstrument.bind(this)
    this.changingHowYouStaredToPlayMusic = this.changingHowYouStaredToPlayMusic.bind(this)
    this.changingWhatMotivatesYouToPlayMusic = this.changingWhatMotivatesYouToPlayMusic.bind(this)
    this.changingWhoDoYouLookUpTo = this.changingWhoDoYouLookUpTo.bind(this)
    this.changingAdditionComments = this.changingAdditionComments.bind(this)
    this.changingArtistId = this.changingArtistId.bind(this)
    this.submitEdit = this.submitEdit.bind(this)
    this.deleteBandMember = this.deleteBandMember.bind(this)
  }
  componentDidMount () {
    axios.get(`${domain}/bandMembers/ByArtistId/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        bandMembers: res.data
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })

    axios.get(`${domain}/artists/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        Artist: res.data
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })

    axios.get(`${domain}/artists/`)
    .then((res) => {
      this.setState({
        artists: res.data
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })
  }
  openEditModal (e) {
    axios.get(`${domain}/bandMembers/${e.target.value}`)
    .then((res) => {
      this.setState({
        BandMember: res.data,
        name: res.data.name,
        instrument: res.data.instrument,
        howYouStartedToPlayMusic: res.data.howYouStartedToPlayMusic,
        whatMotivatesYouToPlayMusic: res.data.whatMotivatesYouToPlayMusic,
        whoDoYouLookUpTo: res.data.whoDoYouLookUpTo,
        additionComments: res.data.additionComments,
        ArtistId: res.data.ArtistId,
        editModalIsOpen: true
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })
  }
  openDeleteModal (e) {
    axios.get(`${domain}/bandMembers/${e.target.value}`)
    .then((res) => {
      this.setState({
        BandMember: res.data,
        deleteModalIsOpen: true
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })
  }
  afterOpenModal () {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00'
  }
  closeModal () {
    this.setState({
      editModalIsOpen: false,
      deleteModalIsOpen: false
    })
  }
  changingName (e) {
    this.setState({
      name: e.target.value
    })
  }
  changingInstrument (e) {
    this.setState({
      instrument: e.target.value
    })
  }
  changingHowYouStaredToPlayMusic (e) {
    this.setState({
      howYouStartedToPlayMusic: e.target.value
    })
  }
  changingWhatMotivatesYouToPlayMusic (e) {
    this.setState({
      whatMotivatesYouToPlayMusic: e.target.value
    })
  }
  changingWhoDoYouLookUpTo (e) {
    this.setState({
      whoDoYouLookUpTo: e.target.value
    })
  }
  changingAdditionComments (e) {
    this.setState({
      additionComments: e.target.value
    })
  }
  changingArtistId (e) {
    if (this.refs.artist.value) {
      this.setState({
        ArtistId: e.target.value
      })
    }
  }
  submitEdit (e) {
    e.preventDefault()

    let object = {
      name: this.state.name,
      instrument: this.state.instrument,
      howYouStartedToPlayMusic: this.state.howYouStartedToPlayMusic,
      whatMotivatesYouToPlayMusic: this.state.whatMotivatesYouToPlayMusic,
      whoDoYouLookUpTo: this.state.whoDoYouLookUpTo,
      additionComments: this.state.additionComments,
      ArtistId: this.state.ArtistId
    }

    axios.put(`${domain}/bandMembers/${this.state.BandMember.id}`, object)
    .then((res) => {
      axios.get(`${domain}/bandMembers/`)
      .then((res) => {
        this.setState({
          bandMembers: res.data,
          editModalIsOpen: false
        })
      })
      .catch((err) => {
        console.log('axios error', err)
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })
  }
  deleteBandMember () {
    axios.delete(`${domain}/bandMembers/${this.state.BandMember.id}`)
    .then((res) => {
      axios.get(`${domain}/bandMembers`)
      .then((res) => {
        this.setState({
          bandMembers: res.data,
          deleteModalIsOpen: false
        })
      })
      .catch((err) => {
        console.log('axios error', err)
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })
  }
  render () {
    return (
      <div>
        <h1> {this.state.Artist.name} </h1>
        <div>
          <button>
            <Link to={`/artist/edit/${this.state.Artist.id}`}> Edit Artist </Link>
          </button>
        </div>
        <div style={style.booking}>
          <p style={style.bookingItems}>{this.state.Artist.bookingEmail}</p>
          <p style={style.bookingItems}>{this.state.Artist.bookingPhoneNumber}</p>
        </div>
        <div>
          <a style={style.socialMedia} href={this.state.Artist.twitter}>{this.state.Artist.twitter}</a>
          <a style={style.socialMedia} href={this.state.Artist.facebook}>{this.state.Artist.facebook}</a>
          <a style={style.socialMedia} href={this.state.Artist.instagram}>{this.state.Artist.instagram}</a>
        </div>
        <div style={style.description}>
          <p><i>{this.state.Artist.description}</i></p>
        </div>
        {this.state.bandMembers.map((bandMember, i) => (
          <div key={i} >
            <button onClick={this.openEditModal} value={bandMember.id} >Edit {bandMember.name}</button>
            <button onClick={this.openDeleteModal} value={bandMember.id} >Delete {bandMember.name}</button>
            <BandMemberCard bandMember={bandMember} />
          </div>
        ))}
        <div >
          <Modal
            isOpen={this.state.editModalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel='editBandMember' >

            <h4 ref='subtitle'> Add New Contact </h4>
            <label>
              Name:
              <input type='text'ref='name' value={this.state.name} onChange={this.changingName} />
            </label>
            <br />
            <label>
              Artist:
              <select ref='artist' onChange={this.changingArtistId} >
                <option value='' >artist here</option>
                {this.state.artists.map((artist, index) => (
                  <option key={index} value={artist.id} > {artist.name} </option>
                ))}
              </select>
            </label>
            <br />
            <label>
              Instrument
              <input type='text' ref='instrument' value={this.state.instrument} onChange={this.changingInstrument} />
            </label>
            <br />
            <label>
              How you started to play music
              <textArea type='text' ref='howYouStartedToPlayMusic' value={this.state.howYouStartedToPlayMusic} onChange={this.changingHowYouStaredToPlayMusic} />
            </label>
            <br />
            <label>
              What motivates you to play music
              <textArea type='text' ref='whatMotivatesYouToPlayMusic' value={this.state.whatMotivatesYouToPlayMusic} onChange={this.changingWhatMotivatesYouToPlayMusic} />
            </label>
            <br />
            <label>
              Who do you look up to
              <textArea type='text' ref='whoDoYouLookUpTo' value={this.state.whoDoYouLookUpTo} onChange={this.changingWhoDoYouLookUpTo} />
            </label>
            <br />
            <label>
              Additional Comments
              <textArea type='text' ref='additionComments' value={this.state.additionComments} onChange={this.changingAdditionComments} />
            </label>
            <br />
            <button onClick={this.closeModal}>cancel</button>
            <button onClick={this.submitEdit}>edit</button>
          </Modal>
        </div>

        <div >
          <Modal
            isOpen={this.state.deleteModalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel='deleteBandMember' >

            <h4 ref='subtitle'> Are you sure you want to delete the band member {this.state.BandMember.name}? </h4>

            <button onClick={this.closeModal}>cancel</button>
            <button onClick={this.deleteBandMember}>delete</button>
          </Modal>
        </div>
      </div>
    )
  }
}

const { object } = React.PropTypes

BandMembers.propTypes = {
  params: object
}

module.exports = BandMembers
