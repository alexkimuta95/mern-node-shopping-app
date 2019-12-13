const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const app = express();


//body parser 

app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongodb
mongoose.connect(db)
.then(() => console.log('MongoDB is connected'))
.catch(err => console.log(err));

//use routes
app.use('/api/items', items);

const port =5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
