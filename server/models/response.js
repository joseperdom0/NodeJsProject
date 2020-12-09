let mongoose = require ('mongoose');

//create a model class
let responseModel = mongoose.Schema({
name: String,
description: String,
creator: String,
questions: [],
choices: [],
answers: [],
},

{
    collection: "responses"
}) ;

module.exports = mongoose.model('Response',responseModel);