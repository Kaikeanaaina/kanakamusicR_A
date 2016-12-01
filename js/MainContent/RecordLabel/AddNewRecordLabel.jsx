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

class AddNewRecordLabel extends React.Component {
  constructor (props) {
    super(props)
    this.state = ({
      artists: [],
      object: {},
      modalIsOpen: false,
      successModalIsOpen: false
    })
    this.onSubmit = this.onSubmit.bind(this)
    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.returnToHome = this.returnToHome.bind(this)
  }
  openModal () {
    var object = {
      name: this.refs.name.value
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
    window.location.href = '/#/'
  }
  onSubmit (e) {
    e.preventDefault()

    axios.post(`${domain}/recordLabels`, this.state.object)
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
      <div>
        <h3>add new record label</h3>
        <form onSubmit={this.openModal}>
          <label>
            <input type='text' ref='name' placeholder='name' style={styles} />
          </label>
          <br />
        </form>
        <button onClick={this.openModal} > Add Record Label </button>
        <PreviewModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} type='addRecordLabel' object={this.state.object} onSubmit={this.onSubmit} />
        <SuccessEntryModal modalIsOpen={this.state.successModalIsOpen} closeModal={this.closeModal} returnToHome={this.returnToHome} />
      </div>
    )
  }
}

module.exports = AddNewRecordLabel
