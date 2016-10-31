const React = require('react')
const axios = require('axios')

class AddNewRecordLabel extends React.Component {
  constructor (props) {
    super(props)
    this.state = ({
      artists: []
    })
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit (e) {
    e.preventDefault()
    if (!this.refs.name.value) {
      console.log('fill in the name input')
    } else {
      var object = {
        name: this.refs.name.value
      }
      axios.post('http://localhost:5050/recordLabels', object)
      .then((res) => {
        window.location.href = '/#/AddNewArtist'
      })
    }
  }
  render () {
    return (
      <div>
        <h3>add new record label</h3>
        <form onSubmit={this.onSubmit}>
          <label>
            <input type='text' ref='name' placeholder='name'/>
          </label>
          <br></br>
          <button type='submit'> Add Record Label </button>
        </form>
      </div>
    )
  }
}

module.exports = AddNewRecordLabel
