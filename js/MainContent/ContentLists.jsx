const React = require('react')
const SongList = require('./Song/SongList')
const ArtistList = require('./Artist/ArtistList')
const AlbumList = require('./Album/AlbumList')
const RecordLabelList = require('./RecordLabel/RecordLabelList')
const { Button, Icon } = require('react-materialize')

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
      Listing = <SongList />
    } else if (this.state.ArtistList) {
      Listing = <ArtistList />
    } else if (this.state.AlbumList) {
      Listing = <AlbumList />
    } else {
      Listing = <RecordLabelList />
    }
    return (
      <div>
        <div className='buttons'>
          <Button className='buttons' node='a' waves='light' ><Icon right>file_cloud</Icon>button</Button>
          <button onClick={this.ShowSongList} > Song is true </button>
          <button onClick={this.ShowArtistList} > Artist is true </button>
          <button onClick={this.ShowAlbumList} > Album is true </button>
          <button onClick={this.ShowRecordLabelList} > RecordLabel is true </button>
        </div>
        <div>
          {Listing}
        </div>
      </div>
    )
  }
 }

module.exports = ContentLists
