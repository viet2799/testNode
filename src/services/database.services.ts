import 'dotenv/config'
import { Collection, Db, MongoClient } from 'mongodb'
import User from '~/models/schemas/User.schema'

const URL = process.env.REACT_APP_MONGO_URI
const DB_NAME = process.env.REACT_APP_DB_NAME

class DatabaseService {
  private client: MongoClient
  private dbName: Db
  constructor() {
    this.client = new MongoClient(URL as string)
    this.dbName = this.client.db(DB_NAME)
  }
  async connect() {
    try {
      await this.dbName.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } finally {
      await this.client.close()
    }
  }

  get users(): Collection<User> {
    return this.dbName.collection('Users')
  }
}

// taoj object tuwf class dataabaseService

const dataabaseService = new DatabaseService()
export default dataabaseService
