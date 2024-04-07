const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const contentRoutes = require('./routes/content');
const paymentRoutes = require('./routes/payment');

const app = express();
mongoose.connect('mongodb://localhost/yourdb', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use('/api/user', userRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/payment', paymentRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
