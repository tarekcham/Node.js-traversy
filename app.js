const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;

//Bring in Models
let Article = require('./models/article');
//inint app
const app = express();


//Check connnection 
db.once('open', () =>{
	console.log('Connect to MongodDB')
})
//Check for DB errors
db.on('error', () => {
	console.log(err);
})

//Load View Engine 
app.set('views', path.join(__dirname, 'views' ));
app.set('view engine', 'pug');

// Home Route
app.get('/', (req, res)=>{
	Article.find({}, (err, articles) => {
		if(err){
			console.log(err);
		} else {
			res.render("index", {
		title:'helddlo777',
		articles: articles
	});
		}
	})
	
});

app.get('/articles/add', (req,res) => {
	res.render('add', {
		title:'Add Article'
	})
})
app.listen(3000, ()=>{
	console.log('the sever started on port 3000')
});