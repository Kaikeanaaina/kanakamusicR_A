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
  recordLabelList1DivContainer: {

  },
  recordLabelList1Div: {
    width: '99%'
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

const Div1OfRecordLabels = (props) => (
  <div style={style.recordLabelListDivContainer}>
    <div style={style.recordLabelList1Div}>
      {props.state.recordLabels.map((recordLabel, i) => (
        <div style={{backgroundColor: 'blue'}} key={i} >
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

Div1OfRecordLabels.propTypes = {
  style: object,
  state: object
}

module.exports = Div1OfRecordLabels
