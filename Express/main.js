var express = require("express");
var app = express();
app.use(express.json());

app.get("/", (request, response) => {
  response.json({ message: "Karan" });
});

app.post("/", (request, response) => {
  response.json({ message: "Batman Gopi" });
});
app.post("/login", (request, response) => {
  // let email = request["query"]["email"];
  // let pass = request["query"]["password"];
  let { email, password } = request["query"];

  if (email == "admin@gmail.com" && password == "admin") {
    response.json({ Message: "You have logged in success" });
  } else {
    response.json({ Message: "Credentials failed" });
  }
});

//   response.json({ email: email, password: pass });
// });

app.post("/register", (request, response) => {
  let { name, email, password, address } = request.body;
  if (!name || !email || !password || !address) {
    response.json({ message: "Enter all the details" });
  } else {
    response.json({ message: "Register Successfully" });
  }
});

app.post("/add", (request, response) => {
  let { num1, num2 } = request.body;
  if (!num1 || !num2) {
    response.json({ message: "Enter 2 Values" });
  } else {
    response.json({ value: num1 + num2 });
  }
});

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb+srv://igopi170:akash170@cluster0.cd5na.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = 'office';

app.post("/createTeacher",async(req,res) =>{
    let body = req.body;
    let data = {
        'name':body['name'],
        'email':body['email'],
        'password':body['password'],
        'address':body['mobile_no'],

    }
    await client.connect();
    let db = client.db('office');
    await db.collection("teachers").insertOne(data);
    res.status(200).json({"message":"created!!"})
})

app.listen(8080);
