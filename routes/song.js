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
    chord1: req.body.chord1,
    chord2: req.body.chord2,
    chord3: req.body.chord3,
    chord4: req.body.chord4,
    chord5: req.body.chord5,
    chord6: req.body.chord6,
    chord7: req.body.chord7,
    chord8: req.body.chord8,
    chord9: req.body.chord9,
    chord10: req.body.chord10,
    chord11: req.body.chord11,
    chord12: req.body.chord12,
    chord13: req.body.chord13,
    chord14: req.body.chord14,
    chord15: req.body.chord15,
    chord16: req.body.chord16,
    chord17: req.body.chord17,
    chord18: req.body.chord18,
    chord19: req.body.chord19,
    chord20: req.body.chord20,
    chord21: req.body.chord21,
    chord22: req.body.chord22,
    chord23: req.body.chord23,
    chord24: req.body.chord24,
    chord25: req.body.chord25,
    chord26: req.body.chord26,
    chord27: req.body.chord27,
    chord28: req.body.chord28,
    chord29: req.body.chord29,
    chord30: req.body.chord30,
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
        chord1: req.body.chord1,
        chord2: req.body.chord2,
        chord3: req.body.chord3,
        chord4: req.body.chord4,
        chord5: req.body.chord5,
        chord6: req.body.chord6,
        chord7: req.body.chord7,
        chord8: req.body.chord8,
        chord9: req.body.chord9,
        chord10: req.body.chord10,
        chord11: req.body.chord11,
        chord12: req.body.chord12,
        chord13: req.body.chord13,
        chord14: req.body.chord14,
        chord15: req.body.chord15,
        chord16: req.body.chord16,
        chord17: req.body.chord17,
        chord18: req.body.chord18,
        chord19: req.body.chord19,
        chord20: req.body.chord20,
        chord21: req.body.chord21,
        chord22: req.body.chord22,
        chord23: req.body.chord23,
        chord24: req.body.chord24,
        chord25: req.body.chord25,
        chord26: req.body.chord26,
        chord27: req.body.chord27,
        chord28: req.body.chord28,
        chord29: req.body.chord29,
        chord30: req.body.chord30,
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
      AlbumId: req.params.id
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
