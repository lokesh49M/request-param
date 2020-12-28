var exp = require("express");
var app = exp();


app.get('/players/:lang/:name',function(req,res){ //using positonal parameters here

	res.write("name = "+req.params.name);
	res.end(" age = "+req.params.lang);
	// res.end(JSON.stringify(query)); // res is for sending the values 
});
// use PORT or 4000 we specifiying below
var port = process.env.PORT || 4000; // this type port defining for heroku
app.listen(port, function () {
	console.log("server listening on port "+ port);
});