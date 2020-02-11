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

class deleteConfirmModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modalIsOpen: false
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
          contentLabel={this.props.contentLabel}>

          <h3 ref='subtitle'>Are you sure you want to delete this Gig?</h3>
          <button onClick={this.props.delete} >Delete</button>
          <button onClick={this.props.closeModal} >Cancel</button>
        </Modal>
      </div>
    )
  }
}

deleteConfirmModal.propTypes = {
  modalIsOpen: React.PropTypes.bool,
  closeModal: React.PropTypes.func,
  delete: React.PropTypes.func,
  contentLabel: React.PropTypes.string.isRequired
}

module.exports = deleteConfirmModal
