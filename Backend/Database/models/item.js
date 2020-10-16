const mongoose = require('mongoose'); 

const ItemSchema = new mongoose.Schema({
    ItemNum: { type: Number, required: true },
    Description: { type: String, minlength: 1, required: true },
    PackSize: { type: Number, required: true},
    PackSizeUnits: { type: String, minlength: 1, required: true},
    BrandName: { type: String, minlength: 1, required: true },
    Weight: { type: Number, required: true },
    WeightUnits: { type: String, minlength: 1, required: true }
});

const item = mongoose.model('item', ItemSchema);

module.exports = item;