var exp = require("express");
var app = exp();


app.get('/players',function(req,res){
	var query = req.query;  // req is getting from webpage
	console.log("query value "+JSON.stringify(query));
	res.write("name = "+query.name);
	res.end("age = "+query.age);
	// res.end(JSON.stringify(query)); // res is for sending the values 
});
// use PORT or 4000 we specifiying below
var port = process.env.PORT || 4000; // this type port defining for heroku
app.listen(port, function () {
	console.log("server listening on port "+ port);
});