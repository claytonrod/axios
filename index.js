const express = require('express')
const alunoRoute = require('./route/aluno')
const cursoRoute = require('./route/curso')
require('dotenv').config();
const PORT = process.env.PORT || 3001;
const app = express()

const cors = require('cors');
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'User']
  }));

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // '*' ALLOWS ANY URL para hacer peticiones al servidor
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, User');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

app.use(express.json())

app.use(cursoRoute)
app.use(alunoRoute)

app.listen(PORT,()=>{
    //console.log('rondando...porta ${PORT}')
    console.log(`Rondando em .... port ${PORT}`);
})