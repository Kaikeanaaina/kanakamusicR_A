const React = require('react')
const axios = require('axios')
const { domain } = require('../Domain')
const MediaQuery = require('react-responsive')
const Div4OfSongs = require('./Div4OfSongs')
const Div3OfSongs = require('./Div3OfSongs')
const Div2OfSongs = require('./Div2OfSongs')
const Div1OfSongs = require('./Div1OfSongs')

const style = {
  songListDivContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around'
  }
}

class SongList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      songs: [],
      songs4DivArray1: [],
      songs4DivArray2: [],
      songs4DivArray3: [],
      songs4DivArray4: [],
      songs3DivArray1: [],
      songs3DivArray2: [],
      songs3DivArray3: [],
      songs2DivArray1: [],
      songs2DivArray2: []
    }
  }
  componentDidMount () {
    if (this.props.ArtistId) {
      axios.get(`${domain}/songs/ByArtistId/${this.props.ArtistId}`)
      .then((res) => {
        this.setState({
          songs: res.data
        })
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    } else if (this.props.AlbumId) {
      axios.get(`${domain}/songs/ByAlbumId/${this.props.AlbumId}`)
      .then((res) => {
        this.setState({
          songs: res.data
        })
        let div4Amount = 4
        let songsLength = this.state.songs.length
        const standardEach4Div = Math.floor(songsLength / div4Amount)
        let songs4DivArray1 = []
        let songs4DivArray2 = []
        let songs4DivArray3 = []
        let songs4DivArray4 = []

        if (songsLength % div4Amount === 1) {
          for (let i = 0; i < (standardEach4Div + 1); i++) {
            songs4DivArray1.push(this.state.songs[i])
          }
          for (let j = (standardEach4Div + 1); (j < (standardEach4Div * 2) + 1); j++) {
            songs4DivArray2.push(this.state.songs[j])
          }
          for (let k = ((standardEach4Div * 2) + 1); (k < (standardEach4Div * 3) + 1); k++) {
            songs4DivArray3.push(this.state.songs[k])
          }
          for (let l = ((standardEach4Div * 3) + 1); (l < (standardEach4Div * 4) + 1); l++) {
            songs4DivArray4.push(this.state.songs[l])
          }
          this.setState({
            songs4DivArray1: songs4DivArray1,
            songs4DivArray2: songs4DivArray2,
            songs4DivArray3: songs4DivArray3,
            songs4DivArray4: songs4DivArray4
          })
        } else if (songsLength % div4Amount === 2) {
          for (let i = 0; i < (standardEach4Div + 1); i++) {
            songs4DivArray1.push(this.state.songs[i])
          }
          for (let j = (standardEach4Div + 1); (j < (standardEach4Div * 2) + 2); j++) {
            songs4DivArray2.push(this.state.songs[j])
          }
          for (let k = ((standardEach4Div * 2) + 2); (k < (standardEach4Div * 3) + 2); k++) {
            songs4DivArray3.push(this.state.songs[k])
          }
          for (let l = ((standardEach4Div * 3) + 2); (l < (standardEach4Div * 4) + 2); l++) {
            songs4DivArray4.push(this.state.songs[l])
          }
          this.setState({
            songs4DivArray1: songs4DivArray1,
            songs4DivArray2: songs4DivArray2,
            songs4DivArray3: songs4DivArray3,
            songs4DivArray4: songs4DivArray4
          })
        } else if (songsLength % div4Amount === 3) {
          for (let i = 0; i < (standardEach4Div + 1); i++) {
            songs4DivArray1.push(this.state.songs[i])
          }
          for (let j = (standardEach4Div + 1); (j < (standardEach4Div * 2) + 2); j++) {
            songs4DivArray2.push(this.state.songs[j])
          }
          for (let k = ((standardEach4Div * 2) + 2); (k < (standardEach4Div * 3) + 3); k++) {
            songs4DivArray3.push(this.state.songs[k])
          }
          for (let l = ((standardEach4Div * 3) + 3); (l < (standardEach4Div * 4) + 3); l++) {
            songs4DivArray4.push(this.state.songs[l])
          }
          this.setState({
            songs4DivArray1: songs4DivArray1,
            songs4DivArray2: songs4DivArray2,
            songs4DivArray3: songs4DivArray3,
            songs4DivArray4: songs4DivArray4
          })
        } else {
          for (let i = 0; i < standardEach4Div; i++) {
            songs4DivArray1.push(this.state.songs[i])
          }
          for (let j = standardEach4Div; j < (standardEach4Div * 2); j++) {
            songs4DivArray2.push(this.state.songs[j])
          }
          for (let k = (standardEach4Div * 2); k < (standardEach4Div * 3); k++) {
            songs4DivArray3.push(this.state.songs[k])
          }
          for (let l = (standardEach4Div * 3); l < (standardEach4Div * 4); l++) {
            songs4DivArray4.push(this.state.songs[l])
          }
          this.setState({
            songs4DivArray1: songs4DivArray1,
            songs4DivArray2: songs4DivArray2,
            songs4DivArray3: songs4DivArray3,
            songs4DivArray4: songs4DivArray4
          })
        }

        let div3Amount = 3
        const standardEach3Div = Math.floor(songsLength / div3Amount)
        let songs3DivArray1 = []
        let songs3DivArray2 = []
        let songs3DivArray3 = []

        if (songsLength % div3Amount === 1) {
          for (let i = 0; i < (standardEach3Div + 1); i++) {
            songs3DivArray1.push(this.state.songs[i])
          }
          for (let j = (standardEach3Div + 1); (j < (standardEach3Div * 2) + 1); j++) {
            songs3DivArray2.push(this.state.songs[j])
          }
          for (let k = ((standardEach3Div * 2) + 1); (k < (standardEach3Div * 3) + 1); k++) {
            songs3DivArray3.push(this.state.songs[k])
          }
          this.setState({
            songs3DivArray1: songs3DivArray1,
            songs3DivArray2: songs3DivArray2,
            songs3DivArray3: songs3DivArray3
          })
        } else if (songsLength % div3Amount === 2) {
          for (let i = 0; i < (standardEach3Div + 1); i++) {
            songs3DivArray1.push(this.state.songs[i])
          }
          for (let j = (standardEach3Div + 1); (j < (standardEach3Div * 2) + 2); j++) {
            songs3DivArray2.push(this.state.songs[j])
          }
          for (let k = ((standardEach3Div * 2) + 2); (k < (standardEach3Div * 3) + 2); k++) {
            songs3DivArray3.push(this.state.songs[k])
          }
          this.setState({
            songs3DivArray1: songs3DivArray1,
            songs3DivArray2: songs3DivArray2,
            songs3DivArray3: songs3DivArray3
          })
        } else {
          for (let i = 0; i < standardEach3Div; i++) {
            songs3DivArray1.push(this.state.songs[i])
          }
          for (let j = standardEach3Div; j < (standardEach3Div * 2); j++) {
            songs3DivArray2.push(this.state.songs[j])
          }
          for (let k = (standardEach3Div * 2); k < (standardEach3Div * 3); k++) {
            songs3DivArray3.push(this.state.songs[k])
          }
          this.setState({
            songs3DivArray1: songs3DivArray1,
            songs3DivArray2: songs3DivArray2,
            songs3DivArray3: songs3DivArray3
          })
        }

        let div2Amount = 2
        const standardEach2Div = Math.floor(songsLength / div2Amount)
        let songs2DivArray1 = []
        let songs2DivArray2 = []

        if (songsLength % div2Amount === 1) {
          for (let i = 0; i < (standardEach2Div + 1); i++) {
            songs2DivArray1.push(this.state.songs[i])
          }
          for (let j = (standardEach2Div + 1); (j < (standardEach2Div * 2) + 1); j++) {
            songs2DivArray2.push(this.state.songs[j])
          }
          this.setState({
            songs2DivArray1: songs2DivArray1,
            songs2DivArray2: songs2DivArray2
          })
        } else {
          for (let i = 0; i < standardEach2Div; i++) {
            songs2DivArray1.push(this.state.songs[i])
          }
          for (let j = standardEach2Div; j < (standardEach2Div * 2); j++) {
            songs2DivArray2.push(this.state.songs[j])
          }
          this.setState({
            songs2DivArray1: songs2DivArray1,
            songs2DivArray2: songs2DivArray2
          })
        }
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    } else {
      axios.get(`${domain}/songs`)
      .then((res) => {
        this.setState({
          songs: res.data
        })
        let div4Amount = 4
        let songsLength = this.state.songs.length
        const standardEach4Div = Math.floor(songsLength / div4Amount)
        let songs4DivArray1 = []
        let songs4DivArray2 = []
        let songs4DivArray3 = []
        let songs4DivArray4 = []

        if (songsLength % div4Amount === 1) {
          for (let i = 0; i < (standardEach4Div + 1); i++) {
            songs4DivArray1.push(this.state.songs[i])
          }
          for (let j = (standardEach4Div + 1); (j < (standardEach4Div * 2) + 1); j++) {
            songs4DivArray2.push(this.state.songs[j])
          }
          for (let k = ((standardEach4Div * 2) + 1); (k < (standardEach4Div * 3) + 1); k++) {
            songs4DivArray3.push(this.state.songs[k])
          }
          for (let l = ((standardEach4Div * 3) + 1); (l < (standardEach4Div * 4) + 1); l++) {
            songs4DivArray4.push(this.state.songs[l])
          }
          this.setState({
            songs4DivArray1: songs4DivArray1,
            songs4DivArray2: songs4DivArray2,
            songs4DivArray3: songs4DivArray3,
            songs4DivArray4: songs4DivArray4
          })
        } else if (songsLength % div4Amount === 2) {
          for (let i = 0; i < (standardEach4Div + 1); i++) {
            songs4DivArray1.push(this.state.songs[i])
          }
          for (let j = (standardEach4Div + 1); (j < (standardEach4Div * 2) + 2); j++) {
            songs4DivArray2.push(this.state.songs[j])
          }
          for (let k = ((standardEach4Div * 2) + 2); (k < (standardEach4Div * 3) + 2); k++) {
            songs4DivArray3.push(this.state.songs[k])
          }
          for (let l = ((standardEach4Div * 3) + 2); (l < (standardEach4Div * 4) + 2); l++) {
            songs4DivArray4.push(this.state.songs[l])
          }
          this.setState({
            songs4DivArray1: songs4DivArray1,
            songs4DivArray2: songs4DivArray2,
            songs4DivArray3: songs4DivArray3,
            songs4DivArray4: songs4DivArray4
          })
        } else if (songsLength % div4Amount === 3) {
          for (let i = 0; i < (standardEach4Div + 1); i++) {
            songs4DivArray1.push(this.state.songs[i])
          }
          for (let j = (standardEach4Div + 1); (j < (standardEach4Div * 2) + 2); j++) {
            songs4DivArray2.push(this.state.songs[j])
          }
          for (let k = ((standardEach4Div * 2) + 2); (k < (standardEach4Div * 3) + 3); k++) {
            songs4DivArray3.push(this.state.songs[k])
          }
          for (let l = ((standardEach4Div * 3) + 3); (l < (standardEach4Div * 4) + 3); l++) {
            songs4DivArray4.push(this.state.songs[l])
          }
          this.setState({
            songs4DivArray1: songs4DivArray1,
            songs4DivArray2: songs4DivArray2,
            songs4DivArray3: songs4DivArray3,
            songs4DivArray4: songs4DivArray4
          })
        } else {
          for (let i = 0; i < standardEach4Div; i++) {
            songs4DivArray1.push(this.state.songs[i])
          }
          for (let j = standardEach4Div; j < (standardEach4Div * 2); j++) {
            songs4DivArray2.push(this.state.songs[j])
          }
          for (let k = (standardEach4Div * 2); k < (standardEach4Div * 3); k++) {
            songs4DivArray3.push(this.state.songs[k])
          }
          for (let l = (standardEach4Div * 3); l < (standardEach4Div * 4); l++) {
            songs4DivArray4.push(this.state.songs[l])
          }
          this.setState({
            songs4DivArray1: songs4DivArray1,
            songs4DivArray2: songs4DivArray2,
            songs4DivArray3: songs4DivArray3,
            songs4DivArray4: songs4DivArray4
          })
        }

        let div3Amount = 3
        const standardEach3Div = Math.floor(songsLength / div3Amount)
        let songs3DivArray1 = []
        let songs3DivArray2 = []
        let songs3DivArray3 = []

        if (songsLength % div3Amount === 1) {
          for (let i = 0; i < (standardEach3Div + 1); i++) {
            songs3DivArray1.push(this.state.songs[i])
          }
          for (let j = (standardEach3Div + 1); (j < (standardEach3Div * 2) + 1); j++) {
            songs3DivArray2.push(this.state.songs[j])
          }
          for (let k = ((standardEach3Div * 2) + 1); (k < (standardEach3Div * 3) + 1); k++) {
            songs3DivArray3.push(this.state.songs[k])
          }
          this.setState({
            songs3DivArray1: songs3DivArray1,
            songs3DivArray2: songs3DivArray2,
            songs3DivArray3: songs3DivArray3
          })
        } else if (songsLength % div3Amount === 2) {
          for (let i = 0; i < (standardEach3Div + 1); i++) {
            songs3DivArray1.push(this.state.songs[i])
          }
          for (let j = (standardEach3Div + 1); (j < (standardEach3Div * 2) + 2); j++) {
            songs3DivArray2.push(this.state.songs[j])
          }
          for (let k = ((standardEach3Div * 2) + 2); (k < (standardEach3Div * 3) + 2); k++) {
            songs3DivArray3.push(this.state.songs[k])
          }
          this.setState({
            songs3DivArray1: songs3DivArray1,
            songs3DivArray2: songs3DivArray2,
            songs3DivArray3: songs3DivArray3
          })
        } else {
          for (let i = 0; i < standardEach3Div; i++) {
            songs3DivArray1.push(this.state.songs[i])
          }
          for (let j = standardEach3Div; j < (standardEach3Div * 2); j++) {
            songs3DivArray2.push(this.state.songs[j])
          }
          for (let k = (standardEach3Div * 2); k < (standardEach3Div * 3); k++) {
            songs3DivArray3.push(this.state.songs[k])
          }
          this.setState({
            songs3DivArray1: songs3DivArray1,
            songs3DivArray2: songs3DivArray2,
            songs3DivArray3: songs3DivArray3
          })
        }

        let div2Amount = 2
        const standardEach2Div = Math.floor(songsLength / div2Amount)
        let songs2DivArray1 = []
        let songs2DivArray2 = []

        if (songsLength % div2Amount === 1) {
          for (let i = 0; i < (standardEach2Div + 1); i++) {
            songs2DivArray1.push(this.state.songs[i])
          }
          for (let j = (standardEach2Div + 1); (j < (standardEach2Div * 2) + 1); j++) {
            songs2DivArray2.push(this.state.songs[j])
          }
          this.setState({
            songs2DivArray1: songs2DivArray1,
            songs2DivArray2: songs2DivArray2
          })
        } else {
          for (let i = 0; i < standardEach2Div; i++) {
            songs2DivArray1.push(this.state.songs[i])
          }
          for (let j = standardEach2Div; j < (standardEach2Div * 2); j++) {
            songs2DivArray2.push(this.state.songs[j])
          }
          this.setState({
            songs2DivArray1: songs2DivArray1,
            songs2DivArray2: songs2DivArray2
          })
        }
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    }
  }
  render () {
    let PropIdList = null
    if (this.props.AlbumId || this.props.ArtistId) {
      PropIdList = <Div1OfSongs state={this.state} />
    } else {
      PropIdList = (
        <div>
          <MediaQuery minWidth={1024} style={style.songListDivContainer} >
            <Div4OfSongs state={this.state} />
          </MediaQuery>
          <MediaQuery minWidth={768} maxWidth={1024} style={style.songListDivContainer} >
            <Div3OfSongs state={this.state} />
          </MediaQuery>
          <MediaQuery minWidth={425} maxWidth={768} style={style.songListDivContainer} >
            <Div2OfSongs state={this.state} />
          </MediaQuery>
          <MediaQuery maxWidth={425} >
            <Div1OfSongs state={this.state} />
          </MediaQuery>
        </div>
      )
    }
    return (<div style={style.songListContainer}>
      <div>
        <h2>Songs</h2>
      </div>
      <div>
        {PropIdList}
      </div>
    </div>)
  }
}

SongList.propTypes = {
  songs: React.PropTypes.arrayOf(React.PropTypes.object),
  ArtistId: React.PropTypes.number,
  AlbumId: React.PropTypes.number
}

module.exports = SongList
