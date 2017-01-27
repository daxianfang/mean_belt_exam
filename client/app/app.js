var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function ($routeProvider) {
	$routeProvider
		// .when('/', {
		// 	templateUrl: 'partials/register.html',
		// 	controller: 'userController',
		// 	controllerAs: 'userCtrl'
		// })
		.when('/register', {
			templateUrl: 'partials/register.html',
			controller: 'userController',
			controllerAs: 'userCtrl'
		})
		.when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'userController',
			controllerAs: 'userCtrl'
		})
		.when('/appointments', {
			templateUrl: 'partials/appointments.html',
			controller: 'appointmentController',
			controllerAs: 'ac'
		})
		.when('/new_appointment', {
			templateUrl: 'partials/new_appointment.html',
			controller: 'appointmentController',
			controllerAs: 'ac'
		})
		.otherwise({
			redirectTo: '/'
		})
})