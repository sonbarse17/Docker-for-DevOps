package main

import (
	"context"
	"go-backend-app/internal/config"
	"go-backend-app/internal/handler"
	"go-backend-app/internal/middleware"
	"go-backend-app/internal/service"
	"log/slog"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"
)

func main() {
	cfg := config.Load()
	svc := service.NewService()
	h := handler.NewHandler(svc)

	mux := http.NewServeMux()

	// UI routes
	mux.HandleFunc("/", h.ServeUI)

	// API routes with proper HTTP methods
	mux.HandleFunc("GET /api/items", h.GetItems)
	mux.HandleFunc("POST /api/items", h.CreateItem)
	mux.HandleFunc("GET /health", h.HealthCheck)

	// Apply middleware
	handlerWithMiddleware := middleware.Logger(
		middleware.Recovery(
			middleware.CORS(mux),
		),
	)

	server := &http.Server{
		Addr:         ":" + cfg.Port,
		Handler:      handlerWithMiddleware,
		ReadTimeout:  cfg.ReadTimeout,
		WriteTimeout: cfg.WriteTimeout,
	}

	// Server run context
	serverCtx, serverStopCtx := context.WithCancel(context.Background())

	// Listen for syscall signals for process to interrupt/quit
	sig := make(chan os.Signal, 1)
	signal.Notify(sig, syscall.SIGHUP, syscall.SIGINT, syscall.SIGTERM, syscall.SIGQUIT)

	go func() {
		<-sig
		slog.Info("shutdown signal received")

		// Shutdown signal with grace period of 30 seconds
		shutdownCtx, cancel := context.WithTimeout(serverCtx, 30*time.Second)
		defer cancel()

		go func() {
			<-shutdownCtx.Done()
			if shutdownCtx.Err() == context.DeadlineExceeded {
				slog.Error("graceful shutdown timed out.. forcing exit.")
				os.Exit(1)
			}
		}()

		// Trigger graceful shutdown
		if err := server.Shutdown(shutdownCtx); err != nil {
			slog.Error("server shutdown failed", "error", err)
			os.Exit(1)
		}
		serverStopCtx()
	}()

	// Run the server
	slog.Info("starting server", "port", cfg.Port)
	err := server.ListenAndServe()
	if err != nil && err != http.ErrServerClosed {
		slog.Error("server failed to start", "error", err)
		os.Exit(1)
	}

	// Wait for server context to be stopped
	<-serverCtx.Done()
	slog.Info("server stopped gracefully")
}
