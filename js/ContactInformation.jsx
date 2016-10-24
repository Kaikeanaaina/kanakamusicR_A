const React = require('react')
const MyTitle = require('./MyTitle')

class ContactInformation extends React.Component {
  render () {
    return (
      <div>
        <MyTitle title='ContactInformation' />
      </div>
    )
  }
}

module.exports = ContactInformation
