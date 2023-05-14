const express = require('express');
require('dotenv').config();
const hbs = require('hbs');
const app = express();
//servir contenido estático

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

// res.render, le podemos mandar un 2do argumento que es algun valor que queremos renderizar en template
app.get('/', (req, res) => {
  res.render('home', { name: 'NikoNikoNiko', title: 'Node Course'});
})
app.get('/generic', (req, res) => {
  res.render('generic', { name: 'NikoNikoNiko', title: 'Node Course'});
})
app.get('/elements', (req, res) => {
  res.render('elements', { name: 'NikoNikoNiko', title: 'Node Course'});
})
// app.get('/generic', (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html')
// })
// app.get('/elements', (req, res) => {
//   res.sendFile(__dirname + '/public/elements.html')
// })
app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo !');
  })

  // __dirname: path absoluto
// app.get('*', (req,res) => {
//   res.sendFile(__dirname + '/public/404.html')
// })
app.listen(() => {
  console.log(`Example app listening on port ${process.env.PORT}`);
})