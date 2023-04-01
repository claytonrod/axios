const express = require('express')
const router = express.Router()
const cursoService = require('../service/curso')

router.get('/api/curso',cursoService.getAll)
router.get('/api/curso/git',cursoService.getGit)
module.exports = router;