import { test as base } from '@playwright/test';
import { LoginPage } from '../page_objects/login_page';
import { ProductsPage } from '../page_objects/products_page';
import { CheckoutPage } from '../page_objects/checkout_page';
import { DataFactory } from '../helpers/data_factory';

export interface AuthFixtures {
    loginPage: LoginPage;
    productsPage: ProductsPage;
    checkoutPage: CheckoutPage;
    checkoutData: { firstName: string; lastName: string; postalCode: string };
}

const factory = new DataFactory();

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
    },
    checkoutData: async ({ }, use) => {
        await use({
            firstName: factory.createFirstName(),
            lastName: factory.createLastName(),
            postalCode: factory.createPostalCode(),
        });
    }
});