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
  recordLabelList4Div: {
    width: '24%'
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

const Div4OfRecordLabels = (props) => (
  <div style={style.recordLabelListDivContainer}>
    <div style={style.recordLabelList4Div}>
      {props.state.recordLabels4DivArray1.map((recordLabel, i) => (
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
    <div style={style.recordLabelList4Div}>
      {props.state.recordLabels4DivArray2.map((recordLabel, i) => (
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
    <div style={style.recordLabelList4Div}>
      {props.state.recordLabels4DivArray3.map((recordLabel, i) => (
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
    <div style={style.recordLabelList4Div}>
      {props.state.recordLabels4DivArray4.map((recordLabel, i) => (
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

Div4OfRecordLabels.propTypes = {
  style: object,
  state: object
}

module.exports = Div4OfRecordLabels
