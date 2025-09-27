const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Allow requests from any origin (needed for GitHub Pages)
app.use(cors({ origin: '*' }));
app.use(express.json());

// Test route to check if server is alive
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is live!' });
});

// Register route
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  let users = [];
  if (fs.existsSync('users.json')) {
    users = JSON.parse(fs.readFileSync('users.json'));
  }
  const existing = users.find(u => u.email === email);
  if (existing) return res.json({ success: false, message: 'Email already exists' });
  users.push({ name, email, password });
  fs.writeFileSync('users.json', JSON.stringify(users));
  res.json({ success: true, message: 'Registered successfully' });
});

// Login route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  let users = [];
  if (fs.existsSync('users.json')) {
    users = JSON.parse(fs.readFileSync('users.json'));
  }
  const user = users.find(u => u.email === email && u.password === password);
  if (user) res.json({ success: true, message: 'Login successful' });
  else res.json({ success: false, message: 'Invalid credentials' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
