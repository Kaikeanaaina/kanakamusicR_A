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
  albumList1DivContainer: {

  },
  albumList1Div: {
    width: '99%'
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

const Div1OfAlbums = (props) => (
  <div style={style.albumListDivContainer}>
    <div style={style.albumList1Div}>
      {props.state.albums.map((album, i) => (
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

Div1OfAlbums.propTypes = {
  state: object
}

module.exports = Div1OfAlbums
