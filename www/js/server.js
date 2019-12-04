const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://usuario:senha@projeto-pw-aknkl.mongodb.net/test?retryWrites=true&w=majority";
const cors = require('cors');
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  'extended': 'true'
}));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

MongoClient.connect(uri, (err, client) => {
  if (err) return console.log(err)
  db = client.db('projeto-pw')

  app.use(express.static('www'));
  app.set('port', process.env.PORT || 5000);
  app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
  });
})

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.render('index.ejs')
})
app.get('/', (req, res) => {
  var cursor = db.collection('data').find()
})
app.get('/show', (req, res) => {
  db.collection('data').find().toArray((err, results) => {
    if (err) return console.log(err)
    res.render('show.ejs', {
      data: results
    })
  })
})
app.post('/show', (req, res) => {
  console.log(req.body)
  db.collection('data').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('Salvo no Banco de Dados')
    res.redirect('/show')
  })
})
app.route('/edit/:id')
  .get((req, res) => {
    var id = req.params.id
    var ObjectId = require('mongodb').ObjectID //precisa referenciar ObjectId, se não dar erro

    db.collection('data').find(ObjectId(id)).toArray((err, result) => {
      if (err) return res.send(err)
      res.render('edit.ejs', {
        data: result
      })
    })
  })
  .post((req, res) => {
    var id = req.params.id
    var name = req.body.name
    var surname = req.body.surname
    var ObjectId = require('mongodb').ObjectID //precisa referenciar ObjectId, se não dar erro

    db.collection('data').updateOne({
      _id: ObjectId(id)
    }, {
      $set: {
        name: name,
        surname: surname
      }
    }, (err, result) => {
      if (err) return res.send(err)
      res.redirect('/show')
      console.log('Atualizado no Banco de Dados')
    })
  })
app.route('/delete/:id')
  .get((req, res) => {
    var id = req.params.id
    var ObjectId = require('mongodb').ObjectID //precisa referenciar ObjectId, se não dar erro

    db.collection('data').deleteOne({
      _id: ObjectId(id)
    }, (err, result) => {
      if (err) return res.send(500, err)
      console.log('Deletado do Banco de Dados')
      res.redirect('/show')
    })
  })
