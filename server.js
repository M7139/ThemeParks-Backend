const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 3000

const db = require('./db')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())


app.use('/rides', RideRouter)

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`server Running on Port ${PORT} `)
})
