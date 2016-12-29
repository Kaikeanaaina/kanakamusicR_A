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
  songList2Div: {
    width: '49%'
  },
  songLink: {
    textDecoration: 'none',
    fontSize: '24px'
  },
  SongText: {
    borderBottom: 'black solid 1px',
    color: 'grey'
  }
}

function checkVisibility (song) {
  if (song.visibilityBySong === false || song.visibilityByAlbum === false || song.visibilityByArtist === false) {
    return {backgroundColor: 'rgba(255,0,0,0.4)'}
  }
}

const Div2OfSongs = (props) => (
  <div style={style.songListDivContainer}>
    <div style={style.songList2Div}>
      {props.state.songs2DivArray1.map((song, i) => (
        <div style={checkVisibility(song)} key={i} >
          <Link key={i} to={`/song/${song.id}`} style={style.songLink} >
            <div key={i} style={style.SongText}>
              {song.title}
            </div>
            <br />
          </Link>
        </div>
      ))}
    </div>
    <div style={style.songList2Div}>
      {props.state.songs2DivArray2.map((song, i) => (
        <div style={checkVisibility(song)} key={i} >
          <Link key={i} to={`/song/${song.id}`} style={style.songLink} >
            <div key={i} style={style.SongText}>
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

Div2OfSongs.propTypes = {
  style: object,
  state: object
}

module.exports = Div2OfSongs
