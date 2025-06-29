package handler

import (
	"encoding/json"
	"fmt"
	"go-backend-app/internal/models"
	"go-backend-app/internal/service"
	"log/slog"
	"net/http"
	"strings"
)

type Handler struct {
	service *service.Service
}

func NewHandler(svc *service.Service) *Handler {
	return &Handler{
		service: svc,
	}
}

func (h *Handler) GetItems(w http.ResponseWriter, r *http.Request) {
	items, err := h.service.GetItems()
	if err != nil {
		slog.Error("failed to get items", "error", err)
		h.writeError(w, "Failed to retrieve items", http.StatusInternalServerError)
		return
	}

	response := models.ItemsResponse{
		Items: items,
		Count: len(items),
	}

	h.writeJSON(w, response, http.StatusOK)
}

func (h *Handler) CreateItem(w http.ResponseWriter, r *http.Request) {
	var req models.CreateItemRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		h.writeError(w, "Invalid request body", http.StatusBadRequest)
		return
	}
	defer r.Body.Close()

	if err := h.validateCreateItemRequest(req); err != nil {
		h.writeError(w, err.Error(), http.StatusBadRequest)
		return
	}

	item, err := h.service.CreateItem(req)
	if err != nil {
		slog.Error("failed to create item", "error", err)
		h.writeError(w, "Failed to create item", http.StatusInternalServerError)
		return
	}

	h.writeJSON(w, item, http.StatusCreated)
}

func (h *Handler) HealthCheck(w http.ResponseWriter, r *http.Request) {
	if err := h.service.HealthCheck(); err != nil {
		h.writeError(w, "Service unhealthy", http.StatusServiceUnavailable)
		return
	}

	h.writeJSON(w, map[string]string{"status": "healthy"}, http.StatusOK)
}

func (h *Handler) ServeUI(w http.ResponseWriter, r *http.Request) {
	html := `<!DOCTYPE html>
<html><head><title>Go Backend API</title><style>body{font-family:Arial;margin:40px;background:#f5f5f5}h1{color:#333}.container{background:white;padding:20px;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,0.1)}.btn{background:#007bff;color:white;padding:10px 20px;border:none;border-radius:4px;cursor:pointer;margin:5px}.btn:hover{background:#0056b3}#result{margin-top:20px;padding:10px;background:#f8f9fa;border-radius:4px}</style></head>
<body><div class="container"><h1>Go Backend API</h1><p>Simple REST API for managing items</p>
<button class="btn" onclick="getItems()">Get Items</button>
<button class="btn" onclick="createItem()">Create Item</button>
<div id="result"></div></div>
<script>
async function getItems(){const r=await fetch('/api/items');const d=await r.json();document.getElementById('result').innerHTML='<h3>Items:</h3><pre>'+JSON.stringify(d,null,2)+'</pre>'}
async function createItem(){const r=await fetch('/api/items',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:'Sample Item '+Date.now()})});const d=await r.json();document.getElementById('result').innerHTML='<h3>Created:</h3><pre>'+JSON.stringify(d,null,2)+'</pre>'}
</script></body></html>`
	w.Header().Set("Content-Type", "text/html")
	w.Write([]byte(html))
}

func (h *Handler) validateCreateItemRequest(req models.CreateItemRequest) error {
	req.Name = strings.TrimSpace(req.Name)
	if req.Name == "" {
		return fmt.Errorf("name is required")
	}
	if len(req.Name) > 100 {
		return fmt.Errorf("name must be less than 100 characters")
	}
	return nil
}

func (h *Handler) writeJSON(w http.ResponseWriter, data interface{}, status int) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	if err := json.NewEncoder(w).Encode(data); err != nil {
		slog.Error("failed to encode JSON", "error", err)
	}
}

func (h *Handler) writeError(w http.ResponseWriter, message string, status int) {
	errorResp := models.ErrorResponse{
		Error:   http.StatusText(status),
		Message: message,
	}
	h.writeJSON(w, errorResp, status)
}