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
exports.SearchEditPage = void 0;
var SearchEditPage = /** @class */ (function () {
    function SearchEditPage(page) {
        this.page = page;
        this.result_loc = this.page.locator('.Location_locationListContainer__Pgtxm');
        this.editNPI = page.locator('/html/body/div[1]/div/div[2]/div/div/div/div/div[2]/div[2]/div/div[2]/div[4]/div[2]/div');
        this.search = this.page.getByPlaceholder('Search...');
        this.testedLocationLocator = this.result_loc.locator('nth=0').locator('data-testid=addresslocation').first();
        // this.inputNPI = this.page.locator('input:right-of(:text("NPI"))')
    }
    SearchEditPage.prototype.searchEditLocation = function (searchLocal, searchTerm) {
        return __awaiter(this, void 0, void 0, function () {
            var el;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.search.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.search.fill(searchLocal)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.page.waitForTimeout(3000)];
                    case 3:
                        _a.sent();
                        el = this.result_loc.locator('data-testid=addresslocation', { hasText: searchTerm }).first();
                        return [4 /*yield*/, el.isVisible()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, el.click()];
                    case 5:
                        _a.sent();
                        // await this.page.waitForSelector('.Location_locationDetailsContainer__z2qZP');
                        return [4 /*yield*/, this.editNPI.click()];
                    case 6:
                        // await this.page.waitForSelector('.Location_locationDetailsContainer__z2qZP');
                        _a.sent();
                        return [4 /*yield*/, this.page.waitForSelector('css=input.ant-input css-p7e5j5 css-p7e5j5')];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.page.waitForTimeout(3000)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.inputNPI.fill('111222333444')];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.page.keyboard.press('Enter')];
                    case 10:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return SearchEditPage;
}());
exports.SearchEditPage = SearchEditPage;
//# sourceMappingURL=searchEdit.page.js.map