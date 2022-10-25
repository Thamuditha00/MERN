var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PSchema = new Schema({
    _id:Number,
    MedicineCode:Number,
    MedicineName:String,
    ManufactureDate:{type: Date, maxLength: 20},
    ExpireDate:{type: Date, maxLength: 20}
});

const medicine = mongoose.model('medicines',PSchema);
module.exports = medicine;