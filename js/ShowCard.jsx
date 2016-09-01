const React = require('react')

const ShowCard = (props) => (
  <div className=''>
    <h4 className=''>{props.name}</h4>
  </div>
)

const { string } = React.PropTypes

ShowCard.propTypes = {
  name: string.isRequired
}

module.exports = ShowCard
