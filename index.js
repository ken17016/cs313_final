const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser');

const createContact = require('./routes/contactinfo.js');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/contact', (req, res) => res.render('pages/contactUs'))
  .use('/api/contact', (req, res) => createContact);
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
