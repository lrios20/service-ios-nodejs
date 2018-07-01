//usuarios.js
var mongoose = require('mongoose');

//creando el esquema
var usuarioEsquema = mongoose.Schema({
	nombre:String,
	apellido:String,
	correo:{type:String,unique:true},
	clave:String
});


//creando el modelo
module.exports = mongoose.model('usuario',usuarioEsquema);
