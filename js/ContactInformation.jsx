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

class ContactInformation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      contacts: [],
      addContactInformationModalIsOpen: false,
      editContactInformationModalIsOpen: false,
      deleteContactInformationModalIsOpen: false
    }
    this.openAddContactModal = this.openAddContactModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount () {
    axios.get(`${domain}/contactInformation/`)
    .then((res) => {
      this.setState({
        contacts: res.data
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })
  }
  openAddContactModal () {
    this.setState({
      addContactInformationModalIsOpen: true
    })
  }
  afterOpenModal () {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00'
  }
  closeModal () {
    this.setState({
      addContactInformationModalIsOpen: false
    })
  }
  onSubmit () {
    let object = {
      faxNumber: this.refs.faxNumber.value,
      phoneNumber: this.refs.phoneNumber.value
    }

    if (!this.refs.email.value) {
      console.log('fill in the email ')
      return
    } else {
      object.email = this.refs.email.value
    }

    if (!this.refs.title.value) {
      console.log('fill in the title')
      return
    } else {
      object.title = this.refs.title.value
    }

    if (!this.refs.name.value) {
      console.log('fill in the name')
      return
    } else {
      object.name = this.refs.name.value
    }

    axios.post(`${domain}/contactInformation/`, object)
    .then((res) => {
      axios.get(`${domain}/contactInformation`, object)
      .then((res) => {
        this.setState({
          contacts: res.data,
          addContactInformationModalIsOpen: false
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
        <MyTitle title='ContactInformation' />
        <button onClick={this.openAddContactModal} > +contact </button>

        {this.state.contacts.map((contact, i) => (
          <div key={i}>
            <button onClick={this.openDeleteModal} value={contact.id} >delete</button>
            <button onClick={this.openEditModal} value={contact.id} >edit</button>
            {i + 1}. {contact.name + ' - '} {contact.title + ' - '} {contact.email + ' - '} {contact.phoneNumber + ' - '} {contact.faxNumber}
          </div>
        ))}

        <div id='addContact' >
          <Modal
            isOpen={this.state.addContactInformationModalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel='addContact' >

            <h4 ref='subtitle'> Add New Contact </h4>
            <label>
              Name:
              <input type='text' placeholder='name' ref='name' />
            </label>
            <br />
            <label>
              Title:
              <input type='text' placeholder='title' ref='title' />
            </label>
            <br />
            <label>
              Email:
              <input type='text' placeholder='email' ref='email' />
            </label>
            <br />
            <label>
              phoneNumber:
              <input type='text' placeholder='phoneNumber' ref='phoneNumber' />
            </label>
            <br />
            <label>
              faxNumber:
              <input type='text' placeholder='faxNumber' ref='faxNumber' />
            </label>
            <br />
            <button onClick={this.closeModal}>cancel</button>
            <button onClick={this.onSubmit}>submit</button>
          </Modal>

        </div>

      </div>
    )
  }
}

module.exports = ContactInformation
