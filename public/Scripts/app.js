/*
Author: Jose Aguilar
Student ID : 301119671
Date: 10-11-2020
FileName : app.js

*/
(function(){


    function Start(){

        console.log("App started....");
        
        let deleteButtons = document.querySelectorAll('.btn-danger');
        let submitButtons = document.querySelectorAll('.btn-submit');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    //window.location.assign('/book-list');
                }
            });
        }

        for(button of submitButtons)
        {
            button.addEventListener('click', (event)=>{
               
                    window.alert("Thank you for your submission!");
                    //window.location.assign('/book-list');
                
            });
        }

    }

    window.addEventListener("load",Start);

})();