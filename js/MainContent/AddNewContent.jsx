const React = require('react')
const AddNewSong = require('./Song/AddNewSong')
const AddNewArtist = require('./Artist/AddNewArtist')
const AddNewAlbum = require('./Album/AddNewAlbum')
const AddNewRecordLabel = require('./RecordLabel/AddNewRecordLabel')

class AddNewContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ShowAddSongForm: true,
      ShowAddArtistForm: false,
      ShowAddAlbumForm: false,
      ShowAddRecordLabelForm: false
    }
    this.ShowAddSongForm = this.ShowAddSongForm.bind(this)
    this.ShowAddArtistForm = this.ShowAddArtistForm.bind(this)
    this.ShowAddAlbumForm = this.ShowAddAlbumForm.bind(this)
    this.ShowAddRecordLabelForm = this.ShowAddRecordLabelForm.bind(this)
  }
  ShowAddSongForm (e) {
    this.setState({
      ShowAddSongForm: true,
      ShowAddAlbumForm: false,
      ShowAddArtistForm: false,
      ShowAddRecordLabelForm: false
    })
  }
  ShowAddAlbumForm (e) {
    this.setState({
      ShowAddSongForm: false,
      ShowAddAlbumForm: true,
      ShowAddArtistForm: false,
      ShowAddRecordLabelForm: false
    })
  }
  ShowAddArtistForm (e) {
    this.setState({
      ShowAddSongForm: false,
      ShowAddAlbumForm: false,
      ShowAddArtistForm: true,
      ShowAddRecordLabelForm: false
    })
  }
  ShowAddRecordLabelForm (e) {
    this.setState({
      ShowAddSongForm: false,
      ShowAddAlbumForm: false,
      ShowAddArtistForm: false,
      ShowAddRecordLabelForm: true
    })
  }
  render () {
    let form
    if (this.state.ShowAddSongForm) {
      form = (<div><AddNewSong /></div>)
    } else if (this.state.ShowAddArtistForm) {
      form = (<div><AddNewArtist /></div>)
    } else if (this.state.ShowAddAlbumForm) {
      form = (<div><AddNewAlbum /></div>)
    } else {
      form = (<div><AddNewRecordLabel /></div>)
    }
    return (
      <div>
        <div>
          <button onClick={this.ShowAddSongForm}> + Song </button>
          <button onClick={this.ShowAddArtistForm}> + Artist </button>
          <button onClick={this.ShowAddAlbumForm}> + Album </button>
          <button onClick={this.ShowAddRecordLabelForm}> + Record Label </button>
        </div>
        <div>
          {form}
        </div>
      </div>
    )
  }
}

module.exports = AddNewContent
