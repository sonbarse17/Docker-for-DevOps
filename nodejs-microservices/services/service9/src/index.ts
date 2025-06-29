import express from 'express';
import { createClient } from 'redis';

const app = express();
const port = process.env.PORT || 3000;
const redisClient = createClient();

redisClient.on('error', (err) => {
    console.error('Redis Client Error', err);
});

app.use(express.json());

app.get('/api/service9/data', async (req, res) => {
    try {
        const data = await redisClient.get('service9Data');
        res.json({ data });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
});

app.post('/api/service9/data', async (req, res) => {
    const { data } = req.body;
    try {
        await redisClient.set('service9Data', data);
        res.status(201).json({ message: 'Data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving data' });
    }
});

app.listen(port, async () => {
    await redisClient.connect();
    console.log(`Service 9 is running on http://localhost:${port}`);
});