const express = require('express')
const Cards = require('./models/dbCards')
const Cors = require('cors')

//App config
require('dotenv').config()
const app = express()
const port = process.PORT || 5000;
const mongoose = require('mongoose')
const url = process.env.URL || "mongodb+srv://Admin:2095086@cluster0.zspjb.mongodb.net/ApplicationWeb?retryWrites=true&w=majority";

//Middlewares
app.use(express.json())
app.use(Cors())


//DB configs
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'));




// API Endpoints
app.get("/", (req, res) => {
    res.status(200).send("Hello Clever Programmer");
})

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})


//Listener

app.listen(port, () => console.log('server started'))