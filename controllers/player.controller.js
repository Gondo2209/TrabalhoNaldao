const PlayerService = require('../services/player.service')

module.exports = class PlayerController {

    static criar(req, res) {
        try {
            PlayerService
                .criar(req.body)
                .then(result => res.status(200).send(result))
                .catch(err => {
                    console.error(err)
                    res.status(500).send()
                })
        } catch (err) {
            console.error(err)
            res.status(500).send()
        }
    }

    static editar(req, res) {
        try {
            PlayerService
                .editar(req.body)
                .then(result => res.status(200).send(result))
                .catch(err => {
                    console.error(err)
                    res.status(500).send()
                })
        } catch (err) {
            console.error(err)
            res.status(500).send()
        }
    }

    static deletar(req, res) {
        try {
            PlayerService
                .deletar(req.body.id)
                .then(result => res.status(200).send(result))
                .catch(err => {
                    console.error(err)
                    res.status(500).send()
                })
        } catch (err) {
            console.error(err)
            res.status(500).send()
        }
    }

    static listar(req, res) {
        try {
            PlayerService
                .listar()
                .then(result => res.status(200).send(result))
                .catch(err => {
                    console.error(err)
                    res.status(500).send()
                })
        } catch (err) {
            console.error(err)
            res.status(500).send()
        }
    }

    static buscarPorNome(req, res) {
        try {
            PlayerService
                .buscarPorNome(req.params.nome)
                .then(result => res.status(200).send(result))
                .catch(err => {
                    console.error(err)
                    res.status(500).send()
                })
        } catch (err) {
            console.error(err)
            res.status(500).send()
        }
    }

    static buscarPorCurso(req, res) {
        try {
            PlayerService
                .buscarPorCurso(req.params.curso)
                .then(result => res.status(200).send(result))
                .catch(err => {
                    console.error(err)
                    res.status(500).send()
                })
        } catch (err) {
            console.error(err)
            res.status(500).send()
        }
    }

    static buscarPorCidade(req, res) {
        try {
            PlayerService
                .buscarPorCidade(req.params.cidade)
                .then(result => res.status(200).send(result))
                .catch(err => {
                    console.error(err)
                    res.status(500).send()
                })
        } catch (err) {
            console.error(err)
            res.status(500).send()
        }
    }

    static buscarPorEmail(req, res) {
        try {
            PlayerService
                .buscarPorEmail(req.params.email)
                .then(result => res.status(200).send(result))
                .catch(err => {
                    console.error(err)
                    res.status(500).send()
                })
        } catch (err) {
            console.error(err)
            res.status(500).send()
        }
    }
}