import Page from './page.js';

class LoginForm extends Page {

    get loginWithEmailButton() {
        return $('#loginFormLoginEmailLink');
    }

    get form() {
        return $("#loginForm");
    }

    get inputEmail() {
        return this.form.$("input[type='email']");
    }

    get inputPassword() {
        return this.form.$("input[type='password']");
    }

    get btnSubmit() {
        return this.form.$("button[type='submit']");
    }

    async login(email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async open() {
        await super.open();
    }
}

export default new LoginForm();
