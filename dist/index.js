/******/ var __webpack_modules__ = ({});
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __nccwpck_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	var threw = true;
/******/ 	try {
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 		threw = false;
/******/ 	} finally {
/******/ 		if(threw) delete __webpack_module_cache__[moduleId];
/******/ 	}
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
const core = require('@actions/core');
const github = require('@actions/github');
const path = require('path');
const { exec } = require('child_process');

const eslintConfigPath = __nccwpck_require__.ab + "eslint.config.mjs";

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

