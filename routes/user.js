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

router.get('/', function (req, res) {
  console.log('22222222222')

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

router.post('/', function (req, res) {
  var urlname = (encodeURI(req.body.name)).toString()
    User.create({
    email: req.body.email,
    password: req.body.password
  })
  .then(function (data) {
    return res.json(data)
  })
  .catch(function (err) {
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
