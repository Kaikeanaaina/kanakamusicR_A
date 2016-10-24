const React = require('react')
const MyTitle = require('./MyTitle')

class About extends React.Component {
  render () {
    return (
      <div>
        <MyTitle title='About' />
      </div>
    )
  }
}

module.exports = About
