package handler

import (
    "encoding/json"
    "net/http"
)

type Handler struct {
    // Add service dependency if needed
}

func NewHandler() *Handler {
    return &Handler{}
}

func (h *Handler) GetItems(w http.ResponseWriter, r *http.Request) {
    if r.Method != http.MethodGet {
        http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
        return
    }
    
    // Add your get items logic here
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(map[string]interface{}{
        "items": []string{}, // Replace with actual items
    })
}

func (h *Handler) CreateItem(w http.ResponseWriter, r *http.Request) {
    if r.Method != http.MethodPost {
        http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
        return
    }

    var item map[string]interface{}
    if err := json.NewDecoder(r.Body).Decode(&item); err != nil {
        http.Error(w, "Invalid request body", http.StatusBadRequest)
        return
    }
    defer r.Body.Close()

    // Add your create item logic here
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(item)
}

func (h *Handler) ServeUI(w http.ResponseWriter, r *http.Request) {
    html := `<!DOCTYPE html>
<html><head><title>Go Backend API</title><style>body{font-family:Arial;margin:40px;background:#f5f5f5}h1{color:#333}.container{background:white;padding:20px;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,0.1)}.btn{background:#007bff;color:white;padding:10px 20px;border:none;border-radius:4px;cursor:pointer;margin:5px}.btn:hover{background:#0056b3}#result{margin-top:20px;padding:10px;background:#f8f9fa;border-radius:4px}</style></head>
<body><div class="container"><h1>Go Backend API</h1><p>Simple REST API for managing items</p>
<button class="btn" onclick="getItems()">Get Items</button>
<button class="btn" onclick="createItem()">Create Item</button>
<div id="result"></div></div>
<script>
async function getItems(){const r=await fetch('/items');const d=await r.json();document.getElementById('result').innerHTML='<h3>Items:</h3><pre>'+JSON.stringify(d,null,2)+'</pre>'}
async function createItem(){const r=await fetch('/items/create',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:'Sample Item',id:Date.now()})});const d=await r.json();document.getElementById('result').innerHTML='<h3>Created:</h3><pre>'+JSON.stringify(d,null,2)+'</pre>'}
</script></body></html>`
    w.Header().Set("Content-Type", "text/html")
    w.Write([]byte(html))
}
