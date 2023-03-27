const fs = require('fs');

module.exports = class Page {
    async getData() {
        return await fs.promises.readFile('test/data/test-data.json', 'utf8')
            .then((data) => JSON.parse(data));
    }

    async open() {
        await browser.url(`https://oz.by`)
    }
}
