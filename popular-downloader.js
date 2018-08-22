const fs = require('file-system');
const rp = require('request-promise');

const url = {
    uri: 'https://reddit.com/r/popular.json',
    json: true
};

rp(url).then((res) => {
    fs.writeFileSync('reddit-json.json', JSON.stringify(res));
});
