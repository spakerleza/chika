
const path = require('path')
const express = require('express')
require('dotenv').config({path: path.resolve(__dirname, './.env')})
require('./db/mongoose')
const userRouter = require('./routers/user')

//const publicPath = path.join(__dirname, '..', 'public')


const app = express()
const port = process.env.PORT 



//app.use(express.static(publicPath))
app.use(express.json())
app.use(userRouter)






app.listen(port, () => {
    console.log('Server is up on port ' + port)
})