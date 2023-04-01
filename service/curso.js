
const axios = require('axios')
const xpi = require('./api')



const api = axios.create({
    baseURL: "https://api.github.com",
  });
// Buscando usuários do github
exports.getGit =  (req,res) =>{
    
    xpi.get("users/claytonrod")
    .then((response) => res.json(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
   })
}





exports.getAll = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            alunos: [
                {
                    id: 1,
                    nome: 'Curso de Node.js'
                },
                {
                    id: 2,
                    nome: 'Curso de MongoDB'
                }
            ]
        }
    })
}