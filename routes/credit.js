'use strict'

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('./../models')
const Credit = db.Credit

router.use(bodyParser.json({ extended: false }))

const exists = (req) => {
  if (typeof parseInt(req.params.id) === 'number') {
    Credit.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((Credit) => {
      if (Credit) {
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
  Credit.findAll({
    order: 'id'
  })
  .then(function (Credits) {
    return res.json(Credits)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.post('/', function (req, res) {
  Credit.create({
    name: req.body.name,
    organization: req.body.organization,
    website: req.body.website
  })
  .then(function (Credit) {
    return res.json(Credit)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/:id', function (req, res) {
  if (exists) {
    Credit.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function (Credit) {
      return res.json(Credit)
    })
    .catch(function (err) {
      return res.json({ error: err})
    })
  } else {
    res.json({success: false})
  }
})

router.put('/:id', function (req, res) {
  Credit.update(
  {
    updatedAt: 'now()',
    name: req.body.name,
    organization: req.body.organization,
    website: req.body.website
  }, {
    where: {
      id: req.params.id
    }
  })
  .then(function (Credit) {
    return res.json(Credit)
  })
})

router.delete('/:id', function (req, res) {
  if (exists) {
    Credit.destroy({
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
