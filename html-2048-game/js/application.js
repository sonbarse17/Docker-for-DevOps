// Initialize game when DOM is ready
window.requestAnimationFrame(() => {
  try {
    new GameManager(GAME_CONFIG.GRID_SIZE, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  } catch (error) {
    console.error('Failed to initialize game:', error);
    // Show user-friendly error message
    const container = document.querySelector('.container');
    if (container) {
      container.innerHTML = '<div class="error-message">Game failed to load. Please refresh the page.</div>';
    }
  }
});
