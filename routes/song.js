'use strict'

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('./../models')
const Song = db.Song

router.use(bodyParser.json({ extended: false }))

router.get('/', function (req, res) {
  Song.findAll()
  .then(function (songs) {
    return res.json(songs)
  })
}),

router.get('/:id', function (req, res) {
  Song.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(function (song) {
    return res.json(song)
  })
})

module.exports = router
