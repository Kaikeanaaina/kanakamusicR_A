const React = require('react')
const { Link } = require('react-router')
const Header = require('./HeaderNavbar')
const Footer = require('./Footer')
const MyTitle = require('./MyTitle')
const SongList = require('./SongList')

class MyFirstComponent extends React.Component {
  render () {
    return (
      <div>
        <Header className='header' />
        <MyTitle title='Aloha this is kainoa' />
        <SongList />
        <Link to='/OtherRoute'>click to english</Link>
        <Footer />
      </div>
    )
  }
}

module.exports = MyFirstComponent
