const React = require('react')
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

class SuccessEntryModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      successModalIsOpen: false
    }
    this.afterOpenModal = this.afterOpenModal.bind(this)
  }
  afterOpenModal () {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00'
  }
  render () {
    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel='successModal' >

          <h2 ref='subtitle'>Add Another Content?</h2>
          <button onClick={this.props.closeModal}>Yes</button>
          <button onClick={this.props.returnToHome}>No</button>
        </Modal>
      </div>
    )
  }
}

const { bool, func } = React.PropTypes

SuccessEntryModal.propTypes = {
  modalIsOpen: bool,
  closeModal: func,
  returnToHome: func
}

module.exports = SuccessEntryModal
