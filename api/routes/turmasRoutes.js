const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()
router
    .get('/turmas', TurmaController.pegaTodasAsTurmas)
    .post('/turmas/:id/restaura', TurmaController.restauraTurma)
module.exports = router