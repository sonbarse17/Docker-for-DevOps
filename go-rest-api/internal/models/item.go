package models

import "time"

type Item struct {
	ID        string    `json:"id"`
	Name      string    `json:"name" validate:"required,min=1,max=100"`
	CreatedAt time.Time `json:"created_at"`
}

type CreateItemRequest struct {
	Name string `json:"name" validate:"required,min=1,max=100"`
}

type ItemsResponse struct {
	Items []Item `json:"items"`
	Count int    `json:"count"`
}

type ErrorResponse struct {
	Error   string `json:"error"`
	Message string `json:"message,omitempty"`
}