let mongoose = require ('mongoose');

//create a model class
let surveyModel = mongoose.Schema({
name: String,
description: String,
creator: String,
type: String,
questions: [],
choices: [],
answers: [],
},

{
    collection: "surveys"
}) ;

//create a model class
let questionModel = mongoose.Schema({
    name: String,
    description: String,
    creator: String,
    type: String,
    questions: [],
    choices: [],
    answers: [],
    },
    
    {
        collection: "questions"
    }) ;

module.exports = mongoose.model('Survey',surveyModel);