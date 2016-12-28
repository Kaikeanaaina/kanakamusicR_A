const React = require('react')
const axios = require('axios')
const { domain } = require('../Domain')

class EditRecordLabel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      RecordLabel: {}
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.DeleteRecordLabel = this.DeleteRecordLabel.bind(this)
  }
  componentDidMount () {
    axios.get(`${domain}/recordLabels/${this.props.params.id}`)
    .then((res) => {
      this.setState({
        RecordLabel: res.data
      })
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  onSubmit (e) {
    e.preventDefault()

    let object = {
      id: this.state.RecordLabel.id
    }

    let splitName = this.refs.name.value.split('')

    if (this.refs.name.value) {
      if (splitName[0] === splitName[0].toUpperCase()) {
        object.name = this.refs.name.value
      } else {
        // throw error message here
        return console.log('tell the user to make sure the name starts in upper case')
      }
    } else {
      object.name = this.state.RecordLabel.name
    }

    axios.put(`${domain}/recordLabels/${this.state.RecordLabel.id}`, object)
    .then((res) => {
      window.location.href = `/#/recordLabel/${this.state.RecordLabel.id}`
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  DeleteRecordLabel (e) {
    e.preventDefault()
    axios.delete(`${domain}/recordLabels/${this.state.RecordLabel.id}`)
    .then((res) => {
      window.location.href = `/#/`
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  render () {
    return (
      <div>
        <div>
          <h1> Edit Record Label Page </h1>
        </div>
        <div>
          <form onSubmit={this.onSubmit}>
            <div>
              <label>
                <span> Name </span>
                <input ref='name' placeholder={this.state.RecordLabel.name} />
              </label>
            </div>
            <div>
              <button type='submit'> Edit Record Label </button>
            </div>
          </form>
          <div>
            <button onClick={this.DeleteRecordLabel} > Delete RecordLabel </button>
          </div>
        </div>
      </div>
    )
  }
}

EditRecordLabel.propTypes = {
  params: React.PropTypes.object
}

module.exports = EditRecordLabel
