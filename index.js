require('dotenv').config();
const express = require('express');
const app = express();

const port = Number(process.env.PORT) || 4000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});