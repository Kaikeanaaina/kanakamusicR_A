const React = require('react')
const { Link } = require('react-router')

class AddNewArtist extends React.Component {
  constructor (props) {
    super(props)
    this.recordLabelChange = this.recordLabelChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      linkToNewRecordLabel: false
    }
  }
  onSubmit (e) {
    e.preventDefault()
    console.log('hi')
  }
  recordLabelChange (e) {
    if (e.target.value === 'giveAddNewRecordLabelLink') {
      this.setState({
        linkToNewRecordLabel: true
      })
    }
  }
  render () {
    let AddNewRecordLabelLink = null
    if (this.state.linkToNewRecordLabel) {
      AddNewRecordLabelLink = <div><br></br><Link to='/AddNewRecordLabel'>Add New Record Label</Link><br></br></div>
    }
    return (
      <div>
        <h3>AddNewArtist</h3>
        <form onSubmit={this.onSubmit}>
          <select onChange={this.recordLabelChange}>
            <option >record label here</option>
            <option value='giveAddNewRecordLabelLink'>AddNewRecordLabel</option>

          </select>
          {AddNewRecordLabelLink}
          <button type='submit'> Add Artist </button>
        </form>
      </div>
    )
  }
}

module.exports = AddNewArtist
