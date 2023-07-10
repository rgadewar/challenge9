
function generateMarkdown(data) {
    return `
# **${data.title}**
![GitHub license](${renderlicenseBadge(data.license)})
  
## Description 

${data.description}

### App working example
[Video Link](https://drive.google.com/file/d/1Vemktri1mAeU7rMFtyqG0WaciJ0rYoiN/view)

## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [license](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Repository Link](#repository)
- [Questions](#questions)


## Installation
To install necesary dependencies, run the following command:

        ${data.installation}

## Usage

          ${data.usage}

## license

![GitHub license](${renderlicenseBadge(data.license)})

## Contributors

https://github.com/${data.contributing}

## Tests
To run tests, run the following command:

          ${data.test}

## Questions
If you have any questions about the repo, open an issue or contact me directly at email ${data.email}. You can find more of my work at
https://www.github.com/${data.github}

## Repository

- [Project Repo](https://github.com/rgadewar/challenge9)

`;
}


function renderlicenseBadge(license) {
      return `https://img.shields.io/badge/license-${license}-red`
} 
module.exports = generateMarkdown;
