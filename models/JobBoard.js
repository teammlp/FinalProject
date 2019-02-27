const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobBoardSchema = new Schema({

    jobTitle: String,
    company: String,
    description: String,
    salary: Number,
    link: String,
    dateAdded: Date

});

const JobBoard = mongoose.model('JobBoard', jobBoardSchema);

module.export = JobBoard;