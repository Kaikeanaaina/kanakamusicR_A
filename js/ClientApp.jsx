const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Artist = require('./Artist')
const { Router, Route, hashHistory } = require('react-router')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/artist' component={Artist} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
