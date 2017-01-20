const React = require('react')

class Feedback extends React.Component {
  render () {
    return (
      <div>
        <h1> Feedback </h1>
        <label>
          Email:
          <br />
          <input placeholder='email' />
        </label>
        <br />
        <label>
          Topic:
          <br />
          <input placeholder='topic' />
        </label>

        <br />
        <br />
        <textArea placeholder='type here' />
        <br />
        <button> Send Feedback </button>
      </div>
    )
  }
}

module.exports = Feedback
