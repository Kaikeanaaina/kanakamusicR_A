'use strict'

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('./../models')
const Venue = db.Venue

router.use(bodyParser.json({ extended: false }))

const exists = (req) => {
  if (typeof parseInt(req.params.id) === 'number') {
    Venue.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((venue) => {
      if (venue) {
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
  Venue.findAll({
    order: 'name'
  })
  .then(function (venues) {
    return res.json(venues)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/:id', function (req, res) {
  if (exists) {
    Venue.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function (venue) {
      return res.json(venue)
    })
    .catch(function (err) {
      return res.json({ error: err})
    })
  } else {
    res.json({success: false})
  }
})

router.post('/', function (req, res) {
  var urlname = (encodeURI(req.body.name)).toString()
    Venue.create({
    name: req.body.name,
    streetAddress: req.body.streetAddress,
    city: req.body.city,
    zipCode: req.body.zipCode,
    state: req.body.state,
    image: req.body.image
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
    Venue.update(
      {
        updatedAt: 'now()',
        name: req.body.name,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        zipCode: req.body.zipCode,
        state: req.body.state,
        image: req.body.image,
        id: req.body.id
      }, {
        where: {
          id: req.params.id
        }
      })
    .then(function (venue) {
      return res.json(venue)
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
    Venue.destroy({
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
