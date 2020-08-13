// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![GitHub](https://img.shields.io/github/license/${data.username}/${data.title})
  ## Table of Contents

  1. [Documentation](#documentation)

      1. [Description](#description)
      2. [Installion Instructions](#installion)
      3. [Usage Information](#usage)

  2. [Test Instructions](#test)
  3. [Contribution Guideline](#contribution)
  4. [License](#license)
  5. [Questions](#questions)

  ## Documentation <a name="documentation"></a>

  ### Description <a name="description"></a>

  - ${data.description}

  ### Installion Instructions <a name="installion"></a>

  - ${data.install}

  ### Usage Information <a name="usage"></a>

  - ${data.usage}

  ## Test Instructions <a name="test"></a>

  - ${data.test}

  ## Contribution Guideline <a name="contribution"></a>

  - ${data.contribute}

  ## License <a name="license"></a>

  - ${data.whatLicense}

  ## Questions <a name="questions"></a>

  For any further questions checkout my **github page** and/or contact me by my **email**
  - ${data.username}
  - ${data.email}


`;
}

module.exports = generateMarkdown;
