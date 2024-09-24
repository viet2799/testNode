import { Request, Response, NextFunction } from 'express'
import User from '~/models/schemas/User.schema'
import dataabaseService from '~/services/database.services'
import usersService from '~/services/users.service'
export const loginController = async (req: Request, res: Response) => {
  try {
    console.log('THIS IS REQUEST', req?.body)
    res.status(200).send('Login successful') // Send a response to the client
  } catch (error) {
    // console.log('Error in loginController:', error)
    res.status(500).send('Internal Server Error')
  }
}

export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    usersService.register({ email, password })
    return res.status(200).json({
      message: 'Register successful'
    })
  } catch (error) {
    // console.log('Error in registerController:', error)
    res.status(500).send('Internal Server Error')
  }
}
