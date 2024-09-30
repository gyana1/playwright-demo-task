import { Locator, Page} from '@playwright/test';


export class SearchEditPage {

    readonly page: Page;
    readonly search: Locator;
    readonly result_loc: Locator;
    readonly testedLocationLocator: Locator;
    readonly editNPI: Locator;
    readonly inputNPI: Locator;

    constructor(page: Page) {
        this.page = page;
        this.result_loc = this.page.locator('.Location_locationListContainer__Pgtxm')
        this.editNPI=  page.locator('/html/body/div[1]/div/div[2]/div/div/div/div/div[2]/div[2]/div/div[2]/div[4]/div[2]/div')
        this.search = this.page.getByPlaceholder('Search...')
        this.testedLocationLocator = this.result_loc.locator('nth=0').locator('data-testid=addresslocation').first()
        // this.inputNPI = this.page.locator('input:right-of(:text("NPI"))')

    }

    async searchEditLocation(searchLocal: string, searchTerm:string) {
        await this.search.click();

        await this.search.fill(searchLocal);
        await this.page.waitForTimeout(3000)


        const el = this.result_loc.locator('data-testid=addresslocation', {hasText: searchTerm}).first();

        await el.isVisible()
            await el.click();
           // await this.page.waitForSelector('.Location_locationDetailsContainer__z2qZP');
            await this.editNPI.click();
            await this.page.waitForSelector('css=input.ant-input css-p7e5j5 css-p7e5j5')
            await this.page.waitForTimeout(3000)
            await this.inputNPI.fill('111222333444')
            await this.page.keyboard.press('Enter');
            //await this.page.reload();


            //
            // await this.page.waitForTimeout(3000)
            // console.log("ITEM WAS DELETED!")
            // await this.page.reload();

        // } else {
        //     console.log("The location is not found!")
        //     await this.page.reload();
        // }
    }
}

