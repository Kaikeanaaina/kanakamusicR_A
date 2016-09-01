const React = require('react')
const data = require('../public/data')
const ShowArtistContent = require('./ShowArtistContent')

const ArtistContent = () => (
  <div>
    <h1>{data.artists.name}</h1>
      {data.artists[0].albums.map((album) => (
        <ShowArtistContent {...album} />
      ))}
  </div>
)

module.exports = ArtistContent
