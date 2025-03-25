import { expect, type Page } from '@playwright/test';
import landingPage_content from "../content/startPageContent";

export class StartPage {
    readonly page: Page;
    private readonly title: string;

    constructor(page: Page) {
        this.page = page;
        this.title = `.govuk-heading-xl`;
    }
    
    async checkPageLoads(): Promise<void> {
        await this.page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');

        await Promise.all([
            expect(this.page.locator(this.title)).toHaveText(landingPage_content.pageTitle),
        ]);
    }

    async checkStartButtonPath(): Promise<void> {
        await this.page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');

    
        await Promise.all([
            expect(this.page.getByRole('button', { name: landingPage_content.buttonName })),
        ])
    }

    async clickStartButton(): Promise<void> {
        await this.page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');

        await Promise.all([
            this.page.getByRole('button', { name: landingPage_content.buttonName }).click()
        ]);
    }

    async checkHappyPath(): Promise<void> {
        await this.page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');
        await this.page.getByRole('button', { name: landingPage_content.buttonName }).click()        
        await expect(this.page.getByRole('heading', { name: landingPage_content.nextPageTitle })).toBeVisible();
    }
}

// load page
// check page loads
// click button
// check page loads

