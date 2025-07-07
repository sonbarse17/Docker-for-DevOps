<!DOCTYPE html>
<html>
<head>
    <title><?php echo APP_NAME; ?></title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <h1>🐘 <?php echo APP_NAME; ?></h1>
        <div class="info">
            <h3>Project Information:</h3>
            <p><strong>PHP Version:</strong> <?php echo phpversion(); ?></p>
            <p><strong>Server:</strong> <?php echo $_SERVER['SERVER_SOFTWARE'] ?? 'Unknown'; ?></p>
            <p><strong>Current Time:</strong> <?php echo date('Y-m-d H:i:s'); ?></p>
            <p><strong>App Version:</strong> <?php echo APP_VERSION; ?></p>
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
        <button class="btn" onclick="testBackend()">Test Backend</button>
    </div>
    
    <footer>
        <p>Built by <strong>Sushant Sonbarse</strong> | <a href="https://github.com/sonbarse17/" target="_blank">GitHub</a></p>
    </footer>
    
    <script src="js/script.js"></script>
</body>
</html>