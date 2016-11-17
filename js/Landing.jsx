const React = require('react')
const SongList = require('./SongList')
const ArtistList = require('./ArtistList')

class MyFirstComponent extends React.Component {
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
    let SongListing = null
    let ArtistListing = null
    let AlbumListing = null

    if (this.state.SongList) {
      SongListing = <div><SongList /></div>
      ArtistListing = null
      AlbumListing = null
    } else if (this.state.ArtistList) {
      ArtistListing = <div><ArtistList /></div>
      SongListing = null
      AlbumListing = null
    } else {
      AlbumListing = <div>this is the album list</div>
      SongListing = null
      ArtistListing = null
    }

    return (
      <div>
        <div className='buttons'>
          <button onClick={this.ShowSongList} > Song is true </button>
          <button onClick={this.ShowArtistList} > Artist is true </button>
          <button onClick={this.ShowAlbumList} > Album is true </button>
        </div>
        {SongListing}
        {ArtistListing}
        {AlbumListing}
      </div>
    )
  }
}

module.exports = MyFirstComponent
