const Page = require('./page');

class WebPage extends Page {

    get menuButton() {
        return $(".//a[contains(@class, 'header__item') and contains(@class, 'header__item_toggle') and contains(@href, '#menu')]");
    }

    get menu() {
        return $("#menu")
    }

    get supplyOptionsButton() {
        return $("//*[contains(@class, 'nav__item') and contains(@href, '/help/assistant') and contains(@href, 'supply')]")
    }

    get closeMenuButton() {
        return $(".btn-close.text-reset.p-3.float-end")
    }

    async getData() {
        return await super.getData();
    }

    async open() {
        await super.open()
    }
}

module.exports = new WebPage();
