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

class PreviewModal extends React.Component {
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
          contentLabel={this.props.contentLabel} >

          <h4 ref='subtitle'>Confirm New Venue</h4>
          <label>
            <h2>Name: {this.props.object.name}</h2>
          </label>
          <label>
            <h2>Street Address: {this.props.object.streetAddress}</h2>
          </label>
          <label>
            <h2>City: {this.props.object.city}</h2>
          </label>
          <label>
            <h2>Zip Code: {this.props.object.zipCode}</h2>
          </label>
          <label>
            <h2>State: {this.props.object.state}</h2>
          </label>
          <button onClick={this.props.closeModal}>cancel</button>
          <button onClick={this.props.onSubmit}>submit</button>
        </Modal>
      </div>
    )
  }
}

PreviewModal.propTypes = {
  modalIsOpen: React.PropTypes.bool,
  closeModal: React.PropTypes.func,
  object: React.PropTypes.object,
  onSubmit: React.PropTypes.func,
  contentLabel: React.PropTypes.string.isRequired
}

module.exports = PreviewModal
