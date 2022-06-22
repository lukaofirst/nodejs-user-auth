const express = require('express');
const dotenv = require('dotenv').config();
const router = require('./routes/userRoutes');
const { handleError } = require('./middleware/errorMiddleware');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to nodejs-user-auth project' });
});

app.use('/api/users', router);

app.use(handleError);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
