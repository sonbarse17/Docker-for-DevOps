import express from 'express';
import { createClient } from 'redis';

const app = express();
const port = process.env.PORT || 3003;

const redisClient = createClient();

redisClient.on('error', (err) => {
    console.error('Redis Client Error', err);
});

redisClient.connect();

app.get('/api/service3', async (req, res) => {
    try {
        const data = await redisClient.get('service3Data');
        res.json({ data });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
});

app.listen(port, () => {
    console.log(`Service 3 is running on http://localhost:${port}`);
});