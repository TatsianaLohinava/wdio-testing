const Page = require('./page');

function wrapElement(text, className) {
    return 'android=' + `new UiSelector().text("${text}").className("android.widget.${className}")`;
}

class AppPage extends Page {

    get nextButton() {
        return $(wrapElement('Next', "Button"));
    }

    get nameInput() {
        return $(wrapElement('Name', "EditText"));
    }

    get passInput() {
        return $(wrapElement('Password', "EditText"));
    }

    get genderRadioButton() {
        return $(wrapElement('Male', "RadioButton"));
    }

    get privacyToggle() {
        return $(wrapElement('I agree to the Privacy Policy', "Switch"));
    }

    get signupButton() {
        return $(wrapElement('Sign Up', "Button"));
    }

    get appHeading() {
        return $(wrapElement('Web View', "TextView"))
    }

    async getData() {
        return await super.getData();
    }

    async open() {
        await super.open();
    }

}

module.exports = new AppPage();