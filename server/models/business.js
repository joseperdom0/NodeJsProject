/*--
Author: Jose Aguilar
Student ID : 301119671
Date: 10-11-2020
FileName : business.js

Schema for the contact List
*/


let mongoose = require ('mongoose');

//create a model class
let businessModel = mongoose.Schema({
name: String,
number: String,
email: String,
},
{
    collection: "business"
}) ;

module.exports = mongoose.model('Business',businessModel);