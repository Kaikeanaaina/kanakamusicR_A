const React = require('react')
const { Link } = require('react-router')

const Footer = () => (
  <div id='footer' className='Footer'>
    <h5> this is the footer</h5>
    <p> social medias</p>
    <p> email list</p>
    <Link to='/about'> About </Link>
    <br />
    <Link to='/PrivacyPolicy'> PrivacyPolicy </Link>
    <br />
    <Link to='/TermsOfService'> TermsOfService </Link>
    <br />
    <Link to='/ContactInformation'> ContactInformation </Link>
  </div>
)

module.exports = Footer
