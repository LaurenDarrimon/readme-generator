// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  console.log("renderLicenseBadge is running")
  console.log(license);

  switch (license){
    case "MIT":
      console.log("The license is MIT");
      break; 
    case "GNU GPLv3":
      console.log("The license is GNU");
      break;
    case "Apache-2.0":
      console.log("The license is Apache");
      break;
    default:
      return ""; 
  }



}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  console.log("renderLicenseLink is running")

  const licenseLink = `https://img.shields.io/github/license/${gitUser}/${repoName}`
  
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

    renderLicenseBadge(license, repoName);



    return `# ${title}
# ${fullName}
## ${title}
    
## Description
${description}

## Author ${fullName}
Git hub URL ${gitUser}

## License
${license}

`
}

module.exports = generateMarkdown;
  



