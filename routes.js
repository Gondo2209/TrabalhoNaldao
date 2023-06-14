const express = require('express')
const PlayerController = require('./controllers/player.controller')
const router = express.Router()

router.get('/', async function (req, res) {
    res.status(200).send('Online')
})
router.post('/player', PlayerController.criar)
router.put('/player', PlayerController.editar)
router.delete('/player', PlayerController.deletar)
router.get('/players', PlayerController.listar)
router.get('/players/nome/:nome', PlayerController.buscarPorNome)

module.exports = router