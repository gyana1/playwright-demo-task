import { Page, test} from "@playwright/test";
import {LoginPage} from "../pages/login.page";
import {CreateLocationsPage} from "../pages/createLocations.page";
import {SearchDeletePage} from "../pages/searchDelete.page";
import {SearchEditPage} from "../pages/searchEdit.page";


test('create_location', async ({browser})=> {

    const page:Page = await browser.newPage();

    const loginPage = new LoginPage(page)
    await loginPage.goToUrl("/")
    await loginPage.login('admintester', "Alph@N0dus")

    const locationPage = new CreateLocationsPage(page)
    await locationPage.goToUrl("/admin?menu=Locations")
    await locationPage.openAndFillCreateLocationsForm("Test Location 1", "Location BG 1", "Plovdiv 1","PLD","12345678")


    await page.close()
});

test('search_delete_location',async ({browser})=> {

    const page: Page = await browser.newPage();

    const loginPage = new LoginPage(page)
    await loginPage.goToUrl("/")
    await loginPage.login('admintester', "Alph@N0dus")

    const locationPage = new CreateLocationsPage(page)
    await locationPage.goToUrl("/admin?menu=Locations")

    const searchPage = new SearchDeletePage(page)
    await searchPage.searchDeleteLocation('Test','1')


    await page.close()

})
test.skip('search_edit_location',async ({browser})=> {

    const page: Page = await browser.newPage();

    const loginPage = new LoginPage(page)
    await loginPage.goToUrl("/")
    await loginPage.login('admintester', "Alph@N0dus")

    const locationPage = new CreateLocationsPage(page)
    await locationPage.goToUrl("/admin?menu=Locations")

    const editPage = new SearchEditPage(page)
    await editPage.searchEditLocation('Test','2')

    await page.close()

})

















// import {test, Browser, Page, Locator, expect} from '@playwright/test';
// import {chromium} from 'playwright';
//
//
// test('Login', async ({browser})=>{
//
//    // const browser:Browser = await chromium.launch({headless:false,channel:"chrome"});
//    const page:Page = await browser.newPage();
//
//     await page.goto("/");
//
//     await page.waitForLoadState('domcontentloaded');
//
//
//     const username:Locator = page.getByRole('textbox',{name:'Username'});
//     const password:Locator = page.getByRole('textbox',{name:'Password'});
//     const loginBtn:Locator = page.getByRole('button',{name:'submit'});
//     const userProfile:Locator = page.locator('.ActiveUser_userInfo__DePq1');
//
//     await username.fill('admintester');
//     await password.fill('Alph@N0dus');
//     await loginBtn.click();
//
//     // await page.waitForLoadState('domcontentloaded');
//     // await page.waitForURL("https://dev.jit.care/")
//
//     await expect(page.getByTestId('username')).toBeVisible();
//     await page.waitForSelector(".ActiveUser_userInfo__DePq1");
//     await userProfile.hover();
//
//     const adminPanel= await page.getByText('Admin Portal');
//     await adminPanel.click();
//
//
//     const locations = await page.getByText('Locations');
//     await locations.click();
//
//     await page.waitForLoadState('domcontentloaded');
//
//     const addBtn:Locator = await page.getByRole('button',{name:'plus'});
//           await addBtn.focus();
//           await addBtn.click();
// //Create a new location with an unique name, address and, alias, NPI and make sure that the status is active
//     const nameLocal= await page.getByPlaceholder('Location Name');
//           await nameLocal.click();
//           await nameLocal.fill('TestLocation_1');
//
//     const description = await page.getByPlaceholder('Description');
//           await description.click();
//           await description.fill('Location BG');
//     const address = await page.getByPlaceholder('Address');
//           await address.click();
//           await address.fill('Plovdiv');
//
//     const status = await page.getByLabel('Status');
//           await status.click();
//           await page.getByTitle('active', { exact: true }).click();
//     const add = await page.getByRole('button', { name: 'Add Location' });
//           await add.click();
//           await page.waitForLoadState();
//
//
//  //Search for that new location and make sure that it is visible in the UI
//     const loc= await nameLocal.inputValue();
//     const search = await page.getByPlaceholder('Search...');
//           await search.click();
//           await search.fill(loc);
//
//           // await page.waitForTimeout(10000);
//  const result_loc = await page.locator('.Location_locationListContainer__Pgtxm');
//  const testedLocationLocator = result_loc.locator('nth=0').locator('data-testid=addresslocation').first();
//
//           await expect(testedLocationLocator).toContainText(loc);
//
//  // const testedLocationText = await testedLocationLocator.allTextContents();
//  // for (const el of testedLocationText) {
//  //  console.log(el);
//  // }
//
//  if  (testedLocationLocator.isVisible()) {
//      testedLocationLocator.click();
//      await page.waitForSelector('.Location_locationDetailsContainer__z2qZP');
//      // await page.waitForTimeout(6000);
//      await page.getByRole('button',{name:'delete'});
//      console.log("alallalal");
//
//      const logoutBtn = page.getByRole('button', { name: 'Logout' });
//      await logoutBtn.click();
//
//      await page.close()
//      //await page.waitForSelector('')
//
//  } else {
//    console.log('NO Found > ' + testedLocationLocator)
//  }
//
//
//  // console.log(result_Item +"or"+loc);
//
//
// // if(loc==result_Item){
// //  await page.getByTestId("loading").first().click();
// // }
//
//
// // ;
//
// //await page.getByRole('button',{name:'delete'});
//
//
//
//
//    // await browser.close();
//
//
// });
//
//

//
// import {expect, Page, test} from "@playwright/test";
// import {LoginPage} from "../pages/login.page";
// import {CreateLocationsPage} from "../pages/locations.page";
//
// test('create_location', async ({browser})=> {
//
//     const page:Page = await browser.newPage();
//
//     const loginPage = new LoginPage(page)
//     await loginPage.goToUrl("/")
//     await loginPage.login('admintester', "Alph@N0dus")
//
//     const locationPage = new CreateLocationsPage(page)
//     await locationPage.goToUrl("/admin?menu=Locations")
//     await locationPage.openAndFillCreateLocationsForm()
//
//     await page.close()
// });