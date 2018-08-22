const path = require('path');
const fs = require('file-system');

const arr = ['"chirp"', '"chirp"', '"chirp"', '"chirp"', '"chirp"'];

const newFile = path.join(__dirname, '../chirps.json');

fs.writeFileSync(newFile, `[${arr.toString()}]`);

console.log(fs.readFileSync(newFile, 'utf8'));
