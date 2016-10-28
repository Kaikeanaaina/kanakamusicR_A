const React = require('react')
const HeaderNavbar = require('./HeaderNavbar')
const Footer = require('./Footer')

const Layout = (props) => (
  <div className='app-container'>
    <HeaderNavbar />
    <br></br>
    {props.children}
    <br></br>
    <Footer className='footer'/>
  </div>
)

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout
