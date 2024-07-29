const mongoose = require("mongoose");


const remarkSchema = new mongoose.Schema({
	remarks : { type: String},
	CreatedAt : {type: Date , default: new Date()}
});

const uploadSchema = new mongoose.Schema({
	aadhaar : {type: String},
	pan : {type: String},
	id : {type: String},
},{timestamps: true});

const leadSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: false, unique: true },
		mobile: { type: String, required: false },
		AssignTo : { type: mongoose.Schema.Types.ObjectId, ref : 'User'},
		remarks : [remarkSchema],
		uploadDocuments : [uploadSchema],
	},
	{ timestamps: true }
);

const Lead = mongoose.model("Lead", leadSchema);

module.exports = Lead;
