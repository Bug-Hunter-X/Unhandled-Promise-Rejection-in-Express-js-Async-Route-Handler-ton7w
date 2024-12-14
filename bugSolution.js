const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    console.error('Error:', error); // Log the error
    res.status(500).send('Internal Server Error'); // Send an error response
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  }
  return 'OK';
} 