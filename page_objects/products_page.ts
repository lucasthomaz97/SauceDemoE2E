import { Page, Locator } from '@playwright/test';

export class ProductsPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get productsHeading(): Locator {
        return this.page.locator('[data-test="secondary-header"]');
    }

    get menuButton(): Locator {
        return this.page.getByRole('button', { name: 'Open Menu' });
    }

    get logoutButton(): Locator {
        return this.page.locator('[data-test="logout-sidebar-link"]');
    }
}