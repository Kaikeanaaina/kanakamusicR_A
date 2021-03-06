const React = require('react')
const { Link } = require('react-router')

const style = {
  recordLabelListContainer: {

  },
  recordLabelListDivContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around'
  },
  recordLabelList3Div: {
    width: '32%'
  },
  recordLabelLink: {
    textDecoration: 'none',
    fontSize: '24px'
  },
  recordLabelText: {
    borderBottom: 'black solid 1px',
    color: 'grey'
  }
}

const Div3OfRecordLabels = (props) => (
  <div style={style.recordLabelListDivContainer}>
    <div style={style.recordLabelList3Div}>
      {props.state.recordLabels3DivArray1.map((recordLabel, i) => (
        <div key={i} >
          <Link key={i} to={`/recordLabel/${recordLabel.id}`} style={style.recordLabelLink} >
            <div key={i} style={style.recordLabelText}>
              {recordLabel.name}
            </div>
            <br />
          </Link>
        </div>
      ))}
    </div>
    <div style={style.recordLabelList3Div}>
      {props.state.recordLabels3DivArray2.map((recordLabel, i) => (
        <div key={i} >
          <Link key={i} to={`/recordLabel/${recordLabel.id}`} style={style.recordLabelLink} >
            <div key={i} style={style.recordLabelText}>
              {recordLabel.name}
            </div>
            <br />
          </Link>
        </div>
      ))}
    </div>
    <div style={style.recordLabelList3Div}>
      {props.state.recordLabels3DivArray3.map((recordLabel, i) => (
        <div key={i} >
          <Link key={i} to={`/recordLabel/${recordLabel.id}`} style={style.recordLabelLink} >
            <div key={i} style={style.recordLabelText}>
              {recordLabel.name}
            </div>
            <br />
          </Link>
        </div>
      ))}
    </div>
  </div>
)

const { object } = React.PropTypes

Div3OfRecordLabels.propTypes = {
  state: object
}

module.exports = Div3OfRecordLabels
