const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.engine('pug', require('pug').__express)
app.set('view engine', 'pug')
if (process.env.NODE_ENV === 'production') {
  app.set('views', path.join(__dirname, '../', 'views'))
  app.use(express.static(path.join(__dirname, '../', 'public')))
}
else {
  app.set('views', path.join(__dirname, 'views'))
  app.use(express.static(path.join(__dirname, 'public')))
}

app.get('/', function(req,res) {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})