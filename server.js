const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');

app.get('/', (req, res) => 
    res.json({msg: 'Bogusia'}));

//connectDB
connectDB();

//Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));