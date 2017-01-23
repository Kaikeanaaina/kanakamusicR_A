const React = require('react')
const MyTitle = require('./MyTitle')
const ArtistList = require('./MainContent/Artist/ArtistList')

class Connect extends React.Component {
  render () {
    return (
      <div>
        <MyTitle title='Connect' />
        <ArtistList type='connect' />
      </div>
    )
  }
}

module.exports = Connect
