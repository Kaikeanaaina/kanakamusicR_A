const React = require('react')
const axios = require('axios')

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
    fontSize: '18px',
    width: '98%'
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
    axios.get(`/artists`)
    .then((res) => {
      this.setState({
        artists: res.data
      })
    })
    .catch((error) => {
      console.log('axios error', error)
    })

    axios.get(`/songs/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        Song: res.data
      })

      axios.get(`/artists/${this.state.Song.ArtistId}`)
      .then((res) => {
        this.setState({
          Artist: res.data
        })
      })
      .catch((error) => {
        console.log('axios error', error)
      })

      axios.get(`/albums/${this.state.Song.AlbumId}`)
      .then((res) => {
        this.setState({
          Album: res.data
        })
        axios.get(`/recordLabels/${this.state.Album.RecordLabelId}`)
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

    axios.delete(`/songs/${this.state.Song.id}`)
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

    if (!this.refs.lyric1.value) {
      object.lyric1 = this.state.Song.lyric1
    } else if (this.refs.lyric1.value === ' ') {
      object.lyric1 = null
    } else {
      object.lyric1 = this.refs.lyric1.value
    }

    if (!this.refs.lyric2.value) {
      object.lyric2 = this.state.Song.lyric2
    } else if (this.refs.lyric2.value === ' ') {
      object.lyric2 = null
    } else {
      object.lyric2 = this.refs.lyric2.value
    }

    if (!this.refs.lyric3.value) {
      object.lyric3 = this.state.Song.lyric3
    } else if (this.refs.lyric3.value === ' ') {
      object.lyric3 = null
    } else {
      object.lyric3 = this.refs.lyric3.value
    }

    if (!this.refs.lyric4.value) {
      object.lyric4 = this.state.Song.lyric4
    } else if (this.refs.lyric4.value === ' ') {
      object.lyric4 = null
    } else {
      object.lyric4 = this.refs.lyric4.value
    }

    if (!this.refs.lyric5.value) {
      object.lyric5 = this.state.Song.lyric5
    } else if (this.refs.lyric5.value === ' ') {
      object.lyric5 = null
    } else {
      object.lyric5 = this.refs.lyric5.value
    }

    if (!this.refs.lyric6.value) {
      object.lyric6 = this.state.Song.lyric6
    } else if (this.refs.lyric6.value === ' ') {
      object.lyric6 = null
    } else {
      object.lyric6 = this.refs.lyric6.value
    }

    if (!this.refs.lyric7.value) {
      object.lyric7 = this.state.Song.lyric7
    } else if (this.refs.lyric7.value === ' ') {
      object.lyric7 = null
    } else {
      object.lyric7 = this.refs.lyric7.value
    }

    if (!this.refs.lyric8.value) {
      object.lyric8 = this.state.Song.lyric8
    } else if (this.refs.lyric8.value === ' ') {
      object.lyric8 = null
    } else {
      object.lyric8 = this.refs.lyric8.value
    }

    if (!this.refs.lyric9.value) {
      object.lyric9 = this.state.Song.lyric9
    } else if (this.refs.lyric9.value === ' ') {
      object.lyric9 = null
    } else {
      object.lyric9 = this.refs.lyric9.value
    }

    if (!this.refs.lyric10.value) {
      object.lyric10 = this.state.Song.lyric10
    } else if (this.refs.lyric10.value === ' ') {
      object.lyric10 = null
    } else {
      object.lyric10 = this.refs.lyric10.value
    }

    if (!this.refs.lyric11.value) {
      object.lyric11 = this.state.Song.lyric11
    } else if (this.refs.lyric11.value === ' ') {
      object.lyric11 = null
    } else {
      object.lyric11 = this.refs.lyric11.value
    }

    if (!this.refs.lyric12.value) {
      object.lyric12 = this.state.Song.lyric12
    } else if (this.refs.lyric12.value === ' ') {
      object.lyric12 = null
    } else {
      object.lyric12 = this.refs.lyric12.value
    }

    if (!this.refs.lyric13.value) {
      object.lyric13 = this.state.Song.lyric13
    } else if (this.refs.lyric13.value === ' ') {
      object.lyric13 = null
    } else {
      object.lyric13 = this.refs.lyric13.value
    }

    if (!this.refs.lyric14.value) {
      object.lyric14 = this.state.Song.lyric14
    } else if (this.refs.lyric14.value === ' ') {
      object.lyric14 = null
    } else {
      object.lyric14 = this.refs.lyric14.value
    }

    if (!this.refs.lyric15.value) {
      object.lyric15 = this.state.Song.lyric15
    } else if (this.refs.lyric15.value === ' ') {
      object.lyric15 = null
    } else {
      object.lyric15 = this.refs.lyric15.value
    }

    if (!this.refs.lyric16.value) {
      object.lyric16 = this.state.Song.lyric16
    } else if (this.refs.lyric16.value === ' ') {
      object.lyric16 = null
    } else {
      object.lyric16 = this.refs.lyric16.value
    }

    if (!this.refs.lyric17.value) {
      object.lyric17 = this.state.Song.lyric17
    } else if (this.refs.lyric17.value === ' ') {
      object.lyric17 = null
    } else {
      object.lyric17 = this.refs.lyric17.value
    }

    if (!this.refs.lyric18.value) {
      object.lyric18 = this.state.Song.lyric18
    } else if (this.refs.lyric18.value === ' ') {
      object.lyric18 = null
    } else {
      object.lyric18 = this.refs.lyric18.value
    }

    if (!this.refs.lyric19.value) {
      object.lyric19 = this.state.Song.lyric19
    } else if (this.refs.lyric19.value === ' ') {
      object.lyric19 = null
    } else {
      object.lyric19 = this.refs.lyric19.value
    }

    if (!this.refs.lyric20.value) {
      object.lyric20 = this.state.Song.lyric20
    } else if (this.refs.lyric20.value === ' ') {
      object.lyric20 = null
    } else {
      object.lyric20 = this.refs.lyric20.value
    }

    if (!this.refs.lyric21.value) {
      object.lyric21 = this.state.Song.lyric21
    } else if (this.refs.lyric21.value === ' ') {
      object.lyric21 = null
    } else {
      object.lyric21 = this.refs.lyric21.value
    }

    if (!this.refs.lyric22.value) {
      object.lyric22 = this.state.Song.lyric22
    } else if (this.refs.lyric22.value === ' ') {
      object.lyric22 = null
    } else {
      object.lyric22 = this.refs.lyric22.value
    }

    if (!this.refs.lyric23.value) {
      object.lyric23 = this.state.Song.lyric23
    } else if (this.refs.lyric23.value === ' ') {
      object.lyric23 = null
    } else {
      object.lyric23 = this.refs.lyric23.value
    }

    if (!this.refs.lyric24.value) {
      object.lyric24 = this.state.Song.lyric24
    } else if (this.refs.lyric24.value === ' ') {
      object.lyric24 = null
    } else {
      object.lyric24 = this.refs.lyric24.value
    }

    if (!this.refs.lyric25.value) {
      object.lyric25 = this.state.Song.lyric25
    } else if (this.refs.lyric25.value === ' ') {
      object.lyric25 = null
    } else {
      object.lyric25 = this.refs.lyric25.value
    }

    if (!this.refs.lyric26.value) {
      object.lyric26 = this.state.Song.lyric26
    } else if (this.refs.lyric26.value === ' ') {
      object.lyric26 = null
    } else {
      object.lyric26 = this.refs.lyric26.value
    }

    if (!this.refs.lyric27.value) {
      object.lyric27 = this.state.Song.lyric27
    } else if (this.refs.lyric27.value === ' ') {
      object.lyric27 = null
    } else {
      object.lyric27 = this.refs.lyric27.value
    }

    if (!this.refs.lyric29.value) {
      object.lyric29 = this.state.Song.lyric29
    } else if (this.refs.lyric29.value === ' ') {
      object.lyric29 = null
    } else {
      object.lyric29 = this.refs.lyric29.value
    }

    if (!this.refs.lyric30.value) {
      object.lyric30 = this.state.Song.lyric30
    } else if (this.refs.lyric30.value === ' ') {
      object.lyric30 = null
    } else {
      object.lyric30 = this.refs.lyric30.value
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

    axios.put(`/songs/${this.state.Song.id}`, object)
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
      axios.get(`/albums/ByArtistId/${event.target.value}`)
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
            <p>to change lyric lyric to null, just enter a space</p>
            <p style={style.lyricsAndChordsLabel} >lyric 1</p>
            <div>
              <label>
                <input ref='chord1' placeholder={this.state.Song.chord1} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric1' placeholder={this.state.Song.lyric1} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 2</p>
            <div>
              <label>
                <input ref='chord2' placeholder={this.state.Song.chord2} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric2' placeholder={this.state.Song.lyric2} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 3</p>
            <div>
              <label>
                <input ref='chord3' placeholder={this.state.Song.chord3} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric3' placeholder={this.state.Song.lyric3} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 4</p>
            <div>
              <label>
                <input ref='chord4' placeholder={this.state.Song.chord4} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric4' placeholder={this.state.Song.lyric4} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 5</p>
            <div>
              <label>
                <input ref='chord5' placeholder={this.state.Song.chord5} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric5' placeholder={this.state.Song.lyric5} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 6</p>
            <div>
              <label>
                <input ref='chord6' placeholder={this.state.Song.chord6} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric6' placeholder={this.state.Song.lyric6} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 7</p>
            <div>
              <label>
                <input ref='chord7' placeholder={this.state.Song.chord7} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric7' placeholder={this.state.Song.lyric7} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 8</p>
            <div>
              <label>
                <input ref='chord8' placeholder={this.state.Song.chord8} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric8' placeholder={this.state.Song.lyric8} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 9</p>
            <div>
              <label>
                <input ref='chord9' placeholder={this.state.Song.chord9} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric9' placeholder={this.state.Song.lyric9} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 10</p>
            <div>
              <label>
                <input ref='chord10' placeholder={this.state.Song.chord10} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric10' placeholder={this.state.Song.lyric10} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 11</p>
            <div>
              <label>
                <input ref='chord11' placeholder={this.state.Song.chord11} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric11' placeholder={this.state.Song.lyric11} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 12</p>
            <div>
              <label>
                <input ref='chord12' placeholder={this.state.Song.chord12} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric12' placeholder={this.state.Song.lyric12} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric13</p>
            <div>
              <label>
                <input ref='chord13' placeholder={this.state.Song.chord13} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric13' placeholder={this.state.Song.lyric13} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 14</p>
            <div>
              <label>
                <input ref='chord14' placeholder={this.state.Song.chord14} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric14' placeholder={this.state.Song.lyric14} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric15</p>
            <div>
              <label>
                <input ref='chord15' placeholder={this.state.Song.chord15} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric15' placeholder={this.state.Song.lyric15} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 16</p>
            <div>
              <label>
                <input ref='chord16' placeholder={this.state.Song.chord16} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric16' placeholder={this.state.Song.lyric16} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 17</p>
            <div>
              <label>
                <input ref='chord17' placeholder={this.state.Song.chord17} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric17' placeholder={this.state.Song.lyric17} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 18</p>
            <div>
              <label>
                <input ref='chord18' placeholder={this.state.Song.chord18} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric18' placeholder={this.state.Song.lyric18} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 19</p>
            <div>
              <label>
                <input ref='chord19' placeholder={this.state.Song.chord19} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric19' placeholder={this.state.Song.lyric19} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 20</p>
            <div>
              <label>
                <input ref='chord20' placeholder={this.state.Song.chord20} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric20' placeholder={this.state.Song.lyric20} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 21</p>
            <div>
              <label>
                <input ref='chord21' placeholder={this.state.Song.chord21} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric21' placeholder={this.state.Song.lyric21} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 22</p>
            <div>
              <label>
                <input ref='chord22' placeholder={this.state.Song.chord22} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric22' placeholder={this.state.Song.lyric22} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 23</p>
            <div>
              <label>
                <input ref='chord23' placeholder={this.state.Song.chord23} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric23' placeholder={this.state.Song.lyric23} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 24</p>
            <div>
              <label>
                <input ref='chord24' placeholder={this.state.Song.chord24} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric24' placeholder={this.state.Song.lyric24} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 25</p>
            <div>
              <label>
                <input ref='chord25' placeholder={this.state.Song.chord25} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric25' placeholder={this.state.Song.lyric25} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 26</p>
            <div>
              <label>
                <input ref='chord26' placeholder={this.state.Song.chord26} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric26' placeholder={this.state.Song.lyric26} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 27</p>
            <div>
              <label>
                <input ref='chord27' placeholder={this.state.Song.chord27} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric27' placeholder={this.state.Song.lyric27} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 28</p>
            <div>
              <label>
                <input ref='chord28' placeholder={this.state.Song.chord28} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric28' placeholder={this.state.Song.lyric28} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 29</p>
            <div>
              <label>
                <input ref='chord29' placeholder={this.state.Song.chord29} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric29' placeholder={this.state.Song.lyric29} style={style.lyricsAndChords} />
              </label>
            </div>
            <br />

            <p style={style.lyricsAndChordsLabel} >lyric 30</p>
            <div>
              <label>
                <input ref='chord30' placeholder={this.state.Song.chord30} style={style.lyricsAndChords} />
              </label>
            </div>
            <div>
              <label>
                <input ref='lyric30' placeholder={this.state.Song.lyric30} style={style.lyricsAndChords} />
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
