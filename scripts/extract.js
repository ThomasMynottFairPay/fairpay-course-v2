const fs = require('fs');
const path = require('path');

const weeksDir = path.join(__dirname, '../weeks');
const outDir = path.join(__dirname, '../api');

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

let corpus = '';

for (let i = 1; i <= 6; i++) {
    const filePath = path.join(weeksDir, `week${i}.html`);
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf-8');
        corpus += `\n\n--- WEEK ${i} CONTENT ---\n\n`;
        corpus += content;
    }
}

// Write as a JS module to guarantee it bundles correctly in Vercel
const fileContent = `module.exports = { corpus: ${JSON.stringify(corpus)} };\n`;
fs.writeFileSync(path.join(outDir, 'custom_corpus.js'), fileContent, 'utf-8');
console.log('Course corpus extracted successfully to custom_corpus.js!');
