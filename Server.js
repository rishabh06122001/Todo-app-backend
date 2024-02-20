const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routes=require('./Routes/TodoRoute')
const cors=require("cors")

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())


// Connection to MongoDB
mongoose.connect('mongodb+srv://rishabh:rishabh@cluster0.k3t25fq.mongodb.net/Todo?retryWrites=true&w=majority')
  .then(() => console.log(`Connected to MongoDB...`))
  .catch(err => console.error('MongoDB connection error:', err));


// Routes
app.use('/api',routes);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
