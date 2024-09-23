const { MongoClient, ServerApiVersion } = require('mongodb')

const URL = 'mongodb+srv://nguyenducviet2799:viet2799@tweets.1z6ba.mongodb.net/'
const client = new MongoClient(URL as string)
console.log('client', client)
export default async function run() {
  try {
    await client.connect()
    await client.db('admin').command({ ping: 1 })
    console.log('Pinged your deployment. You successfully connected to MongoDB!')
  } finally {
    await client.close()
  }
}
