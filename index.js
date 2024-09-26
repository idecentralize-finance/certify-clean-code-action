const core = require('@actions/core');
const github = require('@actions/github');
const path = require('path');
const { execSync } = require('child_process');

// Define the path to the ESLint configuration relative to the Action's directory
const eslintConfigPath = path.join(__dirname, 'eslint.config.js'); // Ensure this matches your ESLint config filename

async function run() {
    try {
        // Run ESLint with the correct configuration file
        execSync(`npx eslint --config "${eslintConfigPath}" --ext .js .`, { stdio: 'inherit' });

        // Set the output of the action
        core.setOutput("result", "No malicious code detected");
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
