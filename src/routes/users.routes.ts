import express from 'express'
import { loginController, registerController } from '~/controllers/users.controller'
import { loginValidator, registerValidator } from '~/middlewares/users.middlewares'

const app = express()
const usersRoutes = express.Router()

usersRoutes.post('/login', loginValidator, loginController)
usersRoutes.post('/register', registerValidator, registerController)

usersRoutes.get('/aaaa', (req, res) => {
  res.json({
    message: 'Hello, world!'
  })
})

export default usersRoutes
