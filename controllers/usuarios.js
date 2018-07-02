//creando el modelo
var usuario = require('../models/usuario');

exports.Login = function(req,res){
	usuario.findOne({
		correo:req.body.correo ,
		clave:req.body.clave
	}, function(err,resultado){
			if(err){
				res.status(500).json({
					success: false,
					mensaje: 'Error al conectar con servidor'
				})
			}
			else{  
				if(!resultado){
					res.status(401).json({
						success: false,
						mensaje: 'Usuario no encontrado'
					});                  
				}
				else {
					res.status(200).json({resultado});                  
				}                 
			}
		});
}

exports.Listar = function(req,res){
	usuario.find(function(err,result){
		if(err){
			res.status(500).json({mensaje:'Error al Listar a los usuarios'});
		}else{
			res.status(200).json(result);
		}
	});
};

exports.Agregar = function(req,res){
	var nuevoUsuario = new usuario();
	nuevoUsuario.nombre = req.body.nombre;
	nuevoUsuario.apellido = req.body.apellido;
	nuevoUsuario.correo = req.body.correo;
	nuevoUsuario.clave = req.body.clave;
	nuevoUsuario.save(function(err,result){
		if(err){
			res.status(500).json({mensaje:'Error al registrar al usuario'});
		}else{
			res.status(200).json(result);
		}
	});
}