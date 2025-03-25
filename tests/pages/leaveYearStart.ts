import { expect, type Page } from '@playwright/test';
import leaveYearStartPageContent from "../content/leaveYearStart";

// https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year

export class leaveYearStartPage {
    readonly page: Page;
    private readonly title: string;
    private readonly errorBoxId: string;
    private readonly url: string;

    constructor(page: Page) {
        this.page = page;
        this.url = 'https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year',
        this.title = 'govuk-fieldset__heading';
        this.errorBoxId = '#error-summary';
    }

    async checkPageLoads(): Promise<void> {
        await this.page.goto(this.url);

        await Promise.all([
            expect(this.page.locator(this.title)).toHaveText(leaveYearStartPageContent.pageTitle),
        ]);
    }

    async checkAnEmptyDateCreatesErrorField(): Promise<void> {
        await this.page.goto(this.url);
        await this.page.getByRole('button', { name: leaveYearStartPageContent.buttonName }).click()        

        await Promise.all([
            expect(this.page.locator(this.errorBoxId)).toHaveText(leaveYearStartPageContent.errorMessage)
        ]);
    }

    async checkAnInvalidDateCreatesErrorField(fieldId: string): Promise<void> {
        await this.page.goto(this.url);
        await this.page.getByRole('button', { name: leaveYearStartPageContent.buttonName }).click()        
        await this.page.locator(fieldId).fill("test");

        await Promise.all([
            expect(this.page.locator(this.errorBoxId)).toHaveText(leaveYearStartPageContent.errorMessage)
        ]);
    }
}
