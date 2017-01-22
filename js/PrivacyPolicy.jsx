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

class PrivacyPolicy extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      privacyPolicy: '',
      oldPrivacyPolicy: '',
      privacyPolicyModalIsOpen: false
    }
    this.openPrivacyPolicyModal = this.openPrivacyPolicyModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.changingPrivacyPolicy = this.changingPrivacyPolicy.bind(this)
  }
  componentDidMount () {
    axios.get(`${domain}/privacyPolicies/1`)
    .then((res) => {
      this.setState({
        oldPrivacyPolicy: res.data.privacyPolicy,
        privacyPolicy: res.data.privacyPolicy
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })
  }
  openPrivacyPolicyModal () {
    this.setState({
      privacyPolicyModalIsOpen: true
    })
  }
  afterOpenModal () {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00'
  }
  closeModal () {
    this.setState({
      privacyPolicyModalIsOpen: false,
      privacyPolicy: this.state.oldPrivacyPolicy
    })
  }
  changingPrivacyPolicy (e) {
    this.setState({
      privacyPolicy: e.target.value
    })
  }
  onSubmit () {
    if (!this.state.oldPrivacyPolicy) {
      let object = {
        privacyPolicy: this.refs.privacyPolicy.value
      }
      axios.post(`${domain}/privacyPolicies/`, object)
      .then((res) => {
        axios.get(`${domain}/privacyPolicies/1`)
        .then((res) => {
          this.setState({
            oldPrivacyPolicy: res.data.privacyPolicy,
            privacyPolicy: res.data.privacyPolicy,
            privacyPolicyModalIsOpen: false
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
      if (!this.refs.privacyPolicy.value) {
        object.privacyPolicy = this.state.privacyPolicy
      } else {
        object.privacyPolicy = this.refs.privacyPolicy.value
      }
      axios.put(`${domain}/privacyPolicies/1`, object)
      .then((res) => {
        axios.get(`${domain}/privacyPolicies/1`)
        .then((res) => {
          this.setState({
            oldPrivacyPolicy: res.data.privacyPolicy,
            privacyPolicy: res.data.privacyPolicy,
            privacyPolicyModalIsOpen: false
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
        <MyTitle title='PrivacyPolicy' />
        <button onClick={this.openPrivacyPolicyModal} > Edit Privacy Policy </button>

        <p>{this.state.oldPrivacyPolicy}</p>

        <div>
          <Modal
            isOpen={this.state.privacyPolicyModalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel='EditPrivacyPolicy' >

            <h4 ref='subtitle'> Edit Private Policy </h4>
            <textArea value={this.state.privacyPolicy} ref='privacyPolicy' onChange={this.changingPrivacyPolicy} />
            <br />
            <button onClick={this.closeModal}>cancel</button>
            <button onClick={this.onSubmit}>edit</button>
          </Modal>
        </div>

      </div>
    )
  }
}

module.exports = PrivacyPolicy
