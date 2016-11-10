const React = require('react')
const SongList = require('./SongList')
const ArtistList = require('./ArtistList')

class MyFirstComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      SongList: true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    this.setState({
      SongList: !this.state.SongList
    })
  }
  render () {
    let SongListing = null
    let ArtistListing = null
    let ButtonSwitch = null
    if (this.state.SongList) {
      SongListing = <div><SongList /></div>
      ArtistListing = null
    } else {
      ArtistListing = <div><ArtistList /></div>
      SongListing = null
    }
    if (this.state.SongList) {
      ButtonSwitch = <div className='buttons'><button onClick={this.handleClick} > Switch to Artists </button></div>
    } else {
      ButtonSwitch = <div className='buttons'><button onClick={this.handleClick} > Switch to Songs </button></div>
    }
    return (
      <div>
        {ButtonSwitch}
        {SongListing}
        {ArtistListing}
      </div>
    )
  }
}

module.exports = MyFirstComponent
