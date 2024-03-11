const express = require("express")

const api = express()

api.get('/', (req, res) => {
  res.send("hello world")
})

api.listen(3000, () => {
  console.log('API rodando na porta 3000')
})
