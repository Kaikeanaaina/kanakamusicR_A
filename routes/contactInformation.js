'use strict'

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('./../models')
const ContactInformation = db.ContactInformation

router.use(bodyParser.json({ extended: false }))

const exists = (req) => {
  if (typeof parseInt(req.params.id) === 'number') {
    ContactInformation.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((ContactInformation) => {
      if (ContactInformation) {
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
  ContactInformation.findAll({
    order: 'id'
  })
  .then(function (ContactInformations) {
    return res.json(ContactInformations)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.post('/', function (req, res) {
  ContactInformation.create({
    name: req.body.name,
    title: req.body.title,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    faxNumber: req.body.faxNumber
  })
  .then(function (ContactInformation) {
    return res.json(ContactInformation)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.get('/:id', function (req, res) {
  if (exists) {
    ContactInformation.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function (ContactInformation) {
      return res.json(ContactInformation)
    })
    .catch(function (err) {
      return res.json({ error: err})
    })
  } else {
    res.json({success: false})
  }
})

router.put('/:id', function (req, res) {
  ContactInformation.update(
  {
    updatedAt: 'now()',
    name: req.body.name,
    title: req.body.title,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    faxNumber: req.body.faxNumber
  }, {
    where: {
      id: req.params.id
    }
  })
  .then(function (ContactInformation) {
    return res.json(ContactInformation)
  })
})

router.delete('/:id', function (req, res) {
  if (exists) {
    ContactInformation.destroy({
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
