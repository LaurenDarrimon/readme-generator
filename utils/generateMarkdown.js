//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  //console.log("renderLicenseBadge is running")
  //console.log(license);

  switch (license){
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break; 
    case "GNU GPLv3":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case "Apache-2.0":
      return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    default:
      return ""; 
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  switch (license){
    case "MIT":
      return `The license for this project is: [MIT](https://opensource.org/licenses/MIT)`;
      break; 
    case "GNU GPLv3":
      return ` The license for this project is: [LGPL v3](https://www.gnu.org/licenses/lgpl-3.0)`;
      break;
    case "Apache-2.0":
      return `The license for this project is: [Apache 2.0](https://opensource.org/licenses/Apache-2.0)`;
      break;
    default:
      return ""; 
  }
}

//Create a function to generate markdown for README
function generateMarkdown(response) {

    //object destructuring to declare new constants from user input  
    const 
    {
      fullName,
      gitUser,
      title,
      description,
      license, 
      repoName,
      liveLink 
    } 
      = response;
      
    //console.log(response)
    //console.log("generate markdown is running")

    return `# ${title}
# ${fullName}
${renderLicenseBadge(license)}
    
## Description
${description}

## Table of Contents

* [Link](#link)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)


## Link 
Deployed Link: [${title}](${liveLink})


## Installation


## Usage 


## Contributing 
Author ${fullName}
Git hub URL ${gitUser}

## Tests



## Questions



## License
${renderLicenseSection(license)}
${renderLicenseBadge(license)}



`
}

module.exports = generateMarkdown;
  



