const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb+srv://igopi170:akash170@cluster0.cd5na.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = 'office';

async function insertData() {
    let empData = {
        'name' : 'akash',
        'salary': 55000,
        'email': 'igopi170@gmail.com',
        'phone' : 95456465456,
    };


    await client.connect();
    const db = client.db(dbName);
    const collection = await db.collection('employee');
    await collection.insertOne(empData);
    console.log("inserted!!")
}
insertData();