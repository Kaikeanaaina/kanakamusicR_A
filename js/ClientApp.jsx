const React = require('react')
const { store } = require('./Store')
const { Provider } = require('react-redux')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const Layout = require('./Layout')
const LogIn = require('./LogIn')
const Home = require('./Home')
const TermsOfService = require('./TermsOfService')
const PrivacyPolicy = require('./PrivacyPolicy')
const ContactInformation = require('./ContactInformation')
const About = require('./About')
const Connect = require('./Connect')
const Gigs = require('./GigContent/Gigs')
const Song = require('./MainContent/Song/Song')
const Artist = require('./MainContent/Artist/Artist')
const Album = require('./MainContent/Album/Album')
const RecordLabel = require('./MainContent/RecordLabel/RecordLabel')
const Chords = require('./Chords')
const AddNewContent = require('./MainContent/AddNewContent')
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

const myRoutes = () => (
  <Route path='/' component={Layout}>
    <IndexRoute component={Home} />
    <Route path='/LogIn' component={LogIn} />
    <Route path='/TermsOfService' component={TermsOfService} />
    <Route path='/PrivacyPolicy' component={PrivacyPolicy} />
    <Route path='/ContactInformation' component={ContactInformation} />
    <Route path='/About' component={About} />
    <Route path='/Connect' component={Connect} />
    <Route path='/Gigs' component={Gigs} />
    <Route path='/song/:id' component={Song} />
    <Route path='/artist/:id' component={Artist} />
    <Route path='/album/:id' component={Album} />
    <Route path='/recordLabel/:id' component={RecordLabel} />
    <Route path='/Chords' component={Chords} />
    <Route path='/addNewContent' component={AddNewContent} />
    <Route path='/song/edit/:id' component={EditSong} />
    <Route path='/album/edit/:id' component={EditAlbum} />
    <Route path='/artist/edit/:id' component={EditArtist} />
    <Route path='/recordLabel/edit/:id' component={EditRecordLabel} />
    <Route path='/AddNewGig' component={AddNewGig} />
    <Route path='/AddNewVenue' component={AddNewVenue} />
    <Route path='/Venue' component={VenueList} />
    <Route path='/venue/:id' component={Venue} />
    <Route path='/editGig/:id' component={EditGig} />

    <Route path='/Settings' component={SettingPage} />
    <Route path='/Credits' component={Credits} />
    <Route path='/LayoutAddOns' component={LayoutAddOns} />
    <Route path='/EditProfile' component={EditProfile} />
    <Route path='/Sources' component={Sources} />
    <Route path='/Feedback' component={Feedback} />
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
