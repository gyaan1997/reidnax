const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 5001;
const salesData = require('./data.json');
const jwtUtils = require('./jwtUtils');
app.use(cors());
app.use(express.json());

const users = [];

// Secret jwt key
const JWT_SECRET_KEY = jwtUtils.secretKey;

function validateUser(email, password) {
  return email.includes('@') && password.length >= 6; // email validation
}

app.get('/api/analyticData', (req, res) => {
  res.json(salesData);
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists (you may need to replace this with your actual user validation logic)
  const userExists = users.some((user) => user.email === email);

  if (userExists && validateUser(email, password)) {
    const token = jwt.sign({ email, password }, JWT_SECRET_KEY, {
      expiresIn: '1h',
    });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Authentication failed' });
  }
});
app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  if (users.some((user) => user.email === email)) {
    return res.status(400).json({ error: 'Email already exists' });
  }

  if (validateUser(email, password)) {
    try {
      const newUser = { email, password };
      users.push(newUser);
      res.header('Content-Type', 'application/json');
      res.json({ message: 'Signup successful', user: newUser });
    } catch (error) {
      console.error('Error registering user', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(400).json({ error: 'Invalid email or password' });
  }
});

app.listen(PORT, () => {
  console.log(`You are connected to the server, and it's running on Port: ${PORT}`);
});