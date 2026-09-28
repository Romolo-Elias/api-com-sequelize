const { Router } = require('express');
const CursoControler = require('../controllers/CursoController');

const cursoControler = new CursoControler();

const router = Router();

router.get('/cursos', (req, res) => cursoControler.pegaTodos(req, res));
router.get('/cursos/:id', (req, res)=> cursoControler.pegaUmPorId(req,res));
router.post('/cursos', (req, res)=> cursoControler.criaNovo(req, res));
router.put('/cursos/:id', (req, res)=> cursoControler.atualiza(req, res));
router.delete('/cursos/:id', (req, res)=> cursoControler.delete(req, res));


module.exports = router;
