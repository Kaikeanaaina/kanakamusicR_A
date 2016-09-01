const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../public/data')

const Artist = () => (
  <div className='container'>
    <div className='shows'>
      {data.artists.map((artist) => (
        <ShowCard {...artist} />
      ))}
    </div>
  </div>
)

module.exports = Artist
