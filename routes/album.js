'use strict'

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('./../models')
const Album = db.Album

router.use(bodyParser.json({ extended: false }))

const exists = (req) => {
  if (typeof parseInt(req.params.id) === 'number') {
    Album.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((album) => {
      if (album) {
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
  Album.findAll({
    order: 'title'
  })
  .then(function (albums) {
    return res.json(albums)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/consumers', function (req, res) {
  Album.findAll({
    order: 'title',
    where: {
      visibilityByArtist: true,
      visibilityByAlbum: true
    }
  })
  .then(function (albums) {
    return res.json(albums)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/ByArtistId/:id', function (req, res) {
  Album.findAll({
    where: {
      ArtistId: req.params.id
    }
  })
  .then(function (albums) {
    return res.json(albums)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/consumers/ByArtistId/:id', function (req, res) {
  Album.findAll({
    where: {
      ArtistId: req.params.id,
      visibilityByAlbum: true,
      visibilityByArtist: true
    }
  })
  .then(function (albums) {
    return res.json(albums)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/ByRecordLabelId/:id', function (req, res) {
  Album.findAll({
    order: 'title',
    where: {
      RecordLabelId: encodeURI(req.params.id)
    }
  })
  .then(function (albums) {
    return res.json(albums)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/consumers/:id', function (req, res) {
  if (exists) {
    Album.findOne({
      where: {
        id: req.params.id,
        visibilityByAlbum: true,
        visibilityByArtist: true
      }
    })
    .then(function (album) {
      return res.json(album)
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
    Album.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function (album) {
      return res.json(album)
    })
    .catch(function (err) {
      return res.json({ error: err})
    })
  } else {
    res.json({success: false})
  }
})

router.post('/', function (req, res) {
  Album.create({
    title: req.body.title,
    description: req.body.description,
    ArtistId: req.body.ArtistId,
    RecordLabelId: req.body.RecordLabelId,
    visibilityByAlbum: false,
    visibilityByArtist: req.body.visibilityByArtist
  })
  .then(function (albums) {
    return res.json(albums)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.put('/ByArtistId/:id', function (req, res) {
  Album.update(
    {
      updatedAt: 'now()',
      visibilityByArtist: req.body.visibilityByArtist
    }, {
      where: {
        ArtistId: req.body.id
      }
    })
  .then(function (album) {
    return res.json(album)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.put('/:id', function (req, res) {
  if (exists) {
    Album.update(
      {
        updatedAt: 'now()',
        title: req.body.title,
        description: req.body.description,
        ArtistId: req.body.ArtistId,
        RecordLabelId: req.body.RecordLabelId,
        visibilityByAlbum: req.body.visibilityByAlbum
      }, {
        where: {
          id: req.params.id
        }
      })
    .then(function (album) {
      return res.json(album)
    })
    .catch(function (err) {
      return res.json({ error: err})
    })
  } else {
    res.json({success: false})
  }
})

router.delete('/ByArtistId/:id', function (req, res) {
  Album.destroy({
    where: {
      ArtistId: req.params.id
    }
  })
  .then(function (data) {q
    return res.json(data)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.delete('/:id', function (req, res) {
  if (exists) {
    Album.destroy({
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
