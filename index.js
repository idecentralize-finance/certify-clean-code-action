const core = require('@actions/core');
const path = require('path');
const { execSync } = require('child_process');

const eslintConfigPath = path.join(__dirname, 'eslint.config.js'); // Ensure this matches your ESLint config filename

async function run() {
    try {
        // Run ESLint with the correct command adapted for the flat config system
        execSync(`npx eslint . --config "${eslintConfigPath}"`, { stdio: 'inherit' });

        // Set the output of the action
        core.setOutput('result', 'No malicious code detected');
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
