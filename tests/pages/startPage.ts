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
    
    async checkIrregularHoursPath(): Promise<void> {
        await this.page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y');
        await this.page.getByLabel('Yes').check();
        await this.page.getByText('Continue').click();
    }

    async checkLeaveYearStart(): Promise<void> {
        await this.page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year');
        await this.page.locator("#response-0").fill('10');
        await this.page.locator("#response-1").fill('10');
        await this.page.locator("#response-2").fill('2026');
        await this.page.getByText('Continue').click();
    }
    
    async checkHoursEmployeeWorked(): Promise<void> {

        await this.page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2026-10-10');
        await this.page.locator("#response").fill('8');
       
    }
    async checkResultsPage(): Promise<void> {   
        await this.page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2026-10-10/8.0'); 
        await expect(this.page.getByText('The statutory entitlement for this pay period is 1 hour.')).toBeVisible();
        await expect(this.page.getByText('Employees cannot accrue more than 28 days (5.6 weeks) over the leave year.')).toBeVisible();

    }


}

