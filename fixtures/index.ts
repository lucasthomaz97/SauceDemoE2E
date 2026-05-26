import { test as base } from '@playwright/test';
import { LoginPage } from '../page_objects/login_page';
import { ProductsPage } from '../page_objects/products_page';
import { CheckoutPage } from '../page_objects/checkout_page';

export interface AuthFixtures {
    loginPage: LoginPage;
    productsPage: ProductsPage;
    checkoutPage: CheckoutPage;
}

export const test = base.extend<AuthFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await use(loginPage);
    },
    productsPage: async ({ page }, use) => {
        const productsPage = new ProductsPage(page);
        await use(productsPage);
    },
    checkoutPage: async ({ page }, use) => {
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);
    }
});