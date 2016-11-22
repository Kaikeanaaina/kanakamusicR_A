const React = require('react')
const SongList = require('./SongList')
const ArtistList = require('./ArtistList')
const AlbumList = require('./AlbumList')

class MyFirstComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      SongList: true,
      ArtistList: false,
      AlbumList: false,
      SearchResult: false,
      searchInput: ''
    }
    this.ShowSongList = this.ShowSongList.bind(this)
    this.ShowArtistList = this.ShowArtistList.bind(this)
    this.ShowAlbumList = this.ShowAlbumList.bind(this)
    this.searchInputEvent = this.searchInputEvent.bind(this)
  }
  ShowSongList (e) {
    this.setState({
      SongList: true,
      ArtistList: false,
      AlbumList: false,
      SearchResult: false
    })
  }
  ShowArtistList (e) {
    this.setState({
      SongList: false,
      ArtistList: true,
      AlbumList: false,
      SearchResult: false
    })
  }
  ShowAlbumList (e) {
    this.setState({
      SongList: false,
      ArtistList: false,
      AlbumList: true,
      SearchResult: false
    })
  }
  searchInputEvent (e) {
    this.setState({
      searchInput: e.target.value
    })

    if (!e.target.value) {
      this.setState({
        SongList: true,
        SearchResult: false
      })
    } else {
      this.setState({
        SongList: false,
        SearchResult: true
      })
    }
  }
  render () {
    let Listing = null
    let ResultListing = null

    if (this.state.SongList) {
      Listing = <div><SongList /></div>
    } else if (this.state.ArtistList) {
      Listing = <div><ArtistList /></div>
    } else {
      Listing = <div><AlbumList /></div>
    }

    if (this.state.SearchResult) {
      ResultListing = (<div>hi</div>)
    } else {
      ResultListing = (<div><div className='buttons'><button onClick={this.ShowSongList} > Song is true </button><button onClick={this.ShowArtistList} > Artist is true </button><button onClick={this.ShowAlbumList} > Album is true </button></div>{Listing}</div>)
    }

    return (
      <div>
        <div>
          <form >
            <input onChange={this.searchInputEvent} type='text' ref='search' placeholder='Search' />
          </form>
        </div>
        {ResultListing}
      </div>
    )
  }
}

module.exports = MyFirstComponent
