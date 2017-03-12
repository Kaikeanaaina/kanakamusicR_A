const React = require('react')
const { store } = require('./Store')
const { Provider } = require('react-redux')
const { Router, Route, hashHistory, IndexRedirect } = require('react-router')
// const { IndexRoute } = require('react-router')

const AddNewContent = require('./MainContent/AddNewContent')
const Layout = require('./Layout')
const LogIn = require('./LogIn')
const Home = require('./Home')
const TermsOfService = require('./TermsOfService')
const PrivacyPolicy = require('./PrivacyPolicy')
const ContactInformation = require('./ContactInformation')
const About = require('./About')
const Connect = require('./ConnectContent/Connect')
const Gigs = require('./GigContent/Gigs')
const Song = require('./MainContent/Song/Song')
const Artist = require('./MainContent/Artist/Artist')
const Album = require('./MainContent/Album/Album')
const RecordLabel = require('./MainContent/RecordLabel/RecordLabel')
const Chords = require('./Chords')
const EditSong = require('./MainContent/Song/EditSong')
const EditAlbum = require('./MainContent/Album/EditAlbum')
const EditArtist = require('./MainContent/Artist/EditArtist')
const EditRecordLabel = require('./MainContent/RecordLabel/EditRecordLabel')

const AddNewGig = require('./GigContent/AddNewGig')
const EditGig = require('./GigContent/EditGig')

const VenueList = require('./VenueContent/VenueList')
const AddNewVenue = require('./VenueContent/AddNewVenue')
const Venue = require('./VenueContent/Venue')

const SettingPage = require('./SettingContent/SettingPage')
const Credits = require('./SettingContent/Credits')
const LayoutAddOns = require('./SettingContent/LayoutAddOns')
const EditProfile = require('./SettingContent/EditProfile')
const Sources = require('./SettingContent/Sources')
const Feedback = require('./SettingContent/Feedback')

const BandMembers = require('./ConnectContent/BandMembers')

const AuthService = require('./utils/AuthService')
const auth = new AuthService('JkKudAwWVjXQsnOV9M7SyWQqECnsoAB3', 'kaikeanaaina.auth0.com')

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

const myRoutes = () => (
  <Route path='/' component={Layout} auth={auth} >
    <IndexRedirect to='/home' />
    <Route path='/home' component={Home} onEnter={requireAuth} />
    <Route path='/addNewContent' component={AddNewContent} />
    <Route path='/album/:id' component={Album} />
    <Route path='/album/edit/:id' component={EditAlbum} />
    <Route path='/artist/:id' component={Artist} />
    <Route path='/artist/edit/:id' component={EditArtist} />
    <Route path='/song/:id' component={Song} />
    <Route path='/song/edit/:id' component={EditSong} />
    <Route path='/recordLabel/:id' component={RecordLabel} />
    <Route path='/recordLabel/edit/:id' component={EditRecordLabel} />

    <Route path='/AddNewGig' component={AddNewGig} />
    <Route path='/AddNewVenue' component={AddNewVenue} />
    <Route path='/editGig/:id' component={EditGig} />
    <Route path='/Gigs' component={Gigs} />
    <Route path='/Venue' component={VenueList} />
    <Route path='/venue/:id' component={Venue} />

    <Route path='/Connect' component={Connect} />
    <Route path='/bandMembers/:id' component={BandMembers} />

    <Route path='/Chords' component={Chords} />

    <Route path='/Credits' component={Credits} />
    <Route path='/EditProfile' component={EditProfile} />
    <Route path='/Feedback' component={Feedback} />
    <Route path='/LayoutAddOns' component={LayoutAddOns} />
    <Route path='/logIn' component={LogIn} />
    <Route path='/Settings' component={SettingPage} />
    <Route path='/Sources' component={Sources} />

    <Route path='/About' component={About} />
    <Route path='/ContactInformation' component={ContactInformation} />
    <Route path='/PrivacyPolicy' component={PrivacyPolicy} />
    <Route path='/TermsOfService' component={TermsOfService} />
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
