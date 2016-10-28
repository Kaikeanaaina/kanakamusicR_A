const React = require('react')
const { Link } = require('react-router')

const HeaderNavbar = () => (
  <div id='header-bar' className='HeaderNavbar'>
    <Link to='/'>KanakaMusic</Link>
    <h4>This is the header</h4>
    <Link to='/addNewSong'> +Song </Link>
    <p>Search</p>
    <form>
      <input type='text' />
    </form>
    <p>Songs</p>
    <Link to='/Gigs'> Gigs </Link>
    <br />
    <Link to='/Connect'> Connect </Link>
    <p>Chords</p>
    <Link to='/Settings'> Settings </Link>
  </div>
)

module.exports = HeaderNavbar
