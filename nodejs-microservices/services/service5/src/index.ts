import express from 'express';
import { createClient } from 'redis';

const app = express();
const port = process.env.PORT || 3005;

const redisClient = createClient();

redisClient.on('error', (err) => {
    console.error('Redis Client Error', err);
});

redisClient.connect();

app.use(express.json());

app.get('/api/service5', async (req, res) => {
    try {
        const data = await redisClient.get('someKey');
        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
});

app.post('/api/service5', async (req, res) => {
    const { key, value } = req.body;
    try {
        await redisClient.set(key, value);
        res.status(201).json({ message: 'Data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving data' });
    }
});

app.listen(port, () => {
    console.log(`Service 5 is running on http://localhost:${port}`);
});