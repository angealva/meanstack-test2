// app/routes/index.js
'use strict';

var cookieSession = require("cookie-session");
var session_middleware = require("../middlewares/session");
var router_app = require("./router_app");
var path = require('path');


var express = require("express");

var mongoose= require("mongoose");
var Schema = mongoose.Schema;

///
var courses = require('../../models/courses').courses;
var users = require('../../models/user').users;
///


module.exports = function(app) {

//_____________________________________________________________________________________
app.use(cookieSession({
	name: "login",
	keys: ["llave-1","llave-2"]
}));

app.get('/', function(req, res) {
	res.sendFile(path.resolve('public/views/index.html'));
});

app.post('/login', function(req, res) {

	users.findOne({login: req.body.username, password:req.body.password},function(err,user){
			console.log("respuesta de bd" + user);
			if(user != null){
				console.log("respuesta de exito: " + user);
				req.session.authenticated = true;
				req.session.user_id = user._id;
				req.session.user = user.login;
				
				res.redirect("/app");
			}else{
				console.log("respuesta de err: " + err);
				res.sendFile(path.resolve('public/views/index.html'));
			}
		}
		);
});

app.use("/app",session_middleware);
app.use("/app",router_app);
//_____________________________________________________________________________________

}

