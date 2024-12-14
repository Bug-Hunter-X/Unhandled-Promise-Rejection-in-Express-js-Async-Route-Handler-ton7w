const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    // Error handling missing!  The server will crash silently
    console.error('Error:', error); 
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might throw an error
  await new Promise(resolve => setTimeout(resolve, 1000));
  // Example error simulation
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  } 
  return 'OK';
}