'use strict'

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('./../models')
const User = db.User

router.use(bodyParser.json({ extended: false }))

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
    return res.json({error:'there is no email'})
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
  var stringEmail = (encodeURI(req.body.email)).toString()
  User.create({
    email: stringEmail,
    password: req.body.password,
    type: 'user'
  })
  .then(function (data) {
    return res.json(data)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.post('/registrationValidation', function(req, res) {
  var stringEmail = (encodeURI(req.body.email)).toString()

  if(req.body.email) {
    User.findOne({
      where: {
        email: stringEmail
      }
    })
    .then((user) => {
      if (user) {
        return res.json({error:'email already exists'})
      }
    })
    .catch((error) => {
      return res.json({error:'error'})
    })
  } else if (req.body.email === null || req.body.email === undefined || req.body.email.length === 0) {
    return res.json({error: 'need to input an email'})
  } else {
    return true
  }
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
