'use strict'

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('./../models')
const Album = db.Album

router.use(bodyParser.json({ extended: false }))

router.get('/', function (req, res) {
  Album.findAll()
    .then(function (albums) {
      return res.json(albums)
    })
})

router.get('/ByArtistId/:id', function (req, res) {
  Album.findAll({
    where: {
      ArtistId: encodeURI(req.params.id)
    }
  })
  .then(function (albums) {
    return res.json(albums)
  })
})

router.get('/ByRecordLabelId/:id', function (req, res) {
  Album.findAll({
    where: {
      RecordLabelId: encodeURI(req.params.id)
    }
  })
  .then(function (albums) {
    return res.json(albums)
  })
})

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

router.post('/', function (req, res) {
  Album.create({
    title: req.body.title,
    description: req.body.description,
    ArtistId: req.body.ArtistId,
    RecordLabelId: req.body.RecordLabelId,
    visibilityByAlbum: false,
    visibilityByArtist: false
  })
  .then(function (albums) {
    return res.json(albums)
  })
})

router.put('/ByArtistId/:id', function(req, res){
  Album.update(
  {
    updatedAt : 'now()',
    visibilityByArtist : req.body.visibilityByArtist
  }, {
    where : {
      ArtistId : req.body.id
    }
  })
  .then(function(album){
    return res.json(album);
  });
});

router.put('/:id', function(req, res){
  Album.update(
  {
    updatedAt : 'now()',
    title : req.body.title,
    description : req.body.description,
    ArtistId: req.body.ArtistId,
    RecordLabelId : req.body.RecordLabelId,
    visibilityByAlbum : req.body.visibilityByAlbum
  }, {
    where : {
      id : req.params.id
    }
  })
  .then(function(album){
    return res.json(album);
  });
});

router.delete('/:id', function(req, res){
  Album.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(data){
    return res.json(data);
  });
});

module.exports = router
