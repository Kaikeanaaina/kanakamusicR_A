const React = require('react')

class MyTitle extends React.Component {
  render () {
    return (
      <h1>
        {this.props.title}
      </h1>
    )
  }
}

MyTitle.propTypes = {
  title: React.PropTypes.string
}

module.exports = MyTitle
