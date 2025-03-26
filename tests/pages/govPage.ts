import { expect, type Page } from '@playwright/test';
import govPageContent from "../content/govPage"

export class govPage {
    readonly page: Page;
    footerName: string;
    heading: string;
    url: string;
    h1Text: string;
    cookieMessageId: string;
    
    constructor(page: Page) {
        this.page = page;
        this.footerName = govPageContent.footerName
        this.heading = govPageContent.heading;
        this.url = govPageContent.url;
        this.h1Text = "Does the employee work irregular hours or for part of the year?";
        this.cookieMessageId = "global-cookie-message"
    }
    async checkPageHeading(): Promise<void> {
        await this.page.goto(this.url);

        await Promise.all([
            expect(this.page.locator(this.heading)).toHaveText(this.h1Text)
        ]);
    }

    async checkCookieMessagePresent(): Promise<void> {
        await this.page.goto(this.url);

        await Promise.all([
            expect(this.page.locator(this.heading)).toBeDefined
        ]);
    }

    async checkFooterPresent(): Promise<void> {
        await this.page.goto(this.url);

        await Promise.all([
            expect(this.page.locator(this.footerName)).toBeDefined
        ]);
    }
}