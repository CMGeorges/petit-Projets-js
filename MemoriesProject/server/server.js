import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import postRoutes from './routes/posts.js';

//require('dotenv').config()
//const express = require('express');

const app = express();



app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://ReactApp:2095086@cluster0.zspjb.mongodb.net/ApplicationWeb?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;
const URI = process.env.URI

app.use('/posts', postRoutes);
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT} on ${URI}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);