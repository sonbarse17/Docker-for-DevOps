import express from 'express';
import { createClient } from 'redis';

const app = express();
const port = process.env.PORT || 3001;

const redisClient = createClient();

redisClient.on('error', (err) => {
    console.error('Redis Client Error', err);
});

redisClient.connect();

app.use(express.json());

app.get('/todos', async (req, res) => {
    try {
        const todos = await redisClient.lRange('todos', 0, -1);
        res.json(todos);
    } catch (error) {
        res.status(500).send('Error retrieving todos');
    }
});

app.post('/todos', async (req, res) => {
    const { todo } = req.body;
    try {
        await redisClient.rPush('todos', todo);
        res.status(201).send('Todo added');
    } catch (error) {
        res.status(500).send('Error adding todo');
    }
});

app.listen(port, () => {
    console.log(`Service 1 running on http://localhost:${port}`);
});