const express = require('express')
const routes = require('./routes')

const app = express()
const PORT = 3333

app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
  console.log(`Executando o servidor na porta ${PORT}`)
})
