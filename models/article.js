let mongoose = require('mongoose');

// Article Schema 
let articleSchema = mongoose.Schema({
	title:{
		type: String,
		required:true
	},
	author:{
		type:String,
		require: true
	},
	body:{
		type: String,
		requied: true
	}
});

let Article = module.exports = mongoose.model('Article', articleSchema)