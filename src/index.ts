import express from 'express'
import usersRoutes from './routes/users.routes'
import dataabaseService from './services/database.services'
const app = express()

app.use(express.json())
app.use('/api/users', usersRoutes)
require('dotenv').config()
dataabaseService.connect()

console.log('process.env.MONGO_URI', process.env.MONGO_URI)
app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
