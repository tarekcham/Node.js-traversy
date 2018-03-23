const express = require('express');

const app = express();

app.get('/whatever', (req, res)=>{
	res.send('hello world');
});

app.listen(3000, ()=>{
	console.log('the sever started on port 3000')
});