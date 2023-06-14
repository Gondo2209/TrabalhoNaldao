const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes')

async function start() {
    const app = express()
    const port = 3000

    app.use(bodyParser.json())
    app.use(routes)
    app.listen(port, 'localhost', () => {
        console.log('Iniciado na porta', port)
    })

    try {
        await mongoose.connect('mongodb+srv://veigasdevCesu:Tano%4012345@cluster0.udz9ume.mongodb.net/')
        console.log('Conectado ao banco de dados')
    } catch (err) {
        console.error('Falha ao conectar ao banco de dados', err)
    }
}

start()