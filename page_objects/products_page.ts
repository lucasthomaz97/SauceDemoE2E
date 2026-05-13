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

    get allItemsButton(): Locator {
        return this.page.locator('[data-test="inventory-sidebar-link"]');
    }

    get aboutButton(): Locator {
        return this.page.locator('[data-test="about-sidebar-link"]');
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

    get productNames(): Locator {
        return this.page.locator('[data-test="inventory-item-name"]');
    }

    get productPrices(): Locator {
        return this.page.locator('[data-test="inventory-item-price"]');
    }

    getProductItem(i: number): Locator {
        return this.page.locator('[data-test="inventory-item-description"]').nth(i);
    }

    getProductName(i: number): Locator {
        return this.getProductItem(i).locator('[data-test="inventory-item-name"]');
    }

    getProductImage(i: number): Locator {
        return this.page.locator(`[data-test="item-${i}-img-link"]`);
    }

    getProductPrice(i: number): Locator {
        return this.getProductItem(i).locator('[data-test="inventory-item-price"]');
    }

    getProductDescription(i: number): Locator {
        return this.getProductItem(i).locator('[data-test="inventory-item-desc"]');
    }

    getProductAddToCartButton(i: number): Locator {
        return this.getProductItem(i).getByText('Add to cart');
    }
}