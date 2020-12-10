/*
Authors: Jose Aguilar 301119671
Kristopher Sabado - 301118188
Muhammad Ali Asjid - 301105070 
Hussan Mirza - 301069260

Date: 11-15-2020
FileName : survey.js

Survey Controller

*/
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// to use jquery
let jquery = require('jquery');
let jsdom = require("jsdom").jsdom;

//let jwt = require('jsonwebtoken');

// create a reference to the model
let Survey = require('../models/survey');
let Response = require('../models/response');

module.exports.displaySurveyList = (req, res, next) => {
    Survey.find((err, surveyList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(SurveyList);

            res.render('survey/list', 
            {title: 'Surveys', 
            SurveyList: surveyList, 
            displayName: req.user ? req.user.displayName : ''});      
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('survey/add', {title: 'Create Survey', 
    displayName: req.user ? req.user.displayName : ''})          
}

module.exports.processAddPage = (req, res, next) => {
    let newSurvey = Survey({
        "name": req.body.name,
        "description": req.body.description,
        "creator": req.body.creator,
        "questions" : req.body.questions,
        
    });

    Survey.create(newSurvey, (err, Survey) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the survey list
            res.redirect('/survey-list');
        }
    });

}

/**Added this chunk of code for questions page **********/
module.exports.displayQuestionPage = (req, res, next) => {
    res.render('survey/question', {title: 'Create Questions', 
    displayName: req.user ? req.user.displayName : ''})          
}

module.exports.processQuestionPage = (req, res, next) => {
    let newSurvey = Survey({
        "name": req.body.name,
        "question1": req.body.question1,
        "answer1": req.body.answer1,
        "question2": req.body.question2,
        "answer2": req.body.answer2,
        "question3": req.body.question3,
        "answer3": req.body.answer3
    });

    Survey.create(newSurvey, (err, Survey) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the survey list
            res.redirect('/survey-list');
        }
    });

}
/*******************************************************/


module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Survey.findById(id, (err, surveyToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('survey/edit', {title: 'Edit Survey', survey: surveyToEdit, 
            displayName: req.user ? req.user.displayName : ''})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedSurvey = Survey({
        "_id": id,
        "name": req.body.name,
        "description": req.body.description,
        "creator": req.body.creator,
        "questions": req.body.questions,
    });

    Survey.updateOne({_id: id}, updatedSurvey, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the survey list
            res.redirect('/survey-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Survey.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the survey list
             res.redirect('/survey-list');
        }
    });
}

module.exports.displayAnswerPage = (req, res, next) => {
    let id = req.params.id;

    Survey.findById(id, (err, surveyToAnswer) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('survey/answer', {title: 'Answer Survey', survey: surveyToAnswer})
        }
    });
}

    module.exports.processAnswerPage = (req, res, next) => {

        let id = req.params.id

    let newResponse = Response({
        
        "name": req.body.name,
        "description": req.body.description,
        "creator": req.body.creator,
        "questions": req.body.questions,
        "answers" : req.body.answers,
    });

    Response.create( newResponse, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the survey list
            res.redirect('/survey-list');
        }
    });
    
    }
    
    module.exports.displayAnswerList = (req, res, next) => {
        Response.find((err, responseList) => {
            if(err)
            {
                return console.error(err);
            }
            else
            {
                //console.log(SurveyList);
    
                res.render('survey/answer_list', 
                {title: 'Answers', 
                ResponseList: responseList, 
                displayName: req.user ? req.user.displayName : ''});      
            }
        });
    }
