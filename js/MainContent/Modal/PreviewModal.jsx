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
    if (this.props.type === 'addSong') {
      return (
        <div style={customStyles} >
          <Modal
            isOpen={this.props.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel={this.props.contentLabel} >

            <h4 ref='subtitle'>Confirm New Song</h4>
            <label>
              <h2>title: {this.props.object.title}</h2>
            </label>
            <label>
              <h2>Artist: {this.props.object.ArtistId}</h2>
            </label>
            <label>
              <h2>Album: {this.props.object.AlbumId}</h2>
            </label>
            <label>
              <h2>Type: {this.props.object.type}</h2>
            </label>
            <label>
              <h2>line1: {this.props.object.line1}</h2>
            </label>
            <label>
              <h2>line2: {this.props.object.line2}</h2>
            </label>
            <label>
              <h2>line3: {this.props.object.line3}</h2>
            </label>
            <label>
              <h2>line4: {this.props.object.line4}</h2>
            </label>
            <label>
              <h2>line5: {this.props.object.line5}</h2>
            </label>
            <label>
              <h2>line6: {this.props.object.line6}</h2>
            </label>
            <label>
              <h2>line7: {this.props.object.line7}</h2>
            </label>
            <label>
              <h2>line8: {this.props.object.line8}</h2>
            </label>
            <label>
              <h2>line9: {this.props.object.line9}</h2>
            </label>
            <label>
              <h2>line10: {this.props.object.line10}</h2>
            </label>
            <label>
              <h2>line11: {this.props.object.line11}</h2>
            </label>
            <label>
              <h2>line12: {this.props.object.line12}</h2>
            </label>
            <label>
              <h2>line13: {this.props.object.line13}</h2>
            </label>
            <label>
              <h2>line14: {this.props.object.line14}</h2>
            </label>
            <label>
              <h2>line15: {this.props.object.line15}</h2>
            </label>
            <label>
              <h2>line16: {this.props.object.line16}</h2>
            </label>
            <label>
              <h2>line17: {this.props.object.line17}</h2>
            </label>
            <label>
              <h2>line18: {this.props.object.line18}</h2>
            </label>
            <label>
              <h2>line19: {this.props.object.line19}</h2>
            </label>
            <label>
              <h2>line20: {this.props.object.line20}</h2>
            </label>
            <label>
              <h2>line21: {this.props.object.line21}</h2>
            </label>
            <label>
              <h2>line22: {this.props.object.line22}</h2>
            </label>
            <label>
              <h2>line23: {this.props.object.line23}</h2>
            </label>
            <label>
              <h2>line24: {this.props.object.line24}</h2>
            </label>
            <label>
              <h2>line25: {this.props.object.line25}</h2>
            </label>
            <label>
              <h2>line26: {this.props.object.line26}</h2>
            </label>
            <label>
              <h2>line27: {this.props.object.line27}</h2>
            </label>
            <label>
              <h2>line28: {this.props.object.line28}</h2>
            </label>
            <label>
              <h2>line29: {this.props.object.line29}</h2>
            </label>
            <label>
              <h2>line30: {this.props.object.line30}</h2>
            </label>
            <label>
              <h2>description: {this.props.object.description}</h2>
            </label>
            <button onClick={this.props.closeModal}>cancel</button>
            <button onClick={this.props.onSubmit}>submit</button>
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
            style={customStyles}
            contentLabel={this.props.contentLabel} >

            <h4 ref='subtitle'>Confirm New Artist</h4>
            <label>
              <h2>title: {this.props.object.title}</h2>
            </label>
            <label>
              <h2>Artist: {this.props.object.ArtistId}</h2>
            </label>
            <label>
              <h2>Record Label: {this.props.object.RecordLabelId}</h2>
            </label>
            <label>
              <h2>description: {this.props.object.description}</h2>
            </label>
            <button onClick={this.props.closeModal}>cancel</button>
            <button onClick={this.props.onSubmit}>submit</button>
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
            style={customStyles}
            contentLabel={this.props.contentLabel} >

            <h4 ref='subtitle'>Confirm New Artist</h4>
            <label>
              <h2>name: {this.props.object.name}</h2>
            </label>
            <label>
              <h2>type: {this.props.object.type}</h2>
            </label>
            <label>
              <h2>facebook: {this.props.object.facebook}</h2>
            </label>
            <label>
              <h2>instagram: {this.props.object.instagram}</h2>
            </label>
            <label>
              <h2>twitter: {this.props.object.twitter}</h2>
            </label>
            <label>
              <h2>bookingEmail: {this.props.object.bookingEmail}</h2>
            </label>
            <label>
              <h2>bookingPhoneNumber: {this.props.object.bookingPhoneNumber}</h2>
            </label>
            <button onClick={this.props.closeModal}>cancel</button>
            <button onClick={this.props.onSubmit}>submit</button>
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
            style={customStyles}
            contentLabel={this.props.contentLabel} >

            <h4 ref='subtitle'>Confirm New RecordLabel</h4>
            <label>
              <h2>name: {this.props.object.name}</h2>
            </label>
            <button onClick={this.props.closeModal}>cancel</button>
            <button onClick={this.props.onSubmit}>submit</button>
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
  object: React.PropTypes.object,
  onSubmit: React.PropTypes.func,
  contentLabel: React.PropTypes.string.isRequired
}

module.exports = PreviewModal
