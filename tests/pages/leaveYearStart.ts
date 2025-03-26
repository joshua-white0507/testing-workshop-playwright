import { expect, type Page } from '@playwright/test';
import leaveYearStartPageContent from "../content/leaveYearStart";

export class leaveYearStartPage {
    readonly page: Page;
    private readonly pageTitle: string;
    private readonly pageTitleClass: string;
    private readonly errorMessage: RegExp;
    private readonly errorBoxId: string;
    private readonly buttonText: string;
    private readonly url: string;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = leaveYearStartPageContent.pageTitle;
        this.pageTitleClass = leaveYearStartPageContent.pageTitleClass;
        this.url = leaveYearStartPageContent.url;
        this.errorMessage = leaveYearStartPageContent.errorMessage;
        this.errorBoxId = leaveYearStartPageContent.errorBoxIdleave
        this.buttonText = leaveYearStartPageContent.buttonText
    }

    async checkPageLoads(): Promise<void> {
        await this.page.goto(this.url);

        await Promise.all([
            expect(this.page.locator(this.pageTitleClass)).toHaveText(this.pageTitle),
        ]);
    }

    async checkAnEmptyDateCreatesErrorField(): Promise<void> {
        await this.page.goto(this.url);
        await this.page.getByRole('button', { name: this.buttonText }).click()        

        await Promise.all([
            expect(this.page.locator(this.errorBoxId)).toHaveText(this.errorMessage)
        ]);
    }

    async checkAnInvalidDateCreatesErrorField(fieldId: string): Promise<void> {
        await this.page.goto(this.url);
        await this.page.getByRole('button', { name: this.buttonText }).click()        
        await this.page.locator(fieldId).fill("test");

        await Promise.all([
            expect(this.page.locator(this.errorBoxId)).toHaveText(this.errorMessage)
        ]);
    }
}
