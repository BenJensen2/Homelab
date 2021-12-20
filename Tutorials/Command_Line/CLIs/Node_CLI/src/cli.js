import arg from "arg"; // unopinionated, no-frills CLI argument parser.
import inquirer from "inquirer"; // collection of common interactive command line user interfaces
import { createProject } from "./main"; // Create project function from main.js

function parseArgumentsIntoOptions(rawArgs) {
  //arg() returns an object with any values present on the command-line
  const args = arg(
    {
      //  Main Commands
      "npm": Boolean,
      "--git": Boolean,
      "--yes": Boolean,
      "--install": Boolean,

      //  Aliases
      "-g": "--git",
      "-y": "--yes",
      "-i": "--install",
    },
    {
      //  Options
      argv: rawArgs.slice(2),
    }
  );
  // console.log("args object:",args)
  return {
    // Returns arguement status'
    npm: args['npm'] || false,
    skipPrompts: args["--yes"] || false,
    git: args["--git"] || false,
    template: args._[0],
    runInstall: args["--install"] || false,
  };
}

// async: Used instead of promise chains
async function prompForMissingOptions(options) {
  const defaultTemplate = "JavaScript";

  // If there's skip prompts, return the options & template
  if (options.skipPrompts) {
    return {
      ...options,
      template: options.template || defaultTemplate,
    };
  }

  // If there's not an template option push template questions to the questions array
  const questions = [];
  if (!options.template) {
    questions.push({
      type: "list",
      name: "template",
      message: "Please choose which project template to use",
      choices: ["JavaScript", "TypeScript"],
      default: defaultTemplate,
    });
  }

  // If there are not git options, push git questions
  if (!options.git) {
    questions.push({
      type: "confirm",
      name: "git",
      message: "Initialize a git repository?",
      default: false,
    });
  }

  // Wait for the inquirer prompt to set the answers
  // Then return options, template options & git options
  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    template: options.template || answers.template,
    git: options.git || answers.git,
  };
}

export async function cli(args) {
  // Options
  let options = parseArgumentsIntoOptions(args);
  // Missing Options
  options = await prompForMissingOptions(options);
  await createProject(options);
}
