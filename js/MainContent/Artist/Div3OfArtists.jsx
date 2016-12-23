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
  artistList3Div: {
    width: '32%'
  },
  artistLink: {
    textDecoration: 'none',
    fontSize: '24px'
  },
  artistText: {
    borderBottom: 'black solid 1px',
    color: 'grey'
  }
}

const Div3OfArtists = (props) => (
  <div style={style.artistListDivContainer}>
    <div style={style.artistList3Div}>
      {props.state.artists3DivArray1.map((artist, i) => (
        <div style={artist.visibilityByArtist === true ? {backgroundColor: 'none'} : {backgroundColor: 'red'}} key={i} >
          <Link key={i} to={`/artist/${artist.id}`} style={style.artistLink} >
            <div key={i} style={style.artistText}>
              {artist.name}
            </div>
            <br />
          </Link>
        </div>
      ))}
    </div>
    <div style={style.artistList3Div}>
      {props.state.artists3DivArray2.map((artist, i) => (
        <div style={{backgroundColor: 'blue'}} key={i} >
          <Link key={i} to={`/artist/${artist.id}`} style={style.artistLink} >
            <div key={i} style={style.artistText}>
              {artist.name}
            </div>
            <br />
          </Link>
        </div>
      ))}
    </div>
    <div style={style.artistList3Div}>
      {props.state.artists3DivArray3.map((artist, i) => (
        <div style={{backgroundColor: 'green'}} key={i} >
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

Div3OfArtists.propTypes = {
  style: object,
  state: object
}

module.exports = Div3OfArtists
