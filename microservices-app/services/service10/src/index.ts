import express from 'express';
import { createClient } from 'redis';

const app = express();
const port = process.env.PORT || 3000;
const redisClient = createClient();

redisClient.on('error', (err) => {
    console.error('Redis Client Error', err);
});

app.use(express.json());

app.get('/service10/data', async (req, res) => {
    try {
        const data = await redisClient.get('service10Data');
        res.json({ data });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data from Redis' });
    }
});

app.post('/service10/data', async (req, res) => {
    const { data } = req.body;
    try {
        await redisClient.set('service10Data', data);
        res.status(201).json({ message: 'Data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving data to Redis' });
    }
});

app.listen(port, () => {
    console.log(`Service 10 is running on http://localhost:${port}`);
});