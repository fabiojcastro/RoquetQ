const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render('index'))
route.get('/create-pass', (req, res) => res.render('create-pass'))
route.get('/sentence', (req, res) => res.render('sentence'))

module.exports = route
