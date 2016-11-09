const React = require('react')
const HeaderNavbar = require('./HeaderNavbar')
const Footer = require('./Footer')

const style = {
  appContainer: {
    margin: '10px'
  }
}

const Layout = (props) => (
  <div className='app-container' style={style.appContainer} >
    <section>
      <HeaderNavbar />
      <br></br>
    </section>
    <section>
      {props.children}
      <br></br>
    </section>
    <section>
      <Footer className='footer'/>
    </section>
  </div>
)

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout
