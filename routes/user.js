'use strict'

const express = require('express')
const app = express();
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('./../models')
const User = db.User

const bcrypt = require('bcrypt')

router.use(bodyParser.json({ extended: false }))

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session');
//const CONFIG = require('../config/config.js');

app.use(session({secret: 'Keyboard cat'}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new LocalStrategy(
  (email, password, done) => {
    console.log('44444444444')
    User.findOne({
      where: {
        email: email
      }
    })
    .then(function(user){
      console.log('55555555555 user', user)

      bcrypt.compare(password, user.password, function(err, res){
        console.log('666666666 compared password and hash')
        if(err) {
          console.log('EEERRRROOOOOOORRRRR', err)
          return done (err)
        }
        if (!user) {
          console.log('NNNOOOOOO UUUUSSSSEEEEERRRRR')
          return done (null, false, {message: 'Incorrect Username'})
        }
        if (!res) {
          console.log('IINNVVAAALLLIIIDDDD PPPAAAAASSSWWWOOORRRDDD')
          return done (null, false, {message: 'Incorrect Password'})
        }
        console.log('77777777 user')
        return done(null, user)
      })
    })
  }
));

// router.post('/login', function(req, res){console.log('3333333333')}, passport.authenticate('local', {
//   successRedirect: '/Home',
//   failureRedirect: '/LogIn',
//   failureFlash: true
//   }), function(req, res) {
//   res.redirect('/Home')
// })

// router.post('/login',((req,res) => {console.log('33333333')}), (req,res) => {
//   passport.authenticate('local', (err, user) => {
//     console.log('pasiodfjaos;difjaposdifjpoa')
//   })
// })

router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then((data) =>{
    passport.authenticate('local', (err, user) => {
      if (err) {
        return res.json(err)
      }

      if (!data) {
        return res.json({message: 'invalid email'})
      }
      bcrypt.compare(req.body.password, data.dataValues.password, function(err, comparedHash){
        if(err) {
          return res.json ({message: err})
        }
        if (!comparedHash) {
          return res.json ({message: 'Incorrect Password'})
        }
        return res.json (data)
      })
    })(req, res);
  })
});

router.get('/logout', function(req,res){
  req.logout();
  return res.json({success: true})
});

// //authenticate middleware ('local') called in above function upon login
// passport.use(new LocalStrategy({
//   passReqToCallback: true
//   },
//   function(req, name, password, done) {
//     console.log('44444444444 hit the local Strategy')
//     User.findOne({
//       where: {
//         email : name
//       }
//     })
//     .then(function(user){
//       console.log('555555555 searched for a user')
//       bcrypt.compare(password, user.password, function(err, res){
//         console.log('666666666 compared password and hash')
//         if(err) {
//           return done (err)
//         }
//         if (!user) {
//           return done (null, false, {message: 'Incorrect Username'})
//         }
//         if (!res) {
//           return done (null, false, {message: 'Incorrect Password'})
//         }
//         return done(null, user)
//       })
//     })
// }));



function hash(req) {
  return new Promise (function(resolve, reject) {
    bcrypt.genSalt(12, function(err, salt) {
      if(err) {
        reject(err);
      }
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        resolve (hash);
      });
    });
  });
}

const exists = (req) => {
  if (typeof parseInt(req.params.id) === 'number') {
    User.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((user) => {
      if (user) {
        return true
      };
      return false
    })
    .catch((err) => {
      return false
    })
  } else {
    return false
  }
}

function registerValidation(req, res, next) {
  if(req.body.email) {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
    .then((user) => {
      if (user) {
        return res.json({error:'email already exists'})
      }
      next()
    })
    .catch((error) => {
      return res.json({error:'error'})
    })
  } else {
    return res.json({error:'there is no email value'})
  }
}

router.get('/', function (req, res) {
  User.findAll({
    order: 'email'
  })
  .then(function (users) {
    return res.json(users)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/:id', function (req, res) {
  console.log('1111111111', req.params.id);
  // if (exists) {
  //   User.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .then(function (user) {
  //     return res.json(user)
  //   })
  //   .catch(function (err) {
  //     return res.json({ error: err})
  //   })
  // } else {
  //   res.json({success: false})
  // }
})

router.post('/login', function(req, res) {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(function(user) {
    if (user) {

      bcrypt.compare(req.body.password, user.password, function (err, response) {
        if (response) {
          return res.json({user: user.dataValues})
        } else {
          return res.json({error: 'Invalid email or password'})
        }
      })
    } else {
      return res.json({error: 'invalid email or password'})
    }
  })
})

router.post('/', registerValidation, function (req, res) {

  hash(req)
  .then(function(hash) {

    User.create({
      email : req.body.email,
      password: hash,
      type: 'user'
    })
    .then(function(user){
      return res.json(user)
    })
    .catch((error) => {
      return res.json({ error: error})
    })
  })
  .catch((err) => {
    return res.json({ error: err})
  })
})

router.put('/:id', function (req, res) {
  if (exists) {
    User.update(
      {
        updatedAt: 'now()',
        email: req.body.email,
        password: req.body.password,
        id: req.body.id
      }, {
        where: {
          id: req.params.id
        }
      })
    .then(function (user) {
      return res.json(user)
    })
    .catch(function (err) {
      return res.json({ error: err})
    })
  } else {
    res.json({succes: false})
  }
})

router.delete('/:id', function (req, res) {
  if (exists) {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (data) {
      return res.json(data)
    })
    .catch(function (err) {
      return res.json({ error: err})
    })
  } else {
    res.json({success: false})
  }
})

module.exports = router
