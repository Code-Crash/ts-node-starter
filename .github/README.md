# TypeScript Node Starter (boilerplate)

## Overview

This project is a boilerplate to create a server/library/script in typescript
for the server side

## How to Use

1. Just clone this repository.
2. Change the folder name for which you are creating the project
   (server/library/scripts/etc...)
3. Change the `package.json` (name, description, version, dependencies)
   - Note: This repository is default configure to use express with typescript
     with minimal setup, you can change it as per your need.
4. Go through the different commands from the `package.json`->`scripts` section.
5. It has the following things already set up (you can remove them if you don't
   want anything from the list)
   1. Basic `.env` Support
   2. Basic Unit Test
   3. Linter
   4. Formatter (prettier)
   5. GitHub Workflow Action To Run Tests
   6. It has some `.vscode` settings, which you can use or ignore.

## Details About Scripts/Setup:

**`TODO`**

## How to Contribute (Want to improve this boilerplate)

1. Clone the repository
2. Create a branch (`[your-github-username]/[bug-or-task-name]`)
3. Check out your branch and do the changes, and add the test case.
4. Run `npm run lint`, `npm run` format` to clean the code
5. Run `npm run test`, make sure existing and new tests should pass or else the
   pull request will be rejected.
6. Commit the changes to your branch.
7. Create a pull request for `develop` branch and tag reviewers.

TODOs:

1. Complete Test Cases For Current Logic.
   1. Unit Tests For Helpers/Methods and Constants
   2. Mock Server Test Setup For Express
2. Add more common use cases for any `node.js` projects
3. Update the README.md
