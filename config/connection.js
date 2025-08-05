const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGO_URI);
let db;

async function connectToMongo() {
  try {
    await client.connect();
    db = client.db(); // default db from URI
    console.log('✅ Connected to MongoDB (native)');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
  }
}

function getDb() {
  return db;
}

module.exports = { connectToMongo, getDb };