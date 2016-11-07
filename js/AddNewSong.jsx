const React = require('react')
const axios = require('axios')
const { Link } = require('react-router')

const styles = {
  fontSize: '24px',
  padding: '5px',
  margin: '5px',
  width: '80%'
}

class AddNewSong extends React.Component {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.artistChange = this.artistChange.bind(this)
    this.albumChange = this.albumChange.bind(this)
    this.handleLine1 = this.handleLine1.bind(this)
    this.handleLine2 = this.handleLine2.bind(this)
    this.handleLine3 = this.handleLine3.bind(this)
    this.handleLine4 = this.handleLine4.bind(this)
    this.handleLine5 = this.handleLine5.bind(this)
    this.handleLine6 = this.handleLine6.bind(this)
    this.handleLine7 = this.handleLine7.bind(this)
    this.handleLine8 = this.handleLine8.bind(this)
    this.handleLine9 = this.handleLine9.bind(this)
    this.handleLine10 = this.handleLine10.bind(this)
    this.handleLine11 = this.handleLine11.bind(this)
    this.handleLine12 = this.handleLine12.bind(this)
    this.handleLine13 = this.handleLine13.bind(this)
    this.handleLine14 = this.handleLine14.bind(this)
    this.handleLine15 = this.handleLine15.bind(this)
    this.handleLine16 = this.handleLine16.bind(this)
    this.handleLine17 = this.handleLine17.bind(this)
    this.handleLine18 = this.handleLine18.bind(this)
    this.handleLine19 = this.handleLine19.bind(this)
    this.handleLine20 = this.handleLine20.bind(this)
    this.handleLine21 = this.handleLine20.bind(this)
    this.handleLine22 = this.handleLine20.bind(this)
    this.handleLine23 = this.handleLine20.bind(this)
    this.handleLine24 = this.handleLine20.bind(this)
    this.handleLine25 = this.handleLine20.bind(this)
    this.handleLine26 = this.handleLine20.bind(this)
    this.handleLine27 = this.handleLine20.bind(this)
    this.handleLine28 = this.handleLine20.bind(this)
    this.handleLine29 = this.handleLine20.bind(this)

    this.state = ({
      linkToNewArtist: false,
      linkToNewAlbum: false,
      artists: [],
      albums: [],
      line2: false,
      line3: false,
      line4: false,
      line5: false,
      line6: false,
      line7: false,
      line8: false,
      line9: false,
      line10: false,
      line11: false,
      line12: false,
      line13: false,
      line14: false,
      line15: false,
      line16: false,
      line17: false,
      line18: false,
      line19: false,
      line20: false,
      line21: false,
      line22: false,
      line23: false,
      line24: false,
      line25: false,
      line26: false,
      line27: false,
      line28: false,
      line29: false,
      line30: false
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

    this.refs.album.value = 'album here'
    this.state.linkToNewAlbum = false

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
  handleLine1 (e) {
    if (e.target.value) {
      this.setState({
        line2: true
      })
    } else {
      this.setState({
        line2: false
      })
    }
  }
  handleLine2 (e) {
    if (e.target.value) {
      this.setState({
        line3: true
      })
    } else {
      this.setState({
        line3: false
      })
    }
  }
  handleLine3 (e) {
    if (e.target.value) {
      this.setState({
        line4: true
      })
    } else {
      this.setState({
        line4: false
      })
    }
  }
  handleLine4 (e) {
    if (e.target.value) {
      this.setState({
        line5: true
      })
    } else {
      this.setState({
        line5: false
      })
    }
  }
  handleLine5 (e) {
    if (e.target.value) {
      this.setState({
        line6: true
      })
    } else {
      this.setState({
        line6: false
      })
    }
  }
  handleLine6 (e) {
    if (e.target.value) {
      this.setState({
        line7: true
      })
    } else {
      this.setState({
        line7: false
      })
    }
  }
  handleLine7 (e) {
    if (e.target.value) {
      this.setState({
        line8: true
      })
    } else {
      this.setState({
        line8: false
      })
    }
  }
  handleLine8 (e) {
    if (e.target.value) {
      this.setState({
        line9: true
      })
    } else {
      this.setState({
        line9: false
      })
    }
  }
  handleLine9 (e) {
    if (e.target.value) {
      this.setState({
        line10: true
      })
    } else {
      this.setState({
        line10: false
      })
    }
  }
  handleLine10 (e) {
    if (e.target.value) {
      this.setState({
        line11: true
      })
    } else {
      this.setState({
        line11: false
      })
    }
  }
  handleLine11 (e) {
    if (e.target.value) {
      this.setState({
        line12: true
      })
    } else {
      this.setState({
        line12: false
      })
    }
  }
  handleLine12 (e) {
    if (e.target.value) {
      this.setState({
        line13: true
      })
    } else {
      this.setState({
        line13: false
      })
    }
  }
  handleLine13 (e) {
    if (e.target.value) {
      this.setState({
        line14: true
      })
    } else {
      this.setState({
        line14: false
      })
    }
  }
  handleLine14 (e) {
    if (e.target.value) {
      this.setState({
        line15: true
      })
    } else {
      this.setState({
        line15: false
      })
    }
  }
  handleLine15 (e) {
    if (e.target.value) {
      this.setState({
        line16: true
      })
    } else {
      this.setState({
        line16: false
      })
    }
  }
  handleLine16 (e) {
    if (e.target.value) {
      this.setState({
        line17: true
      })
    } else {
      this.setState({
        line17: false
      })
    }
  }
  handleLine17 (e) {
    if (e.target.value) {
      this.setState({
        line18: true
      })
    } else {
      this.setState({
        line18: false
      })
    }
  }
  handleLine18 (e) {
    if (e.target.value) {
      this.setState({
        line19: true
      })
    } else {
      this.setState({
        line19: false
      })
    }
  }
  handleLine19 (e) {
    if (e.target.value) {
      this.setState({
        line20: true
      })
    } else {
      this.setState({
        line20: false
      })
    }
  }
  handleLine20 (e) {
    if (e.target.value) {
      this.setState({
        line21: true
      })
    } else {
      this.setState({
        line21: false
      })
    }
  }
  handleLine21 (e) {
    if (e.target.value) {
      this.setState({
        line22: true
      })
    } else {
      this.setState({
        line22: false
      })
    }
  }
  handleLine22 (e) {
    if (e.target.value) {
      this.setState({
        line23: true
      })
    } else {
      this.setState({
        line23: false
      })
    }
  }
  handleLine23 (e) {
    if (e.target.value) {
      this.setState({
        line24: true
      })
    } else {
      this.setState({
        line24: false
      })
    }
  }
  handleLine24 (e) {
    if (e.target.value) {
      this.setState({
        line25: true
      })
    } else {
      this.setState({
        line25: false
      })
    }
  }
  handleLine25 (e) {
    if (e.target.value) {
      this.setState({
        line26: true
      })
    } else {
      this.setState({
        line26: false
      })
    }
  }
  handleLine26 (e) {
    if (e.target.value) {
      this.setState({
        line27: true
      })
    } else {
      this.setState({
        line27: false
      })
    }
  }
  handleLine27 (e) {
    if (e.target.value) {
      this.setState({
        line28: true
      })
    } else {
      this.setState({
        line28: false
      })
    }
  }
  handleLine28 (e) {
    if (e.target.value) {
      this.setState({
        line29: true
      })
    } else {
      this.setState({
        line29: false
      })
    }
  }
  handleLine29 (e) {
    if (e.target.value) {
      this.setState({
        line30: true
      })
    } else {
      this.setState({
        line30: false
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
    let line2 = null
    if (this.state.line2) {
      line2 = <div id='addSongLine2' ><input type='text' onChange={this.handleLine2} ref='line2' placeholder='line2' style={styles} /><br></br></div>
    }
    let line3 = null
    if (this.state.line3) {
      line3 = <div id='addSongLine3' ><input type='text' onChange={this.handleLine3} ref='line3' placeholder='line3' style={styles} /><br></br></div>
    }
    let line4 = null
    if (this.state.line4) {
      line4 = <div id='addSongLine4' ><input type='text' onChange={this.handleLine4} ref='line4' placeholder='line4' style={styles} /><br></br></div>
    }
    let line5 = null
    if (this.state.line5) {
      line5 = <div id='addSongLine5' ><input type='text' onChange={this.handleLine5} ref='line5' placeholder='line5' style={styles} /><br></br></div>
    }
    let line6 = null
    if (this.state.line6) {
      line6 = <div id='addSongLine6' ><input type='text' onChange={this.handleLine6} ref='line6' placeholder='line6' style={styles} /><br></br></div>
    }
    let line7 = null
    if (this.state.line7) {
      line7 = <div id='addSongLine7' ><input type='text' onChange={this.handleLine7} ref='line7' placeholder='line7' style={styles} /><br></br></div>
    }
    let line8 = null
    if (this.state.line8) {
      line8 = <div id='addSongLine8' ><input type='text' onChange={this.handleLine8} ref='line8' placeholder='line8' style={styles} /><br></br></div>
    }
    let line9 = null
    if (this.state.line9) {
      line9 = <div id='addSongLine9' ><input type='text' onChange={this.handleLine9} ref='line9' placeholder='line9' style={styles} /><br></br></div>
    }
    let line10 = null
    if (this.state.line10) {
      line10 = <div id='addSongLine10' ><input type='text' onChange={this.handleLine10} ref='line10' placeholder='line10' style={styles} /><br></br></div>
    }
    let line11 = null
    if (this.state.line11) {
      line11 = <div id='addSongLine11' ><input type='text' onChange={this.handleLine11} ref='line11' placeholder='line11' style={styles} /><br></br></div>
    }
    let line12 = null
    if (this.state.line12) {
      line12 = <div id='addSongLine12' ><input type='text' onChange={this.handleLine12} ref='line12' placeholder='line12' style={styles} /><br></br></div>
    }
    let line13 = null
    if (this.state.line13) {
      line13 = <div id='addSongLine13' ><input type='text' onChange={this.handleLine13} ref='line13' placeholder='line13' style={styles} /><br></br></div>
    }
    let line14 = null
    if (this.state.line14) {
      line14 = <div id='addSongLine14' ><input type='text' onChange={this.handleLine14} ref='line14' placeholder='line14' style={styles} /><br></br></div>
    }
    let line15 = null
    if (this.state.line15) {
      line15 = <div id='addSongLine15' ><input type='text' onChange={this.handleLine15} ref='line15' placeholder='line15' style={styles} /><br></br></div>
    }
    let line16 = null
    if (this.state.line16) {
      line16 = <div id='addSongLine16' ><input type='text' onChange={this.handleLine16} ref='line16' placeholder='line16' style={styles} /><br></br></div>
    }
    let line17 = null
    if (this.state.line17) {
      line17 = <div id='addSongLine17' ><input type='text' onChange={this.handleLine17} ref='line17' placeholder='line17' style={styles} /><br></br></div>
    }
    let line18 = null
    if (this.state.line18) {
      line18 = <div id='addSongLine18' ><input type='text' onChange={this.handleLine18} ref='line18' placeholder='line18' style={styles} /><br></br></div>
    }
    let line19 = null
    if (this.state.line19) {
      line19 = <div id='addSongLine19' ><input type='text' onChange={this.handleLine19} ref='line19' placeholder='line19' style={styles} /><br></br></div>
    }
    let line20 = null
    if (this.state.line20) {
      line20 = <div id='addSongLine20' ><input type='text' onChange={this.handleLine20} ref='line20' placeholder='line20' style={styles} /><br></br></div>
    }
    let line21 = null
    if (this.state.line21) {
      line21 = <div id='addSongLine21' ><input type='text' onChange={this.handleLine21} ref='line21' placeholder='line21' style={styles} /><br></br></div>
    }
    let line22 = null
    if (this.state.line22) {
      line22 = <div id='addSongLine22' ><input type='text' onChange={this.handleLine22} ref='line22' placeholder='line22' style={styles} /><br></br></div>
    }
    let line23 = null
    if (this.state.line23) {
      line23 = <div id='addSongLine23' ><input type='text' onChange={this.handleLine23} ref='line23' placeholder='line23' style={styles} /><br></br></div>
    }
    let line24 = null
    if (this.state.line24) {
      line24 = <div id='addSongLine24' ><input type='text' onChange={this.handleLine24} ref='line24' placeholder='line24' style={styles} /><br></br></div>
    }
    let line25 = null
    if (this.state.line25) {
      line25 = <div id='addSongLine25' ><input type='text' onChange={this.handleLine25} ref='line25' placeholder='line25' style={styles} /><br></br></div>
    }
    let line26 = null
    if (this.state.line26) {
      line26 = <div id='addSongLine26' ><input type='text' onChange={this.handleLine26} ref='line26' placeholder='line26' style={styles} /><br></br></div>
    }
    let line27 = null
    if (this.state.line27) {
      line27 = <div id='addSongLine27' ><input type='text' onChange={this.handleLine27} ref='line27' placeholder='line27' style={styles} /><br></br></div>
    }
    let line28 = null
    if (this.state.line28) {
      line28 = <div id='addSongLine28' ><input type='text' onChange={this.handleLine28} ref='line28' placeholder='line28' style={styles} /><br></br></div>
    }
    let line29 = null
    if (this.state.line29) {
      line29 = <div id='addSongLine29' ><input type='text' onChange={this.handleLine29} ref='line29' placeholder='line29' style={styles} /><br></br></div>
    }
    let line30 = null
    if (this.state.line30) {
      line30 = <div id='addSongLine30' ><input type='text' ref='line30' placeholder='line30' style={styles} /><br></br></div>
    }
    return (
      <div id='AddNewSong'>
        <h3>AddNewSong</h3>
        <form onSubmit={this.onSubmit}>
          <input type='text' ref='title' style={styles} placeholder='title' />
          <br></br>
          <select type='text' ref='artist' style={styles} onChange={this.artistChange} >
            <option value='artistHere' > artist here </option>
            <option value='giveAddNewArtistLink' >AddNewArtist</option>
            {this.state.artists.map((artist, index) => (
              <option key={index} value={artist.id} > {artist.name} </option>
            ))}
          </select>
          {AddNewArtistLink}
          <br></br>
          <select type='text' ref='album' style={styles} placeholder='album' onChange={this.albumChange}>
            <option >album here</option>
            <option value='giveAddNewAlbumLink'>AddNewAlbum</option>
              {this.state.albums.map((album, index) => (
                <option key={index} value={album.id} > {album.title} </option>
              ))}
          </select>
          {AddNewAlbumLink}
          <br></br>
          <select type='text' ref='type' placeholder='type' style={styles} >
            <option value=''> type </option>
            <option value='hawaiian'>Hawaiian</option>
            <option value='contemporary'>contemporary</option>
          </select>
          <br></br>
          <textarea type='text' ref='description' placeholder='description' style={styles} />
          <br></br>
          <input type='text' ref='line1' placeholder='line1' style={styles} onChange={this.handleLine1} />
          <br></br>
          {line2}
          {line3}
          {line4}
          {line5}
          {line6}
          {line7}
          {line8}
          {line9}
          {line10}
          {line11}
          {line12}
          {line13}
          {line14}
          {line15}
          {line16}
          {line17}
          {line18}
          {line19}
          {line20}
          {line21}
          {line22}
          {line23}
          {line24}
          {line25}
          {line26}
          {line27}
          {line28}
          {line29}
          {line30}

          <button type='submit' style={styles} > Add Song </button>
        </form>
      </div>
    )
  }
}

module.exports = AddNewSong
