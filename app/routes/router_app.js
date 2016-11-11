var express = require("express");
var router = express.Router();


var path = require('path');

var courses = require('../../models/courses').courses;
var users = require('../../models/user').users;

router.get("/",function(req,res){
	console.log("ingresando");
 res.sendFile(path.resolve('public/views/principal.html'));
});

router.get("/user",function(req,res){

	console.log("el user:" + req.session.user); 

	users.findOne({login:req.session.user},function(err,user){

   if(user != null){
                
        res.json(user); 
        }
        else{
            console.log("Error: " + err);
        }
  });
});

router.get("/logout",function(req,res){
 req.session =null;
 res.json("");
});


//__________________________LOS CURSOS_________________________________________
	    
	    router.get('/Courses', function (req, res){

	    	courses.find(function(err, docs){
	    		console.log(docs);
	    		res.json(docs);
	    	});
	    });



module.exports = router;


