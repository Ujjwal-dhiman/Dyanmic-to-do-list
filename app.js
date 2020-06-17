const express = require("express");
const bodyParser = require("body-parser");

var inputs = [];

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
app.set('view engine' , 'ejs');


app.get("/" , function(req,res){
	var today = new Date();
	options = {
		weekday : "long",
		day : "numeric",
		month : "long"
	}

	var todayDate = today.toLocaleDateString("en-US",options);
	res.render("list" , {currentDate:todayDate,newInput:inputs})
})

app.post("/" , function(req,res){
	var input = req.body.input;
	inputs.push(input)
	res.redirect("/")
})

app.listen(3000 , function(){
	console.log("Server Started")
})
