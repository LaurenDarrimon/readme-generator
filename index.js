// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// Create an array of questions for user input
const questions = 
    [
        {
          type: 'input',
          message: 'What is your full name?',
          name: 'fullName',
        },
        {
          type: 'input',
          message: 'What is your Github username?',
          name: 'gitUser',
        },
        {
          type: 'input',
          message: 'What is the name of this repo?',
          name: 'location',
        },
    ];

// Create a function to write README file
function writeToFile(fileName, data) {
  


}

// Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response);
    });
}

// Function call to initialize app
init();



