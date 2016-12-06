'use strict'

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('./../models')
const Song = db.Song

router.use(bodyParser.json({ extended: false }))

const exists = (req) => {
  if (typeof parseInt(req.params.id) === 'number') {
    Song.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((song) => {
      if (song) {
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
  Song.findAll({
    order: 'title'
  })
  .then(function (songs) {
    return res.json(songs)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/ByAlbumId/:id', function (req, res) {
  Song.findAll({
    where: {
      AlbumId: encodeURI(req.params.id)
    }
  })
  .then(function (songs) {
    return res.json(songs)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/ByArtistId/:id', function (req, res) {
  Song.findAll({
    where: {
      ArtistId: encodeURI(req.params.id)
    }
  })
  .then(function (songs) {
    return res.json(songs)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/:id', function (req, res) {
  if (exists) {
    Song.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function (song) {
      return res.json(song)
    })
    .catch(function (err) {
      return res.json({ error: err})
    })
  } else {
    res.json({success: false})
  }
})

router.post('/', function (req, res) {
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
    ArtistId: req.body.ArtistId,
    AlbumId: req.body.AlbumId,
    type: req.body.type,
    totalViews: 0,
    weeklyViews: 0,
    monthlyViews: 0,
    memberTotalViews: 0,
    memberWeeklyViews: 0,
    memberMonthlyViews: 0,
    visibilityBySong: false,
    visibilityByAlbum: false,
    visibilityByArtist: false
  })
  .then(function (data) {
    return res.json(data)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.put('/ByArtistId/:id', function (req, res) {
  Song.update(
    {
      updatedAt: 'now()',
      visibilityByArtist: req.body.visibilityByArtist
    }, {
      where: {
        ArtistId: req.body.id
      }
    })
  .then(function (song) {
    return res.json(song)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.put('/ByAlbumId/:id', function (req, res) {
  Song.update(
    {
      updatedAt: 'now()',
      visibilityByAlbum: req.body.visibilityByAlbum
    }, {
      where: {
        AlbumId: req.body.id
      }
    })
  .then(function (song) {
    return res.json(song)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.put('/:id', function (req, res) {
  if (exists) {
    Song.update(
      {
        updatedAt: 'now()',
        title: req.body.title,
        ArtistId: req.body.ArtistId,
        AlbumId: req.body.AlbumId,
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
        type: req.body.type,
        visibilityBySong: req.body.visibilityBySong,
        urlTitle: encodeURI(req.body.title)
      }, {
        where: {
          id: req.params.id
        }
      })
    .then(function (song) {
      return res.json(song)
    })
    .catch(function (err) {
      return res.json({ error: err})
    })
  } else {
    res.json({succes: false})
  }
})

router.delete('/ByAlbumId/:id', function (req, res) {
  Song.destroy({
    where: {
      AlbumId: req.body.id
    }
  })
  .then(function (data) {
    return res.json(data)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.delete('/ByArtistId/:id', function (req, res) {
  Song.destroy({
    where: {
      ArtistId: req.params.id
    }
  })
  .then(function (data) {
    return res.json(data)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.delete('/:id', function (req, res) {
  if (exists) {
    Song.destroy({
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
