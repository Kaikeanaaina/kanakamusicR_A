'use strict'

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const db = require('./../models')
const User = db.User


router.use(bodyParser.json({ extended: false }))

passport.serializeUser(function(user, done) {
 done(null, user);
})
passport.deserializeUser(function(user, done) {
 done(null, user);
})

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

router.post('/', registerValidation, function (req, res) {
  console.log('1111111 made it to the sign up');

  hash(req)
  .then(function(hash) {
    console.log('222222222' , hash)

    console.log('3333333333', userObj)

    User.create({
      email : req.body.email,
      password: hash,
      type: 'user'
    })
    .then(function(user){
      console.log('44444444', user)
      req.login(user, function(err) {
        if(err) {
          return next(err)
        }
        return res.json(user)
      })
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
