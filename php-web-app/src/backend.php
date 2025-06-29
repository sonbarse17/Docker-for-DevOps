<?php
function handleRequest() {
    header('Content-Type: application/json');
    
    if ($_POST['action'] ?? '' === 'test') {
        echo json_encode(['status' => 'success', 'message' => 'Backend is working!']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Unknown action']);
    }
}
?>