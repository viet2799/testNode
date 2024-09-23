import express from 'express'
import usersRoutes from './routes/users.routes'
import run from './services/database.services'
const app = express()

app.use('/api/users', usersRoutes)
app.use(express.json())

run().catch(console.dir)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
