const { ESLint } = require("eslint");
const fs = require("fs").promises;

(async function main() {
    // 1. Create an instance with the `fix` option.
    const eslint = new ESLint({ fix: true });

	// 2. Load file content
    const content = (await fs.readFile("./test.js", "utf8"));

	// 3. Lint the content
    const lintTextReport = await eslint.lintText(content, {
        filePath: "./test.js",
    });

	// 4. Output the fixed content
	console.log('Output of lintText');
    console.log(lintTextReport[0].output);
	console.log();
})().catch((error) => {
    process.exitCode = 1;
    console.error(error);
});