import User from '~/models/schemas/User.schema'
import dataabaseService from './database.services'

interface RegisterReqBody {
  email: string
  password: string
}

class UsersService {
  async register(payload: RegisterReqBody) {
    const { email, password } = payload
    const result = await dataabaseService.users.insertOne(new User({ email, password }))
    return result;
  }
  async checkEmailExist(email: string) {
    const user = await dataabaseService.users.findOne({ email })
    return user
  }
}

const usersService = new UsersService()
export default usersService

