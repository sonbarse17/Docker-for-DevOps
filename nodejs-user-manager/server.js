require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");
const MongoClient = require("mongodb").MongoClient;

const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const MONGO_URL = process.env.MONGODB_URI || "mongodb://localhost:27017/userdb";
const client = new MongoClient(MONGO_URL);

//GET all users
app.get("/getUsers", async (req, res) => {
    try {
        await client.connect();
        const db = client.db("userdb");
        const data = await db.collection('users').find({}).toArray();
        res.json(data);
    } catch (error) {
        res.status(500).json({error: 'Database connection failed'});
    }
});

//POST new user
app.post("/addUser", async (req, res) => {
    try {
        const userObj = req.body;
        await client.connect();
        const db = client.db("userdb");
        await db.collection('users').insertOne(userObj);
        res.json({success: true});
    } catch (error) {
        res.status(500).json({error: 'Failed to add user'});
    }
});


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});