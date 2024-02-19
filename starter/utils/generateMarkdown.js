// function to generate a template that's in the markdown language for README
function generateMarkdown(data) {                     // generate all your answers and out them inside the readme template 
  return `# ${data.title}

## Description

${data.Description}                     
`;
}

module.exports = generateMarkdown;
