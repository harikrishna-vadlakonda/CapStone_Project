const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const env = require("dotenv");
const usersRoutes = require('./routes/users-routes');
const servicessRoutes = require('./routes/servicess-routes');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

app.use('/uploads/images', express.static(path.join('uploads', 'images')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

    next();
});

app.use('/api/users', usersRoutes);
app.use('/api/servicess', servicessRoutes);

app.use((req, res, next) => {
    throw new HttpError('Could not find this route.', 404);
});

app.use((error, req, res, next) => {
    if (req.file) {
        fs.unlink(req.file.path, err => {
            console.log(err);
        });
    }
    if (res.headersSent) {
        return next(error);
    }
    res.status(error.code || 5000);
    res.json({message: error.message || 'An unknown error occurred!'});
});


env.config();
mongoose
    .connect(
         `mongodb+srv://Hemaravishankar:q1w2e3r4t5@cluster0.zhmeu.mongodb.net/Users?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            poolSize: 10,
            bufferMaxEntries: 0 

        }

    )
     .then(() => {
        console.log("Database connected");
      });
   
      app.listen(process.env.PORT || 2020, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      });
