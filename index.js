const express = require('express')
const app = express()
const route = require('./route/router')
require('dotenv').config()


const port = process.env.PORT || 3000

app.use('/', route)

app.listen(port, () => {
    console.log(`live and well at port ${port}`)
})