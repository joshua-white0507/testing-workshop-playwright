import { expect, type Page } from '@playwright/test';
import landingPage_content from "../content/startPage_content";

export class IrregularHours {
    readonly page: Page;
    private readonly title: string;

    constructor(page: Page) {
        this.page = page;
        this.title = `.govuk-heading-xl`;
    }
    
    async checkInputBox(): Promise<void> {
        await this.page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y');
        await this.page.getByLabel('Yes').check();

    }

    async clickContinueButton(): Promise<void> {
        await this.page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y');

        await this.page.getByText('Continue').click()
    }
}