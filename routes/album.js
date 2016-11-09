'use strict'

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('./../models');
const Album = db.Album;

router.use(bodyParser.json({ extended: false }));

router.get('/', function(req, res) {
  Album.findAll()
    .then (function(albums){
      return res.json(albums);
    });
});

router.post('/', function(req, res) {
  Album.create({
    title: req.body.title,
    description: req.body.description,
    ArtistId: req.body.ArtistId,
    RecordLabelId: req.body.RecordLabelId,
    visibility: false
  })
  .then(function(albums){
    return res.json(albums)
  })
})

router.get('/ofArtist/:id', function(req, res) {
  Album.findAll({
    where: {
      ArtistId: encodeURI(req.params.id)
    }
  })
  .then(function(albums){
    return res.json(albums);
  });
});

router.get('/:id', function (req, res) {
  Album.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(function (album) {
    return res.json(album)
  })
})

module.exports = router;
