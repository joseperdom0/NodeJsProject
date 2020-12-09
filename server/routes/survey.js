/*
Authors: Jose Aguilar 301119671
Kristopher Sabado - 301118188
Muhammad Ali Asjid - 301105070 
Hussan Mirza - 301069260

Date: 11-15-2020
FileName : survey.js

Survey Router
*/


let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// to use jquery
let jquery = require('jquery');
var jsdom = require("jsdom").jsdom;
global.$ = require('jquery/dist/jquery')

//let jwt = require('jsonwebtoken');

let passport = require('passport');

let surveyController = require('../controllers/survey');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Survey List page - READ Operation */
router.get('/', surveyController.displaySurveyList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, surveyController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, surveyController.processAddPage);

/*********Edited on 11/30/2020 ***********/

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/question', requireAuth, surveyController.displayQuestionPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/question', requireAuth, surveyController.processQuestionPage);

/****************************************/

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, surveyController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, surveyController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, surveyController.performDelete);

/* GET to perform  Answer - ANSWER Operation */
router.get('/answer/:id', surveyController.displayAnswerPage);

/* POST to perform  Answer - ANSWER Operation */
router.post('/answer/:id', surveyController.processAnswerPage);

module.exports = router;