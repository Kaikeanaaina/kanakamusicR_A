const React = require('react')
const MyTitle = require('./MyTitle')
const axios = require('axios')

class OtherRoute extends React.Component {

  constructor (props) {
    super(props)
    this.update = this.update.bind(this)
    this.state = {
      text: 'this is the state text',
      cat: 0
    }
  }

  componentDidMount () {
    axios.get('http://localhost:5050/OtherRoute')
    .then((res) => (
      console.log('this is the console log', res)
      )
    )
  }

  update (e) {
    this.setState({text: e.target.value})
  }

  render () {
    return (
      <div>
        <MyTitle title='Hello this is the english version' />
        <br />
        <input type='text'
          onChange={this.update} />
        <h3>{this.state.text}</h3>
      </div>
    )
  }
}

module.exports = OtherRoute
