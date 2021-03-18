const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')

const CONFIG = require('./config/config')
const routes = require('./routes')

// TODO: Add an error handler for connection failure
mongoose.connect('mongodb://' + CONFIG.DB_URL + '/' + CONFIG.DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})

const app = express()
app.use(express.json())

if (CONFIG.APP_ENV == 'development') {
    app.use(logger('dev'))
}

app.get('/health', async (req, res) => {
    res.status(200).send({
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
    })
})

app.use('/services', routes)

app.listen(CONFIG.port, () => {
    console.log("Server up on " + CONFIG.port)
})