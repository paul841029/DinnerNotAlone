var mongoose = require('mongoose');
var voteSchema = new mongoose.Schema({user: String});
var voterSchema = new mongoose.Schema({voter: String});
var choiceSchma = new mongoose.Schema({
	text : String,
	votes : [voteSchema]
});
exports.PollSchema = new mongoose.Schema({
	question: {type: String, required: true},
	location: {type: String, required: true},
	preference: {type: String, required: false},
	choices: [choiceSchma],
	voters: [voterSchema],
});