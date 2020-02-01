require('dotenv').config()
const app = require('./index')

const PORT = 3333

app.listen(process.env.PORT || PORT)
