const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Handle dynamic URLs
app.get('/:id/:token', (req, res) => {
  const { id, token } = req.params;
  console.log('Received ID:', id);
  console.log('Received Token:', token);
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Fallback route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});