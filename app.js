'use strict' // Para usar ES6

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', api)


const productCtrl = require('./controllers/product')

module.exports = app