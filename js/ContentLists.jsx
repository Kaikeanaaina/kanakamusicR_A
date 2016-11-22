const React = require('react')
const SongList = require('./SongList')
const ArtistList = require('./ArtistList')
const AlbumList = require('./AlbumList')

class ContentLists extends React.Component {
  constructor () {
    super()
    this.state = {
      SongList: true,
      ArtistList: false,
      AlbumList: false
    }
    this.ShowSongList = this.ShowSongList.bind(this)
    this.ShowArtistList = this.ShowArtistList.bind(this)
    this.ShowAlbumList = this.ShowAlbumList.bind(this)
  }
  ShowSongList (e) {
    this.setState({
      SongList: true,
      ArtistList: false,
      AlbumList: false
    })
  }
  ShowArtistList (e) {
    this.setState({
      SongList: false,
      ArtistList: true,
      AlbumList: false
    })
  }
  ShowAlbumList (e) {
    this.setState({
      SongList: false,
      ArtistList: false,
      AlbumList: true
    })
  }
  render () {
    let Listing = null

    if (this.state.SongList) {
      Listing = <div><SongList /></div>
    } else if (this.state.ArtistList) {
      Listing = <div><ArtistList /></div>
    } else {
      Listing = <div><AlbumList /></div>
    }
    return (
      <div>
        <div className='buttons'>
          <button onClick={this.ShowSongList} > Song is true </button>
          <button onClick={this.ShowArtistList} > Artist is true </button>
          <button onClick={this.ShowAlbumList} > Album is true </button>
        </div>
        {Listing}
      </div>
    )
  }
 }

module.exports = ContentLists
