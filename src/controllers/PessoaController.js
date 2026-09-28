const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaService.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async pegaMatriculas(req, res) {
    const { estudanteId } = req.params;
    try {
      const listaMatriculas = await pessoaServices.pegamatriculasPorEstudante(Number(estudanteId));
      return res.status(200).json(listaMatriculas);
    } catch (erro) {
      console.log(erro)
    }
  }

}

module.exports = PessoaController;