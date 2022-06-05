const express = require('express')
const app = express()
const port = process.env.PORT || 3000

var userRoute = require('./routes/user.route')
app.use(express.static('public'))
app.set('view engine', 'pug');
app.set('views', './views')

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get('/', (req, res) => {
  res.render('index', {
    name : 'Cường'
  })
})

app.use('/users', userRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})