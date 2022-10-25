const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    _id: {
        type: Number,
    },
    patientid: {
        type: Number,
    },
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    testName: {
        type: String,
    }
});

const Report = mongoose.model('testreport',Schema)
module.exports = Report;