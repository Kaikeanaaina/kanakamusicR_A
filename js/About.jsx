const React = require('react')
const MyTitle = require('./MyTitle')
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

class About extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      about: '',
      oldAbout: '',
      editAboutModalIsOpen: false
    }
    this.openAboutModal = this.openAboutModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.changingAbout = this.changingAbout.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount () {
    axios.get(`${domain}/about/1`)
    .then((res) => {
      this.setState({
        about: res.data.about,
        oldAbout: res.data.about
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })
  }
  openAboutModal () {
    this.setState({
      editAboutModalIsOpen: true
    })
  }
  afterOpenModal () {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00'
  }
  closeModal () {
    this.setState({
      editAboutModalIsOpen: false,
      about: this.state.oldAbout
    })
  }
  changingAbout (e) {
    this.setState({
      about: e.target.value
    })
  }
  onSubmit () {
    if (!this.state.oldAbout) {
      let object = {
        about: this.refs.about.value
      }
      axios.post(`${domain}/about/`, object)
      .then((res) => {
        axios.get(`${domain}/about/1`)
        .then((res) => {
          this.setState({
            oldAbout: res.data.about,
            about: res.data.about,
            editAboutModalIsOpen: false
          })
        })
        .catch((err) => {
          console.log('axios error', err)
        })
      })
      .catch((err) => {
        console.log('axios error', err)
      })
    } else {
      let object = {
        id: 1
      }
      if (!this.refs.about.value) {
        object.about = this.state.about
      } else {
        object.about = this.refs.about.value
      }
      axios.put(`${domain}/about/1`, object)
      .then((res) => {
        axios.get(`${domain}/about/1`)
        .then((res) => {
          this.setState({
            oldAbout: res.data.about,
            about: res.data.about,
            editAboutModalIsOpen: false
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
  }
  render () {
    return (
      <div>
        <MyTitle title='About' />
        <button onClick={this.openAboutModal}> Edit About </button>

        <p>{this.state.oldAbout}</p>

        <div id='editAbout'>
          <Modal
            isOpen={this.state.editAboutModalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel='editAbout' >

            <h4 ref='subtitle'> Edit About </h4>
            <textArea value={this.state.about} ref='about' onChange={this.changingAbout} />
            <button onClick={this.closeModal}>cancel</button>
            <button onClick={this.onSubmit}>edit</button>
          </Modal>
        </div>

      </div>
    )
  }
}

module.exports = About
