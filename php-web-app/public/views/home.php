<!DOCTYPE html>
<html>
<head>
    <title>Simple PHP Project</title>
    <style>
        body{font-family:Arial;margin:40px;background:#f8f9fa}
        h1{color:#333;text-align:center}
        .container{max-width:600px;margin:0 auto;background:white;padding:30px;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,0.1)}
        .btn{background:#007bff;color:white;padding:12px 24px;border:none;border-radius:5px;cursor:pointer;margin:10px 5px;font-size:16px}
        .btn:hover{background:#0056b3}
        .info{background:#e9ecef;padding:15px;border-radius:5px;margin:20px 0}
    </style>
</head>
<body>
    <div class="container">
        <h1>🐘 Simple PHP Project</h1>
        <div class="info">
            <h3>Project Information:</h3>
            <p><strong>PHP Version:</strong> <?php echo phpversion(); ?></p>
            <p><strong>Server:</strong> <?php echo $_SERVER['SERVER_SOFTWARE'] ?? 'Unknown'; ?></p>
            <p><strong>Current Time:</strong> <?php echo date('Y-m-d H:i:s'); ?></p>
        </div>
        
        <div class="info">
            <h3>Features:</h3>
            <ul>
                <li>✅ PHP Backend Processing</li>
                <li>✅ Session Management</li>
                <li>✅ Database Ready</li>
                <li>✅ Docker Containerized</li>
            </ul>
        </div>
        
        <button class="btn" onclick="location.reload()">Refresh Page</button>
        <button class="btn" onclick="alert('PHP Project is running successfully!')">Test Alert</button>
    </div>
</body>
</html>