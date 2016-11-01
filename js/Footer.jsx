const React = require('react')
const { Link } = require('react-router')

const style = {
  divContainer: {
    backgroundColor: 'orange'
  },
  footerChildren: {
    display: 'flex',
    flexFlow: 'row no-wrap',
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'space-around'
  },
  footerLinks: {
    textDecoration: 'none',
    color: 'black',
    flex: '1 0 20px'
  },
  footerSocials: {
    display: 'flex',
    flexFlow: 'row no-wrap',
    justifyContent: 'space-around'
  },
  footerSocialsLink: {
    textDecoration: 'none',
    color: 'black',
    backgroundColor: 'yellow',
    flex: '1 0 20px'
  }
}

const Footer = () => (
  <div id='footer' className='Footer' style={style.divContainer}>
    <div style={style.footerSocials}>
      <div><p style={style.footerSocialsLink}> social medias </p></div>
      <div><p style={style.footerSocialsLink}> email list</p></div>
    </div>
    <div style={style.footerChildren}>
      <div><Link to='/about' style={style.footerLinks}> About </Link></div>
      <div><Link to='/PrivacyPolicy' style={style.footerLinks}> PrivacyPolicy </Link></div>
      <div><Link to='/TermsOfService' style={style.footerLinks}> TermsOfService </Link></div>
      <div><Link to='/ContactInformation' style={style.footerLinks}> ContactInformation </Link></div>
    </div>
  </div>
)

module.exports = Footer
