import { Request, Response } from 'express';
import { BaseService } from './shared/base-service';

class TodoService extends BaseService {
  constructor() {
    const config = {
      serviceName: 'service2',
      port: parseInt(process.env.PORT || '5000'),
      redisUrl: `redis://${process.env.REDIS_HOST || 'localhost'}:6379`
    };
    super(config);
    this.setupTodoRoutes();
  }

  private setupTodoRoutes(): void {
    this.app.get('/todos', this.getTodos.bind(this));
    this.app.post('/todos', this.validateTodo, this.addTodo.bind(this));
  }

  private async getTodos(req: Request, res: Response): Promise<void> {
    try {
      const todos = await this.redisClient.lRange('todos', 0, -1);
      res.json({ todos, count: todos.length });
    } catch (error) {
      await this.handleError(error, res, 'retrieve todos');
    }
  }

  private async addTodo(req: Request, res: Response): Promise<void> {
    const { todo } = req.body;
    try {
      await this.redisClient.rPush('todos', todo.trim());
      res.status(201).json({ message: 'Todo added successfully', todo: todo.trim() });
    } catch (error) {
      await this.handleError(error, res, 'add todo');
    }
  }
}

const service = new TodoService();
service.start();
