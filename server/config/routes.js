var users = require('../controllers/users.js');
var appointments = require('../controllers/appointments.js');

module.exports = function(app) {
	app.post('/register', users.register);
	app.post('/login', users.login);
	app.get('/appointment', appointments.index);
	app.post('/appointment', appointments.create);
	app.delete('/appointment/:id', appointments.delete);
}