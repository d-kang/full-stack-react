const express = require('express');

const app = express();

app.use(express.static(process.env.PWD + '/public'));

app.listen(5000, () => {
  console.log('server is running on http://localhost:5000')
})
