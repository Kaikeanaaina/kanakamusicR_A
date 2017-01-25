const React = require('react')
const MyTitle = require('./../MyTitle')
const ArtistList = require('./../MainContent/Artist/ArtistList')
const axios = require('axios')
const { domain } = require('./../Domain')
const Modal = require('react-modal')

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

class Connect extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      artists: [],
      addBandMemberModalIsOpen: false,
      showSubmitButton: false
    }
    this.openAddModal = this.openAddModal.bind(this)
    this.afterOpenModal = this.openAddModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.showSubmitButton = this.showSubmitButton.bind(this)
  }
  componentDidMount () {
    axios.get(`${domain}/artists`)
    .then((res) => {
      this.setState({
        artists: res.data
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })
  }
  openAddModal () {
    this.setState({
      addBandMemberModalIsOpen: true
    })
  }
  afterOpenModal () {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00'
  }
  closeModal () {
    this.setState({
      addBandMemberModalIsOpen: false
    })
  }
  showSubmitButton (e) {
    if (this.refs.name.value && this.refs.artist.value) {
      this.setState({
        showSubmitButton: true
      })
    } else {
      this.setState({
        showSubmitButton: false
      })
    }
  }
  onSubmit (e) {
    e.preventDefault()

    let object = {
      name: this.refs.name.value,
      ArtistId: this.refs.artist.value,
      instrument: this.refs.instrument.value,
      howYouStartedToPlayMusic: this.refs.howYouStartedToPlayMusic.value,
      whatMotivatesYOuToPlayMusic: this.refs.whatMotivatesYOuToPlayMusic.value,
      whoDoYouLookUpTo: this.refs.whoDoYouLookUpTo.value,
      additionComments: this.refs.additionComments.value
    }

    axios.post(`${domain}/bandMembers/`, object)
    .then((res) => {
      this.setState({
        addBandMemberModalIsOpen: false
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })
  }
  render () {
    let submitButton = null
    if (this.state.showSubmitButton) {
      submitButton = (<button onClick={this.onSubmit}>submit</button>)
    }
    return (
      <div>
        <MyTitle title='Connect' />
        <button onClick={this.openAddModal} >+BandMember</button>
        <ArtistList type='connect' />

        <Modal
          isOpen={this.state.addBandMemberModalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel={'addBandMember'} >

          <h4 ref='subtitle'> Add Band Memeber </h4>
          <br />
          <select ref='artist' onChange={this.showSubmitButton} >
            <option value='' >artist here</option>
            {this.state.artists.map((artist, index) => (
              <option key={index} value={artist.id} > {artist.name} </option>
            ))}
          </select>
          <br />
          <label>
            Name:
            <input placeholder='name' ref='name' onChange={this.showSubmitButton} />
          </label>
          <br />
          <label>
            instrument:
            <input placeholder='instrument' ref='instrument' />
          </label>
          <br />
          <label>
            How you started to play music:
            <textArea placeholder='how did you start to play music' ref='howYouStartedToPlayMusic' />
          </label>
          <br />
          <label>
            What motivates you to play music?
            <textArea placeholder='what motivates you to play music' ref='whatMotivatesYOuToPlayMusic' />
          </label>
          <br />
          <label>
            Who do you look up to?
            <textArea placeholder='who do you look up to?' ref='whoDoYouLookUpTo' />
          </label>
          <br />
          <label>
            Additional Comments:
            <textArea placeholder='additional comments' ref='additionComments' />
          </label>
          <br />
          <button onClick={this.closeModal}>cancel</button>
          {submitButton}

        </Modal>

      </div>
    )
  }
}

module.exports = Connect
