
var users = require("../../models/user").users;

var path = require('path');

module.exports = function(req,res,next){
	if(!req.session.user_id){

		console.log("en sesion si no: "+req.session.user_id );

		res.sendFile(path.resolve('public/views/index.html'));
	}else{
		console.log("en sesion de lo contrario busca: "+req.session.user_id );
		users.findById(req.session.user_id,function(err,user){
			if(err){
				console.log("Error sesion db");
				res.sendFile(path.resolve('public/views/index.html'));
			}else{
				res.locals = { user: user }
				next();
			}
		});
	}
}

