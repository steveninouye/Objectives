const fs = require('file-system');
const rp = require('request-promise');

const url = {
    uri: 'https://reddit.com/r/popular.json',
    json: true
};

rp(url).then((response) => {
    const posts = response.data.children;
    const postDetails = posts.map((post) => {
        const { title, author, permalink } = post.data;
        const postUrl = `https://www.reddit.com${permalink}`;
        return { title, author, url: postUrl };
    });
    fs.writeFileSync('popular-articles.json', JSON.stringify(postDetails));
});
