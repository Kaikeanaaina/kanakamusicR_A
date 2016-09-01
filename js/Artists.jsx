const React = require('react')
const data = require('../public/data')
const { Link } = require('react-router')

const Artists = () => (
  <div>
    {data.artists.map((artist) => (
      <Link to={`/artist/${artist.name}`}>
        <h4 className=''>{artist.name}</h4>
      </Link>
    ))}
  </div>
)

module.exports = Artists
