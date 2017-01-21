const React = require('react')
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

class Credits extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Credit: {},
      credits: [],
      name: '',
      organization: '',
      website: '',
      addModalIsOpen: false,
      deleteModalIsOpen: false,
      editModalIsOpen: false
    }
    this.openAddModal = this.openAddModal.bind(this)
    this.openDeleteModal = this.openDeleteModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.deleteCredit = this.deleteCredit.bind(this)
    this.openEditModal = this.openEditModal.bind(this)
    this.editCredit = this.editCredit.bind(this)
    this.changingName = this.changingName.bind(this)
    this.changingWebsite = this.changingWebsite.bind(this)
    this.changingOrganization = this.changingOrganization.bind(this)
  }
  openAddModal () {
    this.setState({
      addModalIsOpen: true
    })
  }
  openDeleteModal (e) {
    axios.get(`${domain}/credits/${e.target.value}`)
    .then((res) => {
      this.setState({
        Credit: res.data
      })
    })
    .catch((err) => {
      console.log('axios err', err)
    })
    this.setState({
      deleteModalIsOpen: true
    })
  }
  openEditModal (e) {
    axios.get(`${domain}/credits/${e.target.value}`)
    .then((res) => {
      this.setState({
        Credit: res.data,
        name: res.data.name,
        organization: res.data.organization,
        website: res.data.website
      })
    })
    .catch((err) => {
      console.log('axios err', err)
    })
    this.setState({
      editModalIsOpen: true
    })
  }
  changingName (e) {
    this.setState({
      name: e.target.value
    })
  }
  changingOrganization (e) {
    this.setState({
      website: e.target.value
    })
  }
  changingWebsite (e) {
    this.setState({
      website: e.target.value
    })
  }
  afterOpenModal () {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00'
  }
  closeModal () {
    this.setState({
      addModalIsOpen: false,
      deleteModalIsOpen: false,
      editModalIsOpen: false
    })
  }
  onSubmit () {
    let object = {
      name: this.refs.name.value,
      organization: this.refs.organization.value,
      website: this.refs.website.value
    }

    axios.post(`${domain}/credits/`, object)
    .then((res) => {
      axios.get(`${domain}/credits/`)
      .then((res) => {
        this.setState({
          credits: res.data,
          addModalIsOpen: false
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
  deleteCredit () {
    axios.delete(`${domain}/credits/${this.state.Credit.id}`)
    .then((res) => {
      axios.get(`${domain}/credits/`)
      .then((res) => {
        this.setState({
          credits: res.data
        })
      })
      .catch((err) => {
        console.log('axios error', err)
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })
    this.setState({
      deleteModalIsOpen: false
    })
  }
  editCredit () {
    let object = {}

    if (!this.refs.name.value) {
      object.name = this.state.name
    } else {
      object.name = this.refs.name.value
    }

    if (!this.refs.organization.value) {
      object.organization = this.state.organization
    } else {
      object.organization = this.refs.organization.value
    }

    if (!this.refs.website.value) {
      object.website = this.state.website
    } else {
      object.website = this.refs.website.value
    }

    axios.put(`${domain}/credits/${this.state.Credit.id}`, object)
    .then((res) => {
      axios.get(`${domain}/credits/`)
      .then((res) => {
        this.setState({
          credits: res.data,
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
  componentDidMount () {
    axios.get(`${domain}/credits/`)
    .then((res) => {
      this.setState({
        credits: res.data
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })
  }
  render () {
    return (
      <div>
        <h1> Credits </h1>
        <button onClick={this.openAddModal} > +Credits </button>

        <div>
          {this.state.credits.map((Credit, i) => (
            <div key={i}>
              <button onClick={this.openDeleteModal} value={Credit.id} >delete</button>
              <button onClick={this.openEditModal} value={Credit.id} >edit</button>
              {i + 1}. {Credit.name + ' - '} {Credit.organization + ' - '} {Credit.website}
            </div>
          ))}
        </div>

        <div id='addCreditModal'>
          <Modal
            isOpen={this.state.addModalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel='addCredit' >

            <h4 ref='subtitle'>Confirm New Venue</h4>
            <label>
              (optional) name:
              <input placeholder='name' ref='name' />
            </label>
            <br />
            <label>
              (optional) organization:
              <input placeholder='organization' ref='organization' />
            </label>
            <br />
            <label>
              (optional) website:
              <input placeholder='website' ref='website' />
            </label>
            <br />
            <button onClick={this.closeModal}>cancel</button>
            <button onClick={this.onSubmit}>submit</button>
          </Modal>
        </div>

        <div id='deleteCreditModal'>
          <Modal
            isOpen={this.state.deleteModalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel='deleteCredit' >

            <h4 ref='subtitle'>Are you sure you want to delete this Credit?</h4>
            <p>{this.state.Credit.name}</p>
            <p>{this.state.Credit.organization}</p>
            <p>{this.state.Credit.website}</p>
            <button onClick={this.closeModal}>cancel</button>
            <button onClick={this.deleteCredit}>delete</button>
          </Modal>
        </div>

        <div id='editCreditModal'>
          <Modal
            isOpen={this.state.editModalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel='editCredit' >

            <h4 ref='subtitle'>Edit Credit</h4>
            <label>
              Name:
              <input ref='name' value={this.state.name} onChange={this.changingName} />
            </label>
            <br />
            <label>
              organization:
              <input ref='organization' value={this.state.organization} onChange={this.changingOrganization} />
            </label>
            <br />
            <label>
              website:
              <input ref='website' value={this.state.website} onChange={this.changingWebsite} />
            </label>
            <br />
            <button onClick={this.closeModal}>cancel</button>
            <button onClick={this.editCredit}>edit</button>
          </Modal>
        </div>

      </div>
    )
  }
}

module.exports = Credits
