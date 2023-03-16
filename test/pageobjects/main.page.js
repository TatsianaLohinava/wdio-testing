import Page from './page.js';

class MainPage extends Page {

    get containerHeaders() {
        return $$(".//*[contains(@id, 'category_goods_container')]");
    }

    get sidebarMenu() {
        return $$('.main-nav__list__li.main-nav__list__li_wnav');
    }

    get loginButton() {
        return $(".top-panel__userbar__auth");
    }

    async unpinHeader() {

        const headers = await this.containerHeaders

        for (const header of headers) {
            const pin = await header.$(".//*[contains(@class, 'i-oz') and contains(@class, 'mpgs-unpin')]")

            await pin.scrollIntoView();

            await pin.click();

            await expect(header).toHaveAttributeContaining('class', 'mpgs-nopin')
        }
    }

    async open() {
        await super.open()
    }
}

export default new MainPage();