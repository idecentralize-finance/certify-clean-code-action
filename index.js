import * as core from '@actions/core';
import * as github from '@actions/github';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the path to the ESLint configuration relative to the Action's directory
const eslintConfigPath = path.join(__dirname, 'eslint.config.mjs'); // Make sure this matches your ESLint config filename

async function run() {
    try {
        // Set up the scanning tools or run your custom scanning logic
        execSync(`node --loader esm npx eslint --config ${eslintConfigPath} --ext .js .`, { stdio: 'inherit' });

        // Add more scanning steps as needed

        // Set the output of the action
        core.setOutput("result", "No malicious code detected");
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
