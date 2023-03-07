// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')


// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(methodOverride('_method'))

mongoose.connect(process.env.MONGO_URI, 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }).then(() => {
    console.log('connected to mongo: ', process.env.MONGO_URI);
  }).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
  
// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })
  
  // Breads
  const breadsController = require('./controllers/breads_controllers.js')
  app.use('/breads', breadsController)

  // bakers 
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})

// 404 Page
app.get('*', (req, res) => {
  res.render('error404')
})

