const express = require('express')
const alunoRoute = require('./route/aluno')
const cursoRoute = require('./route/curso')
require('dotenv').config();
const PORT = process.env.PORT || 3001;
const app = express()
app.use(express.json())
app.use(cursoRoute)
app.use(alunoRoute)

app.listen(PORT,()=>{
    //console.log('rondando...porta ${PORT}')
    console.log(`Rondando em .... port ${PORT}`);
})