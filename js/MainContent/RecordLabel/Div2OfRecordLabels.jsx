const React = require('react')
const { Link } = require('react-router')

const style = {
  recordlabelListContainer: {

  },
  recordlabelListDivContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around'
  },
  recordlabelList2Div: {
    width: '49%'
  },
  recordlabelLink: {
    textDecoration: 'none',
    fontSize: '24px'
  },
  recordlabelText: {
    borderBottom: 'black solid 1px',
    color: 'grey'
  }
}

const Div2OfRecordlabels = (props) => (
  <div style={style.recordlabelListDivContainer}>
    <div style={style.recordlabelList2Div}>
      {props.state.recordlabels2DivArray1.map((recordlabel, i) => (
        <div style={{backgroundColor: 'red'}} key={i} >
          <Link key={i} to={`/recordlabel/${recordlabel.id}`} style={style.recordlabelLink} >
            <div key={i} style={style.recordlabelText}>
              {recordlabel.name}
            </div>
            <br />
          </Link>
        </div>
      ))}
    </div>
    <div style={style.recordlabelList2Div}>
      {props.state.recordlabels2DivArray2.map((recordlabel, i) => (
        <div style={{backgroundColor: 'blue'}} key={i} >
          <Link key={i} to={`/recordlabel/${recordlabel.id}`} style={style.recordlabelLink} >
            <div key={i} style={style.recordlabelText}>
              {recordlabel.name}
            </div>
            <br />
          </Link>
        </div>
      ))}
    </div>
  </div>
)

const { object } = React.PropTypes

Div2OfRecordlabels.propTypes = {
  style: object,
  state: object
}

module.exports = Div2OfRecordlabels
