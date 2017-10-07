const express = require('express');
const cors = require('cors');
const app = express();

app.set('port', (process.env.PORT) || 5000)
const PORT = app.get('port');

app.use(cors());

app.use(express.static(process.env.PWD + '/public'));

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
