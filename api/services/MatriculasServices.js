const Services = require('./Services');
const database = require('../models');
const Sequelize = require('sequelize');

class MatriculasServices extends Services {
    constructor(){
        super('Matriculas')
    }

    //métodos especificos do controlador de Matriculas

    async turmasLotadas(lotacaoTurma, where){
        return database[this.nomeDoModelo]
            .findAndCountAll({
                where: { ...where },
                attributes: ['turma_id'],
                group: ['turma_id'],
                having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`)
            }) 
    }
}

module.exports = MatriculasServices;