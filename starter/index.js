const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");      // calling in this function in here so that you can use it, you going to hand it the answers that your user gave you, and inside function you will tell it where answers should land inside your templatw


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is your project Title?',
      },

      {
        type: 'input',
        name: 'Description',
        message: 'Describe what your project is about?',
      },

      {
        type: 'input',
        name: 'Installation',
        message: 'What are the intallation instructions?',
      },

      {
        type: 'input',
        name: 'Usage',
        message: 'What does the app do?',
      },

      {
        type: 'input',
        name: 'License',
        message: 'What license has been used on this Repo?',
      },

      {
        type: 'input',
        name: 'Contributing',
        message: 'How do you contribute to this Repo?',
      },

      {
        type: 'input',
        name: 'Tests',
        message: 'What are the instructions on testing?',
      },

      {
        type: 'input',
        name: 'Questions_Github',
        message: 'What is your github user name?',
      },

      {
        type: 'input',
        name: 'Questions_Email',
        message: 'What is your email address',
      },
];

// function to write README file with 2 parameters file name and data
function writeToFile(fileName, data) {        
    fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then(answers =>{
    console.log(answers)   // getting our answers from all of our questions 
    //creating the READme.md file, and calling the generatemarkdown function that needs the answers  
    writeToFile("README.md", generateMarkdown(answers))
})
}

// function call to initialize program
init();
