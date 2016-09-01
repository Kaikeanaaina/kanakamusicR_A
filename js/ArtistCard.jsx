const React = require('react')

const ArtistCard = (props) => (
  <div className=''>
    <h4 className=''>{props.name}</h4>
  </div>
)

const { string } = React.PropTypes

ArtistCard.propTypes = {
  name: string.isRequired
}

module.exports = ArtistCard
