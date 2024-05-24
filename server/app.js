const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRoutes = require('./routes/index');

app.use(cors());
app.use(bodyParser.json());


app.use('/', indexRoutes);




app.listen(port, () => {
    console.log('Server is Responding at ' + port)
})