const React = require('react')
const { Link } = require('react-router')
const MyTitle = require('./MyTitle')
const SongList = require('./SongList')

class MyFirstComponent extends React.Component {
  render () {
    return (
      <div>
        <MyTitle title='Aloha this is kainoa' />
        <SongList />
        <Link to='/OtherRoute'>click to english</Link>
      </div>
    )
  }
}

module.exports = MyFirstComponent
