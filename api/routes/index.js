const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoutes.js');
const turmas = require('./turmasRoutes.js');
const niveis = require('./niveisRoutes.js');

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas)
    app.use(turmas)
    app.use(niveis)
}