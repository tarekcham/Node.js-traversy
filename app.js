const express = require('express');
const path = require('path');

//inint app
const app = express();

//Load View Engine 
app.set('views', path.join(__dirname, 'views' ));
app.set('view engine', 'pug');

// Home Route
app.get('/', (req, res)=>{
	let articles = [{
		id:1,
		title:'Article One',
		author: 'Brad Traversy',
		body: 'This is article One'
	},
	{
		id:2,
		title:'Article Tow',
		author: 'Brad Traversy',
		body: 'This is article Tow'
	},
	{
		id:2,
		title:'Article three',
		author: 'Brad Traversy',
		body: 'This is article Three'
	}	]
	res.render("index", {
		title:'helddlo777',
		articles: articles
	});
});

app.get('/articles/add', (req,res) => {
	res.render('add', {
		title:'Add Article'
	})
})
app.listen(3000, ()=>{
	console.log('the sever started on port 3000')
});