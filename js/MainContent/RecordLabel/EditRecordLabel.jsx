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

    if (this.refs.name.value) {
      object.name = this.refs.name.value
    } else {
      object.name = this.state.Artist.name
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
    console.log('delete')
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
