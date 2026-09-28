const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController.js');

const categoriaControler = new CategoriaController();

const router = Router();

router.get('/categorias', (req, res) => categoriaControler.pegaTodos(req, res));
router.get('/categorias/:id', (req, res)=> categoriaControler.pegaUmPorId(req,res));
router.post('/categorias', (req, res)=> categoriaControler.criaNovo(req, res));
router.put('/categorias/:id', (req, res)=> categoriaControler.atualiza(req, res));
router.delete('/categorias/:id', (req, res)=> categoriaControler.delete(req, res));


module.exports = router;
