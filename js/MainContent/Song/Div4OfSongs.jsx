const React = require('react')

const Div4OfSongs = (props) => (
  <div style={props.style.songList4Div}>
    {props.state.songs4DivArray1.map((song, i) => (
      <div style={{backgroundColor: 'red'}} key={i} >
        <Link key={i} to={`/song/${song.id}`} style={props.state.style.songLink} >
          <div key={i} style={props.style.SongText}>
            {song.title}
          </div>
          <br />
        </Link>
      </div>
    ))}
  </div>
  <div style={props.style.songList4Div}>
    {props.state.songs4DivArray2.map((song, i) => (
      <div style={{backgroundColor: 'blue'}} key={i} >
        <Link key={i} to={`/song/${song.id}`} style={props.style.songLink} >
          <div key={i} style={props.style.SongText}>
            {song.title}
          </div>
          <br />
        </Link>
      </div>
    ))}
  </div>
  <div style={props.style.songList4Div}>
    {props.state.songs4DivArray3.map((song, i) => (
      <div style={{backgroundColor: 'green'}} key={i} >
        <Link key={i} to={`/song/${song.id}`} style={props.style.songLink} >
          <div key={i} style={props.style.SongText}>
            {song.title}
          </div>
          <br />
        </Link>
      </div>
    ))}
  </div>
  <div style={props.style.songList4Div}>
    {props.state.songs4DivArray4.map((song, i) => (
      <div style={{backgroundColor: 'yellow'}} key={i} >
        <Link key={i} to={`/song/${song.id}`} style={props.style.songLink} >
          <div key={i} style={props.style.SongText}>
            {song.title}
          </div>
          <br />
        </Link>
      </div>
    ))}
  </div>
)

module.exports = Div4OfSongs
