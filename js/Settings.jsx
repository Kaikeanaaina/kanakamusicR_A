const React = require('react')
const MyTitle = require('./MyTitle')

class Settings extends React.Component {
  render () {
    return (
      <div>
        <MyTitle title='Settings' />
      </div>
    )
  }
}

module.exports = Settings
