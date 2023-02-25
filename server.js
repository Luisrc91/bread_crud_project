// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')

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

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })
  
  // Breads
  const breadsController = require('./controllers/breads_controllers.js')
  app.use('/breads', breadsController)

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})

// 404 Page
app.get('*', (req, res) => {
  res.render('error404')
})

