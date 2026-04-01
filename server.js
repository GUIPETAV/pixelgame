require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
fs.mkdirSync(path.join(__dirname, 'uploads'), { recursive: true });

app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*' }));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(__dirname));

app.use('/api/auth',     require('./routes/auth'));
app.use('/api/progress', require('./routes/progress'));
app.use('/api/comments', require('./routes/comments'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`✔ Server → http://localhost:${PORT}`));
  })
  .catch(err => { console.error('MongoDB error:', err); process.exit(1); });
