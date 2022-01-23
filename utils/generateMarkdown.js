//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  //console.log("renderLicenseBadge is running")
  //console.log(license);

  switch (license){
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge&logo=appveyor)](https://opensource.org/licenses/MIT)";
      break; 
    case "GNU GPLv3":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg?style=for-the-badge&logo=appveyor)](https://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case "Apache-2.0":
      return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=for-the-badge&logo=appveyor)](https://opensource.org/licenses/Apache-2.0)";
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

function allBadgesSection(gitUser, repoName){

  const langBadge = `https://img.shields.io/github/languages/top/${gitUser}/${repoName}?style=for-the-badge&logo=appveyor`
  const commitBadge = `https://img.shields.io/github/last-commit/${gitUser}/${repoName}?style=for-the-badge&logo=appveyor`
  const sizeBadge = `https://img.shields.io/github/repo-size/${gitUser}/${repoName}?style=for-the-badge&logo=appveyor`
  const issuesBadge = `https://img.shields.io/github/issues/${gitUser}/${repoName}?style=for-the-badge&logo=appveyor`

  return `![Language Badges](${langBadge}) ![Commits Badge](${commitBadge}) ![Repo Size](${sizeBadge}) ![Repo Issues](${issuesBadge})`;


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
      liveLink, 
      installs, 
      installCommand1,
      installCommand2,
      installCommand3,
      runCommand,
      test,
      codeFunction,
      email, 
    } 
      = response;
      
    //console.log(response)
    //console.log("generate markdown is running")

    return `# ${title}
## ${fullName}
${renderLicenseBadge(license)} ${allBadgesSection(gitUser, repoName)}
    
### Description
${description}

### Table of Contents

* [Link](#link)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)


### Link 
🔗 
Link to application [${title}](${liveLink})


### Installation
🔧
In order for this application to work, you need to install the following (dependencies): 
${installs}. 

~~~
${installCommand1} 
${installCommand2}
${installCommand3}
~~~


### Usage 
To run the application from the command line: 

~~~
${runCommand}
~~~


### Contributing 
✍️ 
${fullName} is the author of this application. Find additional work on ${fullName}'s [Github profile.](http://github.com/${gitUser}). 

### Tests
Instructions for testing: ${test}


### Questions
❓💌
Reach out to ${fullName} at ${email} if you have any questions. 

### License
${renderLicenseSection(license)}
${renderLicenseBadge(license)}

`
}

module.exports = generateMarkdown;
  



