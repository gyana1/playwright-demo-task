import {test, expect, Browser, Page} from '@playwright/test';
import {LoginPage} from "../pages/login.page";

test.skip('login_with_success', async ({browser})=> {

   const page:Page = await browser.newPage();

    const loginPage = new LoginPage(page)
    await loginPage.goToUrl("/")
    await loginPage.login('admintester', "Alph@N0dus")

    await expect(page.getByTestId('username')).toBeVisible()

    await page.close()
});



















//
// test('login_with_wrong_username', async ({browser})=> {
//
//     const page:Page = await browser.newPage();
//
//     const loginPage = new LoginPage(page)
//     await loginPage.goToUrl("/")
//     await loginPage.login('mywronguser', "mywrongpassword")
//
//     await expect(page.locator("[id='loginErrorMessage']").locator('nth=1')).toBeVisible()
//
//     await page.close()
// });
//
// test('login_with_wrong_password', async ({browser})=> {
//
//     const page:Page = await browser.newPage();
//
//     const loginPage = new LoginPage(page)
//     await loginPage.goToUrl("/")
//     await loginPage.login('admintester', "mywrongpassword")
//
//     await expect(page.locator("[id='loginErrorMessage']").locator('nth=1')).toBeVisible()
//
//     await page.close()
// });

