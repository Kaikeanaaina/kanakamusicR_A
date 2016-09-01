const React = require('react')
const LandingHeader = require('./LandingHeader')
const LandingFooter = require('./LandingFooter')
const Artists = require('./Artists')

const Landing = () => (
  <div className=''>
    <div className='home-info'>

      <LandingHeader />

      <Artists />

      <LandingFooter />

    </div>
  </div>
)

module.exports = Landing
