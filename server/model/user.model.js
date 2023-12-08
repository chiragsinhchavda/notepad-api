const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	isDeleted: {
		type: Boolean,
		required: true,
		default: false
	},
	lastLoggedInAt: {
		type: Date
	},
	createdAt: {
		type: Date,
		required: true,
		default: new Date()
	},
	updatedAt: {
		type: Date,
		required: true,
		default: new Date()
	}
})

module.exports = mongoose.model('User', userSchema)