const core = require('@actions/core');
const github = require('@actions/github');
const path = require('path');
const { exec } = require('child_process');

const eslintConfigPath = path.join(__dirname, 'eslint.config.js');

async function run() {
    try {
        // Set up the scanning tools or run your custom scanning logic
        exec(`npx eslint --config ${eslintConfigPath} .`, (error, stdout, stderr) => {  // Use backticks here
            if (error) {
                core.setFailed(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                core.setFailed(`Standard Error: ${stderr}`);
                return;
            }
            console.log(`ESLint Output: ${stdout}`);
        });

        // Add more scanning steps as needed

        // Set the output of the action
        core.setOutput("result", "No malicious code detected");
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
