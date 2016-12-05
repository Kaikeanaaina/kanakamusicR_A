const React = require('react')
const axios = require('axios')
const { domain } = require('../Domain')
const MediaQuery = require('react-responsive')
const Div4OfArtists = require('./Div4OfArtists')
const Div3OfArtists = require('./Div3OfArtists')
const Div2OfArtists = require('./Div2OfArtists')
const Div1OfArtists = require('./Div1OfArtists')

const style = {
  artistListDivContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around'
  }
}

class ArtistList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      artists: [],
      artists4DivArray1: [],
      artists4DivArray2: [],
      artists4DivArray3: [],
      artists4DivArray4: [],
      artists3DivArray1: [],
      artists3DivArray2: [],
      artists3DivArray3: [],
      artists2DivArray1: [],
      artists2DivArray2: []
    }
  }
  componentDidMount () {
    axios.get(`${domain}/artists`)
    .then((res) => {
      this.setState({
        artists: res.data
      })
      let div4Amount = 4
      let artistsLength = this.state.artists.length
      const standardEach4Div = Math.floor(artistsLength / div4Amount)
      let artists4DivArray1 = []
      let artists4DivArray2 = []
      let artists4DivArray3 = []
      let artists4DivArray4 = []

      if (artistsLength % div4Amount === 1) {
        for (let i = 0; i < (standardEach4Div + 1); i++) {
          artists4DivArray1.push(this.state.artists[i])
        }
        for (let j = (standardEach4Div + 1); (j < (standardEach4Div * 2) + 1); j++) {
          artists4DivArray2.push(this.state.artists[j])
        }
        for (let k = ((standardEach4Div * 2) + 1); (k < (standardEach4Div * 3) + 1); k++) {
          artists4DivArray3.push(this.state.artists[k])
        }
        for (let l = ((standardEach4Div * 3) + 1); (l < (standardEach4Div * 4) + 1); l++) {
          artists4DivArray4.push(this.state.artists[l])
        }
        this.setState({
          artists4DivArray1: artists4DivArray1,
          artists4DivArray2: artists4DivArray2,
          artists4DivArray3: artists4DivArray3,
          artists4DivArray4: artists4DivArray4
        })
      } else if (artistsLength % div4Amount === 2) {
        for (let i = 0; i < (standardEach4Div + 1); i++) {
          artists4DivArray1.push(this.state.artists[i])
        }
        for (let j = (standardEach4Div + 1); (j < (standardEach4Div * 2) + 2); j++) {
          artists4DivArray2.push(this.state.artists[j])
        }
        for (let k = ((standardEach4Div * 2) + 2); (k < (standardEach4Div * 3) + 2); k++) {
          artists4DivArray3.push(this.state.artists[k])
        }
        for (let l = ((standardEach4Div * 3) + 2); (l < (standardEach4Div * 4) + 2); l++) {
          artists4DivArray4.push(this.state.artists[l])
        }
        this.setState({
          artists4DivArray1: artists4DivArray1,
          artists4DivArray2: artists4DivArray2,
          artists4DivArray3: artists4DivArray3,
          artists4DivArray4: artists4DivArray4
        })
      } else if (artistsLength % div4Amount === 3) {
        for (let i = 0; i < (standardEach4Div + 1); i++) {
          artists4DivArray1.push(this.state.artists[i])
        }
        for (let j = (standardEach4Div + 1); (j < (standardEach4Div * 2) + 2); j++) {
          artists4DivArray2.push(this.state.artists[j])
        }
        for (let k = ((standardEach4Div * 2) + 2); (k < (standardEach4Div * 3) + 3); k++) {
          artists4DivArray3.push(this.state.artists[k])
        }
        for (let l = ((standardEach4Div * 3) + 3); (l < (standardEach4Div * 4) + 3); l++) {
          artists4DivArray4.push(this.state.artists[l])
        }
        this.setState({
          artists4DivArray1: artists4DivArray1,
          artists4DivArray2: artists4DivArray2,
          artists4DivArray3: artists4DivArray3,
          artists4DivArray4: artists4DivArray4
        })
      } else {
        for (let i = 0; i < standardEach4Div; i++) {
          artists4DivArray1.push(this.state.artists[i])
        }
        for (let j = standardEach4Div; j < (standardEach4Div * 2); j++) {
          artists4DivArray2.push(this.state.artists[j])
        }
        for (let k = (standardEach4Div * 2); k < (standardEach4Div * 3); k++) {
          artists4DivArray3.push(this.state.artists[k])
        }
        for (let l = (standardEach4Div * 3); l < (standardEach4Div * 4); l++) {
          artists4DivArray4.push(this.state.artists[l])
        }
        this.setState({
          artists4DivArray1: artists4DivArray1,
          artists4DivArray2: artists4DivArray2,
          artists4DivArray3: artists4DivArray3,
          artists4DivArray4: artists4DivArray4
        })
      }

      let div3Amount = 3
      const standardEach3Div = Math.floor(artistsLength / div3Amount)
      let artists3DivArray1 = []
      let artists3DivArray2 = []
      let artists3DivArray3 = []

      if (artistsLength % div3Amount === 1) {
        for (let i = 0; i < (standardEach3Div + 1); i++) {
          artists3DivArray1.push(this.state.artists[i])
        }
        for (let j = (standardEach3Div + 1); (j < (standardEach3Div * 2) + 1); j++) {
          artists3DivArray2.push(this.state.artists[j])
        }
        for (let k = ((standardEach3Div * 2) + 1); (k < (standardEach3Div * 3) + 1); k++) {
          artists3DivArray3.push(this.state.artists[k])
        }
        this.setState({
          artists3DivArray1: artists3DivArray1,
          artists3DivArray2: artists3DivArray2,
          artists3DivArray3: artists3DivArray3
        })
      } else if (artistsLength % div3Amount === 2) {
        for (let i = 0; i < (standardEach3Div + 1); i++) {
          artists3DivArray1.push(this.state.artists[i])
        }
        for (let j = (standardEach3Div + 1); (j < (standardEach3Div * 2) + 2); j++) {
          artists3DivArray2.push(this.state.artists[j])
        }
        for (let k = ((standardEach3Div * 2) + 2); (k < (standardEach3Div * 3) + 2); k++) {
          artists3DivArray3.push(this.state.artists[k])
        }
        this.setState({
          artists3DivArray1: artists3DivArray1,
          artists3DivArray2: artists3DivArray2,
          artists3DivArray3: artists3DivArray3
        })
      } else {
        for (let i = 0; i < standardEach3Div; i++) {
          artists3DivArray1.push(this.state.artists[i])
        }
        for (let j = standardEach3Div; j < (standardEach3Div * 2); j++) {
          artists3DivArray2.push(this.state.artists[j])
        }
        for (let k = (standardEach3Div * 2); k < (standardEach3Div * 3); k++) {
          artists3DivArray3.push(this.state.artists[k])
        }
        this.setState({
          artists3DivArray1: artists3DivArray1,
          artists3DivArray2: artists3DivArray2,
          artists3DivArray3: artists3DivArray3
        })
      }

      let div2Amount = 2
      const standardEach2Div = Math.floor(artistsLength / div2Amount)
      let artists2DivArray1 = []
      let artists2DivArray2 = []

      if (artistsLength % div2Amount === 1) {
        for (let i = 0; i < (standardEach2Div + 1); i++) {
          artists2DivArray1.push(this.state.artists[i])
        }
        for (let j = (standardEach2Div + 1); (j < (standardEach2Div * 2) + 1); j++) {
          artists2DivArray2.push(this.state.artists[j])
        }
        this.setState({
          artists2DivArray1: artists2DivArray1,
          artists2DivArray2: artists2DivArray2
        })
      } else {
        for (let i = 0; i < standardEach2Div; i++) {
          artists2DivArray1.push(this.state.artists[i])
        }
        for (let j = standardEach2Div; j < (standardEach2Div * 2); j++) {
          artists2DivArray2.push(this.state.artists[j])
        }
        this.setState({
          artists2DivArray1: artists2DivArray1,
          artists2DivArray2: artists2DivArray2
        })
      }
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  render () {
    return (<div style={style.artistListContainer}>
      <div>
        <h2>Artists</h2>
      </div>

      <MediaQuery minWidth={1024} style={style.artistListDivContainer} >
        <Div4OfArtists state={this.state} />
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={1024} style={style.artistListDivContainer} >
        <Div3OfArtists state={this.state} />
      </MediaQuery>
      <MediaQuery minWidth={425} maxWidth={768} style={style.artistListDivContainer} >
        <Div2OfArtists state={this.state} />
      </MediaQuery>
      <MediaQuery maxWidth={425} >
        <Div1OfArtists state={this.state} />
      </MediaQuery>
    </div>)
  }
}

ArtistList.propTypes = {
  artists: React.PropTypes.arrayOf(React.PropTypes.object)
}

module.exports = ArtistList
