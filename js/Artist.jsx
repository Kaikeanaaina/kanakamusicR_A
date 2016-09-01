const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../public/data')
const { Link } = require('react-router')

const Artist = () => (
  <div>
    <div>
      {data.artists.map((artist) => (
        <Link to={`/artist/${artist.name}`}>
          <ShowCard {...artist} />
        </Link>
      ))}
    </div>
  </div>
)

module.exports = Artist
