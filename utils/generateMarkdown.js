// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
https://github.com/${data.username}/${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
These are the steps required to install my project: ${data.installation}

## Usage
These are the instructions and examples in order to use this project: ${data.usage}

## Credits
Contributors: ${data.credits}

## License
This project is licensed with ${data.license}.

## Tests
Examples of how to run tests for application: ${data.tests}

## Questions
If you have any questions, contact ${data.username} directly at: ${data.email}.
`;
}

module.exports = generateMarkdown;
