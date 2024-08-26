"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var test_1 = require("@playwright/test");
var login_page_1 = require("../pages/login.page");
var createLocations_page_1 = require("../pages/createLocations.page");
var searchDelete_page_1 = require("../pages/searchDelete.page");
var searchEdit_page_1 = require("../pages/searchEdit.page");
test_1.test('create_location', function (_a) {
    var browser = _a.browser;
    return __awaiter(void 0, void 0, void 0, function () {
        var page, loginPage, locationPage;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, browser.newPage()];
                case 1:
                    page = _b.sent();
                    loginPage = new login_page_1.LoginPage(page);
                    return [4 /*yield*/, loginPage.goToUrl("/")];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, loginPage.login('admintester', "Alph@N0dus")];
                case 3:
                    _b.sent();
                    locationPage = new createLocations_page_1.CreateLocationsPage(page);
                    return [4 /*yield*/, locationPage.goToUrl("/admin?menu=Locations")];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, locationPage.openAndFillCreateLocationsForm("Test Location 1", "Location BG 1", "Plovdiv 1", "PLD", "12345678")];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, page.close()];
                case 6:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
test_1.test('search_delete_location', function (_a) {
    var browser = _a.browser;
    return __awaiter(void 0, void 0, void 0, function () {
        var page, loginPage, locationPage, searchPage;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, browser.newPage()];
                case 1:
                    page = _b.sent();
                    loginPage = new login_page_1.LoginPage(page);
                    return [4 /*yield*/, loginPage.goToUrl("/")];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, loginPage.login('admintester', "Alph@N0dus")];
                case 3:
                    _b.sent();
                    locationPage = new createLocations_page_1.CreateLocationsPage(page);
                    return [4 /*yield*/, locationPage.goToUrl("/admin?menu=Locations")];
                case 4:
                    _b.sent();
                    searchPage = new searchDelete_page_1.SearchDeletePage(page);
                    return [4 /*yield*/, searchPage.searchDeleteLocation('Test', '1')];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, page.close()];
                case 6:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
test_1.test.skip('search_edit_location', function (_a) {
    var browser = _a.browser;
    return __awaiter(void 0, void 0, void 0, function () {
        var page, loginPage, locationPage, editPage;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, browser.newPage()];
                case 1:
                    page = _b.sent();
                    loginPage = new login_page_1.LoginPage(page);
                    return [4 /*yield*/, loginPage.goToUrl("/")];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, loginPage.login('admintester', "Alph@N0dus")];
                case 3:
                    _b.sent();
                    locationPage = new createLocations_page_1.CreateLocationsPage(page);
                    return [4 /*yield*/, locationPage.goToUrl("/admin?menu=Locations")];
                case 4:
                    _b.sent();
                    editPage = new searchEdit_page_1.SearchEditPage(page);
                    return [4 /*yield*/, editPage.searchEditLocation('Test', '2')];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, page.close()];
                case 6:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
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
//# sourceMappingURL=LocationsCRUD.spec.js.map