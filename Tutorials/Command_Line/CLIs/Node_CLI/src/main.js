import chalk from "chalk"; //Terminal string styling done right
import fs from "fs"; // Node module to interact with the file system
import ncp from "ncp"; // Asynchronous recursive file & directory copying
import path from "path"; // Node module to access file system paths
import { promisify } from "util"; // Node method in the utilities module to return responses in a promise object
import execa from "execa"; // Process execution for humans
import Listr from "listr"; // Terminal Task List
import { projectInstall } from "pkg-install"; //Easier installation of Node.js packages irrespective of the platform or package manager.

// Check to see if the file exists & if Node can access it with it's permissions
const access = promisify(fs.access);
// Asynchronously & Recursively copy files
const copy = promisify(ncp);

async function copyTemplateFiles(options) {
  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false, // Don't overwrite if files exist there
  });
}

// Initialize Git repo and return error if failed
async function initGit(options) {
  const result = await execa("git", ["init"], {
    cwd: options.targetDirectory,
  });
  if (result.failed) {
    return Promise.reject(new Error("Failed to initialize git"));
  }
  return;
}

// Create project function, exported out of script
export async function createProject(options) {
  options = {
    ...options,
    targetDirectory: options.targetDirectory || process.cwd(), // .cwd() Current working director
  };

  //const currentFileUrl = import.meta.url; // exposes context-specific metadata to a JS module
  const templateDir = path.resolve(
    // Resolves a sequence of path-segments to an absolute path
    new URL(import.meta.url).pathname, // Create a new URL object
    "../../templates",
    options.template //.toLowerCase()
  );
  options.templateDirectory = templateDir;

  // Try accessing the current directory.  Any errors are printed with bold red "ERROR"
  try {
    await access(templateDir, fs.constants.R_OK);
  } catch (err) {
    console.error("%s Invalid template name", chalk.red.bold("ERROR"));
    process.exit(1);
  }

  const tasks = new Listr([
    {
      title: "Copy project files",
      task: () => copyTemplateFiles(options),
    },
    {
      title: "Initilaize git",
      task: () => initGit(options),
      enabled: () => options.git,
    },
    {
      title: 'Install dependencies',
      task: () => 
      projectInstall({
        cwd: options.targetDirectory,
      }),
      // If runInstall is not in options it will send the message
      skip: () => 
      !options.runInstall
      ? 'Pass --install to automatically install dependencies'
      : undefined,
    }
  ]);

  await tasks.run();
  console.log("%s Project ready", chalk.green.bold("DONE"));
  return true;
}
