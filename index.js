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
          name: 'fileName',
        },
        {
            type: 'input',
            message: 'Please enter a description of the site.',
            name: 'description',
          },
    ];

// Create a function to write README file
function writeToFile(fileName, response) {

    //object destructuring to declare new constants from user input  
    const {fullName, gitUser, description} = response;

    
    
    
    console.log(fileName);
    console.log(fullName);
    console.log(gitUser);
    console.log(description);
    console.log(response);


    const markdownText = 

`# ${fullName}
## ${fileName}
    
## Description
${description}
`

    fs.writeFile(`${fileName}README.md`, markdownText, (err) =>
    err ? console.error(err) : console.log('Success!')
);
  


}

// Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response);

        const {fileName} = response;



        writeToFile(fileName, response)

    });
}

// Function call to initialize app
init();



