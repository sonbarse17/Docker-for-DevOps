import express, { Request, Response, NextFunction } from 'express';
import { createClient, RedisClientType } from 'redis';

interface ServiceConfig {
  serviceName: string;
  port: number;
  redisUrl: string;
}

export class BaseService {
  protected app: express.Application;
  protected redisClient: RedisClientType;
  protected config: ServiceConfig;

  constructor(config: ServiceConfig) {
    this.config = config;
    this.app = express();
    this.redisClient = createClient({ url: config.redisUrl });
    this.setupMiddleware();
    this.setupRedis();
    this.setupRoutes();
  }

  private setupMiddleware(): void {
    this.app.use(express.json({ limit: '10mb' }));
  }

  private async setupRedis(): Promise<void> {
    this.redisClient.on('error', (err) => {
      console.error(`[${this.config.serviceName}] Redis Error:`, err);
    });

    try {
      await this.redisClient.connect();
      console.log(`[${this.config.serviceName}] Connected to Redis`);
    } catch (error) {
      console.error(`[${this.config.serviceName}] Redis connection failed:`, error);
      process.exit(1);
    }
  }

  private setupRoutes(): void {
    this.app.get('/health', (req: Request, res: Response) => {
      res.status(200).json({
        status: 'healthy',
        service: this.config.serviceName,
        timestamp: new Date().toISOString()
      });
    });

    this.app.get('/ready', async (req: Request, res: Response) => {
      try {
        await this.redisClient.ping();
        res.status(200).json({ status: 'ready', service: this.config.serviceName });
      } catch (error) {
        res.status(503).json({ status: 'not ready', service: this.config.serviceName });
      }
    });
  }

  protected validateTodo(req: Request, res: Response, next: NextFunction): void {
    const { todo } = req.body;
    if (!todo || typeof todo !== 'string' || todo.trim().length === 0) {
      res.status(400).json({ error: 'Invalid todo item' });
      return;
    }
    next();
  }

  protected async handleError(error: unknown, res: Response, operation: string): Promise<void> {
    console.error(`[${this.config.serviceName}] ${operation} error:`, error);
    res.status(500).json({ error: `Failed to ${operation}` });
  }

  public start(): void {
    this.app.listen(this.config.port, () => {
      console.log(`[${this.config.serviceName}] Running on port ${this.config.port}`);
    });
  }

  public getApp(): express.Application {
    return this.app;
  }
}