const React = require('react')
const { Link } = require('react-router')

const style = {
  divContainer: {
  },
  KanakaMusicHeader: {
    textDecoration: 'none',
    fontSize: 50,
    color: 'black',
    width: '100%'
  },
  headerChildren: {
    display: 'flex',
    flexFlow: 'row no-wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(200,200,200,0.5)'
  },
  headerLinks: {
    textDecoration: 'none',
    color: 'black',
    flex: '1 0 20px'
  }
}

const HeaderNavbar = () => (
  <div id='header-bar' className='HeaderNavbar' style={style.divContainer}>
    <div>
      <Link to='/Home' id='KanakaMusic-Header' style={style.KanakaMusicHeader}>KanakaMusic</Link>
    </div>
    <div style={style.headerChildren}>
      <div><Link to='/addNewContent' style={style.headerLinks} > +Content </Link></div>
      <div><Link to='/Gigs' style={style.headerLinks} > Gigs </Link></div>
      <div><Link to='/Connect' style={style.headerLinks} > Connect </Link></div>
      <div><Link to='/Chords' style={style.headerLinks} >Chords</Link></div>
      <div><Link to='/Settings' style={style.headerLinks} > Settings </Link></div>
    </div>
  </div>
)

module.exports = HeaderNavbar
