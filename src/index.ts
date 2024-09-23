import express from 'express'
import usersRoutes from './routes/users.routes'
const app = express()

app.use('/api/users', usersRoutes)
app.use(express.json())

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
