package main

import (
    "log"
    "net/http"

    "go-backend-app/internal/handler"
)

func main() {
    svc := service.NewService()
    h := handler.NewHandler(svc)

    http.HandleFunc("/items", h.GetItems)
    http.HandleFunc("/items/create", h.CreateItem)

    log.Println("Starting server on :8080")
    if err := http.ListenAndServe(":8080", nil); err != nil {
        log.Fatalf("Could not start server: %s\n", err)
    }
}
