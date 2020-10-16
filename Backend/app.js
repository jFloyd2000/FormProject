const express = require('express');
const mongoose = require('./Database/Mongoose');
const Item = require('./Database/models/item');
const app = express();

app.listen(3000, () => console.log("Server connected on port 3000"));

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET POST HEAD OPTIONS PUT PATCH DELETE");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    next();
})

app.use(express.json());

app.post('/', (req, res) => {
    Item.insertMany({ ItemNum: req.body.itemNum, Description: req.body.desc, PackSize: req.body.packSize,
        PackSizeUnits: req.body.packUnits, BrandName: req.body.brand, Weight: req.body.weight, 
        WeightUnits: req.body.weightUnits })
        .then((item) => res.send(item))
        .catch((error) => (console.log(error)));
});
app.get('/', (req, res) => {
    Item.find({})
    .then((items) => res.send(items))
    .catch((error) => (console.log(error)));
});

app.get('/:itemId', (req, res) => {
    Item.find({ _id:req.params.itemId })
    .then((items) => res.send(items))
    .catch((error) => (console.log(error)));
});

app.delete('/:itemId', (req, res) => {
    Item.deleteOne({ _id:req.params.itemId })
    .then((items) => res.send(items))
    .catch((error) => (console.log(error)));
});

app.get('/sort/:typeId', (req, res) => {
    if(req.params.typeId == 0){
        Item.find({})
            .sort({ ItemNum: 'ascending'})
            .then((items) => res.send(items))
            .catch((error) => (console.log(error)));
    }
    if(req.params.typeId == 1){
        Item.find({})
            .sort({ Description: 'ascending'})
            .then((items) => res.send(items))
            .catch((error) => (console.log(error)));
    }

    if(req.params.typeId == 2){
        Item.find({})
            .sort({ BrandName: 'ascending'})
            .then((items) => res.send(items))
            .catch((error) => (console.log(error)));
    }
    
    if(req.params.typeId == 3){
        Item.find({})
            .sort({ PackSize: 'ascending'})
            .then((items) => res.send(items))
            .catch((error) => (console.log(error)));
    }

    if(req.params.typeId == 4){
        Item.find({})
            .sort({ Weight: 'ascending'})
            .then((items) => res.send(items))
            .catch((error) => (console.log(error)));
    }
});