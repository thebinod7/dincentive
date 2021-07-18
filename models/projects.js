const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const schema = mongoose.Schema(
	{
		name: { type: String, required: true },
		status: { type: String, enum: ['Draft', 'Active'], default: 'Draft' },
		created_by: { type: ObjectId, ref: 'User' }
	},
	{
		collection: 'projects',
		timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
		toObject: { virtuals: true },
		toJson: { virtuals: true }
	}
);

module.exports = mongoose.model('Project', schema);
