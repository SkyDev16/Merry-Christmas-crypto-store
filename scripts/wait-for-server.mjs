import http from 'http';

const waitForServer = (port, maxAttempts = 30, interval = 1000) => {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    
    const checkServer = () => {
      attempts++;
      console.log(`Checking if server is ready... (attempt ${attempts}/${maxAttempts})`);
      
      const req = http.get(`http://localhost:${port}/health`, (res) => {
        if (res.statusCode === 200) {
          console.log('✅ Server is ready!');
          resolve();
        } else {
          if (attempts >= maxAttempts) {
            reject(new Error(`Server not ready after ${maxAttempts} attempts`));
          } else {
            setTimeout(checkServer, interval);
          }
        }
      });
      
      req.on('error', () => {
        if (attempts >= maxAttempts) {
          reject(new Error(`Server not ready after ${maxAttempts} attempts`));
        } else {
          setTimeout(checkServer, interval);
        }
      });
    };
    
    checkServer();
  });
};

const port = process.env.PORT || 3001;
waitForServer(port)
  .then(() => {
    console.log('🚀 Starting frontend...');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Server failed to start:', error.message);
    process.exit(1);
  });