//genero.js
var mongoose = require('mongoose');

//esquemas

var peliculaEsquema = mongoose.Schema({
	titulo:{type:String,unique:true},
	director:String,
	sinopsis:String,
	duracion:String,
	foto:String,
	videoCode:String
});

var generoEsquema = mongoose.Schema({
	descripcion:String,
	peliculas:[peliculaEsquema]
});

module.exports = mongoose.model('generos',generoEsquema);