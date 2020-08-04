//imports---------------------------------------------------------------
const express = require('express');
const connectDB = require('./config/db');
const passport = require('passport');
const session = require('express-session');
const { accessLog, errorLog } = require('./config/logConfig');
//initialization---------------------------------------------------------
const app = express();

//sessions--------------------------------------------------------------
app.use(session({ secret: 'secretKey', resave: false, saveUninitialized: false }));

// Passport Config------------------------------------------------------
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
// Connect MongoDB
connectDB();

// Initialize MiddleWare------------------------------------------------

//data processing
app.use(express.json({ extentend: false }));
app.use(express.urlencoded({ extended: true }));
//server/application logs
app.use(accessLog());
app.use(errorLog());

app.get('/', (req, res) => res.send('API Running..'));

// Define Routes----------------------------------------------------------
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
