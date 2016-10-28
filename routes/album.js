'use strict'

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const db = require('./../models')
const Album = db.Album

router.use(bodyParser.json({ extended: false }))

module.exports = router
