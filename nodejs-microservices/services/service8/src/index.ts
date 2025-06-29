import express from 'express';
import { createClient } from 'redis';

const app = express();
const port = process.env.PORT || 3000;
const redisClient = createClient();

redisClient.on('error', (err) => {
    console.error('Redis Client Error', err);
});

app.use(express.json());

app.get('/api/service8/data', async (req, res) => {
    try {
        const data = await redisClient.get('service8Data');
        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
});

app.post('/api/service8/data', async (req, res) => {
    const { data } = req.body;
    try {
        await redisClient.set('service8Data', data);
        res.status(201).json({ message: 'Data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving data' });
    }
});

app.listen(port, () => {
    console.log(`Service 8 running on http://localhost:${port}`);
});