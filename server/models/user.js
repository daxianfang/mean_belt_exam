var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
	// first_name: {
	// 	type: String,
	// 	required: true,
	// 	trim: true
	// },

	// last_name: {
	// 	type: String,
	// 	required: true,
	// 	trim: true
	// },

	username: {
		type: String,
		required: true,
		trim: true
	},

	// age: {
	// 	type: Number,
	// 	min: [1, "Too young"],
	// 	max: [100, "Too old"],
	// 	required: true
	// },

	// gender: {
	// 	type: String,
	// 	enum: ['MALE', 'FEMALE'],
	// 	uppercase: true,
	// 	trim: true,
	// 	default: 'MALE'
	// },

	// birthday: {
	// 	type: Date,

	// },
	
	password: {
		type: String,
		required: true,
		minlength: 4,
		maxlength: 32,
		validate: {
			validator: function(value) {
				return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,32}/.test(value);
			},
			message: "Password failed validation, you must have at least 1 number and 1 letter"
		}
	}

}, {
	timestamps: true
})

UserSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

UserSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
}

UserSchema.pre('save', function(done) {
	this.password = this.generateHash(this.password);
	done();
})

mongoose.model('User', UserSchema);