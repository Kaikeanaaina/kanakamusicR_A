'use strict'

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('./../models')
const TermsOfService = db.TermsOfService

router.use(bodyParser.json({ extended: false }))

const exists = (req) => {
  if (typeof parseInt(req.params.id) === 'number') {
    TermsOfService.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((TermsOfService) => {
      if (TermsOfService) {
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
  TermsOfService.findAll({
    order: 'id'
  })
  .then(function (TermsOfServices) {
    return res.json(TermsOfServices)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.post('/', function (req, res) {
  TermsOfService.create({
    terms: req.body.terms
  })
  .then(function (TermsOfService) {
    return res.json(TermsOfService)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/:id', function (req, res) {
  if (exists) {
    TermsOfService.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function (TermsOfService) {
      return res.json(TermsOfService)
    })
    .catch(function (err) {
      return res.json({ error: err})
    })
  } else {
    res.json({success: false})
  }
})

router.put('/:id', function (req, res) {
  TermsOfService.update(
  {
    updatedAt: 'now()',
    terms: req.body.terms
  }, {
    where: {
      id: req.params.id
    }
  })
  .then(function (TermsOfService) {
    return res.json(TermsOfService)
  })
})

router.delete('/:id', function (req, res) {
  if (exists) {
    TermsOfService.destroy({
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
