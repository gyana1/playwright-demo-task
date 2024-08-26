import {Locator, Page} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginBtn:Locator

    constructor(page:Page) {
        this.page = page;
        this.username = page.locator('[name="username"]').locator('nth=1');
        this.password = page.locator('[name="password"]').locator('nth=1');
        this.loginBtn = page.locator('[name="signInSubmitButton"]').locator('nth=1');
    }

    async goToUrl(url: string){
        await this.page.goto(url);
        await this.page.waitForLoadState('domcontentloaded');
    }

    async login(username: string, password: string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()

    }
}