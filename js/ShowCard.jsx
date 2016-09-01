const React = require('react')

const ShowCard = (props) => (
  <div className='show-card'>
    <div className='show-card-text'>
      <h3 className='show-card-title'>{props.name}</h3>
    </div>
  </div>
)

const { string } = React.PropTypes

ShowCard.propTypes = {
  name: string.isRequired
}

module.exports = ShowCard
