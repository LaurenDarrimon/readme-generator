// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');


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
            message: 'Email address for questions to be sent to',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the title of this repo?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is the file name of this repo?',
            name: 'repoName',
        },
        {
            type: 'input',
            message: 'Enter a description of the site',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter the live site deployed URL',
            name: 'liveLink',
        },
        {
            type: 'input',
            message: 'What do you need to install for this application to work?',
            name: 'installs',
        },
        {
            type: 'input',
            message: 'First command line installation prompt',
            name: 'installCommand1',
        },
        {
            type: 'input',
            message: 'Second command line installation prompt',
            name: 'installCommand2',
        },
        {
            type: 'input',
            message: 'Third command line installation prompt',
            name: 'installCommand3',
        },
        {
            type: 'input',
            message: 'What is the command to run the application?',
            name: 'runCommand',
        },
        {
            type: 'input',
            message: 'Enter any instructions for testing',
            name: 'test',
        }, 
        {
            type: 'input',
            message: 'Enter important code snippet here',
            name: 'code',
        },
        {
            type: 'input',
            message: 'What does that code show?',
            name: 'codeFunction',
        },
        {
            type: 'list',
            message: 'What type of license does this project have?',
            name: 'license',
            choices: [ "MIT", "GNU GPLv3", "Apache-2.0" ],
        },
    ];

// Create a function to write README file
function writeToFile(repoName, markdownText) {

    fs.writeFile(`${repoName}README.md`, markdownText, (err) =>
    err ? console.error(err) : console.log('Success!')  //if there's an error, console error it, otherwise, show success 
    );
}

// Create a function to initialize app
function init() {

    inquirer
    .prompt(questions)  //prompt user for questions 

    .then((response) => {  //only after we get prompts, then 
        console.log(response);
  
        const { repoName } = response;  //object destructuring to pull out file name 

        //call fxn to write the file with paramenters of the filename and the returned data from generateMarkdown on other js file 
        writeToFile(repoName, generateMarkdown(response)); 
    });
}

// Function call to initialize app
init();
