const express = require('express')

// init app 
const PORT = 4000;
const app = express();

app.get('/',(req, res) => res.send('<h1> Hello Wolrd </h1>'));

app.listen(PORT, () => console.log(`app is running on port: ${PORT}`));