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

    get productSortSelect(): Locator {
        return this.page.locator('[data-test="product-sort-container"]');
    }

    get shoppingCartLink(): Locator {
        return this.page.locator('[data-test="shopping-cart-link"]');
    }

    get menuCloseButton(): Locator {
        return this.page.getByRole('button', { name: 'Close Menu' });
    }

    getProductItem(i: number): Locator {
        return this.page.locator('[data-test="inventory-item-description"]').nth(i);
    }

    get productNames(): Locator {
        return this.page.locator('[data-test="inventory-item-name"]');
    }

    get productPrices(): Locator {
        return this.page.locator('[data-test="inventory-item-price"]');
    }
}