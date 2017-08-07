const React = require('react')
const axios = require('axios')
const MediaQuery = require('react-responsive')
const Div4OfRecordLabels = require('./Div4OfRecordLabels')
const Div3OfRecordLabels = require('./Div3OfRecordLabels')
const Div2OfRecordLabels = require('./Div2OfRecordLabels')
const Div1OfRecordLabels = require('./Div1OfRecordLabels')

const style = {
  recordLabelListContainer: {

  },
  recordLabelLinkContainer: {

  },
  recordLabelLink: {
    textDecoration: 'none',
    fontSize: '24px'
  },
  RecordLabelText: {
    borderBottom: 'black solid 1px',
    color: 'grey'
  }
}

class RecordLabelList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      recordLabels: [],
      recordLabels4DivArray1: [],
      recordLabels4DivArray2: [],
      recordLabels4DivArray3: [],
      recordLabels4DivArray4: [],
      recordLabels3DivArray1: [],
      recordLabels3DivArray2: [],
      recordLabels3DivArray3: [],
      recordLabels2DivArray1: [],
      recordLabels2DivArray2: []
    }
  }
  componentDidMount () {
    axios.get(`/recordLabels`)
    .then((res) => {
      this.setState({
        recordLabels: res.data
      })
      let div4Amount = 4
      let recordLabelsLength = this.state.recordLabels.length
      const standardEach4Div = Math.floor(recordLabelsLength / div4Amount)
      let recordLabels4DivArray1 = []
      let recordLabels4DivArray2 = []
      let recordLabels4DivArray3 = []
      let recordLabels4DivArray4 = []

      if (recordLabelsLength % div4Amount === 1) {
        for (let i = 0; i < (standardEach4Div + 1); i++) {
          recordLabels4DivArray1.push(this.state.recordLabels[i])
        }
        for (let j = (standardEach4Div + 1); (j < (standardEach4Div * 2) + 1); j++) {
          recordLabels4DivArray2.push(this.state.recordLabels[j])
        }
        for (let k = ((standardEach4Div * 2) + 1); (k < (standardEach4Div * 3) + 1); k++) {
          recordLabels4DivArray3.push(this.state.recordLabels[k])
        }
        for (let l = ((standardEach4Div * 3) + 1); (l < (standardEach4Div * 4) + 1); l++) {
          recordLabels4DivArray4.push(this.state.recordLabels[l])
        }
        this.setState({
          recordLabels4DivArray1: recordLabels4DivArray1,
          recordLabels4DivArray2: recordLabels4DivArray2,
          recordLabels4DivArray3: recordLabels4DivArray3,
          recordLabels4DivArray4: recordLabels4DivArray4
        })
      } else if (recordLabelsLength % div4Amount === 2) {
        for (let i = 0; i < (standardEach4Div + 1); i++) {
          recordLabels4DivArray1.push(this.state.recordLabels[i])
        }
        for (let j = (standardEach4Div + 1); (j < (standardEach4Div * 2) + 2); j++) {
          recordLabels4DivArray2.push(this.state.recordLabels[j])
        }
        for (let k = ((standardEach4Div * 2) + 2); (k < (standardEach4Div * 3) + 2); k++) {
          recordLabels4DivArray3.push(this.state.recordLabels[k])
        }
        for (let l = ((standardEach4Div * 3) + 2); (l < (standardEach4Div * 4) + 2); l++) {
          recordLabels4DivArray4.push(this.state.recordLabels[l])
        }
        this.setState({
          recordLabels4DivArray1: recordLabels4DivArray1,
          recordLabels4DivArray2: recordLabels4DivArray2,
          recordLabels4DivArray3: recordLabels4DivArray3,
          recordLabels4DivArray4: recordLabels4DivArray4
        })
      } else if (recordLabelsLength % div4Amount === 3) {
        for (let i = 0; i < (standardEach4Div + 1); i++) {
          recordLabels4DivArray1.push(this.state.recordLabels[i])
        }
        for (let j = (standardEach4Div + 1); (j < (standardEach4Div * 2) + 2); j++) {
          recordLabels4DivArray2.push(this.state.recordLabels[j])
        }
        for (let k = ((standardEach4Div * 2) + 2); (k < (standardEach4Div * 3) + 3); k++) {
          recordLabels4DivArray3.push(this.state.recordLabels[k])
        }
        for (let l = ((standardEach4Div * 3) + 3); (l < (standardEach4Div * 4) + 3); l++) {
          recordLabels4DivArray4.push(this.state.recordLabels[l])
        }
        this.setState({
          recordLabels4DivArray1: recordLabels4DivArray1,
          recordLabels4DivArray2: recordLabels4DivArray2,
          recordLabels4DivArray3: recordLabels4DivArray3,
          recordLabels4DivArray4: recordLabels4DivArray4
        })
      } else {
        for (let i = 0; i < standardEach4Div; i++) {
          recordLabels4DivArray1.push(this.state.recordLabels[i])
        }
        for (let j = standardEach4Div; j < (standardEach4Div * 2); j++) {
          recordLabels4DivArray2.push(this.state.recordLabels[j])
        }
        for (let k = (standardEach4Div * 2); k < (standardEach4Div * 3); k++) {
          recordLabels4DivArray3.push(this.state.recordLabels[k])
        }
        for (let l = (standardEach4Div * 3); l < (standardEach4Div * 4); l++) {
          recordLabels4DivArray4.push(this.state.recordLabels[l])
        }
        this.setState({
          recordLabels4DivArray1: recordLabels4DivArray1,
          recordLabels4DivArray2: recordLabels4DivArray2,
          recordLabels4DivArray3: recordLabels4DivArray3,
          recordLabels4DivArray4: recordLabels4DivArray4
        })
      }

      let div3Amount = 3
      const standardEach3Div = Math.floor(recordLabelsLength / div3Amount)
      let recordLabels3DivArray1 = []
      let recordLabels3DivArray2 = []
      let recordLabels3DivArray3 = []

      if (recordLabelsLength % div3Amount === 1) {
        for (let i = 0; i < (standardEach3Div + 1); i++) {
          recordLabels3DivArray1.push(this.state.recordLabels[i])
        }
        for (let j = (standardEach3Div + 1); (j < (standardEach3Div * 2) + 1); j++) {
          recordLabels3DivArray2.push(this.state.recordLabels[j])
        }
        for (let k = ((standardEach3Div * 2) + 1); (k < (standardEach3Div * 3) + 1); k++) {
          recordLabels3DivArray3.push(this.state.recordLabels[k])
        }
        this.setState({
          recordLabels3DivArray1: recordLabels3DivArray1,
          recordLabels3DivArray2: recordLabels3DivArray2,
          recordLabels3DivArray3: recordLabels3DivArray3
        })
      } else if (recordLabelsLength % div3Amount === 2) {
        for (let i = 0; i < (standardEach3Div + 1); i++) {
          recordLabels3DivArray1.push(this.state.recordLabels[i])
        }
        for (let j = (standardEach3Div + 1); (j < (standardEach3Div * 2) + 2); j++) {
          recordLabels3DivArray2.push(this.state.recordLabels[j])
        }
        for (let k = ((standardEach3Div * 2) + 2); (k < (standardEach3Div * 3) + 2); k++) {
          recordLabels3DivArray3.push(this.state.recordLabels[k])
        }
        this.setState({
          recordLabels3DivArray1: recordLabels3DivArray1,
          recordLabels3DivArray2: recordLabels3DivArray2,
          recordLabels3DivArray3: recordLabels3DivArray3
        })
      } else {
        for (let i = 0; i < standardEach3Div; i++) {
          recordLabels3DivArray1.push(this.state.recordLabels[i])
        }
        for (let j = standardEach3Div; j < (standardEach3Div * 2); j++) {
          recordLabels3DivArray2.push(this.state.recordLabels[j])
        }
        for (let k = (standardEach3Div * 2); k < (standardEach3Div * 3); k++) {
          recordLabels3DivArray3.push(this.state.recordLabels[k])
        }
        this.setState({
          recordLabels3DivArray1: recordLabels3DivArray1,
          recordLabels3DivArray2: recordLabels3DivArray2,
          recordLabels3DivArray3: recordLabels3DivArray3
        })
      }

      let div2Amount = 2
      const standardEach2Div = Math.floor(recordLabelsLength / div2Amount)
      let recordLabels2DivArray1 = []
      let recordLabels2DivArray2 = []

      if (recordLabelsLength % div2Amount === 1) {
        for (let i = 0; i < (standardEach2Div + 1); i++) {
          recordLabels2DivArray1.push(this.state.recordLabels[i])
        }
        for (let j = (standardEach2Div + 1); (j < (standardEach2Div * 2) + 1); j++) {
          recordLabels2DivArray2.push(this.state.recordLabels[j])
        }
        this.setState({
          recordLabels2DivArray1: recordLabels2DivArray1,
          recordLabels2DivArray2: recordLabels2DivArray2
        })
      } else {
        for (let i = 0; i < standardEach2Div; i++) {
          recordLabels2DivArray1.push(this.state.recordLabels[i])
        }
        for (let j = standardEach2Div; j < (standardEach2Div * 2); j++) {
          recordLabels2DivArray2.push(this.state.recordLabels[j])
        }
        this.setState({
          recordLabels2DivArray1: recordLabels2DivArray1,
          recordLabels2DivArray2: recordLabels2DivArray2
        })
      }
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  render () {
    return (<div style={style.recordLabelListContainer}>
      <div>
        <h2>Record Labels</h2>
      </div>
      <MediaQuery minWidth={1024} style={style.recordLabelListDivContainer} >
        <Div4OfRecordLabels state={this.state} />
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={1024} style={style.recordLabelListDivContainer} >
        <Div3OfRecordLabels state={this.state} />
      </MediaQuery>
      <MediaQuery minWidth={425} maxWidth={768} style={style.recordLabelListDivContainer} >
        <Div2OfRecordLabels state={this.state} />
      </MediaQuery>
      <MediaQuery maxWidth={425} >
        <Div1OfRecordLabels state={this.state} />
      </MediaQuery>
    </div>)
  }
}

RecordLabelList.propTypes = {
  recordLabels: React.PropTypes.arrayOf(React.PropTypes.object)
}

module.exports = RecordLabelList
