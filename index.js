const fs = require("fs");
const inquirer = require("inquirer");
const genMarkdown = require("./Develop/utils/generateMarkdown");

// array of questions for user
const questions = [
  "What is the name of your project? (Give the name you have on github)",
  "Please enter a description of what your project is about...",
  "How would you install this project and how would you install the dependencies (if any)?",
  "How would this project be used?",
  "What are the guidelines to contributions to be made to your project?",
  "How do you test your project?",
  "What license will you be using?",
  "What is your github username?",
  "what is your email address?",
];

// prompt the user
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: questions[0],
    },
    {
      type: "input",
      name: "description",
      message: questions[1],
    },
    {
      type: "input",
      name: "install",
      message: questions[2],
    },
    {
      type: "input",
      name: "usage",
      message: questions[3],
    },
    {
      type: "input",
      name: "contribute",
      message: questions[4],
    },
    {
      type: "input",
      name: "test",
      message: questions[5],
    },
    {
      type: "rawlist",
      name: "licensebadge",
      message: questions[6],
      choices: ["None", "MIT", "Apache", "GPL"],
    },
    {
      type: "input",
      name: "username",
      message: questions[7],
    },
    {
      type: "input",
      name: "email",
      message: questions[8],
    },
  ]);
}
// To run a test you would just type "npm run test" in order for the jest to run a test on the functions it is testing.
// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
  });
}

// function to initialize program
async function init() {
  console.log("init started");
  try {
    const answers = await promptUser();

    const readMe = genMarkdown(answers);

    await writeToFile("README.md", readMe);
    console.log("\nsuccessFully wrote the README.md\n");
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
