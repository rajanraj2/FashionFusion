import express from 'express';
import userRouter from './routes/user.route.js';

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/user', userRouter);

