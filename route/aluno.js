const express = require('express')
const router = express.Router()
const alunoService = require('../service/aluno')

router.get('/api/aluno',alunoService.getAll)
router.get('/',alunoService.getHome)
module.exports = router;