<?php
require_once '../config/config.php';
require_once '../src/db/database.php';
require_once '../src/backend.php';

// Start the session
session_start();

// Handle incoming requests
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Process form submission or AJAX request
    handleRequest();
} else {
    // Serve the main HTML content
    include 'views/home.php';
}
?>