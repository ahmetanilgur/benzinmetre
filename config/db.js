var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/benzinmetre');
mongoose.model('entries',{
	username: String,
	brand: String,
	model: String,
	volume: Number,
	liter: Number
});
module.exports=mongoose;