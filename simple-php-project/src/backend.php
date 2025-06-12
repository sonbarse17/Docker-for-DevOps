<?php
require_once 'db/database.php';

function handleRequest() {
    $method = $_SERVER['REQUEST_METHOD'];
    
    switch ($method) {
        case 'GET':
            // Handle GET requests
            $data = fetchData();
            echo json_encode($data);
            break;
        case 'POST':
            // Handle POST requests
            $input = json_decode(file_get_contents('php://input'), true);
            $result = saveData($input);
            echo json_encode($result);
            break;
        default:
            http_response_code(405);
            echo json_encode(['message' => 'Method Not Allowed']);
            break;
    }
}

function fetchData() {
    $db = connectDatabase();
    $query = "SELECT * FROM your_table_name"; // Replace with your actual table name
    $result = $db->query($query);
    return $result->fetchAll(PDO::FETCH_ASSOC);
}

function saveData($data) {
    $db = connectDatabase();
    $query = "INSERT INTO your_table_name (column1, column2) VALUES (:value1, :value2)"; // Replace with your actual table and columns
    $stmt = $db->prepare($query);
    $stmt->bindParam(':value1', $data['value1']);
    $stmt->bindParam(':value2', $data['value2']);
    
    if ($stmt->execute()) {
        return ['message' => 'Data saved successfully'];
    } else {
        return ['message' => 'Failed to save data'];
    }
}

handleRequest();
?>