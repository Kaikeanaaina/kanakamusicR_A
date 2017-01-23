const React = require('react')
const SongList = require('./Song/SongList')
const ArtistList = require('./Artist/ArtistList')
const AlbumList = require('./Album/AlbumList')
const RecordLabelList = require('./RecordLabel/RecordLabelList')

class ContentLists extends React.Component {
  constructor () {
    super()
    this.state = {
      SongList: true,
      ArtistList: false,
      AlbumList: false,
      RecordLabelList: false
    }
    this.ShowSongList = this.ShowSongList.bind(this)
    this.ShowArtistList = this.ShowArtistList.bind(this)
    this.ShowAlbumList = this.ShowAlbumList.bind(this)
    this.ShowRecordLabelList = this.ShowRecordLabelList.bind(this)
  }
  ShowSongList (e) {
    this.setState({
      SongList: true,
      ArtistList: false,
      AlbumList: false,
      RecordLabel: false
    })
  }
  ShowArtistList (e) {
    this.setState({
      SongList: false,
      ArtistList: true,
      AlbumList: false,
      RecordLabel: false
    })
  }
  ShowAlbumList (e) {
    this.setState({
      SongList: false,
      ArtistList: false,
      AlbumList: true,
      RecordLabel: false
    })
  }
  ShowRecordLabelList (e) {
    this.setState({
      SongList: false,
      ArtistList: false,
      AlbumList: false,
      RecordLabelList: true
    })
  }
  render () {
    let Listing = null

    if (this.state.SongList) {
      Listing = <div><SongList /></div>
    } else if (this.state.ArtistList) {
      Listing = <div><ArtistList type='mainContent' /></div>
    } else if (this.state.AlbumList) {
      Listing = <div><AlbumList /></div>
    } else {
      Listing = <div><RecordLabelList /></div>
    }
    return (
      <div>
        <div className='buttons'>
          <button onClick={this.ShowSongList} > Song </button>
          <button onClick={this.ShowArtistList} > Artist </button>
          <button onClick={this.ShowAlbumList} > Album </button>
          <button onClick={this.ShowRecordLabelList} > RecordLabel </button>
        </div>
        {Listing}
      </div>
    )
  }
 }

module.exports = ContentLists
