'use strict'

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('./../models')
const RecordLabel = db.RecordLabel

router.use(bodyParser.json({ extended: false }))

const exists = (req) => {
  if (typeof parseInt(req.params.id) === 'number') {
    RecordLabel.findOne({
      where : {
        id: req.params.id
      }
    })
    .then((recordLabel) => {
      if (recordLabel) {
        return true;
      };
      return false;
    })
    .catch((err) => {
      return false;
    })
  } else {
    return false;
  }
};

router.get('/', function (req, res) {
  RecordLabel.findAll({
    order: 'name'
  })
  .then(function (recordLabels) {
    return res.json(recordLabels)
  })
  .catch(function (err) {
    return res.json({ error: err})
  })
})

router.post('/', function (req, res) {
  if (exists) {
    RecordLabel.create({
      name: req.body.name
    })
    .then(function (recordLabel) {
      return res.json(recordLabel)
    })
    .catch(function (err) {
      return res.json({ error: err})
    })
  } else {
    res.json({success:false})
  }
})

router.get('/:id', function (req, res) {
  if (exists) {
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
  } else {
    res.json({success:false})
  }
})

router.put('/:id', function(req, res){
  if (exists) {
    RecordLabel.update(
    {
      updatedAt : 'now()',
      name : req.body.name,
    }, {
      where : {
        id : req.params.id
      }
    })
    .then(function(recordLabel){
      return res.json(recordLabel);
    });
  } else {
    res.json({success: false})
  }
});

router.delete('/:id', function(req, res){
  if (exists) {
    RecordLabel.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(data){
      return res.json(data);
    });
  } else {
    res.json({success: false})
  }
});

module.exports = router
