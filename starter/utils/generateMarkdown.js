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

`;
}

module.exports = generateMarkdown;
