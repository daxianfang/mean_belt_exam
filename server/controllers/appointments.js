var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');

function AppointmentsController() {
	this.index = function(req, res) {
		Appointment.find({}, function(err, results) {
			res.json(results);
		})
	}

	this.create = function(req, res) {
		console.log(req.body);
		var newAppointment = new Appointment(req.body);
		newAppointment.save(function(err, newAppointment) {
			if (err) {
				console.log(err);
			} else {
				res.json(newAppointment);
			}
		})
	}

	this.delete = function(req, res) {
		Appointment.findByIdAndRemove(req.params.id, function(err) {
			if (err) {
				console.log(err);
			}
		});
	}	
}

module.exports = new AppointmentsController();