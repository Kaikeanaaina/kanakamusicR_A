const React = require('react')
const { Link } = require('react-router')

const style = {
  albumListContainer: {

  },
  albumListDivContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around'
  },
  albumList4Div: {
    width: '24%'
  },
  albumLink: {
    textDecoration: 'none',
    fontSize: '24px'
  },
  albumText: {
    borderBottom: 'black solid 1px',
    color: 'grey'
  }
}

function checkVisibility (album) {
  if (album.visibilityByAlbum === false || album.visibilityByArtist === false) {
    return {backgroundColor: 'rgba(255,0,0,0.4)'}
  }
}

const Div4OfAlbums = (props) => (
  <div style={style.albumListDivContainer}>
    <div style={style.albumList4Div}>
      {props.state.albums4DivArray1.map((album, i) => (
        <div style={checkVisibility(album)} key={i} >
          <Link key={i} to={`/album/${album.id}`} style={style.albumLink} >
            <div key={i} style={style.albumText}>
              {album.title}
            </div>
            <br />
          </Link>
        </div>
      ))}
    </div>
    <div style={style.albumList4Div}>
      {props.state.albums4DivArray2.map((album, i) => (
        <div style={checkVisibility(album)} key={i} >
          <Link key={i} to={`/album/${album.id}`} style={style.albumLink} >
            <div key={i} style={style.albumText}>
              {album.title}
            </div>
            <br />
          </Link>
        </div>
      ))}
    </div>
    <div style={style.albumList4Div}>
      {props.state.albums4DivArray3.map((album, i) => (
        <div style={checkVisibility(album)} key={i} >
          <Link key={i} to={`/album/${album.id}`} style={style.albumLink} >
            <div key={i} style={style.albumText}>
              {album.title}
            </div>
            <br />
          </Link>
        </div>
      ))}
    </div>
    <div style={style.albumList4Div}>
      {props.state.albums4DivArray4.map((album, i) => (
        <div style={checkVisibility(album)} key={i} >
          <Link key={i} to={`/album/${album.id}`} style={style.albumLink} >
            <div key={i} style={style.albumText}>
              {album.title}
            </div>
            <br />
          </Link>
        </div>
      ))}
    </div>
  </div>
)

const { object } = React.PropTypes

Div4OfAlbums.propTypes = {
  state: object
}

module.exports = Div4OfAlbums
