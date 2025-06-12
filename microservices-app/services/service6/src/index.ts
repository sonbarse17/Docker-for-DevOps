import express from 'express';
import { createClient } from 'redis';

const app = express();
const port = process.env.PORT || 3006;

const redisClient = createClient();

redisClient.on('error', (err) => {
    console.error('Redis Client Error', err);
});

redisClient.connect();

app.use(express.json());

app.get('/api/service6/data', async (req, res) => {
    try {
        const data = await redisClient.get('service6Data');
        res.json({ data });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
});

app.post('/api/service6/data', async (req, res) => {
    const { data } = req.body;
    try {
        await redisClient.set('service6Data', data);
        res.status(201).json({ message: 'Data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving data' });
    }
});

app.listen(port, () => {
    console.log(`Service 6 is running on http://localhost:${port}`);
});