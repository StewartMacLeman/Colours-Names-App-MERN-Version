const express = require('express');
const app = express();
const cors = require('cors');
const colourRoutes = require('./routes/colourRoutes')

app.use(cors());
app.use(express.json());
app.use('/', colourRoutes);

app.listen(5000, () => console.log("The app is running on port 5000."));