// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![GitHub](https://img.shields.io/github/license/${data.username}/${data.title})
  ## Table of Contents

  1. [Documentation](#documentation)\n

      1. [Description](#description)
      2. [Installation Instructions](#Installation)
      3. [Usage Information](#usage)

  2. [Test Instructions](#test)
  3. [Contribution Guideline](#contribution)
  4. [License](#license)
  5. [Questions](#questions)

  ## Documentation <a name="documentation"></a>

  ### Description <a name="description"></a>

  - ${data.description}

  ### Installation Instructions <a name="Installation"></a>

  - ${data.install}

  ### Usage Information <a name="usage"></a>

  - ${data.usage}

  ## Test Instructions <a name="test"></a>

  - ${data.test}

  ## Contribution Guideline <a name="contribution"></a>

  - ${data.contribute}

  ## License <a name="license"></a>

  - This Application is covered under the ${data.licensebadge} License.

  ## Questions <a name="questions"></a>
   For any further questions checkout my **github page**
   - [${data.username}](https://github.com/${data.username})

   and/or...
   
   contact me by my **email** with a detailed Subject and message to what the message is for. _Only Contact my email for anymore questions related to contributing to this project._

  - ${data.email}

`;
}

// Export the function we are going to be using to the index.js file
module.exports = generateMarkdown;
