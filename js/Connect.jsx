const React = require('react')
const MyTitle = require('./MyTitle')
const ArtistList = require('./MainContent/Artist/ArtistList')
const axios = require('axios')
const { domain } = require('./Domain')
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
      addBandMemberModalIsOpen: false
    }
    this.openAddModal = this.openAddModal.bind(this)
    this.afterOpenModal = this.openAddModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount () {
    axios.get(`${domain}/artists`)
    .then((res) => {
      this.setState({
        artists: res.data
      })
      console.log(this.state.artists)
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
  onSubmit () {
    console.log('submit')
  }
  render () {
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
          <button onClick={this.closeModal}>cancel</button>
          <button onClick={this.onSubmit}>submit</button>

        </Modal>

      </div>
    )
  }
}

module.exports = Connect
