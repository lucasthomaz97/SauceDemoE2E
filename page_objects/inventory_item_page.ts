import { Page, Locator, expect } from '@playwright/test';

export class ItemPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get backToProductsButton(): Locator {
        return this.page.locator('[data-test="back-to-products"]');
    }

    get itemNameLabel(): Locator {
        return this.page.locator('[data-test="inventory-item-name"]');
    }

    get itemDescriptionLabel(): Locator {
        return this.page.locator('[data-test="inventory-item-desc"]');
    }

    get itemPriceLabel(): Locator {
        return this.page.locator('[data-test="inventory-item-price"]');
    }

    get addToCartButton(): Locator {
        return this.page.locator('[data-test="add-to-cart"]');
    }

    get removeButton(): Locator {
        return this.page.locator('[data-test="remove"]');
    }

    getItemImage(i: number): Locator {
        switch (i) {
            case 0:
                return this.page.locator('[data-test="item-sauce-labs-backpack-img"]');
            case 1:
                return this.page.locator('[data-test="item-sauce-labs-bike-light-img"]');
            case 2:
                return this.page.locator('[data-test="item-sauce-labs-bolt-t-shirt-img"]');
            case 3:
                return this.page.locator('[data-test="item-sauce-labs-fleece-jacket-img"]');
            case 4:
                return this.page.locator('[data-test="item-sauce-labs-onesie-img"]');
            case 5:
                return this.page.locator('[data-test="item-test.allthethings()-t-shirt-(red)-img"]');
            default:
                throw new Error('Invalid image index');
        }
    }

    async expectItemPage(i: number) {
        await expect(this.getItemImage(i)).toBeVisible();
        await expect(this.itemNameLabel).toBeVisible();
        await expect(this.itemDescriptionLabel).toBeVisible();
        await expect(this.itemPriceLabel).toBeVisible();
        await expect(this.addToCartButton).toBeVisible();
        await expect(this.backToProductsButton).toBeVisible();
    }
};