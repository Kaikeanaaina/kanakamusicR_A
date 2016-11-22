const React = require('react')
const axios = require('axios')

const style = {
  details: {
    backgroundColor: 'pink',
    fontSize: '24px'
  },
  lyrics: {
    backgroundColor: 'lightblue',
    fontSize: '24px'
  },
  description: {
    backgroundColor: 'lightgreen',
    fontSize: '24px'
  }
}

class EditSong extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Song: {},
      Artist: {},
      Album: {},
      RecordLabel: {},
      artists: [],
      albums: []
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.artistChange = this.artistChange.bind(this)
    this.DeleteSong = this.DeleteSong.bind(this)
  }
  componentDidMount () {
    let domain = 'http://localhost:5050/'

    axios.get('http://localhost:5050/artists')
    .then((res) => {
      this.setState({
        artists: res.data
      })
    })

    axios.get(`${domain}songs/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        Song: res.data
      })

      axios.get(`${domain}artists/${this.state.Song.ArtistId}`)
      .then((res) => {
        this.setState({
          Artist: res.data
        })
      })

      axios.get(`${domain}albums/${this.state.Song.AlbumId}`)
      .then((res) => {
        this.setState({
          Album: res.data
        })
        axios.get(`${domain}recordLabels/${this.state.Album.RecordLabelId}`)
          .then((res) => {
            this.setState({
              RecordLabel: res.data
            })
          })
      })
    })
    .catch((error) => {
      console.error('axios error', error)
    })
  }
  DeleteSong (e) {
    e.preventDefault()

    let domain = 'http://localhost:5050/'

    axios.delete(`${domain}songs/${this.state.Song.id}`)
    .then((res) => {
      window.location.href = '/#/'
    })
  }
  onSubmit (e) {
    e.preventDefault()

    let object = {
      id: this.state.Song.id
    }

    if (this.refs.title.value) {
      object.title = this.refs.title.value
    } else {
      object.title = this.state.Song.title
    }

    if (this.refs.artist.value !== 'artistHere') {
      object.ArtistId = this.refs.artist.value
    } else {
      object.ArtistId = this.state.Song.ArtistId
    }

    if (this.refs.album.value !== 'album here') {
      object.AlbumId = this.refs.album.value
    } else {
      object.AlbumId = this.state.Song.AlbumId
    }

    if (this.refs.type.value !== 'type') {
      object.type = this.refs.type.value
    } else {
      object.type = this.state.Song.type
    }

    if (this.refs.visibilityBySong.value !== 'visibility') {
      object.visibilityBySong = this.refs.visibilityBySong.value
    } else {
      object.visibilityBySong = this.state.Song.visibilityBySong
    }

    if (!this.refs.line1.value) {
      object.line1 = this.state.Song.line1
    } else if (this.refs.line1.value === ' ') {
      object.line1 = null
    } else {
      object.line1 = this.refs.line1.value
    }

    if (!this.refs.line2.value) {
      object.line2 = this.state.Song.line2
    } else if (this.refs.line2.value === ' ') {
      object.line2 = null
    } else {
      object.line2 = this.refs.line2.value
    }

    if (!this.refs.line3.value) {
      object.line3 = this.state.Song.line3
    } else if (this.refs.line3.value === ' ') {
      object.line3 = null
    } else {
      object.line3 = this.refs.line3.value
    }

    if (!this.refs.line4.value) {
      object.line4 = this.state.Song.line4
    } else if (this.refs.line4.value === ' ') {
      object.line4 = null
    } else {
      object.line4 = this.refs.line4.value
    }

    if (!this.refs.line5.value) {
      object.line5 = this.state.Song.line5
    } else if (this.refs.line5.value === ' ') {
      object.line5 = null
    } else {
      object.line5 = this.refs.line5.value
    }

    if (!this.refs.line6.value) {
      object.line6 = this.state.Song.line6
    } else if (this.refs.line6.value === ' ') {
      object.line6 = null
    } else {
      object.line6 = this.refs.line6.value
    }

    if (!this.refs.line7.value) {
      object.line7 = this.state.Song.line7
    } else if (this.refs.line7.value === ' ') {
      object.line7 = null
    } else {
      object.line7 = this.refs.line7.value
    }

    if (!this.refs.line8.value) {
      object.line8 = this.state.Song.line8
    } else if (this.refs.line8.value === ' ') {
      object.line8 = null
    } else {
      object.line8 = this.refs.line8.value
    }

    if (!this.refs.line9.value) {
      object.line9 = this.state.Song.line9
    } else if (this.refs.line9.value === ' ') {
      object.line9 = null
    } else {
      object.line9 = this.refs.line9.value
    }

    if (!this.refs.line10.value) {
      object.line10 = this.state.Song.line10
    } else if (this.refs.line10.value === ' ') {
      object.line10 = null
    } else {
      object.line10 = this.refs.line10.value
    }

    if (!this.refs.line11.value) {
      object.line11 = this.state.Song.line11
    } else if (this.refs.line11.value === ' ') {
      object.line11 = null
    } else {
      object.line11 = this.refs.line11.value
    }

    if (!this.refs.line12.value) {
      object.line12 = this.state.Song.line12
    } else if (this.refs.line12.value === ' ') {
      object.line12 = null
    } else {
      object.line12 = this.refs.line12.value
    }

    if (!this.refs.line13.value) {
      object.line13 = this.state.Song.line13
    } else if (this.refs.line13.value === ' ') {
      object.line13 = null
    } else {
      object.line13 = this.refs.line13.value
    }

    if (!this.refs.line14.value) {
      object.line14 = this.state.Song.line14
    } else if (this.refs.line14.value === ' ') {
      object.line14 = null
    } else {
      object.line14 = this.refs.line14.value
    }

    if (!this.refs.line15.value) {
      object.line15 = this.state.Song.line15
    } else if (this.refs.line15.value === ' ') {
      object.line15 = null
    } else {
      object.line15 = this.refs.line15.value
    }

    if (!this.refs.line16.value) {
      object.line16 = this.state.Song.line16
    } else if (this.refs.line16.value === ' ') {
      object.line16 = null
    } else {
      object.line16 = this.refs.line16.value
    }

    if (!this.refs.line17.value) {
      object.line17 = this.state.Song.line17
    } else if (this.refs.line17.value === ' ') {
      object.line17 = null
    } else {
      object.line17 = this.refs.line17.value
    }

    if (!this.refs.line18.value) {
      object.line18 = this.state.Song.line18
    } else if (this.refs.line18.value === ' ') {
      object.line18 = null
    } else {
      object.line18 = this.refs.line18.value
    }

    if (!this.refs.line19.value) {
      object.line19 = this.state.Song.line19
    } else if (this.refs.line19.value === ' ') {
      object.line19 = null
    } else {
      object.line19 = this.refs.line19.value
    }

    if (!this.refs.line20.value) {
      object.line20 = this.state.Song.line20
    } else if (this.refs.line20.value === ' ') {
      object.line20 = null
    } else {
      object.line20 = this.refs.line20.value
    }

    if (!this.refs.line21.value) {
      object.line21 = this.state.Song.line21
    } else if (this.refs.line21.value === ' ') {
      object.line21 = null
    } else {
      object.line21 = this.refs.line21.value
    }

    if (!this.refs.line22.value) {
      object.line22 = this.state.Song.line22
    } else if (this.refs.line22.value === ' ') {
      object.line22 = null
    } else {
      object.line22 = this.refs.line22.value
    }

    if (!this.refs.line23.value) {
      object.line23 = this.state.Song.line23
    } else if (this.refs.line23.value === ' ') {
      object.line23 = null
    } else {
      object.line23 = this.refs.line23.value
    }

    if (!this.refs.line24.value) {
      object.line24 = this.state.Song.line24
    } else if (this.refs.line24.value === ' ') {
      object.line24 = null
    } else {
      object.line24 = this.refs.line24.value
    }

    if (!this.refs.line25.value) {
      object.line25 = this.state.Song.line25
    } else if (this.refs.line25.value === ' ') {
      object.line25 = null
    } else {
      object.line25 = this.refs.line25.value
    }

    if (!this.refs.line26.value) {
      object.line26 = this.state.Song.line26
    } else if (this.refs.line26.value === ' ') {
      object.line26 = null
    } else {
      object.line26 = this.refs.line26.value
    }

    if (!this.refs.line27.value) {
      object.line27 = this.state.Song.line27
    } else if (this.refs.line27.value === ' ') {
      object.line27 = null
    } else {
      object.line27 = this.refs.line27.value
    }

    if (!this.refs.line29.value) {
      object.line29 = this.state.Song.line29
    } else if (this.refs.line29.value === ' ') {
      object.line29 = null
    } else {
      object.line29 = this.refs.line29.value
    }

    if (!this.refs.line30.value) {
      object.line30 = this.state.Song.line30
    } else if (this.refs.line30.value === ' ') {
      object.line30 = null
    } else {
      object.line30 = this.refs.line30.value
    }

    if (!this.refs.description.value) {
      object.description = this.state.Song.description
    } else {
      object.description = this.refs.description.value
    }

    object.visibilityByAlbum = this.state.Song.visibilityByAlbum
    object.visibilityByArtist = this.state.Song.visibilityByArtist

    axios.put(`http://localhost:5050/songs/${this.state.Song.id}`, object)
    .then((res) => {
      window.location.href = `/#/song/${this.state.Song.id}`
    })
  }
  artistChange (event) {
    event.preventDefault()

    this.refs.album.value = 'album here'

    if (event.target.value !== 'artist here') {
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
    this.setState({
      linkToNewAlbum: false
    })
  }
  render () {
    let visibleBySongProperty
    if (this.state.Song.visibilityBySong) {
      visibleBySongProperty = (<div>visibilityBySong: true</div>)
    } else {
      visibleBySongProperty = (<div>visibilityBySong: false</div>)
    }

    let visibleByAlbumProperty
    if (this.state.Album.visibilityByAlbum) {
      visibleByAlbumProperty = (<div>visibilityByAlbum: true</div>)
    } else {
      visibleByAlbumProperty = (<div>visibilityByAlbum: false</div>)
    }

    let visibleByArtistProperty
    if (this.state.Artist.visibilityByArtist) {
      visibleByArtistProperty = (<div>visibilityByArtist: true</div>)
    } else {
      visibleByArtistProperty = (<div>visibilityByArtist: false</div>)
    }

    return (
      <div>
        <div>
          <h1>Edit Song Page</h1>
        </div>
        <form onSubmit={this.onSubmit} >
          <div style={style.details}>
            <div>
              <label>
                <span> Title </span>
                <input ref='title' placeholder={this.state.Song.title} />
              </label>
            </div>
            <div>
              <label>
                <span> Artist </span>
                <select type='text' ref='artist' onChange={this.artistChange} >
                  <option value='artistHere' > artist here </option>
                  {this.state.artists.map((artist, index) => (
                    <option key={index} value={artist.id} > {artist.name} </option>
                  ))}
                </select>
                <span> Current: {this.state.Artist.name} </span>
              </label>
            </div>
            <div>
              <label>
                <span> Album </span>
                <select type='text' ref='album' placeholder='album' onChange={this.albumChange}>
                  <option >album here</option>
                    {this.state.albums.map((album, index) => (
                      <option key={index} value={album.id} > {album.title} </option>
                    ))}
                </select>
                <span> Current: {this.state.Album.title} </span>
              </label>
            </div>
            <div>
              <label>
                <span> Type </span>
                <select type='text' ref='type' placeholder='type' >
                  <option> type </option>
                  <option value='hawaii'>Hawaii</option>
                  <option value='contemporary'>contemporary</option>
                </select>
                <span> Current: {this.state.Song.type} </span>
              </label>
            </div>
            <div>
              <label>
                <span> VisibilityBySong </span>
                <select type='text' ref='visibilityBySong' placeholder='visibility' >
                  <option> visibility </option>
                  <option value='false' >false</option>
                  <option value='true' >true</option>
                </select>
                {visibleBySongProperty}
              </label>
            </div>
            <br></br>
            <div>
              {visibleByAlbumProperty}
              {visibleByArtistProperty}
            </div>
            <br></br>
          </div>
          <div style={style.lyrics}>
            <p>to change lyric line to null, just enter a space</p>
            <div>
              <label>
                <span> Line 1 </span>
                <input ref='line1' placeholder={this.state.Song.line1} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 2 </span>
                <input ref='line2' placeholder={this.state.Song.line2} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 3 </span>
                <input ref='line3' placeholder={this.state.Song.line3} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 4 </span>
                <input ref='line4' placeholder={this.state.Song.line4} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 5 </span>
                <input ref='line5' placeholder={this.state.Song.line5} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 6 </span>
                <input ref='line6' placeholder={this.state.Song.line6} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 7 </span>
                <input ref='line7' placeholder={this.state.Song.line7} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 8 </span>
                <input ref='line8' placeholder={this.state.Song.line8} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 9 </span>
                <input ref='line9' placeholder={this.state.Song.line9} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 10 </span>
                <input ref='line10' placeholder={this.state.Song.line10} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 11 </span>
                <input ref='line11' placeholder={this.state.Song.line11} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 12 </span>
                <input ref='line12' placeholder={this.state.Song.line12} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 13 </span>
                <input ref='line13' placeholder={this.state.Song.line13} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 14 </span>
                <input ref='line14' placeholder={this.state.Song.line14} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 15 </span>
                <input ref='line15' placeholder={this.state.Song.line15} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 16 </span>
                <input ref='line16' placeholder={this.state.Song.line16} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 17 </span>
                <input ref='line17' placeholder={this.state.Song.line17} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 18 </span>
                <input ref='line18' placeholder={this.state.Song.line18} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 19 </span>
                <input ref='line19' placeholder={this.state.Song.line19} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 20 </span>
                <input ref='line20' placeholder={this.state.Song.line20} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 21 </span>
                <input ref='line21' placeholder={this.state.Song.line21} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 22 </span>
                <input ref='line22' placeholder={this.state.Song.line22} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 23 </span>
                <input ref='line23' placeholder={this.state.Song.line23} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 24 </span>
                <input ref='line24' placeholder={this.state.Song.line24} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 25 </span>
                <input ref='line25' placeholder={this.state.Song.line25} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 26 </span>
                <input ref='line26' placeholder={this.state.Song.line26} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 27 </span>
                <input ref='line27' placeholder={this.state.Song.line27} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 28 </span>
                <input ref='line28' placeholder={this.state.Song.line28} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 29 </span>
                <input ref='line29' placeholder={this.state.Song.line29} />
              </label>
            </div>
            <div>
              <label>
                <span> Line 30 </span>
                <input ref='line30' placeholder={this.state.Song.line30} />
              </label>
            </div>
          </div>
          <br></br>
          <div style={style.description}>
            <label>
              <span>Description </span>
              <textarea ref='description' placeholder={this.state.Song.description} />
            </label>
          </div>
          <button type='submit' > Edit Song</button>
        </form>
        <div>
          <button onClick={this.DeleteSong}>Delete Song</button>
        </div>
      </div>
    )
  }
}

EditSong.propTypes = {
  params: React.PropTypes.object
}

module.exports = EditSong
