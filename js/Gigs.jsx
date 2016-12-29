const React = require('react')
const MyTitle = require('./MyTitle')

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

        <div style={{backgroundColor: 'rgba(0,255,0,0.4)'}}>
          <h3>Event Name</h3>
          <h3>Date</h3>
          <h3>Times</h3>
          <h3>Artists</h3>
          <h3>Venue</h3>
          <h3>Age</h3>
          <h3>Ticket Price</h3>
          <h3>Promoters</h3>
          <h3>contact</h3>
        </div>

      </div>
    )
  }
}

module.exports = Gigs
