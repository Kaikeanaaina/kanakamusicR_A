const React = require('react')

class GigCard extends React.Component {
  render () {
    return (
      <div>
        <h1> Gig Card </h1>

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

module.exports = GigCard
