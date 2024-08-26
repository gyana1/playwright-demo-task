import {expect, Locator, Page} from '@playwright/test';

export class SearchDeletePage {

    readonly page: Page;
    readonly search: Locator;
    readonly result_loc: Locator;
    readonly testedLocationLocator: Locator;
    readonly deleteBtn: Locator;
    readonly okBtn: Locator;
    readonly confirmDialog: Locator;

    constructor(page: Page) {
        this.page = page;
        this.search = this.page.getByPlaceholder('Search...');
        this.result_loc = this.page.locator('.Location_locationListContainer__Pgtxm');
        this.testedLocationLocator = this.result_loc.locator('nth=0').locator('data-testid=addresslocation').first();
        this.deleteBtn = this.page.getByRole('button', {name: 'delete'});
        this.okBtn = this.page.getByRole('button', {name: 'OK'})
        this.confirmDialog = this.page.locator('#ant-modal css-p7e5j5')


    }

    async searchDeleteLocation(searchLocal: string, searchTerm:string) {
        await this.search.click();

        await this.search.fill(searchLocal);
        await this.page.waitForTimeout(3000)

            // await expect(this.testedLocationLocator).toContainText(searchLocal)
            // expect(this.testedLocationLocator, searchLocal);
        const el = this.result_loc.locator('data-testid=addresslocation', {hasText: searchTerm}).first();
            if (await el.isVisible()) {
                await el.click();
                await this.page.waitForSelector('.Location_locationDetailsContainer__z2qZP');
                await this.deleteBtn.click();
                await this.confirmDialog.isVisible({timeout: 3000})

                await this.okBtn.click();

                await this.page.waitForTimeout(3000)
                console.log("ITEM WAS DELETED!")
                await this.page.reload();

            } else {
                console.log("The location is not found!")
                await this.page.reload();
            }
    }
}

