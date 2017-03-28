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
            <br />

            <label>
              <h4> {this.props.object.chord1}</h4>
            </label>
            <label>
              <h4>{this.props.object.line1}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord2}</h4>
            </label>
            <label>
              <h4> {this.props.object.line2}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord3}</h4>
            </label>
            <label>
              <h4> {this.props.object.line3}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord4}</h4>
            </label>
            <label>
              <h4> {this.props.object.line4}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord5}</h4>
            </label>
            <label>
              <h4> {this.props.object.line5}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord6}</h4>
            </label>
            <label>
              <h4> {this.props.object.line6}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord7}</h4>
            </label>
            <label>
              <h4> {this.props.object.line7}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord8}</h4>
            </label>
            <label>
              <h4> {this.props.object.line8}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord9}</h4>
            </label>
            <label>
              <h4> {this.props.object.line9}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord10}</h4>
            </label>
            <label>
              <h4> {this.props.object.line10}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord11}</h4>
            </label>
            <label>
              <h4> {this.props.object.line11}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord12}</h4>
            </label>
            <label>
              <h4> {this.props.object.line12}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord13}</h4>
            </label>
            <label>
              <h4> {this.props.object.line13}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord14}</h4>
            </label>
            <label>
              <h4> {this.props.object.line14}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord15}</h4>
            </label>
            <label>
              <h4> {this.props.object.line15}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord16}</h4>
            </label>
            <label>
              <h4> {this.props.object.line16}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord17}</h4>
            </label>
            <label>
              <h4> {this.props.object.line17}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord18}</h4>
            </label>
            <label>
              <h4> {this.props.object.line18}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord19}</h4>
            </label>
            <label>
              <h4> {this.props.object.line19}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord20}</h4>
            </label>
            <label>
              <h4> {this.props.object.line20}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord21}</h4>
            </label>
            <label>
              <h4> {this.props.object.line21}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord22}</h4>
            </label>
            <label>
              <h4> {this.props.object.line22}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord23}</h4>
            </label>
            <label>
              <h4> {this.props.object.line23}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord24}</h4>
            </label>
            <label>
              <h4> {this.props.object.line24}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord25}</h4>
            </label>
            <label>
              <h4> {this.props.object.line25}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord26}</h4>
            </label>
            <label>
              <h4> {this.props.object.line26}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord27}</h4>
            </label>
            <label>
              <h4> {this.props.object.line27}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord28}</h4>
            </label>
            <label>
              <h4> {this.props.object.line28}</h4>
            </label>
            <br />
            <label>
              <h4> {this.props.object.chord29}</h4>
            </label>
            <label>
              <h4> {this.props.object.line29}</h4>
            </label>
            <label>
              <h4> {this.props.object.chord30}</h4>
            </label>
            <label>
              <h4> {this.props.object.line30}</h4>
            </label>
            <label>
              <p>description: {this.props.object.description}</p>
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
