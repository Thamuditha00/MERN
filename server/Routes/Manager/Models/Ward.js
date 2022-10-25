var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PSchema = new Schema({
    _id:Number,
    wardid:Number,
    wardName:String,
    BedCount:Number,
    freeBedCount:Number
});

const Ward = mongoose.model('ward',PSchema);
module.exports = Ward;