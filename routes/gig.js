'use strict'

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('./../models')
const Gig = db.Gig

router.use(bodyParser.json({ extended: false }))

const exists = (req) => {
  if (typeof parseInt(req.params.id) === 'number') {
    Gig.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((gig) => {
      if (gig) {
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
  Gig.findAll({
    order: 'name'
  })
  .then(function (gigs) {
    return res.json(gigs)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/:id', function (req, res) {
  if (exists) {
    Gig.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function (gig) {
      return res.json(gig)
    })
    .catch(function (err) {
      return res.json({ error: err})
    })
  } else {
    res.json({success: false})
  }
})

router.post('/', function (req, res) {
  Gig.create({
    name: req.body.name,
    Month: req.body.Month,
    Day: req.body.Day,
    Year: req.body.Year,
    startHour: req.body.startHour,
    startMinute: req.body.startMinute,
    age: parseInt(req.body.Age),
    price: parseInt(req.body.Price),
    VenueId: req.body.Venue,
    promoter: req.body.Promoter,
    contact: req.body.Contact,
    ArtistId: req.body.Artists,
    description: req.body.Description
  })
  .then(function (data) {
    return res.json(data)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.put('/:id', function (req, res) {
  console.log(1111111)
  if (exists) {
    console.log(66666666, req.body)
    Gig.update(
      {
        updatedAt: 'now()',
        name: req.body.name,
        Month: req.body.Month,
        Day: req.body.Day,
        Year: req.body.Year,
        startHour: req.body.startHour,
        startMinute: req.body.startMinute,
        age: req.body.Age,
        price: req.body.Price,
        VenueId: req.body.VenueId,
        promoter: req.body.Promoter,
        contact: req.body.Contact,
        description: req.body.description,
        ArtistId: req.body.ArtistId,
        id: req.body.id
      }, {
        where: {
          id: req.params.id
        }
      })
    .then(function (gig) {
      console.log(77777777)
      return res.json(gig)
    })
    .catch(function (err) {
      return res.json({ error: err})
    })
  } else {
    res.json({succes: false})
  }
})


router.delete('/:id', function (req, res) {
  if (exists) {
    Gig.destroy({
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
