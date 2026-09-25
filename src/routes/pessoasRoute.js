const { Router } = require('express');
const PessoaControler = require('../controllers/PessoaController.js');

const pessoaControler = new PessoaControler();

const router = Router();

router.get('/pessoas', (req, res) => pessoaControler.getAll(req, res));

module.exports = router;
