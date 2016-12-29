const React = require('react')
const { Link } = require('react-router')

const style = {
  artistListContainer: {

  },
  artistListDivContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around'
  },
  artistList4Div: {
    width: '24%'
  },
  artistLink: {
    textDecoration: 'none',
    fontSize: '24px'
  },
  artistText: {
    borderBottom: 'black solid 1px',
    color: 'black'
  }
}

function checkVisibility (artist) {
  if (artist.visibilityByArtist === false) {
    return {backgroundColor: 'rgba(255,0,0,0.4)'}
  }
}

const Div4OfArtists = (props) => (
  <div style={style.artistListDivContainer}>
    <div style={style.artistList4Div}>
      {props.state.artists4DivArray1.map((artist, i) => (
        <div style={checkVisibility(artist)} key={i} >
          <Link key={i} to={`/artist/${artist.id}`} style={style.artistLink} >
            <div key={i} style={style.artistText}>
              {artist.name}
            </div>
            <br />
          </Link>
        </div>
      ))}
    </div>
    <div style={style.artistList4Div}>
      {props.state.artists4DivArray2.map((artist, i) => (
        <div style={checkVisibility(artist)} key={i} >
          <Link key={i} to={`/artist/${artist.id}`} style={style.artistLink} >
            <div key={i} style={style.artistText}>
              {artist.name}
            </div>
            <br />
          </Link>
        </div>
      ))}
    </div>
    <div style={style.artistList4Div}>
      {props.state.artists4DivArray3.map((artist, i) => (
        <div style={checkVisibility(artist)} key={i} >
          <Link key={i} to={`/artist/${artist.id}`} style={style.artistLink} >
            <div key={i} style={style.artistText}>
              {artist.name}
            </div>
            <br />
          </Link>
        </div>
      ))}
    </div>
    <div style={style.artistList4Div}>
      {props.state.artists4DivArray4.map((artist, i) => (
        <div style={checkVisibility(artist)} key={i} >
          <Link key={i} to={`/artist/${artist.id}`} style={style.artistLink} >
            <div key={i} style={style.artistText}>
              {artist.name}
            </div>
            <br />
          </Link>
        </div>
      ))}
    </div>
  </div>
)

const { object } = React.PropTypes

Div4OfArtists.propTypes = {
  style: object,
  state: object
}

module.exports = Div4OfArtists
