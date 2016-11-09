'use strict'

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('./../models')
const Artist = db.Artist

router.use(bodyParser.json({ extended: false }))

router.get('/', function (req, res) {
  Artist.findAll()
    .then(function (artists) {
      return res.json(artists)
    })
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
    visibility: false
  })
  .then(function (artist) {
    return res.json(artist)
  })
})

router.get('/:id', function (req, res) {
  Artist.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(function (artist) {
    return res.json(artist)
  })
})

module.exports = router
