'use strict'

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('./../models')
const Resource = db.Resource

router.use(bodyParser.json({ extended: false }))

const exists = (req) => {
  if (typeof parseInt(req.params.id) === 'number') {
    Resource.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((Resource) => {
      if (Resource) {
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
  Resource.findAll({
    order: 'id'
  })
  .then(function (Resources) {
    return res.json(Resources)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.post('/', function (req, res) {
  Resource.create({
    bibliography: req.body.bibliography
  })
  .then(function (Resource) {
    return res.json(Resource)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/:id', function (req, res) {
  if (exists) {
    Resource.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function (Resource) {
      return res.json(Resource)
    })
    .catch(function (err) {
      return res.json({ error: err})
    })
  } else {
    res.json({success: false})
  }
})

router.put('/:id', function (req, res) {
  Resource.update(
  {
    updatedAt: 'now()',
    bibliography: req.body.bibliography
  }, {
    where: {
      id: req.params.id
    }
  })
  .then(function (Resource) {
    return res.json(Resource)
  })
})

router.delete('/:id', function (req, res) {
  if (exists) {
    Resource.destroy({
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
