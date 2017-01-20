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

class Sources extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Source: {},
      sources: [],
      Bibliography: '',
      addModalIsOpen: false,
      deleteModalIsOpen: false,
      editModalIsOpen: false
    }
    this.openAddModal = this.openAddModal.bind(this)
    this.openDeleteModal = this.openDeleteModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.deleteSource = this.deleteSource.bind(this)
    this.openEditModal = this.openEditModal.bind(this)
    this.editSource = this.editSource.bind(this)
    this.changingBibliography = this.changingBibliography.bind(this)
  }
  openAddModal () {
    this.setState({
      addModalIsOpen: true
    })
  }
  openDeleteModal (e) {
    axios.get(`${domain}/resources/${e.target.value}`)
    .then((res) => {
      this.setState({
        Source: res.data
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
    axios.get(`${domain}/resources/${e.target.value}`)
    .then((res) => {
      this.setState({
        Source: res.data,
        Bibliography: res.data.bibliography
      })
    })
    .catch((err) => {
      console.log('axios err', err)
    })
    this.setState({
      editModalIsOpen: true
    })
  }
  changingBibliography (e) {
    this.setState({
      Bibliography: e.target.value
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
    if (!this.refs.bibliography.value) {
      console.log('fill in bibliography')
      return
    }

    let object = {
      bibliography: this.refs.bibliography.value
    }

    axios.post(`${domain}/resources/`, object)
    .then((res) => {
      axios.get(`${domain}/resources/`)
      .then((res) => {
        this.setState({
          sources: res.data,
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
  deleteSource () {
    axios.delete(`${domain}/resources/${this.state.Source.id}`)
    .then((res) => {
      axios.get(`${domain}/resources/`)
      .then((res) => {
        this.setState({
          sources: res.data
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
  editSource () {
    let object = {
      id: this.state.Source.id,
      bibliography: this.refs.newBibliography.value
    }
    axios.put(`${domain}/resources/${this.state.Source.id}`, object)
    .then((res) => {
      axios.get(`${domain}/resources/`)
      .then((res) => {
        this.setState({
          sources: res.data,
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
    axios.get(`${domain}/resources/`)
    .then((res) => {
      this.setState({
        sources: res.data
      })
    })
    .catch((err) => {
      console.log('axios error', err)
    })
  }
  render () {
    return (
      <div>
        <h1> Sources </h1>
        <button onClick={this.openAddModal} > +Sources </button>

        <div>
          {this.state.sources.map((source, i) => (
            <div key={i}>
              <button onClick={this.openDeleteModal} value={source.id} >delete</button>
              <button onClick={this.openEditModal} value={source.id} >edit</button>
              {i + 1}. {source.bibliography}
            </div>
          ))}
        </div>

        <div id='addSourceModal'>
          <Modal
            isOpen={this.state.addModalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel='addSource' >

            <h4 ref='subtitle'>Confirm New Venue</h4>
            <label>
              bibliography:
              <textArea placeholder='bibliography' ref='bibliography' />
            </label>
            <button onClick={this.closeModal}>cancel</button>
            <button onClick={this.onSubmit}>submit</button>
          </Modal>
        </div>

        <div id='deleteSourceModal'>
          <Modal
            isOpen={this.state.deleteModalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel='deleteSource' >

            <h4 ref='subtitle'>Are you sure you want to delete this source?</h4>
            <p>{this.state.Source.bibliography}</p>
            <button onClick={this.closeModal}>cancel</button>
            <button onClick={this.deleteSource}>delete</button>
          </Modal>
        </div>

        <div id='editSourceModal'>
          <Modal
            isOpen={this.state.editModalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel='editSource' >

            <h4 ref='subtitle'>Edit bibliography</h4>
            <textArea ref='newBibliography' value={this.state.Bibliography} onChange={this.changingBibliography} />
            <p> current Bibliography: {this.state.Source.bibliography}</p>
            <button onClick={this.closeModal}>cancel</button>
            <button onClick={this.editSource}>edit</button>
          </Modal>
        </div>

      </div>
    )
  }
}

module.exports = Sources
