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

router.post('/', function (req, res) {
  console.log('made it backend', req.body)
  var urltitle = (encodeURI(req.body.title)).toString()
  Song.create({
    title: req.body.title,
    line1: req.body.line1,
    line2: req.body.line2,
    line3: req.body.line3,
    line4: req.body.line4,
    line5: req.body.line5,
    line6: req.body.line6,
    line7: req.body.line7,
    line8: req.body.line8,
    line9: req.body.line9,
    line10: req.body.line10,
    line11: req.body.line11,
    line12: req.body.line12,
    line13: req.body.line13,
    line14: req.body.line14,
    line15: req.body.line15,
    line16: req.body.line16,
    line17: req.body.line17,
    line18: req.body.line18,
    line19: req.body.line19,
    line20: req.body.line20,
    line21: req.body.line21,
    line22: req.body.line22,
    line23: req.body.line23,
    line24: req.body.line24,
    line25: req.body.line25,
    line26: req.body.line26,
    line27: req.body.line27,
    line28: req.body.line28,
    line29: req.body.line29,
    line30: req.body.line30,
    description: req.body.description,
    urlTitle: urltitle,
    ArtistId: null,
    AlbumId: null,
    type: req.body.type,
    totalViews: 0,
    weeklyViews: 0,
    monthlyViews: 0,
    memberTotalViews: 0,
    memberWeeklyViews: 0,
    memberMonthlyViews: 0,
    visibility: false
  })
    .then(function (data) {
      return res.json(data);
    });
});

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
