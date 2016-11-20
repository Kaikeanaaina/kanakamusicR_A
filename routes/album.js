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
    visibility: false
  })
  .then(function (albums) {
    return res.json(albums)
  })
})


router.put('/:id', function(req, res){
  Album.update(
  {
    updatedAt : 'now()',
    title : req.body.title,
    description : req.body.description,
    RecordLabelId : req.body.RecordLabelId,
    visibility : req.body.visibility
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
