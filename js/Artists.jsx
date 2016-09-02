const React = require('react')
const data = require('../public/data')
const { Link } = require('react-router')

const Artists = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermEvent (event) {
    this.setState({ searchTerm: event.target.value })
  },
  render () {
    return (
      <div>
        <h2 className='brand'>Aloha</h2>
        <input value={this.state.searchTerm} type='text' placeholder='Search' onChange={this.handleSearchTermEvent} />

        <div>
          {data.artists
            .filter((artist) => `${artist.name}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((artist) => (
              <Link to={`/artist/${artist.name}`}>
                <h4 className=''>{artist.name}</h4>
              </Link>
          ))}
        </div>

      </div>
    )
  }
})

module.exports = Artists
