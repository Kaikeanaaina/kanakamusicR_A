const React = require('react')
const HeaderNavbar = require('./HeaderNavbar')

const Layout = (props) => (
  <div className='app-container'>
    <HeaderNavbar />
    {props.children}
  </div>
)

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout
