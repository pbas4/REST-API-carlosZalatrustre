'use strict' // Para usar ES6

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

/*
 * Mongo connection
 */
mongoose.connect(config.db, (err, res) => {
    if (err) {
        return console.log(`Error al conectar BBDD: ${err}`)
    }
    console.log('Conexión BBDD establecida')

    app.listen(config.port, () => {
        console.log(`API REST corriendo puerto ${config.port}`)
    })
})
