import { Request, Response, NextFunction } from 'express'
export const loginController = async (req: Request, res: Response) => {
  try {
    console.log('THIS IS REQUEST', req)
    res.status(200).send('Login successful') // Send a response to the client
  } catch (error) {
    // console.log('Error in loginController:', error)
    res.status(500).send('Internal Server Error')
  }
}
