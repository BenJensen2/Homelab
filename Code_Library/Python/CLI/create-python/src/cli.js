import fs from "fs";
import ncp from "ncp";
import path from "path";

async function copyFiles(folder) {
  let cliPath = __dirname;

  let templateDirectory = path.normalize(
    cliPath + "../../templates/fullstack"
  );
  console.log(templateDirectory);

  let targetDirectory = path.resolve(process.cwd(), folder);
  console.log(targetDirectory);
  ncp(templateDirectory, targetDirectory, { clobber: false }, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("\x1b[32m%s\x1b[0m", "Project Created");
    }
  });
}

export async function cli(arguements) {
  let folder = arguements.slice(2)[0];
  await copyFiles(folder);
}
