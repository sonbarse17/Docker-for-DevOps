package service

import (
	"fmt"
	"go-backend-app/internal/models"
	"sync"
	"time"
)

type Service struct {
	items map[string]models.Item
	mu    sync.RWMutex
}

func NewService() *Service {
	return &Service{
		items: make(map[string]models.Item),
	}
}

func (s *Service) GetItems() ([]models.Item, error) {
	s.mu.RLock()
	defer s.mu.RUnlock()

	items := make([]models.Item, 0, len(s.items))
	for _, item := range s.items {
		items = append(items, item)
	}
	return items, nil
}

func (s *Service) CreateItem(req models.CreateItemRequest) (models.Item, error) {
	s.mu.Lock()
	defer s.mu.Unlock()

	id := fmt.Sprintf("%d", time.Now().UnixNano())
	item := models.Item{
		ID:        id,
		Name:      req.Name,
		CreatedAt: time.Now(),
	}

	s.items[id] = item
	return item, nil
}

func (s *Service) HealthCheck() error {
	return nil
}