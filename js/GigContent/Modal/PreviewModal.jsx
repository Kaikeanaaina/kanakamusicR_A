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
            <h2>Name: {this.props.object.eventName}</h2>
          </label>
          <label>
            <h2>Artists: {this.props.object.Artists}</h2>
          </label>
          <label>
            <h2>Month: {this.props.object.Month}</h2>
          </label>
          <label>
            <h2>Day: {this.props.object.Day}</h2>
          </label>
          <label>
            <h2>Year: {this.props.object.Year}</h2>
          </label>
          <label>
            <h2>Start Hour: {this.props.object.startHour}</h2>
          </label>
          <label>
            <h2>Start Minute: {this.props.object.startMinute}</h2>
          </label>
          <label>
            <h2>Age: {this.props.object.Age}</h2>
          </label>
          <label>
            <h2>Price: {this.props.object.Price}</h2>
          </label>
          <label>
            <h2>Venue: {this.props.object.Venue}</h2>
          </label>
          <label>
            <h2>Promoter: {this.props.object.Promoter}</h2>
          </label>
          <label>
            <h2>Contact: {this.props.object.Contact}</h2>
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
