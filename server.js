//variables
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;// set the port
var usuarioController = require('./controllers/usuarios');
var generoController = require('./controllers/generos');
var bodyParser = require('body-parser');

//var urlLocal = "mongodb://localhost/bd_pruebaios4"
//conexion bd local
/*mongoose.connect(urlLocal , function(err){
    if(err){
        console.log("Error al Conectarse ala BD");
    }else{
        console.log("Conexion Exitosa");
    }
});*/

//conexion a la bd en azure
mongoose.connect('mongodb://bd-serviceios.documents.azure.com:10255/bd-ios?ssl=true', {
    auth: {
      user: 'bd-serviceios',
      password: 'x7yVE7w8nuJGjZ17dcZSHSwvgmaoQwlSSLf1ipouC7Yhq8w5QReiTRZPs3YYk3gCB0SPeG9EcBdSPArMA0Js8g=='
    }
  })
  .then(() => console.log('Conexion Exitosa'))
  .catch((err) => console.error(err));

app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json()); // parse application/json

var router = express.Router();

router.route('/usuarios')
.get(usuarioController.Listar).post(usuarioController.Agregar);

router.route('/autenticar')
.post(usuarioController.Login);

router.route('/generos')
.get(generoController.Listar)
.post(generoController.cargaMasiva);

app.use(express.static('./public'));	
app.use('/api',router);
app.listen(port);
console.log("App en el puerto   " + port);