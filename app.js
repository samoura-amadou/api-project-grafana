// app.js
const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Server running on port :  ${PORT}`));
