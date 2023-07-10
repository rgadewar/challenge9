const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown.js');
const questions =[
    {
      type: "input",
      name: "title",
      message: "What is your project title?"
  },
  {
      type: "input",
      name: "description",
      message: "Please provide your project's description"
  },
  {
      type: "input",
      name: "installation",
      message: "Please provide the installation instructions"
  },
  {
      type: "input",
      name: "usage",
      message: "Please provide the project usage"
  },

  {
    type: "list",
    name: "license",
    message: "Please provide the project usage",
    choices:["MIT","Apache","BSD","GNU"]
},
  {
      type: "input",
      name: "contributing",
      message: "Please provide the contributing parties"
  },
  {
      type: "input",
      name: "test",
      message: "What command should be run to run tests? (npm test)"
  },

  {
    type: "input",
    name: "github",
    message: "What is your github user name?"
},
{
  type: "input",
  name: "email",
  message: "what is your your email address"
},
  ];

inquirer
  .prompt(questions)
  .then((answers) => {
    const readMePageContent = generate(answers);

    fs.writeFile('README.md', readMePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
