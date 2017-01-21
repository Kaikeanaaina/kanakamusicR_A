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

class TermsOfServices extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      terms: '',
      OldTerms: '',
      termsModalIsOpen: false
    }
    this.openEditModal = this.openEditModal.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.changingTerms = this.changingTerms.bind(this)
  }
  componentDidMount () {
    axios.get(`${domain}/termsOfServices/1`)
    .then((res) => {
      this.setState({
        terms: res.data.terms,
        OldTerms: res.data.terms
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })
  }
  openEditModal () {
    this.setState({
      termsModalIsOpen: true
    })
  }
  afterOpenModal () {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00'
  }
  closeModal () {
    this.setState({
      termsModalIsOpen: false,
      terms: this.state.OldTerms
    })
  }
  onSubmit () {
    if (!this.state.terms) {
      console.log('post')
      axios.post(`${domain}/termsOfServices/`)
      .then((res) => {
        axios.get(`${domain}/termsOfServices/1`)
        .then((res) => {
          this.setState({
            terms: res.data.terms,
            termsModalIsOpen: false
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
      console.log('put')
    }
  }
  changingTerms (e) {
    this.setState({
      terms: e.target.value
    })
  }
  render () {
    return (
      <div>
        <MyTitle title='Terms Of Service' />
        <button onClick={this.openEditModal} > Edit Terms </button>

        <p>{this.state.terms}</p>

        <div id='editSourceModal'>
          <Modal
            isOpen={this.state.termsModalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel='editTerms' >

            <h4 ref='subtitle'>Edit Terms</h4>
            <textArea ref='Terms' value={this.state.terms} onChange={this.changingTerms} />
            <br />
            <button onClick={this.closeModal}>cancel</button>
            <button onClick={this.onSubmit}>edit</button>
          </Modal>
        </div>

      </div>
    )
  }
}

module.exports = TermsOfServices
