app.factory('appointmentFactory', ['$http', function($http) {
	var appointments = [];

	var factory = {};

	factory.getAppointments = function(callback) {
		$http.get('/appointment').then(function(response) {
			appointments = response.data;
			callback(appointments);
		})
	}

	factory.createAppointment = function(appointment, callback) {
		$http.post('/appointment', appointment).then(function(response) {
		});
		callback();
	}

	factory.deleteAppointment = function(id, callback) {
		$http.delete('/appointment/' + id).then(function() {
			callback(appointments);
		})
	}

	return factory;
}])