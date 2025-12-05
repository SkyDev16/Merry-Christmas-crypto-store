const validateAddress = (address) => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return input.trim().replace(/[<>]/g, '');
};

module.exports = { validateAddress, validateEmail, sanitizeInput };
