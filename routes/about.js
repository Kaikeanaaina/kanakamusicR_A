'use strict'

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('./../models')
const About = db.About

router.use(bodyParser.json({ extended: false }))

const exists = (req) => {
  if (typeof parseInt(req.params.id) === 'number') {
    About.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((About) => {
      if (About) {
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
  About.findAll({
    order: 'id'
  })
  .then(function (Abouts) {
    return res.json(Abouts)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.post('/', function (req, res) {
  About.create({
    about: req.body.about
  })
  .then(function (About) {
    return res.json(About)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/:id', function (req, res) {
  if (exists) {
    About.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function (About) {
      return res.json(About)
    })
    .catch(function (err) {
      return res.json({ error: err})
    })
  } else {
    res.json({success: false})
  }
})

router.put('/:id', function (req, res) {
  About.update(
  {
    updatedAt: 'now()',
    about: req.body.about
  }, {
    where: {
      id: req.params.id
    }
  })
  .then(function (About) {
    return res.json(About)
  })
})

router.delete('/:id', function (req, res) {
  if (exists) {
    About.destroy({
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
