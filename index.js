const fs = require('fs');
const inquirer = require('inquirer');


inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please tprovide a name for this project.',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please type a detailed description of the application or project.',
            name: 'description',
        },
        // {
        //     type: 'input',
        //     message: 'Please type your Table of Contents here.',
        //     name: 'contents',
        // },
        {
            type: 'input',
            message: 'Please describe installation process.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please explain how to use the application.',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Please choose a license.',
            choices: ['MIT', 'Apache 2.o', 'Boost Software License 1.0', 'Eclipse Public License 1.0', 'IBM Public License Version 1.0'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'Who else contributed to this project?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Explain any tests associated with this application.',
            name: 'test',
        },
        {
            type: 'input',
            message: 'Please enter information to where people can reach you with questions about the application.',
            name: 'contact',
        },
    ]).then (function(response) {
        console.log(response)
        const { description, contents, installation, usage, license, contribution, test, questions } = response;
        const template = `
${renderLicenseBadge(response.license)}
## Title
${response.title}
## Description
${response.description}
## Table of Contents
[Usage](#Usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Contact](#contact)
## Installation
${response.installation}
## Usage
${response.usage}
## License
${renderLicenseBadge(response.license)}
## Contributing
${response.contribution}
## Tests
${response.test}
## Contact
${response.contact}
`

fs.writeFile('example.md', template, (error) => {
    if (error) {
        console.log(error);
    }
})
    })


function renderLicenseBadge(license) {
    if (license !== "none") {
        return `![GitHub License](https://img.shields.io/badge/License-${license}-yellow.svg)]`
    }
}




function renderLicenseLink(license) {
    if (license !== "none") {
        return `[License](#license)`;
    }
    return "";

}
`[License](#License)`

function renderLicenseSection(license) {
    if (license !== "none") {
        return `## License
            Licensed under the ${license} license.`
    }
    return "";
}



