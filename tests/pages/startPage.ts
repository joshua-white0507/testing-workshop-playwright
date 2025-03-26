import { expect, type Page } from '@playwright/test';
import { govPage } from './govPage';
import startPageContent from "../content/startPageContent";


export class StartPage extends govPage {
    readonly page: Page;
    private readonly title: string;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = startPageContent.url
        this.title = `.govuk-heading-xl`;
        this.h1Text = startPageContent.h1Text;
        this.heading = startPageContent.heading;
    }
    async checkStartButtonPath(): Promise<void> {
        await this.page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');

    
        await Promise.all([
            expect(this.page.getByRole('button', { name: startPageContent.buttonName })),
        ])
    }

    async clickStartButton(): Promise<void> {
        await this.page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');

        await Promise.all([
            this.page.getByRole('button', { name: startPageContent.buttonName }).click()
        ]);
    }

    async checkHappyPath(): Promise<void> {
        await this.page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');
        await this.page.getByRole('button', { name: startPageContent.buttonName }).click()        
        await expect(this.page.getByRole('heading', { name: startPageContent.nextPageTitle })).toBeVisible();

    }
    
    async checkIrregularHoursPath(): Promise<void> {
        await this.page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y');
        await this.page.getByLabel('Yes').check();
        await this.page.getByText('Continue').click();
    }

    async checkLeaveYearStart(): Promise<void> {
        await this.page.goto('https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year');
       
        const inputs = [{id: "#response-0", input: '10'}, {id: "#response-1", input: '10'}, {id: "#response-2", input: '2026'}]
        for (let i = 0; i < inputs.length; i++) {
            await this.page.locator(inputs[i].id).fill(inputs[i].input);
        }
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

