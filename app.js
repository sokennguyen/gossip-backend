const express = require('express')
const app = express()
const cors = require ('cors')
const  mongoose = require('mongoose')
const config = require('./utils/config')

mongoose.set('strictQuery',false)

mongoose.connect(config.MONGODB_URI)
    .then(()=> {
        console.log('connected to MongoDB')
    })
    .catch(error=> {
        console.log('error connecting to MongoDB', error.message)
    })

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())

app.use('/api/login',login router)

module.exports = app