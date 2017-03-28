const React = require('react')
const axios = require('axios')
const { domain } = require('../../Domain')

const style = {
  details: {
    backgroundColor: 'rgba(200,200,200,0.4)',
    fontSize: '18px',
    padding: '5px'
  },
  lyrics: {
    backgroundColor: 'rgba(200,200,200,0.4)',
    fontSize: '24px',
    padding: '5px'
  },
  lyricsAndChords: {
    fontFamily: 'Courier',
    fontSize: '18px'
  },
  lyricsAndChordsLabel: {
    fontFamily: '',
    margin: 0,
    fontSize: '15px'
  },
  description: {
    backgroundColor: 'rgba(200,200,200,0.4)',
    fontSize: '18px',
    padding: '5px'
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
    axios.get(`${domain}/artists`)
    .then((res) => {
      this.setState({
        artists: res.data
      })
    })
    .catch((error) => {
      console.log('axios error', error)
    })

    axios.get(`${domain}/songs/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        Song: res.data
      })

      axios.get(`${domain}/artists/${this.state.Song.ArtistId}`)
      .then((res) => {
        this.setState({
          Artist: res.data
        })
      })
      .catch((error) => {
        console.log('axios error', error)
      })

      axios.get(`${domain}/albums/${this.state.Song.AlbumId}`)
      .then((res) => {
        this.setState({
          Album: res.data
        })
        axios.get(`${domain}/recordLabels/${this.state.Album.RecordLabelId}`)
          .then((res) => {
            this.setState({
              RecordLabel: res.data
            })
          })
          .catch((error) => {
            console.log('axios error', error)
          })
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    })
    .catch((error) => {
      console.error('axios error', error)
    })
  }
  DeleteSong (e) {
    e.preventDefault()

    axios.delete(`${domain}/songs/${this.state.Song.id}`)
    .then((res) => {
      window.location.href = '/#/'
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  onSubmit (e) {
    e.preventDefault()

    let object = {
      id: this.state.Song.id
    }

    let splitName = this.refs.title.value.split('')

    if (this.refs.title.value) {
      if (splitName[0] === splitName[0].toUpperCase()) {
        object.title = this.refs.title.value
      } else {
        // throw error message here
        return console.log('tell the user to make sure the name starts in upper case')
      }
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

    if (!this.refs.chord1.value) {
      object.chord1 = this.state.Song.chord1
    } else if (this.refs.chord1.value === ' ') {
      object.chord1 = null
    } else {
      object.chord1 = this.refs.chord1.value
    }

    if (!this.refs.chord2.value) {
      object.chord2 = this.state.Song.chord2
    } else if (this.refs.chord2.value === ' ') {
      object.chord2 = null
    } else {
      object.chord2 = this.refs.chord2.value
    }

    if (!this.refs.chord3.value) {
      object.chord3 = this.state.Song.chord3
    } else if (this.refs.chord3.value === ' ') {
      object.chord3 = null
    } else {
      object.chord3 = this.refs.chord3.value
    }

    if (!this.refs.chord4.value) {
      object.chord4 = this.state.Song.chord4
    } else if (this.refs.chord4.value === ' ') {
      object.chord4 = null
    } else {
      object.chord4 = this.refs.chord4.value
    }

    if (!this.refs.chord5.value) {
      object.chord5 = this.state.Song.chord5
    } else if (this.refs.chord5.value === ' ') {
      object.chord5 = null
    } else {
      object.chord5 = this.refs.chord5.value
    }

    if (!this.refs.chord6.value) {
      object.chord6 = this.state.Song.chord6
    } else if (this.refs.chord6.value === ' ') {
      object.chord6 = null
    } else {
      object.chord6 = this.refs.chord6.value
    }

    if (!this.refs.chord7.value) {
      object.chord7 = this.state.Song.chord7
    } else if (this.refs.chord7.value === ' ') {
      object.chord7 = null
    } else {
      object.chord7 = this.refs.chord7.value
    }

    if (!this.refs.chord8.value) {
      object.chord8 = this.state.Song.chord8
    } else if (this.refs.chord8.value === ' ') {
      object.chord8 = null
    } else {
      object.chord8 = this.refs.chord8.value
    }

    if (!this.refs.chord9.value) {
      object.chord9 = this.state.Song.chord9
    } else if (this.refs.chord9.value === ' ') {
      object.chord9 = null
    } else {
      object.chord9 = this.refs.chord9.value
    }

    if (!this.refs.chord10.value) {
      object.chord10 = this.state.Song.chord10
    } else if (this.refs.chord10.value === ' ') {
      object.chord10 = null
    } else {
      object.chord10 = this.refs.chord10.value
    }

    if (!this.refs.chord11.value) {
      object.chord11 = this.state.Song.chord11
    } else if (this.refs.chord11.value === ' ') {
      object.chord11 = null
    } else {
      object.chord11 = this.refs.chord11.value
    }

    if (!this.refs.chord12.value) {
      object.chord12 = this.state.Song.chord12
    } else if (this.refs.chord12.value === ' ') {
      object.chord12 = null
    } else {
      object.chord12 = this.refs.chord12.value
    }

    if (!this.refs.chord13.value) {
      object.chord13 = this.state.Song.chord13
    } else if (this.refs.chord13.value === ' ') {
      object.chord13 = null
    } else {
      object.chord13 = this.refs.chord13.value
    }

    if (!this.refs.chord14.value) {
      object.chord14 = this.state.Song.chord14
    } else if (this.refs.chord14.value === ' ') {
      object.chord14 = null
    } else {
      object.chord14 = this.refs.chord14.value
    }

    if (!this.refs.chord15.value) {
      object.chord15 = this.state.Song.chord15
    } else if (this.refs.chord15.value === ' ') {
      object.chord15 = null
    } else {
      object.chord15 = this.refs.chord15.value
    }

    if (!this.refs.chord16.value) {
      object.chord16 = this.state.Song.chord16
    } else if (this.refs.chord16.value === ' ') {
      object.chord16 = null
    } else {
      object.chord16 = this.refs.chord16.value
    }

    if (!this.refs.chord17.value) {
      object.chord17 = this.state.Song.chord17
    } else if (this.refs.chord17.value === ' ') {
      object.chord17 = null
    } else {
      object.chord17 = this.refs.chord17.value
    }

    if (!this.refs.chord18.value) {
      object.chord18 = this.state.Song.chord18
    } else if (this.refs.chord18.value === ' ') {
      object.chord18 = null
    } else {
      object.chord18 = this.refs.chord18.value
    }

    if (!this.refs.chord19.value) {
      object.chord19 = this.state.Song.chord19
    } else if (this.refs.chord19.value === ' ') {
      object.chord19 = null
    } else {
      object.chord19 = this.refs.chord19.value
    }

    if (!this.refs.chord20.value) {
      object.chord20 = this.state.Song.chord20
    } else if (this.refs.chord20.value === ' ') {
      object.chord20 = null
    } else {
      object.chord20 = this.refs.chord20.value
    }

    if (!this.refs.chord21.value) {
      object.chord21 = this.state.Song.chord21
    } else if (this.refs.chord21.value === ' ') {
      object.chord21 = null
    } else {
      object.chord21 = this.refs.chord21.value
    }

    if (!this.refs.chord22.value) {
      object.chord22 = this.state.Song.chord22
    } else if (this.refs.chord22.value === ' ') {
      object.chord22 = null
    } else {
      object.chord22 = this.refs.chord22.value
    }

    if (!this.refs.chord23.value) {
      object.chord23 = this.state.Song.chord23
    } else if (this.refs.chord23.value === ' ') {
      object.chord23 = null
    } else {
      object.chord23 = this.refs.chord23.value
    }

    if (!this.refs.chord24.value) {
      object.chord24 = this.state.Song.chord24
    } else if (this.refs.chord24.value === ' ') {
      object.chord24 = null
    } else {
      object.chord24 = this.refs.chord24.value
    }

    if (!this.refs.chord25.value) {
      object.chord25 = this.state.Song.chord25
    } else if (this.refs.chord25.value === ' ') {
      object.chord25 = null
    } else {
      object.chord25 = this.refs.chord25.value
    }

    if (!this.refs.chord26.value) {
      object.chord26 = this.state.Song.chord26
    } else if (this.refs.chord26.value === ' ') {
      object.chord26 = null
    } else {
      object.chord26 = this.refs.chord26.value
    }

    if (!this.refs.chord27.value) {
      object.chord27 = this.state.Song.chord27
    } else if (this.refs.chord27.value === ' ') {
      object.chord27 = null
    } else {
      object.chord27 = this.refs.chord27.value
    }

    if (!this.refs.chord28.value) {
      object.chord28 = this.state.Song.chord28
    } else if (this.refs.chord28.value === ' ') {
      object.chord28 = null
    } else {
      object.chord28 = this.refs.chord28.value
    }

    if (!this.refs.chord29.value) {
      object.chord29 = this.state.Song.chord29
    } else if (this.refs.chord29.value === ' ') {
      object.chord29 = null
    } else {
      object.chord29 = this.refs.chord29.value
    }

    if (!this.refs.chord30.value) {
      object.chord30 = this.state.Song.chord30
    } else if (this.refs.chord30.value === ' ') {
      object.chord30 = null
    } else {
      object.chord30 = this.refs.chord30.value
    }

    object.visibilityByAlbum = this.state.Song.visibilityByAlbum
    object.visibilityByArtist = this.state.Song.visibilityByArtist

    axios.put(`${domain}/songs/${this.state.Song.id}`, object)
    .then((res) => {
      window.location.href = `/#/song/${this.state.Song.id}`
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  artistChange (event) {
    event.preventDefault()

    this.refs.album.value = 'album here'

    if (event.target.value !== 'artist here') {
      // populate the albums depending on the artist
      axios.get(`${domain}/albums/ByArtistId/${event.target.value}`)
      .then((res) => {
        this.setState({
          albums: res.data
        })
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    }
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
                <select type='text' ref='album' placeholder='album' >
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
            <div>
              {visibleByAlbumProperty}
              {visibleByArtistProperty}
            </div>
            <br />
          </div>
          <div style={style.lyrics}>
            <p>to change lyric line to null, just enter a space</p>
            <p style={style.lyricsAndChordsLabel} >line 1</p>
            <div>
              <label>
                <input ref='chord1' placeholder={this.state.Song.chord1} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line1' placeholder={this.state.Song.line1} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 2</p>
            <div>
              <label>
                <input ref='chord2' placeholder={this.state.Song.chord2} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line2' placeholder={this.state.Song.line2} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 3</p>
            <div>
              <label>
                <input ref='chord3' placeholder={this.state.Song.chord3} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line3' placeholder={this.state.Song.line3} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 4</p>
            <div>
              <label>
                <input ref='chord4' placeholder={this.state.Song.chord4} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line4' placeholder={this.state.Song.line4} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 5</p>
            <div>
              <label>
                <input ref='chord5' placeholder={this.state.Song.chord5} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line5' placeholder={this.state.Song.line5} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 6</p>
            <div>
              <label>
                <input ref='chord6' placeholder={this.state.Song.chord6} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line6' placeholder={this.state.Song.line6} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 7</p>
            <div>
              <label>
                <input ref='chord7' placeholder={this.state.Song.chord7} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line7' placeholder={this.state.Song.line7} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 8</p>
            <div>
              <label>
                <input ref='chord8' placeholder={this.state.Song.chord8} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line8' placeholder={this.state.Song.line8} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 9</p>
            <div>
              <label>
                <input ref='chord9' placeholder={this.state.Song.chord9} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line9' placeholder={this.state.Song.line9} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 10</p>
            <div>
              <label>
                <input ref='chord10' placeholder={this.state.Song.chord10} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line10' placeholder={this.state.Song.line10} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 11</p>
            <div>
              <label>
                <input ref='chord11' placeholder={this.state.Song.chord11} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line11' placeholder={this.state.Song.line11} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 12</p>
            <div>
              <label>
                <input ref='chord12' placeholder={this.state.Song.chord12} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line12' placeholder={this.state.Song.line12} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line13</p>
            <div>
              <label>
                <input ref='chord13' placeholder={this.state.Song.chord13} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line13' placeholder={this.state.Song.line13} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 14</p>
            <div>
              <label>
                <input ref='chord14' placeholder={this.state.Song.chord14} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line14' placeholder={this.state.Song.line14} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line15</p>
            <div>
              <label>
                <input ref='chord15' placeholder={this.state.Song.chord15} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line15' placeholder={this.state.Song.line15} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 16</p>
            <div>
              <label>
                <input ref='chord16' placeholder={this.state.Song.chord16} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line16' placeholder={this.state.Song.line16} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 17</p>
            <div>
              <label>
                <input ref='chord17' placeholder={this.state.Song.chord17} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line17' placeholder={this.state.Song.line17} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 18</p>
            <div>
              <label>
                <input ref='chord18' placeholder={this.state.Song.chord18} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line18' placeholder={this.state.Song.line18} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 19</p>
            <div>
              <label>
                <input ref='chord19' placeholder={this.state.Song.chord19} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line19' placeholder={this.state.Song.line19} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 20</p>
            <div>
              <label>
                <input ref='chord20' placeholder={this.state.Song.chord20} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line20' placeholder={this.state.Song.line20} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 21</p>
            <div>
              <label>
                <input ref='chord21' placeholder={this.state.Song.chord21} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line21' placeholder={this.state.Song.line21} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 22</p>
            <div>
              <label>
                <input ref='chord22' placeholder={this.state.Song.chord22} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line22' placeholder={this.state.Song.line22} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 23</p>
            <div>
              <label>
                <input ref='chord23' placeholder={this.state.Song.chord23} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line23' placeholder={this.state.Song.line23} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 24</p>
            <div>
              <label>
                <input ref='chord24' placeholder={this.state.Song.chord24} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line24' placeholder={this.state.Song.line24} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 25</p>
            <div>
              <label>
                <input ref='chord25' placeholder={this.state.Song.chord25} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line25' placeholder={this.state.Song.line25} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 26</p>
            <div>
              <label>
                <input ref='chord26' placeholder={this.state.Song.chord26} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line26' placeholder={this.state.Song.line26} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 27</p>
            <div>
              <label>
                <input ref='chord27' placeholder={this.state.Song.chord27} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line27' placeholder={this.state.Song.line27} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 28</p>
            <div>
              <label>
                <input ref='chord28' placeholder={this.state.Song.chord28} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line28' placeholder={this.state.Song.line28} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 29</p>
            <div>
              <label>
                <input ref='chord29' placeholder={this.state.Song.chord29} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line29' placeholder={this.state.Song.line29} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >line 30</p>
            <div>
              <label>
                <input ref='chord30' placeholder={this.state.Song.chord30} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='line30' placeholder={this.state.Song.line30} style={style.lyricsAndChords} />
              </label>
            </div>
          </div>
          <br />
          <div style={style.description}>
            <label>
              <span>Description </span>
              <textarea ref='description' placeholder={this.state.Song.description} />
            </label>
          </div>
          <button type='submit' > Edit Song</button>
        </form>

        <br />

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
