const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()
router
    .get('/niveis', NivelController.pegaTodosOsNiveis)
    .post('/niveis/:id/restaura', NivelController.restauraNivel)
module.exports = router