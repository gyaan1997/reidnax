const jwt = require('jsonwebtoken');

const secretKey ='0297ec444bb7aa6510710ded5cd7d603201428b04c0f0a512e09fac89ef7d955';


const generateToken = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    console.error('Error verifying token:', error.message);
    return null;
  }
};

module.exports = { generateToken, verifyToken ,secretKey};
