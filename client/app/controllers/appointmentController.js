app.controller('appointmentController', ['appointmentFactory', '$location', '$cookies', function(appointmentFactory, $location, $cookies) {
	var self = this;

	if ($cookies.get('user') == null) {
		console.log('empty');
		$location.url('/');
	}

	var setAppointments = function(appointments) {
		self.appointments = appointments;
	}

	appointmentFactory.getAppointments(setAppointments);

	self.createAppointment = function() {
		self.appointment.patient = $cookies.get('user');
		appointmentFactory.createAppointment(self.appointment, function() {
			self.appointment = {};
			$location.url('/appointments');	
		});
	}

		self.deleteAppointment = function(id) {
		appointmentFactory.deleteAppointment(id, setAppointments);
	}

	self.logout = function() {
		$cookies.remove('user');
		$cookies.remove('user_id');
		$location.url('/');
	}
}])