const { Router } = require('express');
const PessoaControler = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

const pessoaControler = new PessoaControler();
const matriculaControler = new MatriculaController();

const router = Router();

router.get('/pessoas', (req, res) => pessoaControler.pegaTodos(req, res));
router.get('/pessoas/:id', (req, res)=> pessoaControler.pegaUmPorId(req,res));
router.post('/pessoas', (req, res)=> pessoaControler.criaNovo(req, res));
router.put('/pessoas/:id', (req, res)=> pessoaControler.atualiza(req, res));
router.delete('/pessoas/:id', (req, res)=> pessoaControler.delete(req, res));

router.get('/pessoas/:estudanteId/matriculas', (req, res)=> pessoaControler.pegaMatriculas(req,res));
router.post('/pessoas/:estudanteId/matriculas', (req, res)=> matriculaControler.criaNovo(req, res));

module.exports = router;
