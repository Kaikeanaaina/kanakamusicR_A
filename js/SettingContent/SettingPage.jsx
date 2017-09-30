const React = require('react')
const { Link } = require('react-router')
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

class SettingPage extends React.Component {
  constructor () {
    super()
    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.logOutSubmit = this.logOutSubmit.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
  }
  openModal () {
    console.log('open modal to log out')
    // clicking link opens modal to confirm logging out
    this.setState({
      modalIsOpen: true
    })
  }
  closeModal () {
    console.log('closing modal to log out')
    // close modal to cancel action
    this.setState({
      modalIsOpen: false
    })
  }
  logOutSubmit () {
    console.log('logging out button')
    // axios call to log out
    // promise to
    // clear user
    // go to log in screen
  }
  afterOpenModal () {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00'
  }
  render () {
    let modal = null
    if (this.state.modalIsOpen) {
      modal = <div><Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel='confirmLogOut' > <h4 ref='subtitle'>Confirm Log Out</h4> <label><h2>Are You Sure You want to Log Out?</h2></label><button onClick={this.closeModal}>cancel</button><button onClick={this.logOutSubmit}>LogOut</button></Modal></div>
    } else {
      modal = null
    }
    return (
      <div>
        {modal}
        <h1> Settings </h1>

        <h3>
          <button onClick={this.openModal} > Logout </button>
        </h3>

        <h3>
          <Link to='/EditProfile'> Edit Profile </Link>
        </h3>

        <h3>
          <Link to='/LayoutAddOns'> Layouts </Link>
        </h3>

        <h3>
          <Link to='/Feedback'> Feedback </Link>
        </h3>

        <h3>
          <Link to='/Sources'> Sources </Link>
        </h3>

        <h3>
          <Link to='/Credits'> Credits </Link>
        </h3>
      </div>
    )
  }
}

module.exports = SettingPage
