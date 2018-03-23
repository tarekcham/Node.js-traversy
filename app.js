const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//Bring in Models
let Article = require('./models/article');

//inint app
const app = express();

//body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;

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

app.post('/articles/add', (req,res)=> {
	let article = new Article();
	article.title = req.body.title;
	article.author = req.body.author;
	article.body = req.body.body;

	article.save((err)=>{
		if(err){
			console.log(err);
			return;
		} else {
			res.redirect('/');
		}
	})
})
app.listen(3000, ()=>{
	console.log('the sever started on port 3000')
});