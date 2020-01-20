const express = require('express')

const app = express()
const PORT = 3333

app.use(express.json())
app.get('/', (req, res) => {
  res.json({ message: 'oie' })
})

app.listen(PORT, () => {
  console.log(`Executando o servidor na porta ${PORT}`)
})
