'use strict'

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('./../models')
const BandMember = db.BandMember

router.use(bodyParser.json({ extended: false }))

const exists = (req) => {
  if (typeof parseInt(req.params.id) === 'number') {
    BandMember.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((BandMember) => {
      if (BandMember) {
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
  BandMember.findAll({
    order: 'id'
  })
  .then(function (BandMembers) {
    return res.json(BandMembers)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/ByArtistId/:id', function (req, res) {
  BandMember.findAll({
    where: {
      ArtistId: req.params.id
    }
  })
  .then(function (BandMembers) {
    return res.json(BandMembers)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/:id', function (req, res) {
  if (exists) {
    BandMember.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function (BandMember) {
      return res.json(BandMember)
    })
    .catch(function (err) {
      return res.json({ error: err})
    })
  } else {
    res.json({success: false})
  }
})

router.post('/', function (req, res) {
  BandMember.create({
    name: req.body.name,
    instrument: req.body.instrument,
    howYouStartedToPlayMusic: req.body.howYouStartedToPlayMusic,
    whatMotivatesYouToPlayMusic: req.body.whatMotivatesYouToPlayMusic,
    whoDoYouLookUpTo: req.body.whoDoYouLookUpTo,
    additionComments: req.body.additionComments,
    ArtistId: req.body.ArtistId,
    visibility: false
  })
  .then(function (BandMembers) {
    return res.json(BandMembers)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.put('/:id', function (req, res) {
  if (exists) {
    BandMember.update(
      {
        updatedAt: 'now()',
        name: res.body.name,
        instrument: res.body.instrument,
        howYouStartedToPlayMusic: req.body.howYouStartedToPlayMusic,
        whatMotivatesYouToPlayMusic: req.body.whatMotivatesYouToPlayMusic,
        whoDoYouLookUpTo: req.body.whoDoYouLookUpTo,
        additionComments: req.body.additionComments,
        ArtistId: req.body.ArtistId
      }, {
        where: {
          id: req.params.id
        }
      })
    .then(function (BandMember) {
      return res.json(BandMember)
    })
    .catch(function (err) {
      return res.json({ error: err})
    })
  } else {
    res.json({success: false})
  }
})

router.delete('/ByArtistId/:id', function (req, res) {
  BandMember.destroy({
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
    BandMember.destroy({
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
