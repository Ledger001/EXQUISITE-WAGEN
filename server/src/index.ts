import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running' });
});
app.get('/api/users', (req, res) => {
    res.json({ message: 'Get all users endpoint' });
});
app.post('/api/users', (req, res) => {
    res.status(201).json({ message: 'User created' });
});
app.get('/api/vehicles', (req, res) => {
    res.json({ message: 'Get all vehicles endpoint' });
});
app.post('/api/vehicles', (req, res) => {
    res.status(201).json({ message: 'Vehicle created' });
});
app.get('/api/services', (req, res) => {
    res.json({ message: 'Get all services endpoint' });
});
app.get('/api/bookings', (req, res) => {
    res.json({ message: 'Get all bookings endpoint' });
});
app.post('/api/bookings', (req, res) => {
    res.status(201).json({ message: 'Booking created' });
});
app.get('/api/orders', (req, res) => {
    res.json({ message: 'Get all orders endpoint' });
});
app.get('/api/reviews', (req, res) => {
    res.json({ message: 'Get all reviews endpoint' });
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});