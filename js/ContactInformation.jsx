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
      Contact: {},
      contacts: [],
      addContactInformationModalIsOpen: false,
      editContactInformationModalIsOpen: false,
      deleteContactInformationModalIsOpen: false,
      name: '',
      title: '',
      email: '',
      phoneNumber: '',
      faxNumber: ''
    }
    this.openAddContactModal = this.openAddContactModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.openDeleteModal = this.openDeleteModal.bind(this)
    this.openEditModal = this.openEditModal.bind(this)
    this.changingName = this.changingName.bind(this)
    this.changingTitle = this.changingTitle.bind(this)
    this.changingEmail = this.changingEmail.bind(this)
    this.changingPhoneNumber = this.changingPhoneNumber.bind(this)
    this.changingFaxNumber = this.changingFaxNumber.bind(this)
    this.editContact = this.editContact.bind(this)
    this.deleteContact = this.deleteContact.bind(this)
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
      addContactInformationModalIsOpen: false,
      deleteContactInformationModalIsOpen: false,
      editContactInformationModalIsOpen: false
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
  openDeleteModal (e) {
    axios.get(`${domain}/contactInformation/${e.target.value}`)
    .then((res) => {
      this.setState({
        deleteContactInformationModalIsOpen: true,
        Contact: res.data,
        name: res.data.name,
        title: res.data.title,
        email: res.data.email,
        phoneNumber: res.data.phoneNumber,
        faxNumber: res.data.faxNumber
      })
    })
  }
  openEditModal (e) {
    axios.get(`${domain}/contactInformation/${e.target.value}`)
    .then((res) => {
      this.setState({
        editContactInformationModalIsOpen: true,
        Contact: res.data,
        name: res.data.name,
        title: res.data.title,
        email: res.data.email,
        phoneNumber: res.data.phoneNumber,
        faxNumber: res.data.faxNumber
      })
    })
  }
  changingName (e) {
    this.setState({
      name: e.target.value
    })
  }
  changingTitle (e) {
    this.setState({
      title: e.target.value
    })
  }
  changingEmail (e) {
    this.setState({
      email: e.target.value
    })
  }
  changingPhoneNumber (e) {
    this.setState({
      phoneNumber: e.target.value
    })
  }
  changingFaxNumber (e) {
    this.setState({
      faxNumber: e.target.value
    })
  }
  editContact () {
    let object = {}

    if (!this.refs.name.value) {
      object.name = this.state.name
    } else {
      object.name = this.refs.name.value
    }

    if (!this.refs.title.value) {
      object.title = this.state.title
    } else {
      object.title = this.refs.title.value
    }

    if (!this.refs.email.value) {
      object.email = this.state.email
    } else {
      object.email = this.refs.email.value
    }

    if (!this.refs.phoneNumber.value) {
      object.phoneNumber = this.state.phoneNumber
    } else {
      object.phoneNumber = this.refs.phoneNumber.value
    }

    if (!this.refs.faxNumber.value) {
      object.faxNumber = this.state.faxNumber
    } else {
      object.faxNumber = this.refs.faxNumber.value
    }

    axios.put(`${domain}/contactInformation/${this.state.Contact.id}`, object)
    .then((res) => {
      axios.get(`${domain}/contactInformation/`)
      .then((res) => {
        this.setState({
          contacts: res.data,
          editContactInformationModalIsOpen: false
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
  deleteContact () {
    axios.delete(`${domain}/contactInformation/${this.state.Contact.id}`)
    .then((res) => {
      axios.get(`${domain}/contactInformation/`)
      .then((res) => {
        this.setState({
          contacts: res.data,
          deleteContactInformationModalIsOpen: false
        })
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

        <div>
          <Modal
            isOpen={this.state.editContactInformationModalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel='editContact' >

            <h4 ref='subtitle'> Edit Contact </h4>
            <label>
              Name:
              <input type='text' value={this.state.name} ref='name' onChange={this.changingName} />
            </label>
            <br />
            <label>
              Title:
              <input type='text' value={this.state.title} ref='title' onChange={this.changingTitle} />
            </label>
            <br />
            <label>
              Email:
              <input type='text' value={this.state.email} ref='email' onChange={this.changingEmail} />
            </label>
            <br />
            <label>
              phoneNumber:
              <input type='text' value={this.state.phoneNumber} ref='phoneNumber' onChange={this.changingPhoneNumber} />
            </label>
            <br />
            <label>
              faxNumber:
              <input type='text' value={this.state.faxNumber} ref='faxNumber' onChange={this.changingFaxNumber} />
            </label>
            <br />
            <button onClick={this.closeModal}>cancel</button>
            <button onClick={this.editContact}>submit</button>

          </Modal>
        </div>

        <div>
          <Modal
            isOpen={this.state.deleteContactInformationModalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel='deleteContact' >

            <h4 ref='subtitle'> Are you sure you want to delete this contact? </h4>
            <p>{this.state.Contact.name}</p>
            <p>{this.state.Contact.title}</p>
            <p>{this.state.Contact.email}</p>
            <p>{this.state.Contact.phoneNumber}</p>
            <p>{this.state.Contact.faxNumber}</p>
            <button onClick={this.closeModal}>cancel</button>
            <button onClick={this.deleteContact}>delete</button>
          </Modal>
        </div>

      </div>
    )
  }
}

module.exports = ContactInformation
