// const database = require('../models');
const Services = require('../services/Services.js')
const niveisServices = new Services('Niveis');

class NivelController {

    static async pegaTodosOsNiveis(req, res) {
      try {
        const todosOsNiveis = await niveisServices.pegaTodosOsRegistros()
        return res.status(200).json(todosOsNiveis)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
    
    static async restauraNivel(req, res) {
      const { id } = req.params
      try {
        await database.Niveis.restore( {where: { id: Number(id) } } )
        return res.status(200).json({ mensagem: `id ${id} restaurado`})
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
}

module.exports = NivelController
