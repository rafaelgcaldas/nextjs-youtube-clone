import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbname = process.env.MONGODB_DB;

const cachedDb;
const cachedClient;

if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI enviroment variable inside .env.local'
  );
}

if (!dbname) {
  throw new Error(
    'Please define the MONGODB_DB enviroment variable inside .env.local'
  );
}

export async function connectToDatabase() {
  if (cacheclient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = await client.db(dbname);

  cachedClient = client;
  cachedDb = db;

  return { client, db}
}

export default connectToDatabase;