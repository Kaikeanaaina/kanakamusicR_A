const React = require('react')
const axios = require('axios')
const { Link } = require('react-router')
const { domain } = require('../Domain')

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
      recordLabels: []
    }
  }
  componentDidMount () {
    axios.get(`${domain}/recordLabels`)
    .then((res) => {
      this.setState({
        recordLabels: res.data
      })
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  render () {
    return (
      <div style={style.recordLabelListContainer}>
        <div>
          <h2>Record Labels</h2>
        </div>
        {this.state.recordLabels.map((recordLabel, i) => (
          <div style={style.recordLabelLinkContainer} key={i} >
            <Link key={i} to={`/recordLabel/${recordLabel.id}`} style={style.recordLabelLink} >
              <div key={i} style={style.RecordLabelText} >
                {recordLabel.name}
              </div>
              <br />
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

RecordLabelList.propTypes = {
  recordLabels: React.PropTypes.arrayOf(React.PropTypes.object)
}

module.exports = RecordLabelList
