const express = require('express');

const app = express();

// Initialize MiddleWare
app.use(express.json({ extentend: false }));

app.get('/', (req, res) => res.send('API Running..'));

// Define Routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
