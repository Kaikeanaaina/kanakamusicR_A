require('babel-register')
const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const ReactRouter = require('react-router')
const match = ReactRouter.match
const RouterContext = ReactRouter.RouterContext
const ReactRedux = require('react-redux')
const Provider = ReactRedux.Provider
const Store = require('./js/Store.jsx')
const store = Store.store
const _ = require('lodash')
const fs = require('fs')
const port = (process.env.PORT || 5050)
const baseTemplate = fs.readFileSync('./index.html')
const template = _.template(baseTemplate)
const ClientApp = require('./js/ClientApp.jsx')
const Routes = ClientApp.Routes

const app = express()
const db = require('./models')
const User = db.User

app.use('/public', express.static('./public'))

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

passport.serializeUser( function ( user, done ) {
  return done( null, user );
});

passport.deserializeUser( function ( user, done ) {
  return done( null, user );
});

//authenticate middleware ('local') called in above function upon login
passport.use(new LocalStrategy({passReqToCallback: true}, function(req, name, password, done) {
  User.findOne({
    where: {
      email : name
    }
  })
  .then(function(user){
    console.log(' 3333333333    got in to the local strategy')
    // bcrypt.compare(password, user.password, function(err, res){
    //   if(err) {
    //     return done(err);
    //   }
    //   return done(null, user);
    // });
  }).catch(done);
}));

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  next()
})

app.use('/songs', require('./routes/song.js'))
app.use('/artists', require('./routes/artist.js'))
app.use('/albums', require('./routes/album.js'))
app.use('/recordLabels', require('./routes/recordLabel.js'))
app.use('/venues', require('./routes/venue.js'))
app.use('/gigs', require('./routes/gig.js'))
app.use('/privacyPolicies', require('./routes/privacyPolicy.js'))
app.use('/resources', require('./routes/resource.js'))
app.use('/credits', require('./routes/credit.js'))
app.use('/termsOfServices', require('./routes/termsOfService.js'))
app.use('/about', require('./routes/about.js'))
app.use('/contactInformation', require('./routes/contactInformation.js'))
app.use('/bandMembers', require('./routes/bandMembers.js'))
app.use('/users', require('./routes/user.js'))

app.use((req, res) => {
  match({ routes: Routes(), location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const body = ReactDOMServer.renderToString(
        React.createElement(Provider, {store},
          React.createElement(RouterContext, renderProps)
        )
      )
      res.status(200).send(template({ body }))
    } else {
      res.status(404).send('Not found')
    }
  })
})

var server = app.listen(port, function () {
  db.sequelize.sync()
  console.log('server listening on port ' + server.address().port)
})

