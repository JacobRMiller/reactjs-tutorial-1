import express from 'express';

// Initialize http server
const app = express();

// Handle / route
app.get('/', (req, res) =>
  res.send('Hello World 3!')
)

// Launch the server on port 3000
const server = app.listen(80, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});