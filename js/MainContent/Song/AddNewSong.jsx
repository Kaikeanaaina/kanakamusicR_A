const React = require('react')
const axios = require('axios')
const PreviewModal = require('../Modal/PreviewModal')
const SuccessEntryModal = require('../Modal/SuccessEntryModal')
const { domain } = require('../../Domain')

const styles = {
  others: {
    fontSize: '18px',
    padding: '5px',
    margin: '5px',
    width: '80%',
    borderRadius: '5px'
  },
  lyricsAndChords: {
    fontSize: '18px',
    padding: '5px',
    margin: '5px',
    width: '80%',
    borderRadius: '5px',
    fontFamily: 'courier'
  }
}

class AddNewSong extends React.Component {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.artistChange = this.artistChange.bind(this)
    this.handleLyric1 = this.handleLyric1.bind(this)
    this.handleLyric2 = this.handleLyric2.bind(this)
    this.handleLyric3 = this.handleLyric3.bind(this)
    this.handleLyric4 = this.handleLyric4.bind(this)
    this.handleLyric5 = this.handleLyric5.bind(this)
    this.handleLyric6 = this.handleLyric6.bind(this)
    this.handleLyric7 = this.handleLyric7.bind(this)
    this.handleLyric8 = this.handleLyric8.bind(this)
    this.handleLyric9 = this.handleLyric9.bind(this)
    this.handleLyric10 = this.handleLyric10.bind(this)
    this.handleLyric11 = this.handleLyric11.bind(this)
    this.handleLyric12 = this.handleLyric12.bind(this)
    this.handleLyric13 = this.handleLyric13.bind(this)
    this.handleLyric14 = this.handleLyric14.bind(this)
    this.handleLyric15 = this.handleLyric15.bind(this)
    this.handleLyric16 = this.handleLyric16.bind(this)
    this.handleLyric17 = this.handleLyric17.bind(this)
    this.handleLyric18 = this.handleLyric18.bind(this)
    this.handleLyric19 = this.handleLyric19.bind(this)
    this.handleLyric20 = this.handleLyric20.bind(this)
    this.handleLyric21 = this.handleLyric21.bind(this)
    this.handleLyric22 = this.handleLyric22.bind(this)
    this.handleLyric23 = this.handleLyric23.bind(this)
    this.handleLyric24 = this.handleLyric24.bind(this)
    this.handleLyric25 = this.handleLyric25.bind(this)
    this.handleLyric26 = this.handleLyric26.bind(this)
    this.handleLyric27 = this.handleLyric27.bind(this)
    this.handleLyric28 = this.handleLyric28.bind(this)
    this.handleLyric29 = this.handleLyric29.bind(this)
    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.returnToHome = this.returnToHome.bind(this)
    this.showSubmitButton = this.showSubmitButton.bind(this)

    this.state = ({
      artists: [],
      albums: [],
      lyric2: false,
      lyric3: false,
      lyric4: false,
      lyric5: false,
      lyric6: false,
      lyric7: false,
      lyric8: false,
      lyric9: false,
      lyric10: false,
      lyric11: false,
      lyric12: false,
      lyric13: false,
      lyric14: false,
      lyric15: false,
      lyric16: false,
      lyric17: false,
      lyric18: false,
      lyric19: false,
      lyric20: false,
      lyric21: false,
      lyric22: false,
      lyric23: false,
      lyric24: false,
      lyric25: false,
      lyric26: false,
      lyric27: false,
      lyric28: false,
      lyric29: false,
      lyric30: false,
      modalIsOpen: false,
      successModalIsOpen: false,
      object: {},
      showErrorMessage: false,
      showSubmitButton: false
    })
  }
  componentDidMount () {
    axios.get(`${domain}/artists`)
    .then((res) => {
      this.setState({
        artists: res.data,
        modalIsOpen: false,
        successModalIsOpen: false
      })
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  onSubmit (e) {
    e.preventDefault()

    axios.post(`${domain}/songs`, this.state.object)
    .then((res) => {
    // should catch error here
      this.setState({
        modalIsOpen: false,
        successModalIsOpen: true
      })
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  openModal () {
    let splitTitle = this.refs.title.value.split('')
    let splitTitleStartWithCap = splitTitle[0].toUpperCase()
    splitTitle.splice(0, 1, splitTitleStartWithCap)
    let capitalizeTitle = splitTitle.join('')

    let object = {
      title: capitalizeTitle,
      type: this.refs.type.value,
      description: this.refs.description.value,
      ArtistId: this.refs.artist.value,
      AlbumId: this.refs.album.value
    }

    if (!this.refs.lyric1 || !this.refs.lyric1.value) {
      object.lyric1 = null
    } else {
      object.lyric1 = this.refs.lyric1.value
    }

    if (!this.refs.lyric2 || !this.refs.lyric2.value) {
      object.lyric2 = null
    } else {
      object.lyric2 = this.refs.lyric2.value
    }

    if (!this.refs.lyric3 || !this.refs.lyric3.value) {
      object.lyric3 = null
    } else {
      object.lyric3 = this.refs.lyric3.value
    }

    if (!this.refs.lyric4 || !this.refs.lyric4.value) {
      object.lyric4 = null
    } else {
      object.lyric4 = this.refs.lyric4.value
    }

    if (!this.refs.lyric5 || !this.refs.lyric5.value) {
      object.lyric5 = null
    } else {
      object.lyric5 = this.refs.lyric5.value
    }

    if (!this.refs.lyric6 || !this.refs.lyric6.value) {
      object.lyric6 = null
    } else {
      object.lyric6 = this.refs.lyric6.value
    }

    if (!this.refs.lyric7 || !this.refs.lyric7.value) {
      object.lyric7 = null
    } else {
      object.lyric7 = this.refs.lyric7.value
    }

    if (!this.refs.lyric8 || !this.refs.lyric8.value) {
      object.lyric8 = null
    } else {
      object.lyric8 = this.refs.lyric8.value
    }

    if (!this.refs.lyric9 || !this.refs.lyric9.value) {
      object.lyric9 = null
    } else {
      object.lyric9 = this.refs.lyric9.value
    }

    if (!this.refs.lyric10 || !this.refs.lyric10.value) {
      object.lyric10 = null
    } else {
      object.lyric10 = this.refs.lyric10.value
    }

    if (!this.refs.lyric11 || !this.refs.lyric11.value) {
      object.lyric11 = null
    } else {
      object.lyric11 = this.refs.lyric11.value
    }

    if (!this.refs.lyric12 || !this.refs.lyric12.value) {
      object.lyric12 = null
    } else {
      object.lyric12 = this.refs.lyric12.value
    }

    if (!this.refs.lyric13 || !this.refs.lyric13.value) {
      object.lyric13 = null
    } else {
      object.lyric13 = this.refs.lyric13.value
    }

    if (!this.refs.lyric14 || !this.refs.lyric14.value) {
      object.lyric14 = null
    } else {
      object.lyric14 = this.refs.lyric14.value
    }

    if (!this.refs.lyric15 || !this.refs.lyric15.value) {
      object.lyric15 = null
    } else {
      object.lyric15 = this.refs.lyric15.value
    }

    if (!this.refs.lyric16 || !this.refs.lyric16.value) {
      object.lyric16 = null
    } else {
      object.lyric16 = this.refs.lyric16.value
    }

    if (!this.refs.lyric17 || !this.refs.lyric17.value) {
      object.lyric17 = null
    } else {
      object.lyric17 = this.refs.lyric17.value
    }

    if (!this.refs.lyric18 || !this.refs.lyric18.value) {
      object.lyric18 = null
    } else {
      object.lyric18 = this.refs.lyric18.value
    }

    if (!this.refs.lyric19 || !this.refs.lyric19.value) {
      object.lyric19 = null
    } else {
      object.lyric19 = this.refs.lyric19.value
    }

    if (!this.refs.lyric20 || !this.refs.lyric20.value) {
      object.lyric20 = null
    } else {
      object.lyric20 = this.refs.lyric20.value
    }

    if (!this.refs.lyric21 || !this.refs.lyric21.value) {
      object.lyric21 = null
    } else {
      object.lyric21 = this.refs.lyric21.value
    }

    if (!this.refs.lyric22 || !this.refs.lyric22.value) {
      object.lyric22 = null
    } else {
      object.lyric22 = this.refs.lyric22.value
    }

    if (!this.refs.lyric23 || !this.refs.lyric23.value) {
      object.lyric23 = null
    } else {
      object.lyric23 = this.refs.lyric23.value
    }

    if (!this.refs.lyric24 || !this.refs.lyric24.value) {
      object.lyric24 = null
    } else {
      object.lyric24 = this.refs.lyric24.value
    }

    if (!this.refs.lyric25 || !this.refs.lyric25.value) {
      object.lyric25 = null
    } else {
      object.lyric25 = this.refs.lyric25.value
    }

    if (!this.refs.lyric26 || !this.refs.lyric26.value) {
      object.lyric26 = null
    } else {
      object.lyric26 = this.refs.lyric26.value
    }

    if (!this.refs.lyric27 || !this.refs.lyric27.value) {
      object.lyric27 = null
    } else {
      object.lyric27 = this.refs.lyric27.value
    }

    if (!this.refs.lyric28 || !this.refs.lyric28.value) {
      object.lyric28 = null
    } else {
      object.lyric28 = this.refs.lyric28.value
    }

    if (!this.refs.lyric29 || !this.refs.lyric29.value) {
      object.lyric29 = null
    } else {
      object.lyric29 = this.refs.lyric29.value
    }

    if (!this.refs.lyric30 || !this.refs.lyric30.value) {
      object.lyric30 = null
    } else {
      object.lyric30 = this.refs.lyric30.value
    }

    if (!this.refs.chord1 || !this.refs.chord1.value) {
      object.chord1 = null
    } else {
      object.chord1 = this.refs.chord1.value
    }

    if (!this.refs.chord2 || !this.refs.chord2.value) {
      object.chord2 = null
    } else {
      object.chord2 = this.refs.chord2.value
    }

    if (!this.refs.chord3 || !this.refs.chord3.value) {
      object.chord3 = null
    } else {
      object.chord3 = this.refs.chord3.value
    }

    if (!this.refs.chord4 || !this.refs.chord4.value) {
      object.chord4 = null
    } else {
      object.chord4 = this.refs.chord4.value
    }

    if (!this.refs.chord5 || !this.refs.chord5.value) {
      object.chord5 = null
    } else {
      object.chord5 = this.refs.chord5.value
    }

    if (!this.refs.chord6 || !this.refs.chord6.value) {
      object.chord6 = null
    } else {
      object.chord6 = this.refs.chord6.value
    }

    if (!this.refs.chord7 || !this.refs.chord7.value) {
      object.chord7 = null
    } else {
      object.chord7 = this.refs.chord7.value
    }

    if (!this.refs.chord8 || !this.refs.chord8.value) {
      object.chord8 = null
    } else {
      object.chord8 = this.refs.chord8.value
    }

    if (!this.refs.chord9 || !this.refs.chord9.value) {
      object.chord9 = null
    } else {
      object.chord9 = this.refs.chord9.value
    }

    if (!this.refs.chord10 || !this.refs.chord10.value) {
      object.chord10 = null
    } else {
      object.chord10 = this.refs.chord10.value
    }
    if (!this.refs.chord11 || !this.refs.chord11.value) {
      object.chord11 = null
    } else {
      object.chord11 = this.refs.chord11.value
    }
    if (!this.refs.chord12 || !this.refs.chord12.value) {
      object.chord12 = null
    } else {
      object.chord12 = this.refs.chord12.value
    }
    if (!this.refs.chord13 || !this.refs.chord13.value) {
      object.chord13 = null
    } else {
      object.chord13 = this.refs.chord13.value
    }
    if (!this.refs.chord14 || !this.refs.chord14.value) {
      object.chord14 = null
    } else {
      object.chord14 = this.refs.chord14.value
    }
    if (!this.refs.chord15 || !this.refs.chord15.value) {
      object.chord15 = null
    } else {
      object.chord15 = this.refs.chord15.value
    }
    if (!this.refs.chord16 || !this.refs.chord16.value) {
      object.chord16 = null
    } else {
      object.chord16 = this.refs.chord16.value
    }
    if (!this.refs.chord17 || !this.refs.chord17.value) {
      object.chord17 = null
    } else {
      object.chord17 = this.refs.chord17.value
    }
    if (!this.refs.chord18 || !this.refs.chord18.value) {
      object.chord18 = null
    } else {
      object.chord18 = this.refs.chord18.value
    }
    if (!this.refs.chord19 || !this.refs.chord19.value) {
      object.chord19 = null
    } else {
      object.chord19 = this.refs.chord19.value
    }

    if (!this.refs.chord20 || !this.refs.chord20.value) {
      object.chord20 = null
    } else {
      object.chord20 = this.refs.chord20.value
    }

    if (!this.refs.chord21 || !this.refs.chord21.value) {
      object.chord21 = null
    } else {
      object.chord21 = this.refs.chord21.value
    }

    if (!this.refs.chord22 || !this.refs.chord22.value) {
      object.chord22 = null
    } else {
      object.chord22 = this.refs.chord22.value
    }

    if (!this.refs.chord23 || !this.refs.chord23.value) {
      object.chord23 = null
    } else {
      object.chord23 = this.refs.chord23.value
    }

    if (!this.refs.chord24 || !this.refs.chord24.value) {
      object.chord24 = null
    } else {
      object.chord24 = this.refs.chord24.value
    }

    if (!this.refs.chord25 || !this.refs.chord25.value) {
      object.chord25 = null
    } else {
      object.chord25 = this.refs.chord25.value
    }

    if (!this.refs.chord26 || !this.refs.chord26.value) {
      object.chord26 = null
    } else {
      object.chord26 = this.refs.chord26.value
    }

    if (!this.refs.chord27 || !this.refs.chord27.value) {
      object.chord27 = null
    } else {
      object.chord27 = this.refs.chord27.value
    }

    if (!this.refs.chord28 || !this.refs.chord28.value) {
      object.chord28 = null
    } else {
      object.chord28 = this.refs.chord28.value
    }

    if (!this.refs.chord29 || !this.refs.chord29.value) {
      object.chord29 = null
    } else {
      object.chord29 = this.refs.chord29.value
    }

    if (!this.refs.chord30 || !this.refs.chord30.value) {
      object.chord30 = null
    } else {
      object.chord30 = this.refs.chord30.value
    }

    this.setState({
      object: object
    })

    this.setState({
      modalIsOpen: true
    })
  }
  afterOpenModal () {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00'
  }
  closeModal () {
    this.setState({
      modalIsOpen: false,
      successModalIsOpen: false
    })
  }
  returnToHome () {
    this.setState({
      successModalIsOpen: false
    })
    window.location.href = '/#/'
  }
  artistChange (event) {
    event.preventDefault()
    this.showSubmitButton()

    this.refs.album.value = 'album here'

    if (event.target.value === '') {
      return
    } else {
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
  handleLyric1 (e) {
    this.showSubmitButton()
    if (e.target.value) {
      return this.setState({
        lyric2: true
      })
    }
  }
  handleLyric2 (e) {
    if (e.target.value) {
      return this.setState({
        lyric3: true
      })
    }
  }
  handleLyric3 (e) {
    if (e.target.value) {
      return this.setState({
        lyric4: true
      })
    }
  }
  handleLyric4 (e) {
    if (e.target.value) {
      return this.setState({
        lyric5: true
      })
    }
  }
  handleLyric5 (e) {
    if (e.target.value) {
      return this.setState({
        lyric6: true
      })
    }
  }
  handleLyric6 (e) {
    if (e.target.value) {
      return this.setState({
        lyric7: true
      })
    }
  }
  handleLyric7 (e) {
    if (e.target.value) {
      return this.setState({
        lyric8: true
      })
    }
  }
  handleLyric8 (e) {
    if (e.target.value) {
      return this.setState({
        lyric9: true
      })
    }
  }
  handleLyric9 (e) {
    if (e.target.value) {
      return this.setState({
        lyric10: true
      })
    }
  }
  handleLyric10 (e) {
    if (e.target.value) {
      return this.setState({
        lyric11: true
      })
    }
  }
  handleLyric11 (e) {
    if (e.target.value) {
      return this.setState({
        lyric12: true
      })
    }
  }
  handleLyric12 (e) {
    if (e.target.value) {
      return this.setState({
        lyric13: true
      })
    }
  }
  handleLyric13 (e) {
    if (e.target.value) {
      return this.setState({
        lyric14: true
      })
    }
  }
  handleLyric14 (e) {
    if (e.target.value) {
      return this.setState({
        lyric15: true
      })
    }
  }
  handleLyric15 (e) {
    if (e.target.value) {
      return this.setState({
        lyric16: true
      })
    }
  }
  handleLyric16 (e) {
    if (e.target.value) {
      return this.setState({
        lyric17: true
      })
    }
  }
  handleLyric17 (e) {
    if (e.target.value) {
      return this.setState({
        lyric18: true
      })
    }
  }
  handleLyric18 (e) {
    if (e.target.value) {
      return this.setState({
        lyric19: true
      })
    }
  }
  handleLyric19 (e) {
    if (e.target.value) {
      return this.setState({
        lyric20: true
      })
    }
  }
  handleLyric20 (e) {
    if (e.target.value) {
      return this.setState({
        lyric21: true
      })
    }
  }
  handleLyric21 (e) {
    if (e.target.value) {
      return this.setState({
        lyric22: true
      })
    }
  }
  handleLyric22 (e) {
    if (e.target.value) {
      return this.setState({
        lyric23: true
      })
    }
  }
  handleLyric23 (e) {
    if (e.target.value) {
      return this.setState({
        lyric24: true
      })
    }
  }
  handleLyric24 (e) {
    if (e.target.value) {
      return this.setState({
        lyric25: true
      })
    }
  }
  handleLyric25 (e) {
    if (e.target.value) {
      return this.setState({
        lyric26: true
      })
    }
  }
  handleLyric26 (e) {
    if (e.target.value) {
      return this.setState({
        lyric27: true
      })
    }
  }
  handleLyric27 (e) {
    if (e.target.value) {
      return this.setState({
        lyric28: true
      })
    }
  }
  handleLyric28 (e) {
    if (e.target.value) {
      return this.setState({
        lyric29: true
      })
    }
  }
  handleLyric29 (e) {
    if (e.target.value) {
      return this.setState({
        lyric30: true
      })
    }
  }
  showSubmitButton (e) {
    if (this.refs.title.value && this.refs.artist.value && this.refs.album.value && this.refs.type.value && this.refs.lyric1.value) {
      this.setState({
        showSubmitButton: true
      })
    } else {
      this.setState({
        showSubmitButton: false
      })
    }
  }

  render () {
    let lyric2 = null
    if (this.state.lyric2) {
      lyric2 = <div id='addSongLyric2' > <input type='text' ref='chord2' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric2} ref='lyric2' placeholder='lyric2' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric3 = null
    if (this.state.lyric3) {
      lyric3 = <div id='addSongLyric3' > <input type='text' ref='chord3' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric3} ref='lyric3' placeholder='lyric3' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric4 = null
    if (this.state.lyric4) {
      lyric4 = <div id='addSongLyric4' > <input type='text' ref='chord4' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric4} ref='lyric4' placeholder='lyric4' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric5 = null
    if (this.state.lyric5) {
      lyric5 = <div id='addSongLyric5' > <input type='text' ref='chord5' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric5} ref='lyric5' placeholder='lyric5' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric6 = null
    if (this.state.lyric6) {
      lyric6 = <div id='addSongLyric6' > <input type='text' ref='chord6' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric6} ref='lyric6' placeholder='lyric6' style={styles.lyricsAndChords} /><br /> <br /> </div>
    }
    let lyric7 = null
    if (this.state.lyric7) {
      lyric7 = <div id='addSongLyric7' > <input type='text' ref='chord7' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric7} ref='lyric7' placeholder='lyric7' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric8 = null
    if (this.state.lyric8) {
      lyric8 = <div id='addSongLyric8' > <input type='text' ref='chord8' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric8} ref='lyric8' placeholder='lyric8' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric9 = null
    if (this.state.lyric9) {
      lyric9 = <div id='addSongLyric9' > <input type='text' ref='chord9' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric9} ref='lyric9' placeholder='lyric9' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric10 = null
    if (this.state.lyric10) {
      lyric10 = <div id='addSongLyric10' > <input type='text' ref='chord10' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric10} ref='lyric10' placeholder='lyric10' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric11 = null
    if (this.state.lyric11) {
      lyric11 = <div id='addSongLyric11' > <input type='text' ref='chord11' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric11} ref='lyric11' placeholder='lyric11' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric12 = null
    if (this.state.lyric12) {
      lyric12 = <div id='addSongLyric12' > <input type='text' ref='chord12' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric12} ref='lyric12' placeholder='lyric12' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric13 = null
    if (this.state.lyric13) {
      lyric13 = <div id='addSongLyric13' > <input type='text' ref='chord13' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric13} ref='lyric13' placeholder='lyric13' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric14 = null
    if (this.state.lyric14) {
      lyric14 = <div id='addSongLyric14' > <input type='text' ref='chord14' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric14} ref='lyric14' placeholder='lyric14' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric15 = null
    if (this.state.lyric15) {
      lyric15 = <div id='addSongLyric15' > <input type='text' ref='chord15' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric15} ref='lyric15' placeholder='lyric15' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric16 = null
    if (this.state.lyric16) {
      lyric16 = <div id='addSongLyric16' > <input type='text' ref='chord16' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric16} ref='lyric16' placeholder='lyric16' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric17 = null
    if (this.state.lyric17) {
      lyric17 = <div id='addSongLyric17' > <input type='text' ref='chord17' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric17} ref='lyric17' placeholder='lyric17' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric18 = null
    if (this.state.lyric18) {
      lyric18 = <div id='addSongLyric18' > <input type='text' ref='chord18' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric18} ref='lyric18' placeholder='lyric18' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric19 = null
    if (this.state.lyric19) {
      lyric19 = <div id='addSongLyric19' > <input type='text' ref='chord19' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric19} ref='lyric19' placeholder='lyric19' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric20 = null
    if (this.state.lyric20) {
      lyric20 = <div id='addSongLyric20' > <input type='text' ref='chord20' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric20} ref='lyric20' placeholder='lyric20' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric21 = null
    if (this.state.lyric21) {
      lyric21 = <div id='addSongLyric21' > <input type='text' ref='chord21' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric21} ref='lyric21' placeholder='lyric21' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric22 = null
    if (this.state.lyric22) {
      lyric22 = <div id='addSongLyric22' > <input type='text' ref='chord22' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric22} ref='lyric22' placeholder='lyric22' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric23 = null
    if (this.state.lyric23) {
      lyric23 = <div id='addSongLyric23' > <input type='text' ref='chord23' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric23} ref='lyric23' placeholder='lyric23' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric24 = null
    if (this.state.lyric24) {
      lyric24 = <div id='addSongLyric24' > <input type='text' ref='chord24' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric24} ref='lyric24' placeholder='lyric24' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric25 = null
    if (this.state.lyric25) {
      lyric25 = <div id='addSongLyric25' > <input type='text' ref='chord25' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric25} ref='lyric25' placeholder='lyric25' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric26 = null
    if (this.state.lyric26) {
      lyric26 = <div id='addSongLyric26' > <input type='text' ref='chord26' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric26} ref='lyric26' placeholder='lyric26' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric27 = null
    if (this.state.lyric27) {
      lyric27 = <div id='addSongLyric27' > <input type='text' ref='chord27' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric27} ref='lyric27' placeholder='lyric27' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric28 = null
    if (this.state.lyric28) {
      lyric28 = <div id='addSongLyric28' > <input type='text' ref='chord28' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric28} ref='lyric28' placeholder='lyric28' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric29 = null
    if (this.state.lyric29) {
      lyric29 = <div id='addSongLyric29' > <input type='text' ref='chord29' style={styles.lyricsAndChords} /> <br /> <input type='text' onChange={this.handleLyric29} ref='lyric29' placeholder='lyric29' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let lyric30 = null
    if (this.state.lyric30) {
      lyric30 = <div id='addSongLyric30' > <input type='text' ref='chord30' style={styles.lyricsAndChords} /> <br /> <input type='text' ref='lyric30' placeholder='lyric30' style={styles.lyricsAndChords} /> <br /> <br /> </div>
    }
    let submitButton = null
    if (this.state.showSubmitButton) {
      submitButton = <div><button onClick={this.openModal}> Add Song </button></div>
    }
    return (
      <div id='AddNewSong'>
        <h3>AddNewSong</h3>
        <form onSubmit={this.onSubmit}>
          <input type='text' ref='title' style={styles.others} placeholder='title' onChange={this.showSubmitButton} />
          <br />
          <select type='text' ref='artist' style={styles.others} onChange={this.artistChange} >
            <option value='' > artist here </option>
            {this.state.artists.map((artist, index) => (
              <option key={index} value={artist.id} > {artist.name} </option>
            ))}
          </select>
          <br />
          <select type='text' ref='album' style={styles.others} placeholder='album' onChange={this.showSubmitButton}>
            <option value='' >album here</option>
            {this.state.albums.map((album, index) => (
              <option key={index} value={album.id} > {album.title} </option>
            ))}
          </select>
          <br />
          <select type='text' ref='type' placeholder='type' style={styles.others} onChange={this.showSubmitButton}>
            <option value=''> type </option>
            <option value='melehawaii'>Mele Hawaii</option>
            <option value='contemporary'>contemporary</option>
          </select>
          <br />
          <textarea type='text' ref='description' placeholder='description' style={styles.others} />
          <br />
          <input type='text' ref='chord1' style={styles.lyricsAndChords} />
          <input type='text' ref='lyric1' placeholder='lyric1' style={styles.lyricsAndChords} onChange={this.handleLyric1} />
          <br />
          <br />
          {lyric2}
          {lyric3}
          {lyric4}
          {lyric5}
          {lyric6}
          {lyric7}
          {lyric8}
          {lyric9}
          {lyric10}
          {lyric11}
          {lyric12}
          {lyric13}
          {lyric14}
          {lyric15}
          {lyric16}
          {lyric17}
          {lyric18}
          {lyric19}
          {lyric20}
          {lyric21}
          {lyric22}
          {lyric23}
          {lyric24}
          {lyric25}
          {lyric26}
          {lyric27}
          {lyric28}
          {lyric29}
          {lyric30}
        </form>
        {submitButton}
        <PreviewModal type='addSong' modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} object={this.state.object} onSubmit={this.onSubmit} contentLabel='previewModal' />
        <SuccessEntryModal modalIsOpen={this.state.successModalIsOpen} closeModal={this.closeModal} returnToHome={this.returnToHome} contentLabel='SuccessEntryModal' />
      </div>
    )
  }
}

module.exports = AddNewSong
