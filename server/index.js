const express = require('express');
const app = express();

const port = 5000; 

// Serve static files from the 'public' folder
app.use(express.static('pixi-test')); 

// Define a route for the home page
app.get('/', (req, res) => {
  const filePath = "/home/barry/senior/D2/pixijs/pixi-test/index.html" 
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});