import express from 'express'
import { loginController, registerController } from '~/controllers/users.controller'
import { loginValidator, registerValidator } from '~/middlewares/users.middlewares'

const app = express()
const usersRoutes = express.Router()

usersRoutes.post('/login', loginValidator, loginController)

/**
 * register new user
 * Path : /register
 * Method : POST
 * Body : {email : string, password : string, confirm_password string, date_of_birth : Date}
 */
usersRoutes.post('/register', registerValidator, registerController)

export default usersRoutes
