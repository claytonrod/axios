const express = require('express')
const alunoRoute = require('./route/aluno')
const cursoRoute = require('./route/curso')

const app = express()
app.use(express.json())
app.use(cursoRoute)
app.use(alunoRoute)

app.listen(3001,()=>{
    console.log('rondando...')
})