const React = require('react')
const { Link } = require('react-router')

const style = {
  songListContainer: {

  },
  songListDivContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around'
  },
  songList4Div: {
    width: '24%'
  },
  songLink: {
    textDecoration: 'none',
    fontSize: '24px'
  },
  songText: {
    borderBottom: 'black solid 1px',
    color: 'grey'
  }
}

function checkVisibility (song) {
  if (song.visibilityBySong === false || song.visibilityByAlbum === false || song.visibilityByArtist === false) {
    return {backgroundColor: 'rgba(255,0,0,0.4)'}
  }
}

const Div4OfSongs = (props) => (
  <div style={style.songListDivContainer}>
    <div style={style.songList4Div}>
      {props.state.songs4DivArray1.map((song, i) => (
        <div style={checkVisibility(song)} key={i} >
          <Link key={i} to={`/song/${song.id}`} style={style.songLink} >
            <div key={i} style={style.songText}>
              {song.title}
            </div>
            <br />
          </Link>
        </div>
      ))}
    </div>
    <div style={style.songList4Div}>
      {props.state.songs4DivArray2.map((song, i) => (
        <div style={checkVisibility(song)} key={i} >
          <Link key={i} to={`/song/${song.id}`} style={style.songLink} >
            <div key={i} style={style.songText}>
              {song.title}
            </div>
            <br />
          </Link>
        </div>
      ))}
    </div>
    <div style={style.songList4Div}>
      {props.state.songs4DivArray3.map((song, i) => (
        <div style={checkVisibility(song)} key={i} >
          <Link key={i} to={`/song/${song.id}`} style={style.songLink} >
            <div key={i} style={style.songText}>
              {song.title}
            </div>
            <br />
          </Link>
        </div>
      ))}
    </div>
    <div style={style.songList4Div}>
      {props.state.songs4DivArray4.map((song, i) => (
        <div style={checkVisibility(song)} key={i} >
          <Link key={i} to={`/song/${song.id}`} style={style.songLink} >
            <div key={i} style={style.songText}>
              {song.title}
            </div>
            <br />
          </Link>
        </div>
      ))}
    </div>
  </div>
)

const { object } = React.PropTypes

Div4OfSongs.propTypes = {
  style: object,
  state: object
}

module.exports = Div4OfSongs
