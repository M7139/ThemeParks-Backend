const express = require('express')
const cors = require('cors')

const RideRouter = require('./routes/RideRouter')
const PORT = process.env.PORT || 3000

const db = require('./db')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/rides', RideRouter)

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
