const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const authHeader = req.header('Authorization');
  console.log('🔐 Authorization Header:', authHeader);

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('❌ No Bearer token provided');
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  const token = authHeader.split(' ')[1];
  console.log('🔑 Extracted Token:', token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('✅ Token Decoded:', decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.log('❌ Token verification failed:', error.message);
    return res.status(400).json({ message: 'Invalid token' });
  }
};

module.exports = auth;
