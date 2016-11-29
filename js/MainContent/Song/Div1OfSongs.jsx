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

const Div1OfSongs = (props) => (
  <div style={style.songListDivContainer}>
    <div style={style.songList1Div}>
      {props.state.songs.map((song, i) => (
        <div style={{backgroundColor: 'blue'}} key={i} >
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
  style: object,
  state: object
}

module.exports = Div1OfSongs
