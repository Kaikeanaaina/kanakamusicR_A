const React = require('react')
const { store } = require('./Store')
const { Provider } = require('react-redux')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const Layout = require('./Layout')
const Landing = require('./Landing')
const TermsOfService = require('./TermsOfService')
const PrivacyPolicy = require('./PrivacyPolicy')
const ContactInformation = require('./ContactInformation')
const About = require('./About')
const Connect = require('./Connect')
const Settings = require('./Settings')
const Gigs = require('./Gigs')
const Song = require('./MainContent/Song/Song')
const Artist = require('./MainContent/Artist/Artist')
const Chords = require('./Chords')
const Album = require('./MainContent/Album/Album')
const AddNewContent = require('./MainContent/AddNewContent')
const EditSong = require('./MainContent/Song/EditSong')
const EditAlbum = require('./MainContent/Album/EditAlbum')
const EditArtist = require('./MainContent/Artist/EditArtist')

const myRoutes = () => (
  <Route path='/' component={Layout}>
    <IndexRoute component={Landing} />
    <Route path='/TermsOfService' component={TermsOfService} />
    <Route path='/PrivacyPolicy' component={PrivacyPolicy} />
    <Route path='/ContactInformation' component={ContactInformation} />
    <Route path='/About' component={About} />
    <Route path='/Connect' component={Connect} />
    <Route path='/Settings' component={Settings} />
    <Route path='/Gigs' component={Gigs} />
    <Route path='/song/:id' component={Song} />
    <Route path='/artist/:id' component={Artist} />
    <Route path='/album/:id' component={Album} />
    <Route path='/Chords' component={Chords} />
    <Route path='/addNewContent' component={AddNewContent} />
    <Route path='/song/edit/:id' component={EditSong} />
    <Route path='/album/edit/:id' component={EditAlbum} />
    <Route path='/artist/edit/:id' component={EditArtist} />
  </Route>
)

class App extends React.Component {
  componentDidMount () {
    console.log('call all information', window.location.href)
  }
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          {myRoutes()}
        </Router>
      </Provider>
    )
  }
}

App.Routes = myRoutes

module.exports = App
