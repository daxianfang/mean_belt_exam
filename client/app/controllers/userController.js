app.controller('userController', ['userFactory', '$location', '$cookies', function(userFactory, $location, $cookies) {
	var self = this;

	self.register = function() {
		console.log(self.regUser);
		userFactory.register(self.regUser, function(data) {
			console.log(data);
			self.regUser = {};
			$location.url('/login');
		}, function(err) {
			console.log(err);
		})
	}

	self.login = function() {
		if (userFactory.loggedUser._id) {
		}
		
		console.log(self.logUser);
		userFactory.login(self.logUser, function(data) {
			console.log(data);
			$cookies.put('user_id', data.data._id);
			$cookies.put('user', self.logUser.username);
			console.log($cookies.get('user'));
			userFactory.setLogin(data);
			self.logUser = {};
			$location.url('/appointments');
		}, function(err) {
			console.log(err);
		})
	}
}])