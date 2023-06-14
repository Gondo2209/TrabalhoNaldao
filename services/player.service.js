const PlayerModel = require('../models/player.model')

module.exports = class playerService {
    static criar(player) {
        return new Promise(async function (resolve, reject) {
            try {
                const result = PlayerModel.create(player)
                resolve(result)
            } catch (err) {
                reject(err)
            }
        })
    }

    static editar(player) {
        return new Promise(async function (resolve, reject) {
            try {
                const result = await PlayerModel.findByIdAndUpdate(player.id, player)
                resolve(result)
            } catch (err) {
                reject(err)
            }
        })
    }

    static deletar(id) {
        return new Promise(async function (resolve, reject) {
            try {
                const result = await PlayerModel.findByIdAndDelete(id)
                resolve(result)
            } catch (err) {
                reject(err)
            }
        })
    }

    static listar() {
        return new Promise(async function (resolve, reject) {
            try {
                const result = await PlayerModel.find()
                resolve(result)
            } catch (err) {
                reject(err)
            }
        })
    }

    static buscarPorNome(nome) {
        return new Promise(async function (resolve, reject) {
            try {
                const result = await PlayerModel.find({nome: {$regex: nome, $options: 'i'}})
                resolve(result)
            } catch (err) {
                reject(err)
            }
        })
    }

    static buscarPorCurso(curso) {
        return new Promise(async function (resolve, reject) {
            try {
                const result = await PlayerModel.find({curso: {$regex: curso, $options: 'i'}})
                resolve(result)
            } catch (err) {
                reject(err)
            }
        })
    }

    static buscarPorCidade(cidade) {
        return new Promise(async function (resolve, reject) {
            try {
                const result = await PlayerModel.find({cidade: cidade})
                resolve(result)
            } catch (err) {
                reject(err)
            }
        })
    }

    static buscarPorEmail(email) {
        return new Promise(async function (resolve, reject) {
            try {
                const result = await PlayerModel.find({email: email})
                resolve(result)
            } catch (err) {
                reject(err)
            }
        })
    }
}