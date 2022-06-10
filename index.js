// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generatePage = require("./src/page-template");

// TODO: Create an array of questions for user input
const promptProject = portfolioData => {
    return inquirer.prompt ([
    {
        type: "input",
        name: "name",
        message: "What is the name of your project? (Required)",
        validate: projectNameInput => {
            if (projectNameInput) {
                return true;
            }
            else {
                console.log("Please enter the name of your project!");
                return false;
            }
        }
    }
])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        }
        else {
            return portfolioData;
        }
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
