const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const ejs = require('ejs')
const morgan = require('morgan')

//Env Variables
dotenv.config({ path: './config/config.env'})

//Init Express
const app = express()

// Req Logging
if (process.env.NODE_ENV === 'development') { app.use(morgan('dev'))}

//Static Files
app.use(express.static(path.join(__dirname, 'public')))

//Ejs View Engine
app.set('view engine', 'ejs');

//Routes
app.use('/', require('./routes/index'))

//listen on Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT} currently running in ${process.env.NODE_ENV} mode.`))