'use strict'

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('./../models')
const PrivacyPolicy = db.PrivacyPolicy

router.use(bodyParser.json({ extended: false }))

const exists = (req) => {
  if (typeof parseInt(req.params.id) === 'number') {
    PrivacyPolicy.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((privacyPolicy) => {
      if (privacyPolicy) {
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
  var sequelize = require('sequelize')
  PrivacyPolicy.findAll({
    order: [sequelize.fn('lower', sequelize.col('name'))]
  })
  .then(function (PrivacyPolicys) {
    return res.json(PrivacyPolicys)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.post('/', function (req, res) {
  PrivacyPolicy.create({
    privacyPolicy: req.body.privacyPolicy
  })
  .then(function (PrivacyPolicy) {
    return res.json(PrivacyPolicy)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/:id', function (req, res) {
  if (exists) {
    PrivacyPolicy.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function (PrivacyPolicy) {
      return res.json(PrivacyPolicy)
    })
    .catch(function (err) {
      return res.json({ error: err})
    })
  } else {
    res.json({success: false})
  }
})

router.put('/:id', function (req, res) {
  PrivacyPolicy.update(
  {
    updatedAt: 'now()',
    privacyPolicy: req.body.privacyPolicy
  }, {
    where: {
      id: req.params.id
    }
  })
  .then(function (PrivacyPolicy) {
    return res.json(PrivacyPolicy)
  })
})


module.exports = router
