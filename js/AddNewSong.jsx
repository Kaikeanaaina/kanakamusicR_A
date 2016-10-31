const React = require('react')
const axios = require('axios')
const { Link } = require('react-router')

class AddNewSong extends React.Component {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.artistChange = this.artistChange.bind(this)
    this.albumChange = this.albumChange.bind(this)
    this.state = ({
      linkToNewArtist: false,
      linkToNewAlbum: false,
      artists: [],
      albums: []
    })
  }
  componentDidMount () {
    axios.get('http://localhost:5050/artists')
    .then((res) => {
      this.setState({
        artists: res.data
      })
    })
  }
  onSubmit (e) {
    e.preventDefault()

    // if (!this.refs.line1.value) {
    //   return alert('fill in all areas')
    // }
    var object = {
      title: this.refs.title.value,
      artist: this.refs.artist.value,
      album: this.refs.album.value,
      type: this.refs.type.value,
      description: this.refs.description.value,
      line1: this.refs.line1.value,
      line2: this.refs.line2.value,
      line3: this.refs.line3.value,
      line4: this.refs.line4.value,
      line5: this.refs.line5.value,
      line6: this.refs.line6.value,
      line7: this.refs.line7.value,
      line8: this.refs.line8.value,
      line9: this.refs.line9.value,
      line10: this.refs.line10.value,
      line11: this.refs.line11.value,
      line12: this.refs.line12.value,
      line13: this.refs.line13.value,
      line14: this.refs.line14.value,
      line15: this.refs.line15.value,
      line16: this.refs.line16.value,
      line17: this.refs.line17.value,
      line18: this.refs.line18.value,
      line19: this.refs.line19.value,
      line20: this.refs.line20.value,
      line21: this.refs.line21.value,
      line22: this.refs.line22.value,
      line23: this.refs.line23.value,
      line24: this.refs.line24.value,
      line25: this.refs.line25.value,
      line26: this.refs.line26.value,
      line27: this.refs.line27.value,
      line28: this.refs.line28.value,
      line29: this.refs.line29.value,
      line30: this.refs.line30.value,
      ArtistId: this.refs.artist.value,
      AlbumId: this.refs.album.value
    }

    if (!this.refs.title.value || !this.refs.artist.value || !this.refs.album.value || !this.refs.type.value) {
      return console.log('fill in the necessary blanks')
    }

    if (!this.refs.line1.value) {
      object.line1 = null
    }
    if (!this.refs.line2.value) {
      object.line2 = null
    }
    if (!this.refs.line3.value) {
      object.line3 = null
    }
    if (!this.refs.line3.value) {
      object.line3 = null
    }
    if (!this.refs.line4.value) {
      object.line4 = null
    }
    if (!this.refs.line5.value) {
      object.line5 = null
    }
    if (!this.refs.line6.value) {
      object.line6 = null
    }
    if (!this.refs.line7.value) {
      object.line7 = null
    }
    if (!this.refs.line8.value) {
      object.line8 = null
    }
    if (!this.refs.line9.value) {
      object.line9 = null
    }
    if (!this.refs.line10.value) {
      object.line10 = null
    }
    if (!this.refs.line11.value) {
      object.line11 = null
    }
    if (!this.refs.line12.value) {
      object.line12 = null
    }
    if (!this.refs.line13.value) {
      object.line13 = null
    }
    if (!this.refs.line14.value) {
      object.line14 = null
    }
    if (!this.refs.line15.value) {
      object.line15 = null
    }
    if (!this.refs.line16.value) {
      object.line16 = null
    }
    if (!this.refs.line17.value) {
      object.line17 = null
    }
    if (!this.refs.line18.value) {
      object.line18 = null
    }
    if (!this.refs.line19.value) {
      object.line19 = null
    }
    if (!this.refs.line20.value) {
      object.line20 = null
    }
    if (!this.refs.line21.value) {
      object.line21 = null
    }
    if (!this.refs.line22.value) {
      object.line22 = null
    }
    if (!this.refs.line23.value) {
      object.line23 = null
    }
    if (!this.refs.line24.value) {
      object.line24 = null
    }
    if (!this.refs.line25.value) {
      object.line25 = null
    }
    if (!this.refs.line26.value) {
      object.line26 = null
    }
    if (!this.refs.line27.value) {
      object.line27 = null
    }
    if (!this.refs.line28.value) {
      object.line28 = null
    }
    if (!this.refs.line29.value) {
      object.line29 = null
    }
    if (!this.refs.line30.value) {
      object.line30 = null
    }

    axios.post('http://localhost:5050/songs', object)
    .then((res) => {
      window.location.href = '/#/'
    })
  }
  artistChange (event) {
    event.preventDefault()
    if (event.target.value === 'giveAddNewArtistLink') {
      this.setState({
        linkToNewArtist: true
      })
    } else if (event.target.value === 'artistHere') {
      return
    } else {
      this.setState({
        linkToNewArtist: false
      })
      // populate the albums depending on the artist
      axios.get(`http://localhost:5050/albums/ofArtist/${event.target.value}`)
      .then((res) => {
        this.setState({
          albums: res.data
        })
      })
    }
  }
  albumChange (event) {
    event.preventDefault()
    if (event.target.value === 'giveAddNewAlbumLink') {
      this.setState({
        linkToNewAlbum: true
      })
    } else {
      this.setState({
        linkToNewAlbum: false
      })
    }
  }
  render () {
    let AddNewArtistLink = null
    if (this.state.linkToNewArtist) {
      AddNewArtistLink = <div><br></br><Link to='/addNewArtist'>Add New Artist</Link><br></br></div>
    }
    let AddNewAlbumLink = null
    if (this.state.linkToNewAlbum) {
      AddNewAlbumLink = <div><br></br><Link to='/addNewAlbum'>Add New Album</Link><br></br></div>
    }
    return (
      <div id='AddNewSong'>
        <h3>AddNewSong</h3>
        <form onSubmit={this.onSubmit}>
          <input type='text' ref='title' placeholder='title' />
          <br></br>
          <select type='text' ref='artist' onChange={this.artistChange} >
            <option value='artistHere'> artist here </option>
            <option value='giveAddNewArtistLink' >AddNewArtist</option>
            {this.state.artists.map((artist, index) => (
              <option key={index} value={artist.id} > {artist.name} </option>
            ))}
          </select>
          {AddNewArtistLink}
          <br></br>
          <select type='text' ref='album' placeholder='album' onChange={this.albumChange}>
            <option value='albumHere'>album here</option>
            <option value='giveAddNewAlbumLink'>AddNewAlbum</option>
              {this.state.albums.map((album, index) => (
                <option key={index} value={album.id} > {album.title} </option>
              ))}
          </select>
          {AddNewAlbumLink}
          <br></br>
          <select type='text' ref='type' placeholder='type' >
            <option value=''> type </option>
            <option value='hawaiian'>Hawaiian</option>
            <option value='contemporary'>contemporary</option>
          </select>
          <br></br>
          <textarea type='text' ref='description' placeholder='description' />
          <br></br>
          <input type='text' ref='line1' placeholder='line1' />
          <br></br>
          <input type='text' ref='line2' placeholder='line2' />
          <br></br>
          <input type='text' ref='line3' placeholder='line3' />
          <br></br>
          <input type='text' ref='line4' placeholder='line4' />
          <br></br>
          <input type='text' ref='line5' placeholder='line5' />
          <br></br>
          <input type='text' ref='line6' placeholder='line6' />
          <br></br>
          <input type='text' ref='line7' placeholder='line7' />
          <br></br>
          <input type='text' ref='line8' placeholder='line8' />
          <br></br>
          <input type='text' ref='line9' placeholder='line9' />
          <br></br>
          <input type='text' ref='line10' placeholder='line10' />
          <br></br>
          <input type='text' ref='line11' placeholder='line11' />
          <br></br>
          <input type='text' ref='line12' placeholder='line12' />
          <br></br>
          <input type='text' ref='line13' placeholder='line13' />
          <br></br>
          <input type='text' ref='line14' placeholder='line14' />
          <br></br>
          <input type='text' ref='line15' placeholder='line15' />
          <br></br>
          <input type='text' ref='line16' placeholder='line16' />
          <br></br>
          <input type='text' ref='line17' placeholder='line17' />
          <br></br>
          <input type='text' ref='line18' placeholder='line18' />
          <br></br>
          <input type='text' ref='line19' placeholder='line19' />
          <br></br>
          <input type='text' ref='line20' placeholder='line20' />
          <br></br>
          <input type='text' ref='line21' placeholder='line21' />
          <br></br>
          <input type='text' ref='line22' placeholder='line22' />
          <br></br>
          <input type='text' ref='line23' placeholder='line23' />
          <br></br>
          <input type='text' ref='line24' placeholder='line24' />
          <br></br>
          <input type='text' ref='line25' placeholder='line25' />
          <br></br>
          <input type='text' ref='line26' placeholder='line26' />
          <br></br>
          <input type='text' ref='line27' placeholder='line27' />
          <br></br>
          <input type='text' ref='line28' placeholder='line28' />
          <br></br>
          <input type='text' ref='line29' placeholder='line29' />
          <br></br>
          <input type='text' ref='line30' placeholder='line30' />
          <br></br>
          <button type='submit'> Add Song </button>
        </form>
      </div>
    )
  }
}

module.exports = AddNewSong
