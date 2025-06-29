const express = require("express");
const app = express();
const path = require("path");
const MongoClient = require("mongodb").MongoClient;

const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html><head><title>Test App</title><style>body{font-family:Arial;margin:40px;background:#f5f5f5}h1{color:#333}.container{background:white;padding:20px;border-radius:8px}.btn{background:#007bff;color:white;padding:10px 20px;border:none;border-radius:4px;cursor:pointer;margin:5px}input{padding:8px;margin:5px;border:1px solid #ddd;border-radius:4px}</style></head>
<body><div class="container"><h1>User Manager</h1>
<input id="name" placeholder="Name"><input id="email" placeholder="Email">
<button class="btn" onclick="addUser()">Add User</button>
<button class="btn" onclick="getUsers()">Get Users</button>
<div id="result"></div></div>
<script>
async function addUser(){const name=document.getElementById('name').value;const email=document.getElementById('email').value;if(name&&email){await fetch('/addUser',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,email})});alert('User added');document.getElementById('name').value='';document.getElementById('email').value=''}}
async function getUsers(){try{const r=await fetch('/getUsers');const users=await r.json();document.getElementById('result').innerHTML='<h3>Users:</h3>'+users.map(u=>'<p>'+u.name+' - '+u.email+'</p>').join('')}catch(e){document.getElementById('result').innerHTML='<p>No database connection</p>'}}
</script></body></html>`);
});

const MONGO_URL = process.env.MONGODB_URI || "mongodb://localhost:27017/testapp";
const client = new MongoClient(MONGO_URL);

//GET all users
app.get("/getUsers", async (req, res) => {
    try {
        await client.connect();
        const db = client.db("testapp");
        const data = await db.collection('users').find({}).toArray();
        await client.close();
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
        const db = client.db("testapp");
        await db.collection('users').insertOne(userObj);
        await client.close();
        res.json({success: true});
    } catch (error) {
        res.status(500).json({error: 'Failed to add user'});
    }
});


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});