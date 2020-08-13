// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Table of Contents

  1. [Documentation](#my-first-title)
    1. [Description](#my-second-title)
    2. [Installion Instructions](#my-second-title)
    3. [Usage Information](#my-second-title)
  2. [Test Instructions](#my-second-title) 
  3. [Contribution Guideline](#my-second-title)
  4. [License](#my-second-title)
  5. [Questions](#my-second-title)

  ## My first title

  

  ## My second title
`;
}

module.exports = generateMarkdown;
