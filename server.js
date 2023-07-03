// server.js

const express = require('express');
const app = express();
const path = require('path');

// Mengatur folder publik untuk file CSS, JavaScript, dan gambar
app.use(express.static(path.join(__dirname, 'public')));

// Menangani request ke root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Menjalankan server pada port 3000
app.listen(3000, () => {
  console.log('Server berjalan pada port 3000');
});
