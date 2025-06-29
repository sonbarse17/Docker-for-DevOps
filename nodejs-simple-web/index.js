const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html><head><title>DevOps Node.js App</title><style>body{font-family:Arial;margin:0;padding:40px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;text-align:center}h1{font-size:3em;margin-bottom:20px}p{font-size:1.2em;margin-bottom:30px}.container{max-width:600px;margin:0 auto;background:rgba(255,255,255,0.1);padding:40px;border-radius:15px;backdrop-filter:blur(10px)}.btn{background:#ff6b6b;color:white;padding:15px 30px;border:none;border-radius:25px;font-size:1.1em;cursor:pointer;margin:10px;transition:all 0.3s}.btn:hover{background:#ff5252;transform:translateY(-2px)}</style></head>
<body><div class="container"><h1>🚀 DevOps Node.js App</h1><p>Hello Aspiring DevOps Engineers!</p><p>This is a containerized Node.js application ready for deployment</p><button class="btn" onclick="window.location.reload()">Refresh</button><button class="btn" onclick="alert('App is running on port ${port || 3000}')">Show Port</button></div></body></html>`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
