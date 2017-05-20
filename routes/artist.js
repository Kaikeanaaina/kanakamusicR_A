'use strict'

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('./../models')
const Artist = db.Artist

router.use(bodyParser.json({ extended: false }))

const exists = (req) => {
  if (typeof parseInt(req.params.id) === 'number') {
    Artist.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((artist) => {
      if (artist) {
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
  Artist.findAll({
    order: 'name'
  })
  .then(function (artists) {
    return res.json(artists)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/consumers/', function (req, res) {
  Artist.findAll({
    order: 'name',
    where: {
      visibilityByArtist: true
    }
  })
  .then(function (artists) {
    return res.json(artists)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/consumers/:id', function (req, res) {
  if (exists) {
    Artist.findOne({
      where: {
        id: req.params.id,
        visibilityByArtist: true
      }
    })
    .then(function (artist) {
      return res.json(artist)
    })
    .catch(function (err) {
      return res.json({ error: err})
    })
  } else {
    res.json({success: false})
  }
})

router.get('/:id', function (req, res) {
  if (exists) {
    Artist.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function (artist) {
      return res.json(artist)
    })
    .catch(function (err) {
      return res.json({ error: err})
    })
  } else {
    res.json({success: false})
  }
})

router.post('/', function (req, res) {
  Artist.create({
    name: req.body.name,
    type: req.body.type,
    facebook: req.body.facebook,
    instagram: req.body.instagram,
    twitter: req.body.twitter,
    bookingPhoneNumber: req.body.bookingPhoneNumber,
    bookingEmail: req.body.bookingEmail,
    description: req.body.description,
    visibilityByArtist: false
  })
  .then(function (artist) {
    return res.json(artist)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.put('/:id', function (req, res) {
  if (exists) {
    Artist.update(
      {
        updatedAt: 'now()',
        name: req.body.name,
        type: req.body.type,
        facebook: req.body.facebook,
        instagram: req.body.instagram,
        twitter: req.body.twitter,
        bookingPhoneNumber: req.body.bookingPhoneNumber,
        bookingEmail: req.body.bookingEmail,
        description: req.body.description,
        visibilityByArtist: req.body.visibilityByArtist
      }, {
        where: {
          id: req.params.id
        }
      })
    .then(function (artist) {
      return res.json(artist)
    })
    .catch(function (err) {
      return res.json({ error: err})
    })
  } else {
    res.json({success: false})
  }
})

router.delete('/:id', function (req, res) {
  if (exists) {
    Artist.destroy({
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
