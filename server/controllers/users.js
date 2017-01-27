var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController() {
	this.register = function(req, res) {
		console.log(req.body);
		var newUser = new User(req.body);
		newUser.save(function(err, data) {
			if (err) {
				console.log(err);
				res.json(err);
			} else {
				console.log(data);
				res.json(data);
			}
		})
	}

	this.login = function(req, res) {
		console.log(req.body);
		var user = User.findOne({email: req.body.email}, function(err, data) {
			if (data == null) {
				console.log(data);
				res.json({data: {errors: {login: {message: "Invalid"}}}});
			} else if (data && data.validPassword(req.body.password)) {
				console.log(data);
				res.json({_id: data._id});
			} else {
				console.log(data);
				res.json({data: {errors: {login: {message: "Invalid"}}}});
			}
		})
	}
}

module.exports = new UsersController();