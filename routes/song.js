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
  console.log(1111111, '/')
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
  console.log('aaaaaaaaaaaa')
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
  console.log('bbbbbbbbbbb')
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

router.get('/consumers/', function (req, res) {
  console.log('ccccccccccccccc')
  Song.findAll({
    order: 'title',
    where: {
      visibilityBySong: true,
      visibilityByAlbum: true,
      visibilityByArtist: true
    }
  })
  .then(function (songs) {
    return res.json(songs)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/consumers/ByAlbumId/:id', function (req, res) {
  console.log('dddddddddd')
  Song.findAll({
    where: {
      AlbumId: encodeURI(req.params.id),
      visibilityBySong: true,
      visibilityByAlbum: true,
      visibilityByArtist: true
    }
  })
  .then(function (songs) {
    return res.json(songs)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/consumers/ByArtistId/:id', function (req, res) {
  console.log('eeeeeeeeeeeeee')
  Song.findAll({
    where: {
      ArtistId: encodeURI(req.params.id),
      visibilityBySong: true,
      visibilityByAlbum: true,
      visibilityByArtist: true
    }
  })
  .then(function (songs) {
    return res.json(songs)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/consumers/:id', function (req, res) {
  console.log(111111111111, 'consumner id')
  if (exists) {
    console.log(2222222222)
    Song.update(
      {
        totalViews: this.totalViews++
      }, {
        where: {
          id: req.params.id
        }
      })
    .then(function (song) {
      console.log(333333333, song, req.params.id)
      Song.findOne({
        where: {
          id: req.params.id,
          visibilityBySong: true,
          visibilityByAlbum: true,
          visibilityByArtist: true
        }
      })
      .then(function (song) {
        console.log(444444444444, song, req.params.id)
        res.json(song)
      })
      .catch(function (err) {
        return res.json({ error: err})
      })
    })
    .catch(function (err) {
      return res.json({ error: err})
    })
  } else {
    res.json({success: false})
  }
})

router.get('/:id', function (req, res) {
  console.log('111111111 id')
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
    lyric1: req.body.lyric1,
    lyric2: req.body.lyric2,
    lyric3: req.body.lyric3,
    lyric4: req.body.lyric4,
    lyric5: req.body.lyric5,
    lyric6: req.body.lyric6,
    lyric7: req.body.lyric7,
    lyric8: req.body.lyric8,
    lyric9: req.body.lyric9,
    lyric10: req.body.lyric10,
    lyric11: req.body.lyric11,
    lyric12: req.body.lyric12,
    lyric13: req.body.lyric13,
    lyric14: req.body.lyric14,
    lyric15: req.body.lyric15,
    lyric16: req.body.lyric16,
    lyric17: req.body.lyric17,
    lyric18: req.body.lyric18,
    lyric19: req.body.lyric19,
    lyric20: req.body.lyric20,
    lyric21: req.body.lyric21,
    lyric22: req.body.lyric22,
    lyric23: req.body.lyric23,
    lyric24: req.body.lyric24,
    lyric25: req.body.lyric25,
    lyric26: req.body.lyric26,
    lyric27: req.body.lyric27,
    lyric28: req.body.lyric28,
    lyric29: req.body.lyric29,
    lyric30: req.body.lyric30,
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
    visibilityByAlbum: req.body.visibilityByAlbum,
    visibilityByArtist: req.body.visibilityByArtist
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
        lyric1: req.body.lyric1,
        lyric2: req.body.lyric2,
        lyric3: req.body.lyric3,
        lyric4: req.body.lyric4,
        lyric5: req.body.lyric5,
        lyric6: req.body.lyric6,
        lyric7: req.body.lyric7,
        lyric8: req.body.lyric8,
        lyric9: req.body.lyric9,
        lyric10: req.body.lyric10,
        lyric11: req.body.lyric11,
        lyric12: req.body.lyric12,
        lyric13: req.body.lyric13,
        lyric14: req.body.lyric14,
        lyric15: req.body.lyric15,
        lyric16: req.body.lyric16,
        lyric17: req.body.lyric17,
        lyric18: req.body.lyric18,
        lyric19: req.body.lyric19,
        lyric20: req.body.lyric20,
        lyric21: req.body.lyric21,
        lyric22: req.body.lyric22,
        lyric23: req.body.lyric23,
        lyric24: req.body.lyric24,
        lyric25: req.body.lyric25,
        lyric26: req.body.lyric26,
        lyric27: req.body.lyric27,
        lyric28: req.body.lyric28,
        lyric29: req.body.lyric29,
        lyric30: req.body.lyric30,
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
