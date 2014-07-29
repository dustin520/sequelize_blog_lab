var express = require("express"),
	db = require("./models/index.js"),
	app = express(); 

app.set("view engine", "ejs");

app.get("/blog", function(req, res) {
	res.render('blog')
})

app.get("/post", function(req, res) {
	res.render('post', {posts: posts})
})

app.get("/user/:id", function(req, res) {
	res.render('')
})




app.listen(3000, function() {
	console.log("connected");
});

