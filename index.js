const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({ title, description, installation, usage, license, contributing, tests, questions
 }) => 
  `# ${title}
  # Description
  ${description} 
  # Table of Contents
  [Installation](#Installation)<br />
  [Usage](#Usage)<br />
  [License](#License)<br />
  [Contributing](#Contributing)<br />
  [Tests](#Tests)<br />
  [Questions](#Questions)<br />
  # Installation
  ${installation} 
  # Usage
  ${usage}
  #License
  ${license}
  # Contributing 
  ${contributing} 
  # Tests 
  ${tests} 
  # Questions
  ${questions}`

const writeToReadMe = (file, data) => {
  // console.log(file, data)
  fs.writeFile(file, data, (error) => error ? console.error(error) : console.log('File made'));
}


inquirer.prompt([
  {
    name: "title",
    type: "input",
    message: "What is the title of your project?",
  },
  {
    name: "description",
    type: "input",
    message: "give a brief description of your project"
  },
  {
    name: "installation",
    type: "input",
    message: "give a brief description of how to install packages"
  },
  {
    name: "usage",
    type: "input",
    message: "what is the usage of this app"
  },
  {
    name: "license",
    type: "rawlist",
    choices: ["MIT", "GNU v3.0", "APACHE 2.0", "None"],
    message: "what license should your prject have"
  },
  {
    name: "contributing",
    type: "input",
    message: "contribution guidelines"
  },
  {
    name: "tests",
    type: "input",
    message: "test instructions"
  },
  {
    name: "questions",
    type: "input",
    message: "What is your email"
  }

])
.then((res) => {
  let readMe= generateReadMe(res)
  console.log(readMe)
  writeToReadMe('README.md', readMe )
})