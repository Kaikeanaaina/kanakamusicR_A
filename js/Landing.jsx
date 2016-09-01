const React = require('react')
const LandingHeader = require('./LandingHeader')
const LandingFooter = require('./LandingFooter')
const { Link } = require('react-router')

const Landing = () => (
  <div className='app-container'>
    <div className='home-info'>

      <LandingHeader />

      <div id='body'>
        <h1 className='title'>svideo</h1>
        <Link to='/artist' className='browse-all'> or Browse All</Link>
      </div>

      <LandingFooter />

    </div>
  </div>
)

module.exports = Landing
