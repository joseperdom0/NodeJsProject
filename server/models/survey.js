let mongoose = require ('mongoose');

//create a model class
let surveyModel = mongoose.Schema({
name: String,
description: String,
creator: String,
questions: [],
},

{
    collection: "surveys"
}) ;

module.exports = mongoose.model('Survey',surveyModel);