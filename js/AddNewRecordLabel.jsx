const React = require('react')
// const axios = require('axios')
const PreviewModal = require('./PreviewModal')

class AddNewRecordLabel extends React.Component {
  constructor (props) {
    super(props)
    this.state = ({
      artists: [],
      object: {},
      modalIsOpen: false
    })
    this.onSubmit = this.onSubmit.bind(this)
    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  openModal () {
    if (!this.refs.name.value) {
      return console.log('fill in the name input')
    }

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
      modalIsOpen: false
    })
  }
  onSubmit (e) {
    e.preventDefault()
    console.log('submit record label')

    // axios.post('http://localhost:5050/recordLabels', object)
    // .then((res) => {
    //   window.location.href = '/#/AddNewArtist'
    // })
  }
  render () {
    return (
      <div>
        <h3>add new record label</h3>
        <form onSubmit={this.openModal}>
          <label>
            <input type='text' ref='name' placeholder='name' />
          </label>
          <br />
        </form>
        <button onClick={this.openModal} > Add Record Label </button>
        <PreviewModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} type='addRecordLabel' object={this.state.object} onSubmit={this.onSubmit} />
      </div>
    )
  }
}

module.exports = AddNewRecordLabel
