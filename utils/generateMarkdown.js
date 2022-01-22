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
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    default:
      return ""; 
  }


}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  console.log("renderLicenseSection is running")

}

// TODO: Create a function to generate markdown for README
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
    } 
      = response;
      
    console.log(response)
    console.log("generate markdown is running")




    return `# ${title}
# ${fullName}
## ${title}
${renderLicenseBadge(license)}
    
## Description
${description}

## Author ${fullName}
Git hub URL ${gitUser}

## License
${license}



`
}

module.exports = generateMarkdown;
  



