const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new Schema({

    jobTitle: String,
    company: String,
    description: String,
    salary: Number,
    link: String,
    dateAdded: Date

});

const Jobs = mongoose.model('Jobs', jobSchema);

module.export = Jobs;