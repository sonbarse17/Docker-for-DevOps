package main

import (
    "context"
    "log"
    "net/http"
    "os"
    "os/signal"
    "syscall"
    "time"

    "go-backend-app/internal/handler"
)

func main() {
    h := handler.NewHandler()
    
    mux := http.NewServeMux()
    mux.HandleFunc("/items", h.GetItems)
    mux.HandleFunc("/items/create", h.CreateItem)

    server := &http.Server{
        Addr:         ":8080",
        Handler:      mux,
        ReadTimeout:  10 * time.Second,
        WriteTimeout: 10 * time.Second,
    }

    // Server run context
    serverCtx, serverStopCtx := context.WithCancel(context.Background())

    // Listen for syscall signals for process to interrupt/quit
    sig := make(chan os.Signal, 1)
    signal.Notify(sig, syscall.SIGHUP, syscall.SIGINT, syscall.SIGTERM, syscall.SIGQUIT)

    go func() {
        <-sig

        // Shutdown signal with grace period of 30 seconds
        shutdownCtx, _ := context.WithTimeout(serverCtx, 30*time.Second)

        go func() {
            <-shutdownCtx.Done()
            if shutdownCtx.Err() == context.DeadlineExceeded {
                log.Fatal("graceful shutdown timed out.. forcing exit.")
            }
        }()

        // Trigger graceful shutdown
        err := server.Shutdown(shutdownCtx)
        if err != nil {
            log.Fatal(err)
        }
        serverStopCtx()
    }()

    // Run the server
    log.Println("Starting server on :8080")
    err := server.ListenAndServe()
    if err != nil && err != http.ErrServerClosed {
        log.Fatal(err)
    }

    // Wait for server context to be stopped
    <-serverCtx.Done()
    log.Println("Server stopped gracefully")
}
