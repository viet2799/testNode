import { Request, Response, NextFunction } from 'express'
import { checkSchema } from 'express-validator'

export const loginValidator = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({
      message: 'Email and password are required'
    })
  }
  next()
}


export const registerValidator = checkSchema({
  name:{
    trim: true,
    isLength:{
      options:{
        min: 1,
        max: 100
      },
      errorMessage: 'Name must be between 1 and 100 characters'
    }
  }
})

