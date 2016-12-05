const React = require('react')
const axios = require('axios')
const { domain } = require('../Domain')
const MediaQuery = require('react-responsive')
const Div4OfAlbums = require('./Div4OfAlbums')
const Div3OfAlbums = require('./Div3OfAlbums')
const Div2OfAlbums = require('./Div2OfAlbums')
const Div1OfAlbums = require('./Div1OfAlbums')

const style = {
  albumListDivContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around'
  }
}

class AlbumList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      albums: [],
      albums4DivArray1: [],
      albums4DivArray2: [],
      albums4DivArray3: [],
      albums4DivArray4: [],
      albums3DivArray1: [],
      albums3DivArray2: [],
      albums3DivArray3: [],
      albums2DivArray1: [],
      albums2DivArray2: []
    }
  }
  componentDidMount () {
    if (this.props.ArtistId) {
      axios.get(`${domain}/albums/ByArtistId/${this.props.ArtistId}`)
      .then((res) => {
        this.setState({
          albums: res.data
        })
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    } else if (this.props.RecordLabelId) {
      axios.get(`${domain}/albums/ByRecordLabelId/${this.props.RecordLabelId}`)
      .then((res) => {
        this.setState({
          albums: res.data
        })
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    } else {
      axios.get(`${domain}/albums`)
      .then((res) => {
        this.setState({
          albums: res.data
        })
        let div4Amount = 4
        let albumsLength = this.state.albums.length
        const standardEach4Div = Math.floor(albumsLength / div4Amount)
        let albums4DivArray1 = []
        let albums4DivArray2 = []
        let albums4DivArray3 = []
        let albums4DivArray4 = []

        if (albumsLength % div4Amount === 1) {
          for (let i = 0; i < (standardEach4Div + 1); i++) {
            albums4DivArray1.push(this.state.albums[i])
          }
          for (let j = (standardEach4Div + 1); (j < (standardEach4Div * 2) + 1); j++) {
            albums4DivArray2.push(this.state.albums[j])
          }
          for (let k = ((standardEach4Div * 2) + 1); (k < (standardEach4Div * 3) + 1); k++) {
            albums4DivArray3.push(this.state.albums[k])
          }
          for (let l = ((standardEach4Div * 3) + 1); (l < (standardEach4Div * 4) + 1); l++) {
            albums4DivArray4.push(this.state.albums[l])
          }
          this.setState({
            albums4DivArray1: albums4DivArray1,
            albums4DivArray2: albums4DivArray2,
            albums4DivArray3: albums4DivArray3,
            albums4DivArray4: albums4DivArray4
          })
        } else if (albumsLength % div4Amount === 2) {
          for (let i = 0; i < (standardEach4Div + 1); i++) {
            albums4DivArray1.push(this.state.albums[i])
          }
          for (let j = (standardEach4Div + 1); (j < (standardEach4Div * 2) + 2); j++) {
            albums4DivArray2.push(this.state.albums[j])
          }
          for (let k = ((standardEach4Div * 2) + 2); (k < (standardEach4Div * 3) + 2); k++) {
            albums4DivArray3.push(this.state.albums[k])
          }
          for (let l = ((standardEach4Div * 3) + 2); (l < (standardEach4Div * 4) + 2); l++) {
            albums4DivArray4.push(this.state.albums[l])
          }
          this.setState({
            albums4DivArray1: albums4DivArray1,
            albums4DivArray2: albums4DivArray2,
            albums4DivArray3: albums4DivArray3,
            albums4DivArray4: albums4DivArray4
          })
        } else if (albumsLength % div4Amount === 3) {
          for (let i = 0; i < (standardEach4Div + 1); i++) {
            albums4DivArray1.push(this.state.albums[i])
          }
          for (let j = (standardEach4Div + 1); (j < (standardEach4Div * 2) + 2); j++) {
            albums4DivArray2.push(this.state.albums[j])
          }
          for (let k = ((standardEach4Div * 2) + 2); (k < (standardEach4Div * 3) + 3); k++) {
            albums4DivArray3.push(this.state.albums[k])
          }
          for (let l = ((standardEach4Div * 3) + 3); (l < (standardEach4Div * 4) + 3); l++) {
            albums4DivArray4.push(this.state.albums[l])
          }
          this.setState({
            albums4DivArray1: albums4DivArray1,
            albums4DivArray2: albums4DivArray2,
            albums4DivArray3: albums4DivArray3,
            albums4DivArray4: albums4DivArray4
          })
        } else {
          for (let i = 0; i < standardEach4Div; i++) {
            albums4DivArray1.push(this.state.albums[i])
          }
          for (let j = standardEach4Div; j < (standardEach4Div * 2); j++) {
            albums4DivArray2.push(this.state.albums[j])
          }
          for (let k = (standardEach4Div * 2); k < (standardEach4Div * 3); k++) {
            albums4DivArray3.push(this.state.albums[k])
          }
          for (let l = (standardEach4Div * 3); l < (standardEach4Div * 4); l++) {
            albums4DivArray4.push(this.state.albums[l])
          }
          this.setState({
            albums4DivArray1: albums4DivArray1,
            albums4DivArray2: albums4DivArray2,
            albums4DivArray3: albums4DivArray3,
            albums4DivArray4: albums4DivArray4
          })
        }

        let div3Amount = 3
        const standardEach3Div = Math.floor(albumsLength / div3Amount)
        let albums3DivArray1 = []
        let albums3DivArray2 = []
        let albums3DivArray3 = []

        if (albumsLength % div3Amount === 1) {
          for (let i = 0; i < (standardEach3Div + 1); i++) {
            albums3DivArray1.push(this.state.albums[i])
          }
          for (let j = (standardEach3Div + 1); (j < (standardEach3Div * 2) + 1); j++) {
            albums3DivArray2.push(this.state.albums[j])
          }
          for (let k = ((standardEach3Div * 2) + 1); (k < (standardEach3Div * 3) + 1); k++) {
            albums3DivArray3.push(this.state.albums[k])
          }
          this.setState({
            albums3DivArray1: albums3DivArray1,
            albums3DivArray2: albums3DivArray2,
            albums3DivArray3: albums3DivArray3
          })
        } else if (albumsLength % div3Amount === 2) {
          for (let i = 0; i < (standardEach3Div + 1); i++) {
            albums3DivArray1.push(this.state.albums[i])
          }
          for (let j = (standardEach3Div + 1); (j < (standardEach3Div * 2) + 2); j++) {
            albums3DivArray2.push(this.state.albums[j])
          }
          for (let k = ((standardEach3Div * 2) + 2); (k < (standardEach3Div * 3) + 2); k++) {
            albums3DivArray3.push(this.state.albums[k])
          }
          this.setState({
            albums3DivArray1: albums3DivArray1,
            albums3DivArray2: albums3DivArray2,
            albums3DivArray3: albums3DivArray3
          })
        } else {
          for (let i = 0; i < standardEach3Div; i++) {
            albums3DivArray1.push(this.state.albums[i])
          }
          for (let j = standardEach3Div; j < (standardEach3Div * 2); j++) {
            albums3DivArray2.push(this.state.albums[j])
          }
          for (let k = (standardEach3Div * 2); k < (standardEach3Div * 3); k++) {
            albums3DivArray3.push(this.state.albums[k])
          }
          this.setState({
            albums3DivArray1: albums3DivArray1,
            albums3DivArray2: albums3DivArray2,
            albums3DivArray3: albums3DivArray3
          })
        }

        let div2Amount = 2
        const standardEach2Div = Math.floor(albumsLength / div2Amount)
        let albums2DivArray1 = []
        let albums2DivArray2 = []

        if (albumsLength % div2Amount === 1) {
          for (let i = 0; i < (standardEach2Div + 1); i++) {
            albums2DivArray1.push(this.state.albums[i])
          }
          for (let j = (standardEach2Div + 1); (j < (standardEach2Div * 2) + 1); j++) {
            albums2DivArray2.push(this.state.albums[j])
          }
          this.setState({
            albums2DivArray1: albums2DivArray1,
            albums2DivArray2: albums2DivArray2
          })
        } else {
          for (let i = 0; i < standardEach2Div; i++) {
            albums2DivArray1.push(this.state.albums[i])
          }
          for (let j = standardEach2Div; j < (standardEach2Div * 2); j++) {
            albums2DivArray2.push(this.state.albums[j])
          }
          this.setState({
            albums2DivArray1: albums2DivArray1,
            albums2DivArray2: albums2DivArray2
          })
        }
      })
      .catch((error) => {
        console.log('axios error', error)
      })
    }
  }
  render () {
    return (<div style={style.albumListContainer}>
      <div>
        <h2>Albums</h2>
      </div>

      <MediaQuery minWidth={1024} style={style.albumListDivContainer} >
        <Div4OfAlbums state={this.state} />
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={1024} style={style.albumListDivContainer} >
        <Div3OfAlbums state={this.state} />
      </MediaQuery>
      <MediaQuery minWidth={425} maxWidth={768} style={style.albumListDivContainer} >
        <Div2OfAlbums state={this.state} />
      </MediaQuery>
      <MediaQuery maxWidth={425} >
        <Div1OfAlbums state={this.state} />
      </MediaQuery>
    </div>)
  }
}

AlbumList.propTypes = {
  albums: React.PropTypes.arrayOf(React.PropTypes.object),
  ArtistId: React.PropTypes.number,
  RecordLabelId: React.PropTypes.number
}

module.exports = AlbumList
