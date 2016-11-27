'use strict'

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('./../models')
const RecordLabel = db.RecordLabel

router.use(bodyParser.json({ extended: false }))

router.get('/', function (req, res) {
  RecordLabel.findAll()
  .then(function (recordLabels) {
    return res.json(recordLabels)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.post('/', function (req, res) {
  RecordLabel.create({
    name: req.body.name
  })
  .then(function (recordLabel) {
    return res.json(recordLabel)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/:id', function (req, res) {
  RecordLabel.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(function (recordLabel) {
    return res.json(recordLabel)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

module.exports = router
