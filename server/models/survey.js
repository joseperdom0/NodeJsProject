let mongoose = require ('mongoose');

//create a model class
let surveyModel = mongoose.Schema({
name: String,
question1: String,
answer1: String,
question2: String,
answer2: String,
question3: String,
answer3: String
},
/* Kristopher Sabado - Edit */
{
    strict: false
},

{
    collection: "surveys"
}) ;

module.exports = mongoose.model('Survey',surveyModel);