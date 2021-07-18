const mongoose = require('mongoose');

const schema = mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		role: { type: String, enum: ['Admin', 'Employee'], default: 'User' },
		wallet_address: { type: String, required: true, unique: true }
	},
	{
		collection: 'users',
		timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
		toObject: { virtuals: true },
		toJson: { virtuals: true }
	}
);

module.exports = mongoose.model('User', schema);
