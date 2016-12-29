const React = require('react')
const MyTitle = require('./../MyTitle')
const GigCard = require('./GigCard')

class Gigs extends React.Component {
  render () {
    return (
      <div>
        <MyTitle title='Gigs' />

        <div style={{backgroundColor: 'rgba(0,0,255, 0.4)'}}>
          <h2>filters</h2>
          <input placeholder='search' />
          <h3>search bar</h3>
          <h3>date bar</h3>
          <h3>calendar</h3>
        </div>

        <GigCard />

      </div>
    )
  }
}

module.exports = Gigs
