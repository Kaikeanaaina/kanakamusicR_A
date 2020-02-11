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
  songList1DivContainer: {

  },
  songList1Div: {
    width: '99%'
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

const Div1OfSongs = (props) => (
  <div style={style.songListDivContainer}>
    <div style={style.songList1Div}>
      {props.state.songs.map((song, i) => (
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

Div1OfSongs.propTypes = {
  state: object
}

module.exports = Div1OfSongs
