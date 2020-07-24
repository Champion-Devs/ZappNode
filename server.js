const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect MongoDB
connectDB();

// Initialize MiddleWare
app.use(express.json({ extentend: false }));

app.get('/', (req, res) => res.send('API Running..'));

// Define Routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
