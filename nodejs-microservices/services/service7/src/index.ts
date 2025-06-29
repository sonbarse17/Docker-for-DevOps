import express from 'express';
import { createClient } from 'redis';

const app = express();
const port = process.env.PORT || 3000;
const redisClient = createClient();

redisClient.on('error', (err) => {
    console.error('Redis Client Error', err);
});

app.use(express.json());

app.get('/api/service7', async (req, res) => {
    try {
        const data = await redisClient.get('key');
        res.json({ data });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data from Redis' });
    }
});

app.post('/api/service7', async (req, res) => {
    const { key, value } = req.body;
    try {
        await redisClient.set(key, value);
        res.status(201).json({ message: 'Data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving data to Redis' });
    }
});

app.listen(port, () => {
    console.log(`Service 7 is running on http://localhost:${port}`);
    redisClient.connect();
});