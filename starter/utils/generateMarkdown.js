// function to generate a template that's in the markdown language for README
function generateMarkdown(data) {                     // generate all your answers and out them inside the readme template 
  return `# ${data.title}
  https://img.shields.io/badge/license-${data.License}-blue                                 


## Description
${data.Description}  

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.Installation}

## Usage
${data.Usage}

## License
${data.License}

## Contributing
${data.Contributing}

## Tests
${data.Tests}

## Questions
To have a look at my repository please add my github user name here https://github.com/${data.Questions_Github}
If you have any further questions please feel free to contact me by sending my an email ${data.Questions_Email}


`;
}

module.exports = generateMarkdown;
