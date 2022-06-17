// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},
{
    type: "input",
    name: "description",
    message: "What is your project about? Provide a description of your project."
},
{
    type: "input",
    name: "table of contents",
    message: "Table of Contents:"
},
{
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?"
},
{
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use"
},
{
    type: "input",
    name: "credits",
    message: "Who contributed to this project?"
},
{
    type: "input",
    name: "license",
    message: "What license is being used?"
},
{
    
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log(err);
        }
        else {
            console.log("success");
        }
    }
    )
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log(data);
        });
}

// Function call to initialize app
init();
