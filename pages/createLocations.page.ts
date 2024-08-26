import {expect, Locator, Page} from '@playwright/test';

export class CreateLocationsPage {
    readonly page: Page;
    readonly addBtn: Locator;
    readonly nameLocal: Locator;
    readonly description: Locator;
    readonly address: Locator;
    readonly alias: Locator;
    readonly npi: Locator;
    readonly status: Locator;
    readonly statusActive: Locator;
    readonly submitBnt: Locator;
    readonly search:Locator;



    constructor(page:Page) {
        this.page = page;
        this.nameLocal = this.page.getByPlaceholder('Location Name');
        this.addBtn = this.page.getByRole('button',{name:'plus'});
        this.description = this.page.getByPlaceholder('Description');
        this.address = this.page.getByPlaceholder('Address');
        this.alias = this.page.locator("[id='locationCreate_alias']");
        this.npi = this.page.locator("[id='locationCreate_npi']");
        this.status = this.page.getByLabel('Status');
        this.statusActive =this.page.getByTitle('active', { exact: true });
        this.submitBnt = this.page.getByRole('button', { name: 'Add Location' });
        this.search = this.page.getByPlaceholder('Search...');


    }

    async goToUrl(url: string){
        await this.page.goto(url);
        await this.page.waitForLoadState('domcontentloaded');
    }

    async openAndFillCreateLocationsForm(name: string, description: string, address: string, alias: string, npi: string){
        await this.addBtn.focus();
        await this.addBtn.click();

        await this.nameLocal.click();
        await this.nameLocal.fill(name);
        await this.page.waitForTimeout(1000)
        await this.description.click();
        await this.description.fill(description);
        await this.page.waitForTimeout(1000)
        await this.address.click();
        await this.address.fill(address);
        await this.page.waitForTimeout(1000)
        await this.alias.click();
        await this.alias.fill(alias);
        await this.page.waitForTimeout(1000)
        await this.npi.click();
        await this.npi.fill(npi);
        await this.page.waitForTimeout(1000)
        await this.status.click();
        await this.statusActive.click();
        await this.page.waitForTimeout(1000)
        await this.submitBnt.click();
        await this.page.waitForTimeout(5000)
        await this.page.waitForLoadState();

    }















     // async searchLocation(searchLocal:string) {
     //    await this.search.click()
     //     await this.search.fill(searchLocal)

    //     await this.search.click();
    //
    //     await this.search.fill(searchLocal);
    //
    //     const result_loc = await this.page.locator('.Location_locationListContainer__Pgtxm');
    //     const testedLocationLocator = result_loc.locator('nth=0').locator('data-testid=addresslocation').first();
    //
    //
    //
    //     await expect(this.testedLocationLocator).toContainText(searchLocal);

   // }

    // async deleteLocation() {
    //
    //     if (await this.testedLocationLocator.isVisible()) {
    //         await this.testedLocationLocator.click();
    //         await this.page.waitForSelector('.Location_locationDetailsContainer__z2qZP');
    //         await this.deleteBtn.click();
    //         this.page.on('dialog', async dialog=>{
    //             console.log('Dialog message:${dialog.message()}');
    //             await dialog.accept();
    //
    //         })
    //         console.log("The location is deleted!");
    //     }else{
    //         console.log("The location is not found!")
    //     }
    //
    // }
}