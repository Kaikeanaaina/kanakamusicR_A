const React = require('react')

const ShowArtistContent = (props) => (
  <div>
    <h4>{props.title}</h4>
  </div>
)

const { string } = React.PropTypes

ShowArtistContent.propTypes = {
  title: string.isRequired
}

module.exports = ShowArtistContent
