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
test_1.test.skip('login_with_success', function (_a) {
    var browser = _a.browser;
    return __awaiter(void 0, void 0, void 0, function () {
        var page, loginPage;
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
                    return [4 /*yield*/, test_1.expect(page.getByTestId('username')).toBeVisible()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, page.close()];
                case 5:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
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
//# sourceMappingURL=Login.spec.js.map