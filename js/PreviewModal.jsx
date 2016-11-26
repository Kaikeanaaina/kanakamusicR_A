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
  componentDidMount () {
    console.log(this.props.object
    )
  }
  render () {
    if (this.props.type === 'addSong') {
      return (
        <div>
          <Modal
            isOpen={this.props.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles} >

            <h2 ref='subtitle'>Add A Song</h2>
            <button onClick={this.props.closeModal}>close</button>
            <div>confirm song</div>
          </Modal>
        </div>
      )
    } else if (this.props.type === 'addAlbum') {
      return (
        <div>
          <Modal
            isOpen={this.props.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles} >

            <h2 ref='subtitle'>Add Album</h2>
            <button onClick={this.props.closeModal}>close</button>
            <div>confirm album</div>
          </Modal>
        </div>
      )
    } else if (this.props.type === 'addArtist') {
      return (
        <div>
          <Modal
            isOpen={this.props.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles} >

            <h2 ref='subtitle'>Add Artist</h2>
            <button onClick={this.props.closeModal}>close</button>
            <div>confirm artist</div>
          </Modal>
        </div>
      )
    } else if (this.props.type === 'addRecordLabel') {
      return (
        <div>
          <Modal
            isOpen={this.props.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles} >

            <h2 ref='subtitle'>Confirm New RecordLabel</h2>
            <h4>{this.props.object.name}</h4>
            <button onClick={this.props.closeModal}>close</button>
            <div>confirm RecordLabel</div>
          </Modal>
        </div>
      )
    }
  }
}

PreviewModal.propTypes = {
  modalIsOpen: React.PropTypes.bool,
  closeModal: React.PropTypes.func,
  type: React.PropTypes.string,
  object: React.PropTypes.object
}

module.exports = PreviewModal
