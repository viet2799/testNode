import express from 'express'
import { loginController } from '~/controllers/users.controller'
import { loginValidator } from '~/middlewares/users.middlewares'

const app = express()
const usersRoutes = express.Router()

usersRoutes.post('/login',  loginController)

usersRoutes.get('/aaaa', (req, res) => {
  res.json({
    message: 'Hello, world!'
  })
})

export default usersRoutes
