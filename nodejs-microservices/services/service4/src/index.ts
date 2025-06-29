import express from 'express';
import { createClient } from 'redis';

const app = express();
const port = process.env.PORT || 3004;

const redisClient = createClient({
    url: 'redis://localhost:6379'
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

app.use(express.json());

app.get('/api/service4', async (req, res) => {
    try {
        const value = await redisClient.get('key');
        res.status(200).json({ value });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data from Redis' });
    }
});

app.post('/api/service4', async (req, res) => {
    const { key, value } = req.body;
    try {
        await redisClient.set(key, value);
        res.status(201).json({ message: 'Data saved to Redis' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving data to Redis' });
    }
});

app.listen(port, async () => {
    await redisClient.connect();
    console.log(`Service 4 is running on http://localhost:${port}`);
});