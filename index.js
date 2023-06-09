const fs = require('fs');
const inquirer = require('inquirer');


inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please type a detailed description of the application or project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please type your Table of Contents here.',
            name: 'contents',
        },
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
            type: 'input',
            message: 'Please choose a license.',
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
            name: 'questions',
        },
    ]).then (function(response) {
        console.log(response)
        const { description, contents, installation, usage, license, contribution, test, questions } = response;
        const template = `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <section>
        <h3>## Description</h3>
        <p>${response.description}</p>
    </section>
    <section>
        <h3>## Table of Contents</h3>
        <p>${response.contents}</p>
    </section>
    <section>
        <h3>## Installation</h3>
        <p>${response.installation}</p>
    </section>
    <section>
        <h3>## Usage</h3>
        <p>${response.usage}</p>
    </section>
    <section>
        <h3>## License</h3>
        <p>${response.license}</p>
    </section>
    <section>
        <h3>## Contributing</h3>
        <p>${response.contribution}</p>
    </section>
    <section>
        <h3>## Tests</h3>
        <p>${response.test}</p>
    </section>
    <section>
        <h3>## Questions</h3>
        <p>${response.questions}</p>
    </section>
    <script src="./index.js"></script>
</body>
</html>
        `

fs.writeFile('example.html', template, (error) => {
    if (error) {
        console.log(error);
    }
})
    })