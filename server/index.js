const express = require('express');
const app = express();

const port = 5000; 

// Serve static files from the 'public' folder
app.use(express.static('pixi-test')); 

// Define a route for the home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pixi-test/index.html');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});