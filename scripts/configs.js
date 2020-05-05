const exec = require('child_process').execSync;
const far = require('find-and-replace');
const fs = require('fs');
const path = require('path');

const chalk = require('./chalk');

const adminDir = path.resolve(__dirname, '../static/admin');

let branch;

try {
  // In local development we get the branch directly from git
  branch = exec('git symbolic-ref --short -q HEAD').toString();
}
catch (ex) {
  // Ignore, proceeds with following if block
}
if (!branch) {
  // If we're deploying on Netlify, use $HEAD env var
  // Fallback to master
  branch = process.env.HEAD || 'master';
}

// Make sure there are no linebreaks in the string
branch = branch.replace(/\r?\n|\r/g, '');

// Create the output directory if it doesn't exist yet
if (!fs.existsSync(adminDir)) {
  fs.mkdirSync(adminDir);
}

far
  .src('./config/cms.yml')
  .dest(`${adminDir}/config.yml`)
  .replace({
    '<% CURRENT_BRANCH %>': branch,
  })
  .complete(() => {
    // eslint-disable-next-line no-console
    console.log(chalk.green('Updated CMS configuration file.'));
  })
  .error(err => {
    throw err;
  });
