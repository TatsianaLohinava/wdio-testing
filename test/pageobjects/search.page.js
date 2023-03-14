const Page = require('./page');

class SearchBar extends Page {
    get searchField() {
        return $('#top-s');
    }

    get resetButton() {
        return $('.input-reset');
    }

    async enterQuery(query) {
        await this.searchField.addValue(query)
    }

    async open() {
        await super.open()
    }
}

module.exports = new SearchBar();