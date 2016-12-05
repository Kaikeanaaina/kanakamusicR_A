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
  albumList2Div: {
    width: '49%'
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

const Div2OfAlbums = (props) => (
  <div style={style.albumListDivContainer}>
    <div style={style.albumList2Div}>
      {props.state.albums2DivArray1.map((album, i) => (
        <div style={{backgroundColor: 'red'}} key={i} >
          <Link key={i} to={`/album/${album.id}`} style={style.albumLink} >
            <div key={i} style={style.albumText}>
              {album.title}
            </div>
            <br />
          </Link>
        </div>
      ))}
    </div>
    <div style={style.albumList2Div}>
      {props.state.albums2DivArray2.map((album, i) => (
        <div style={{backgroundColor: 'blue'}} key={i} >
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

Div2OfAlbums.propTypes = {
  style: object,
  state: object
}

module.exports = Div2OfAlbums
