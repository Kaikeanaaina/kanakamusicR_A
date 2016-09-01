const React = require('react')
const ArtistCard = require('./ArtistCard')
const data = require('../public/data')
const { Link } = require('react-router')

const Artists = () => (
  <div>
    {data.artists.map((artist) => (
      <Link to={`/artist/${artist.name}`}>
        <ArtistCard {...artist} />
      </Link>
    ))}
  </div>
)

module.exports = Artists
