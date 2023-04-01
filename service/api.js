const axios = require('axios')
const api = axios.create({
  baseURL: "https://api.github.com",
})
const kkk = 'oi'
module.exports = api